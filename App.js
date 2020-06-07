import React, {useEffect} from 'react';
import {MainStack} from './js/navigation/MainStack';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {useGlobalState} from './js/contexts/GlobalContext';
import {countries} from './pecularities/europe_countries';
import data from './pecularities/dataset';
import {calculateDataSetDuration} from './js/utils/DataUtil';
import {returnJenksClassification} from './js/utils/ClassificationUtil';

export const App: () => React$Node = () => {
	const {
		updateData,
		updateCountries,
		updateSelectedGoal,
		updateSelectedYear,
		updateDataDuration,
		updateSelectedVisualizationType,
		updateJenksClassification,
	} = useGlobalState();
	
	useEffect(() => {
			const initialGoal = Object.keys(data)[0];
			const goalCountries = data[initialGoal];
			const duration = calculateDataSetDuration(goalCountries[Object.keys(goalCountries)[0]]);
			//Initialize global context
			updateData(data);
			updateCountries(countries);
			updateSelectedGoal(initialGoal);
			updateDataDuration(duration);
			updateSelectedYear(duration[0]);
			updateSelectedVisualizationType('choropleth');
			updateJenksClassification(returnJenksClassification(goalCountries, duration[0]));
		}, [],
	);
	
	return (
		<NavigationContainer>
			<PaperProvider>
				<MainStack/>
			</PaperProvider>
		</NavigationContainer>
	);
};
