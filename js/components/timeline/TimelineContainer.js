/**
 * Author: Viktor Gorte
 * CopyRight: Viktor Gorte
 * Date: 21.05.2020
 */

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {useGlobalState} from '../../contexts/GlobalContext';
import {TimelineDot} from './TimelineDot';
import {calculateDataSetDuration} from '../../utils/DataUtil';

export const TimelineContainer = (props) => {
	const {currentData, updateClassification} = props;
	const {
		selectedYear,
		updateSelectedYear,
	} = useGlobalState();
	const dataTimePeriod = calculateDataSetDuration(currentData[Object.keys(currentData)[0]]);
	
	const _renderDots = () => {
		let components = [];
		for (let i = dataTimePeriod[0]; i <= dataTimePeriod[1]; i++) {
			components.push(
				<TimelineDot year={i} key={i} selectedYear={selectedYear}/>,
			);
		}
		return (components);
	};
	
	const _previousYear = () => {
		const newYear = parseInt(selectedYear) - 1;
		if (newYear >= parseInt(dataTimePeriod[0])) {
			updateSelectedYear(newYear);
			updateClassification(newYear);
		}
	};
	
	const _nextYear = () => {
		const newYear = parseInt(selectedYear) + 1;
		if (newYear <= parseInt(dataTimePeriod[1])) {
			updateSelectedYear(newYear);
			updateClassification(newYear);
		}
	};
	
	return (
		<View style={styles.timelineContainer}>
			<Text>{selectedYear}</Text>
			<View style={styles.timeline}>
				<TouchableOpacity
					onPress={_previousYear}
				>
					<Icon
						name={'chevron-left'}
						size={32}
					/>
				</TouchableOpacity>
				
				
				<View style={styles.timelineLine}/>
				
				<View style={styles.dotContainer}>
					{
						dataTimePeriod &&
						_renderDots()
					}
				</View>
				
				<TouchableOpacity
					onPress={_nextYear}
				>
					<Icon
						name={'chevron-right'}
						size={32}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	timelineContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		maxHeight: 50,
		paddingVertical: 4,
	},
	timeline: {
		flexDirection: 'row',
		width: '90%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	timelineLine: {
		width: '90%',
		height: 1,
		borderWidth: 1,
		borderColor: '#427da8',
		zIndex: 4,
		position: 'absolute',
	},
	dotContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '90%',
		zIndex: 5,
	},
});
