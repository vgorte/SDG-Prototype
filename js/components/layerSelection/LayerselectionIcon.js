/**
 * Author: Viktor Gorte
 * CopyRight: Viktor Gorte
 * Date: 11.05.2020
 */

import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {Styling} from '../../constants/Styling';

export const LayerselectionIcon = (props) => {

	const {toggleLayerSelectionVisibility} = props;

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={toggleLayerSelectionVisibility}
		>
			<Icon
				name={'layers-outline'}
				color={'black'}
				size={32}
			/>
		</TouchableOpacity>
	
	);
};

const styles = StyleSheet.create({
	button: {
		position: 'absolute',
		top: Styling.DEFAULT_PADDING,
		right: Styling.DEFAULT_PADDING,
		zIndex: 10,
		borderWidth: 2,
		borderRadius: 5,
	},
});
