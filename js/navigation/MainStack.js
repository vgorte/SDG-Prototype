/**
 * Author: Viktor Gorte
 * CopyRight: Viktor Gorte
 * Date: 04.04.2020
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../views/HomeScreen';
import {SettingsScreen} from '../views/SettingsScreen';
import {SettingsIcon} from '../icons/SettingsIcon';

const Stack = createStackNavigator();

export const MainStack = (props) => {
	return (
		<Stack.Navigator
		>
			<Stack.Screen
				name="home"
				component={HomeScreen}
				options={({navigation, route}) => ({
					headerTitle: 'Home',
					headerRight: () => <SettingsIcon navigation={navigation}/>,
				})}
			/>
			
			<Stack.Screen
				name="settings"
				component={SettingsScreen}
				options={({navigation, route}) => ({
					headerTitle: 'Einstellungen',
				})}
			/>
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({});
