/**
 * Author: Viktor Gorte
 * CopyRight: Viktor Gorte
 * Date: 04.04.2020
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../views/HomeScreen';

const Stack = createStackNavigator();

export const MainStack = (props) => {
	return (
		<Stack.Navigator
		>
			<Stack.Screen
				name="home"
				component={HomeScreen}
				options={({navigation, route}) => ({
					headerTitle: 'SDG-PROTOTYPE',
				})}
			/>
		</Stack.Navigator>
	);
};

