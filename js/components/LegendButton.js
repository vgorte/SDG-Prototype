/**
 * Author: Viktor Gorte
 * CopyRight: Viktor Gorte
 * Date: 11.05.2020
 */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Styling} from '../constants/Styling';

export const LegendButton = (props) => {
	
	const {toggleLegendVisibility} = props;
	
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={toggleLegendVisibility}
		>
			<Text style={{color:"white"}}>LEGEND</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		position:"absolute",
		bottom: 66,
		right: Styling.DEFAULT_PADDING,
		backgroundColor: Styling.legendButtonBackgroundColorLight,
		padding: 16,
		borderRadius: Styling.DEFAULT_BORDER_RADIUS,
		zIndex: 5
	}
});
