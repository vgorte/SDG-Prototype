/**
 * Author: Viktor Gorte
 * CopyRight: Viktor Gorte
 * Date: 18.05.2020
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Styling} from '../../constants/Styling';
import {useGlobalState} from '../../contexts/GlobalContext';
import {LegendValueText} from './LegendValueText';
import {LegendItemSymbol} from './LegendItemSymbol';

export const LegendContainer = (props) => {
	const {jenksClassification} = useGlobalState();
	const {selectedVisualizationType} = props;
	
	const _renderClassification = () => {
		const legendComponents = [];
		for (let i = jenksClassification.length - 1; i > 0; i--) {
			legendComponents.push(
				<View
					style={styles.legendEntryContainer}
				>
					<LegendItemSymbol
						selectedVisualizationType={selectedVisualizationType}
						index={i - 1}
						itemForMissingValues={false}
					/>
					<LegendValueText
						itemForMissingValues={false}
						lowerLimit={jenksClassification[i - 1]}
						upperLimit={jenksClassification[i]}
					/>
				</View>,
			);
		}
		legendComponents.push(
			<View
				style={styles.legendEntryContainer}
			>
				<LegendItemSymbol
					selectedVisualizationType={selectedVisualizationType}
					itemForMissingValues={true}
				/>
				<View style={styles.missingValueTextPosition}>
					<LegendValueText
						itemForMissingValues={true}
					/>
				</View>
			</View>,
		);
		return (
			legendComponents
		);
	};
	
	return (
		<View style={styles.container}>
			{
				jenksClassification &&
				_renderClassification()
			}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		right: Styling.DEFAULT_PADDING,
		bottom: 115 + 16,
		backgroundColor: Styling.legendContainerBackgroundColorLight,
		borderRadius: Styling.DEFAULT_BORDER_RADIUS,
		height: 230,
		width: 170,
		maxWidth: 180,
		zIndex: 5,
		alignItems: 'center',
	},
	legendEntryContainer: {
		flex: 1,
		width: 180,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 8,
	},
	missingValueTextPosition:{
		flex:1,
		alignItems: "center",
	}
});
