/**
 * Author: Viktor Gorte
 * CopyRight: Viktor Gorte
 * Date: 05.04.2020
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {UIConstants} from '../constants/UIConstants';

const {default_padding} = UIConstants;

export const DrawerMenuIcon = ({navigation}) => {
	
	const _openDrawer = () => {
		navigation.openDrawer();
	};
	
	return (
		<Icon
			name={'menu'}
			size={32}
			onPress={_openDrawer}
			style={styles.position}
		/>
	);
};

const styles = StyleSheet.create({
	position: {
		paddingLeft: default_padding,
	},
});
