var markerArray = [];
var DEFAULT_NO_VALUE_COLOR = '#737373';
var firstIteration = true;
var choroplethColors = ['#ffffe5', '#fff7bc', '#fee391', '#fec44f'];

var renderTimestart = null;

function _mainPolygon(multipolygon) {
	function _calcPolygonArea(polygon) {
		var flatPolygon = polygon[0];
		var sum = 0;
		for (var i = 0, l = flatPolygon.length - 1; i < l; i++) {
			sum += (flatPolygon[i][0] * flatPolygon[i + 1][1] - flatPolygon[i + 1][0] * flatPolygon[i][1]);
		}
		var result = sum / 2;
		if (result < 0) {
			return -result;
		} else {
			return result;
		}
	}
	
	var mainPolygon = [];
	var largestArea = 0;
	
	if (multipolygon.length == 1) {
		mainPolygon = multipolygon[0];
	} else if (multipolygon.length > 1) {
		for (var i = 0; i < multipolygon.length; i++) {
			var area = _calcPolygonArea(multipolygon[i]);
			if (largestArea < area) {
				mainPolygon = multipolygon[i];
				largestArea = area;
			}
		}
	} else {
		console.log('Error with multipolygon coordinates');
		return null;
	}
	
	return mainPolygon;
}

function _removeAllExistingLayers(countries) {
	
	var start = window.performance.now();
	
	for (var i = 0; i < countries.features.length; i++) {
		var country = countries.features[i];
		var countryName = country.properties.ADMIN;
		//remove all layers
		if (map.getLayer(countryName)) {
			map.removeLayer(countryName);
		}
		if (map.getLayer(countryName + '_outline')) {
			map.removeLayer(countryName + '_outline');
		}
		//remove all images
		if (map.hasImage(countryName)) {
			map.removeImage(countryName);
		}
	}
	
	var end = window.performance.now();
	console.log(`Removing all layers: ${end - start}  milliseconds`);
	
}

function _removeAllExistingMarksers() {
	var markersExisted = markerArray.length > 0;
	var start = window.performance.now();
	
	for (var i = 0; i < markerArray.length; i++) {
		markerArray[i].remove();
	}
	
	var end = window.performance.now();
	if (markersExisted) {
		console.log(`Removing all markers took: ${end - start}  milliseconds`);
	}
}

function _getClassificationIndex(countryValue, jenks) {
	function classifyCountryValue(value, min, max) {
		if (value >= min && value <= max) {
			return true;
		} else {
			return false;
		}
	}
	
	var valueIndex = function (countryValue, jenks) {
		for (var i = 0; i < jenks.length - 1; i++) {
			if (classifyCountryValue(countryValue, jenks[i], jenks[i + 1])) {
				return i;
				break;
			}
		}
	};
	
	return (valueIndex(countryValue, jenks));
}

function _addOutlineLayer(countryName) {
	map.addLayer({
		'id': countryName + '_outline',
		'type': 'line',
		'source': 'countries',
		'paint': {
			'line-color': '#ffffff',
			'line-width': 3,
		},
		'filter': ['==', 'ADMIN', countryName],
	});
}

function _addPopUp(countryName, center, forMarker) {
	if (forMarker) {
		return new mapboxgl.Popup().setText(countryName);
	} else {
		map.on('click', countryName, function (e) {
			new mapboxgl.Popup()
				.setLngLat(center)
				.setHTML(countryName)
				.addTo(map);
		});
	}
}

function addChoroplethLayer(countryName, countryTimeSeries, selectedYear, jenksClassification, center) {
	var yearValue = countryTimeSeries[selectedYear];
	var color;
	if (yearValue !== null) {
		var index = _getClassificationIndex(yearValue, jenksClassification);
		color = choroplethColors[index];
	} else {
		color = DEFAULT_NO_VALUE_COLOR;
	}
	map.addLayer({
		'id': countryName,
		'type': 'fill',
		'source': 'countries',
		'layout': {},
		'paint': {
			'fill-color': color,
			'fill-opacity': 0.8,
		},
		'filter': ['==', 'ADMIN', countryName],
	});
	
	_addPopUp(countryName, center);
	
	_addOutlineLayer(countryName);
}

function addGSMLayer(countryName, countryTimeSeries, selectedYear, jenksClassification, country, center) {
	var markerClasses = ['gsm-class-1', 'gsm-class-2', 'gsm-class-3', 'gsm-class-4', 'gsm-class-no-value'];
	var yearValue = countryTimeSeries[selectedYear];
	if (yearValue !== null) {
		var index = _getClassificationIndex(yearValue, jenksClassification);
		
		//Marker
		var el = document.createElement('div');
		el.className = markerClasses[index];
		
		var marker = new mapboxgl.Marker(el)
			.setLngLat(center)
			.setPopup(_addPopUp(countryName, center, true));
		
		markerArray.push(marker);
		marker.addTo(map);
		
	} else {
		var el = document.createElement('div');
		el.className = markerClasses[markerClasses.length - 1];
		
		var marker = new mapboxgl.Marker(el)
			.setLngLat(center)
			.setPopup(_addPopUp(countryName, center, true));
		
		markerArray.push(marker);
		marker.addTo(map);
	}
}

function addChorientedLayer(countryName, countryTimeSeries, selectedYear, jenksClassification, center) {
	var yearValue = countryTimeSeries[selectedYear];
	var images = [stripesHorizontal, stripes45, stripesVertical, stripes135];
	var image;
	if (yearValue !== null) {
		var index = _getClassificationIndex(yearValue, jenksClassification);
		image = images[index];
		
		map.addImage(countryName, image);
		map.addLayer({
			'id': countryName,
			'type': 'fill',
			'source': 'countries',
			'paint': {
				'fill-pattern': countryName,
				'fill-opacity': .8,
			},
			'filter': ['==', 'ADMIN', countryName],
		});
	} else {
		map.addLayer({
			'id': countryName,
			'type': 'fill',
			'source': 'countries',
			'layout': {},
			'paint': {
				'fill-color': DEFAULT_NO_VALUE_COLOR,
				'fill-opacity': 0.8,
			},
			'filter': ['==', 'ADMIN', countryName],
		});
	}
	
	_addPopUp(countryName, center);
	
	_addOutlineLayer(countryName);
}

function addChorientedMobileLayer(countryName, countryTimeSeries, selectedYear, jenksClassification, country, center) {
	var markerClasses = ['choriented-mobile-1', 'choriented-mobile-2', 'choriented-mobile-3', 'choriented-mobile-4', 'choriented-mobile-no-value'];
	var yearValue = countryTimeSeries[selectedYear];
	if (yearValue !== null) {
		var index = _getClassificationIndex(yearValue, jenksClassification);
		
		//Marker
		var el = document.createElement('div');
		el.className = markerClasses[index];
		
		var marker = new mapboxgl.Marker(el)
			.setLngLat(center)
			.setPopup(_addPopUp(countryName, center, true));
		
		markerArray.push(marker);
		marker.addTo(map);
		
	} else {
		var el = document.createElement('div');
		el.className = markerClasses[markerClasses.length - 1];
		
		var marker = new mapboxgl.Marker(el)
			.setLngLat(center)
			.setPopup(_addPopUp(countryName, center, true));
		
		markerArray.push(marker);
		marker.addTo(map);
	}
}

(function () {
	
	var promiseChain = Promise.resolve();
	
	var callbacks = {};
	
	var init = function () {
		
		const guid = function () {
			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
			}
			
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
		};
		
		window.webViewBridge = {
			/**
			 * send message to the React-Native WebView onMessage handler
			 * @param targetFunc - name of the function to invoke on the React-Native side
			 * @param data - data to pass
			 * @param success - success callback
			 * @param error - error callback
			 */
			send: function (targetFunc, data, success, error) {
				
				var msgObj = {
					targetFunc: targetFunc,
					data: data || {},
				};
				
				if (success || error) {
					msgObj.msgId = guid();
				}
				
				var msg = JSON.stringify(msgObj);
				
				promiseChain = promiseChain.then(function () {
					return new Promise(function (resolve, reject) {
						console.log('sending message ' + msgObj.targetFunc);
						
						if (msgObj.msgId) {
							callbacks[msgObj.msgId] = {
								onsuccess: success,
								onerror: error,
							};
						}
						window.ReactNativeWebView.postMessage(msg);
						
						resolve();
					});
				}).catch(function (e) {
					console.error('rnBridge send failed ' + e.message);
				});
			},
		};
		
		//ios : window   android: document
		
		function onMessage(e) {
			console.log('message received from react native', JSON.parse(e.data), map);
			
			var message;
			try {
				message = JSON.parse(e.data);
			} catch (err) {
				console.error('failed to parse message from react-native ' + err);
				return;
			}
			
			if (message.countries && message.data && message.jenksClassification && message.selectedYear && message.selectedVisualizationType) {
				mapLoaded
					.then(function () {
						var countries = message.countries;
						
						//remove all existing data layers
						_removeAllExistingLayers(countries);
						
						if (markerArray.length != 0) {
							_removeAllExistingMarksers();
						}
						
						if (firstIteration) {
							map.addSource('countries', {
								type: 'geojson',
								data: countries,
							});
							
							firstIteration = false;
						}
						var start = window.performance.now();
						
						map.on('render', function () {
							if (!renderTimestart) { //first render
								renderTimestart = performance.now();
							}
						});
						
						map.on('idle', function () {
							var end = performance.now();
							if (renderTimestart) {
								console.log(`rendering layers took: ${end - renderTimestart}  milliseconds`);
								renderTimestart = null;
							}
						});
						
						for (var i = 0; i < countries.features.length; i++) {
							var country = countries.features[i];
							var countryName = country.properties.ADMIN;
							var countryTimeSeries = message.data[countryName];
							var mainPolygon = _mainPolygon(country.geometry.coordinates);
							var center = visualPolygonCenter(mainPolygon, 1.0, false);
							
							//if country exists in dataset, render it accordingly, else default
							if (countryTimeSeries) {
								switch (message.selectedVisualizationType) {
									case 'choropleth':
										addChoroplethLayer(countryName, countryTimeSeries, message.selectedYear, message.jenksClassification, center);
										break;
									case 'gsm':
										addGSMLayer(countryName, countryTimeSeries, message.selectedYear, message.jenksClassification, country, center);
										break;
									case 'choriented':
										addChorientedLayer(countryName, countryTimeSeries, message.selectedYear, message.jenksClassification, center);
										break;
									case 'chorientedMobile':
										addChorientedMobileLayer(countryName, countryTimeSeries, message.selectedYear, message.jenksClassification, country, center);
										break;
									default:
								}
							}
						}
						
						var end = window.performance.now();
						console.log(`Adding ${message.selectedVisualizationType} layers: ${end - start}  milliseconds`);
					});
			}
			
			//trigger callback
			if (callbacks[message.msgId]) {
				if (message.isSuccessfull) {
					callbacks[message.msgId].onsuccess.apply(null, message.args);
				} else {
					callbacks[message.msgId].onerror.apply(null, message.args);
				}
				delete callbacks[message.msgId];
			}
		}
		
		document.addEventListener('message', onMessage);
		
		window.addEventListener('message', onMessage);
	};
	
	init();
}());
