import {DefaultTheme, DarkTheme} from 'react-native-paper';
import {DefaultTheme as lightNavigationTheme, DarkTheme as darkNavigationTheme} from '@react-navigation/native';

export const lightTheme = {
	...DefaultTheme,
	roundness: 5,
	colors: {
		...DefaultTheme.colors,
	},
};

export const darkTheme = {
	...DarkTheme,
	roundness: 5,
	colors: {
		...DarkTheme.colors,
	},
};

export const lightThemeNavigation = {
	...lightNavigationTheme,
	colors: {
		...lightNavigationTheme.colors,
	},
};

export const darkThemeNavigation = {
	...darkNavigationTheme,
	colors: {
		...darkNavigationTheme.colors,
	},
};
