/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {MainStack} from './js/navigation/MainStack';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

export const App: () => React$Node = () => {
	return (
		<NavigationContainer>
			<PaperProvider>
				<MainStack/>
			</PaperProvider>
		</NavigationContainer>
	);
};
