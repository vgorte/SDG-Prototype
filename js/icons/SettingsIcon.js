/**
 * Author: Viktor Gorte
 * CopyRight: Viktor Gorte
 * Date: 05.04.2020
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {UIConstants} from '../constants/UIConstants';
import {Styling} from '../constants/Styling';

const {default_padding} = UIConstants;

export const SettingsIcon = ({navigation}) => {
	
	const _navigateToSettingsScreen = () => {
		navigation.push('settings');
	};
	
	return (
		<Icon
			name={'settings'}
			size={32}
			onPress={_navigateToSettingsScreen}
			style={styles.position}
		/>
	);
};

const styles = StyleSheet.create({
	position: {
		paddingRight: Styling.DEFAULT_PADDING,
	},
});
