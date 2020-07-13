/**
 * Author: Viktor Gorte
 * CopyRight: Viktor Gorte
 * Date: 29.05.2020
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const LegendValueText = (props) => {
	const {lowerLimit, upperLimit, itemForMissingValues} = props;
	
	return (
		<>
			{
				itemForMissingValues &&
				<Text style={styles.text}>NO DATA</Text>
			}
			
			{
				(!itemForMissingValues && lowerLimit && upperLimit) &&
				<View style={styles.valuContainer}>
					<Text style={styles.text}>{lowerLimit}</Text>
					<Text style={styles.text}>-</Text>
					<Text style={styles.text}>{upperLimit}</Text>
				</View>
			}
		</>
	);
};

const styles = StyleSheet.create({
	valuContainer: {
		flexDirection: 'row',
		flex:1,
		justifyContent: "space-around"
	},
	text: {
		color: 'white',
		fontSize: 18,
	},
});
