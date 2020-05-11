import AsyncStorage from '@react-native-community/async-storage';

export function storeUserColorMode(mode) {
	return AsyncStorage.setItem('@colorMode', mode);
}

export function getUserColorMode() {
	return AsyncStorage.getItem('@colorMode');
}
