/**
 * Author: Viktor Gorte
 * CopyRight: Viktor Gorte
 * Date: 31.05.2020
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GradientLegendSymbol} from './GradientLegendSymbol';
import {LegendStyling} from '../../constants/LegendStyling';

const {
	DEFAULT_MISSING_VALUE_COLOR,
	choroplethColors,
	graduatedSymbolMapCircleColor,
	graduatedSymbolMapCircleSizes,
	chorientedColors,
	chorientedOrientation,
} = LegendStyling;

export const LegendItemSymbol = (props) => {
	const {
		selectedVisualizationType,
		index, //classification index
		itemForMissingValues,
	} = props;
	
	return (
		<View>
			{/*Choropleth Map*/}
			{
				(selectedVisualizationType === 'choropleth' && !itemForMissingValues) &&
				<View style={[styles.choroplethSymbol, {
					backgroundColor: choroplethColors[index],
				}]}/>
			}
			
			{
				(selectedVisualizationType === 'choropleth' && itemForMissingValues) &&
				<View style={[styles.choroplethSymbol, {
					backgroundColor: DEFAULT_MISSING_VALUE_COLOR,
				}]}/>
			}
			
			{/*Graduated Symbol Map Map*/}
			{/*Width & Height +1 Because border is 1px bigger in html marker */}
			{
				(selectedVisualizationType === 'gsm' && !itemForMissingValues) &&
				<View style={[styles.gsmSymbol, {
					backgroundColor: graduatedSymbolMapCircleColor,
					width: graduatedSymbolMapCircleSizes[index] + 1,
					height: graduatedSymbolMapCircleSizes[index] + 1,
				}]}/>
			}
			
			{
				(selectedVisualizationType === 'gsm' && itemForMissingValues) &&
				<View style={[styles.gsmSymbol, {
					backgroundColor: DEFAULT_MISSING_VALUE_COLOR,
					width: 20 + 1,
					height: 20 + 1,
				}]}/>
			}
			
			{/*Choriented Mobile*/}
			{
				((selectedVisualizationType === 'chorientedMobile' || selectedVisualizationType === 'choriented') && !itemForMissingValues) &&
				<GradientLegendSymbol
					style={styles.chorientedMobileSymbol}
					color={chorientedColors[index]}
					degree={chorientedOrientation[index]}
				/>
			}
			
			{
				((selectedVisualizationType === 'chorientedMobile' || selectedVisualizationType === 'choriented') && itemForMissingValues) &&
				<View style={[styles.chorientedMobileSymbol, {
					backgroundColor: DEFAULT_MISSING_VALUE_COLOR,
				}]}/>
			}
		
		</View>
	);
};

const styles = StyleSheet.create({
	choroplethSymbol: {
		width: 40,
		height: 40,
		borderWidth: 1,
		borderColor: 'black',
	},
	gsmSymbol: {
		borderRadius: 100,
		borderWidth: 1,
		borderColor: 'black',
	},
	chorientedMobileSymbol: {
		width: 40,
		height: 40,
		borderWidth: 1,
		borderColor: 'black',
	},
});
