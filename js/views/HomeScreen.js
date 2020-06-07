/**
 * Author: Viktor Gorte
 * CopyRight: Viktor Gorte
 * Date: 04.04.2020
 */

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Map} from '../map/Map';
import {LegendButton} from '../components/LegendButton';
import {LayerselectionIcon} from '../components/layerSelection/LayerselectionIcon';
import {GoalList} from '../components/goalComponents/GoalList';
import {LayerSelection} from '../components/layerSelection/LayerSelection';
import {LegendContainer} from '../components/legend/LegendContainer';
import {useGlobalState} from '../contexts/GlobalContext';
import {TimelineContainer} from '../components/timeline/TimelineContainer';
import {returnJenksClassification} from '../utils/ClassificationUtil';

export const HomeScreen = (props) => {
	
	const [LayerSelectionVisibility, setLayerSelectionVisibility] = useState(false);
	const [LegendVisibility, setLegendVisibility] = useState(false);
	const {
		countries,
		data,
		selectedGoal,
		selectedYear,
		updateJenksClassification,
		jenksClassification,
		selectedVisualizationType,
	} = useGlobalState();
	
	const _toggleLayerSelectionVisibility = () => {
		setLayerSelectionVisibility(!LayerSelectionVisibility);
	};
	
	const _toggleLegendVisibility = () => {
		setLegendVisibility(!LegendVisibility);
	};
	
	const updateClassification = (year) => {
		updateJenksClassification(
			returnJenksClassification(data[selectedGoal], year),
		);
	};
	
	return (
		<View style={styles.container}>
			<GoalList data={data}/>
			<LayerselectionIcon toggleLayerSelectionVisibility={_toggleLayerSelectionVisibility}/>
			<LegendButton toggleLegendVisibility={_toggleLegendVisibility}/>
			
			{
				LayerSelectionVisibility &&
				<LayerSelection/>
			}
			
			{
				LegendVisibility &&
				<LegendContainer selectedVisualizationType={selectedVisualizationType}/>
			}
			
			{
				(data && selectedGoal) &&
				<Map
					countries={countries}
					data={data[selectedGoal]}
					jenksClassification={jenksClassification}
					selectedYear={selectedYear}
					selectedVisualizationType={selectedVisualizationType}
				/>
			}
			
			{
				(data && selectedGoal) &&
				<TimelineContainer
					currentData={data[selectedGoal]}
					updateClassification={updateClassification}
				/>
			}
		
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
