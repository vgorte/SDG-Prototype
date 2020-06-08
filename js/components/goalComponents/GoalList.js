/**
 * Author: Viktor Gorte
 * CopyRight: Viktor Gorte
 * Date: 13.05.2020
 */

import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Styling} from '../../constants/Styling';
import {GoalListItem} from './GoalListItem';
import {useGlobalState} from '../../contexts/GlobalContext';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export const GoalList = (props) => {
	
	const {data} = props;
	const {selectedGoal} = useGlobalState();
	const [listVisibility, setListVisibility] = useState(false);
	
	return (
		<View style={styles.container}>
				
				{
					(data && listVisibility) &&
					<FlatList
						data={Object.keys(data)}
						renderItem={({item, index}) =>
							<GoalListItem dataKey={item}
							              setListVisibility={setListVisibility}
							              key={index}
							/>
						}
						keyExtractor={item => item.id}
					/>
				}
				
				{
					(!listVisibility && selectedGoal) &&
					<GoalListItem
						dataKey={selectedGoal}
						setListVisibility={setListVisibility}
					/>
				}
				
				{
					listVisibility &&
					<Icon
						name={'chevron-up'}
						color={'white'}
						size={32}
						onPress={() => setListVisibility(false)}
					/>
				}
				
				{
					!listVisibility &&
					<Icon
						name={'chevron-down'}
						color={'white'}
						size={32}
	
						onPress={() => setListVisibility(true)}
					/>
				}
			
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		left: Styling.DEFAULT_PADDING,
		top: Styling.DEFAULT_PADDING,
		zIndex: 5,
		backgroundColor: '#00000040',
		padding: 4,
		borderRadius: Styling.DEFAULT_BORDER_RADIUS,
		maxHeight: 665,
		maxWidth: 170,
		justifyContent: 'center',
		alignItems: 'center',
	},
	
});
