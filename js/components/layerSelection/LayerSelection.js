/**
 * Author: Viktor Gorte
 * CopyRight: Viktor Gorte
 * Date: 18.05.2020
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Styling} from '../../constants/Styling';
import {LayerSelectionItems} from './LayerSelectionItems';

export const LayerSelection = (props) => {
	
	return (
		<View style={styles.container}>
			<LayerSelectionItems name={'Choropleth Map'} value={'choropleth'}/>
			
			<LayerSelectionItems name={'Graduated Symbol Map'} value={'gsm'}/>
			
			<LayerSelectionItems name={'Choriented Map'} value={'choriented'}/>
			
			<LayerSelectionItems name={'Choriented Mobile'} value={'chorientedMobile'}/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		right: Styling.DEFAULT_PADDING,
		top: Styling.DEFAULT_PADDING + 50,
		width: 200,
		height: 150,
		backgroundColor: Styling.selectionBackgroundColorLight,
		zIndex: 5,
		borderRadius: 5,
	},
	text: {
		color: 'white',
	},
});
