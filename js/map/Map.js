'use strict';

import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

export class Map extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		this.postProps();
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		return JSON.stringify(this.props) !== JSON.stringify(nextProps);
	}
	
	componentDidUpdate() {
		this.postProps();
	}
	
	onMessage = (event) => {
		const msg = JSON.parse(event.nativeEvent.data);
		console.log(msg);
	};
	
	postProps = () => {
		this.webview.postMessage(JSON.stringify({
			...this.props,
		}));
	};
	
	render() {
		const {height = 200} = this.props;
		const uri = Platform.OS === 'ios' ? {uri: 'html.bundle/Mapbox_map.html'} : {uri: 'file:///android_asset/map/Mapbox_map.html'};
		return (
			<View
				style={[styles.container, {height: height}]}
			>
				<WebView
					ref={ref => (this.webview = ref)}
					style={styles.webviewContent}
					onMessage={this.onMessage}
					source={uri}
					useWebKit={true}
					onLoadEnd={this.postProps}
					originWhitelist={['*']}
					allowFileAccess={true}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		overflow: 'hidden',
	},
	webviewContent: {
		flex: 1,
	},
});
