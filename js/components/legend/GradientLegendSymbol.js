/**
 * Author: Viktor Gorte
 * CopyRight: Viktor Gorte
 * Date: 03.06.2020
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import generateGradient from 'react-native-css-gradient/generator';

const extract = (gradient, width, height) =>
	generateGradient(gradient, {width, height}).map(g => ({
		...g,
		start: {x: g.start.x, y: g.start.y},
		end: {x: g.end.x, y: g.end.y},
	}));

export const GradientLegendSymbol = (props) => {
	const {children, style, color, degree} = props;
	
	const horizontalStripes = `repeating-linear-gradient(${degree}deg,
	  ${color},
      ${color} 3px,
      black 4px,
      black 7px)`;
	
	const properties = extract(horizontalStripes, style.width, style.height);
	
	if (properties.length > 1) {
		return (
			// eslint-disable-next-line react-native/no-inline-styles
			<View style={[style, {position: 'relative'}]}>
				{properties.map((obj, i) => (
					<LinearGradient style={[StyleSheet.absoluteFill]} {...obj} key={i}/>
				))}
				{children || null}
			</View>
		);
	}
	return (
		<LinearGradient style={style} {...properties[0]}>
			{children || null}
		</LinearGradient>
	);
};

const styles = StyleSheet.create({});
