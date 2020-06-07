import Geostats from 'geostats';

function _getValuesFromYear(dataset, year) {
	let values = [];
	const countries = Object.keys(dataset);
	for (let i = 0; i < countries.length; i++) {
		const jsonData = dataset[countries[i]];
		if (jsonData[year] !== null) {
			values.push(parseFloat(jsonData[year]));
		}
	}
	return values;
}


export function returnJenksClassification(dataset, year) {
	const values = _getValuesFromYear(dataset, year);
	const classifier = new Geostats(values);
	const jenksClassification = classifier.getJenks(4);
	//filter undefined from classification -> caused by not enough classes
	const filteredJenksClassification = jenksClassification.filter((e) => {
		return e != null;
	});
	return filteredJenksClassification;
}
