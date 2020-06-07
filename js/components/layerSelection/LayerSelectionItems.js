/**
 * Author: Viktor Gorte
 * CopyRight: Viktor Gorte
 * Date: 21.05.2020
 */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useGlobalState} from '../../contexts/GlobalContext';

export const LayerSelectionItems = (props) => {
	const {name, value} = props;
	const {selectedVisualizationType, updateSelectedVisualizationType} = useGlobalState();
	
	const _onPress = () => {
		updateSelectedVisualizationType(value);
	};
	
	return (
		<TouchableOpacity
			style={styles.itemContainer}
			onPress={_onPress}
		>
			<View style={styles.button}>
				{
					(value == selectedVisualizationType) &&
					<View style={styles.selectedButton}/>
				}
			</View>
			
			<Text style={styles.text}>{name}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	itemContainer: {
		alignItems: 'flex-start',
		flexDirection: 'row',
		marginVertical: 8,
	},
	button: {
		width: 20,
		height: 20,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: 'white',
		marginHorizontal: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedButton: {
		width: 15,
		height: 15,
		backgroundColor: 'white',
		borderRadius: 20,
	},
	text: {
		color: 'white',
	},
});
