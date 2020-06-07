/**
 * Author: Viktor Gorte
 * CopyRight: Viktor Gorte
 * Date: 29.05.2020
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const LegendValueText = (props) => {
	const {lowerLimit, upperLimit, itemForMissingValues} = props;
	
	//TODO add symbol according to class + Add symbol for no value class
	return (
		<View style={styles.itemContainer}>
			{
				itemForMissingValues &&
				<Text style={styles.text}>NO VALUE</Text>
			}
			
			{
				(!itemForMissingValues && lowerLimit && upperLimit) &&
				<Text style={styles.text}>{lowerLimit}% - {upperLimit}%</Text>
			}
		</View>
	);
};

const styles = StyleSheet.create({
	itemContainer: {},
	text: {
		color: 'white',
		fontSize: 18,
	},
});
