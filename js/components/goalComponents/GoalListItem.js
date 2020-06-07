/**
 * Author: Viktor Gorte
 * CopyRight: Viktor Gorte
 * Date: 13.05.2020
 */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useGlobalState} from '../../contexts/GlobalContext';
import {Styling} from '../../constants/Styling';
import {calculateDataSetDuration} from '../../utils/DataUtil';
import {returnJenksClassification} from '../../utils/ClassificationUtil';

export const GoalListItem = (props) => {
	const {dataKey, setListVisibility} = props;
	const {
		updateSelectedGoal,
		data,
		updateDataDuration,
		updateSelectedYear,
		selectedYear,
		updateJenksClassification,
	} = useGlobalState();
	
	const _selectGoal = () => {
		const datasetCountries = data[dataKey];
		const dataSetDuration = calculateDataSetDuration(datasetCountries[Object.keys(datasetCountries)[0]]);
		const lowestYear = dataSetDuration[0];
		updateSelectedGoal(dataKey);
		updateDataDuration(dataSetDuration);
		if(selectedYear < lowestYear || selectedYear > dataSetDuration[dataSetDuration.length-1]){
			updateSelectedYear(lowestYear)
		}
		setListVisibility(false);
		updateJenksClassification(
			returnJenksClassification(datasetCountries, lowestYear),
		);
	};
	
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={_selectGoal}
		>
			<Text style={styles.text}>
				{dataKey}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		maxWidth: 200,
		height: 65,
		backgroundColor: '#4d8caf',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: Styling.DEFAULT_PADDING / 2,
		borderRadius: Styling.DEFAULT_BORDER_RADIUS,
		borderWidth: 1,
		borderColor: 'white',
	},
	text: {
		color: 'white',
		paddingHorizontal: 4,
	},
});
