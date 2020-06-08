/**
 * Author: Viktor Gorte
 * CopyRight: Viktor Gorte
 * Date: 21.05.2020
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TimelineDot = (props) => {
	const {selectedYear, year} = props;
	const dotColor = year == selectedYear? "red" : "black"
	return (
		<View style={[styles.dot, {backgroundColor: dotColor}]}/>
	);
};

const styles = StyleSheet.create({
	dot: {
		width: 10,
		height: 10,
		borderRadius: 5,
	},
});
