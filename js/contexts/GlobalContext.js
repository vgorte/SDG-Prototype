/**
 * User: v.gorte
 * Date: 13.01.2020
 * Time: 9:43
 */

import React, {useCallback, useContext, useReducer} from 'react';

const UPDATE_COUNTRIES = 'UPDATE_COUNTRIES';
const UPDATE_DATA = 'UPDATE_DATA';
const UPDATE_SELECTED_GOAL = 'UPDATE_SELECTED_GOAL';
const UPDATE_SELECTED_YEAR = 'UPDATE_SELECTED_YEAR';
const UPDATE_DATA_DURATION = 'UPDATE_DATA_DURATION';
const UPDATE_SELECTED_VISUALIZATIONTYPE = 'UPDATE_SELECTED_VISUALIZATIONTYPE';
const UPDATE_JENKS_CLASSIFICATION = 'UPDATE_JENKS_CLASSIFICATION';

const initialState = {
	countries: null,
	data: null,
	selectedGoal: null,
	selectedYear: null,
	dataDuration: null,
	selectedVisualizationType: null,
	jenksClassification: null,
};

export const GlobalContext = React.createContext(initialState);

function reducer(state, action) {
	switch (action.type) {
		case UPDATE_COUNTRIES:
			return state = {
				...state,
				countries: action.payload,
			};
		case UPDATE_DATA:
			return state = {
				...state,
				data: action.payload,
			};
		case UPDATE_SELECTED_GOAL:
			return state = {
				...state,
				selectedGoal: action.payload,
			};
		case UPDATE_SELECTED_YEAR:
			return state = {
				...state,
				selectedYear: action.payload,
			};
		case UPDATE_DATA_DURATION:
			return state = {
				...state,
				dataDuration: action.payload,
			};
		case UPDATE_SELECTED_VISUALIZATIONTYPE:
			return state = {
				...state,
				selectedVisualizationType: action.payload,
			};
		case UPDATE_JENKS_CLASSIFICATION:
			return state = {
				...state,
				jenksClassification: action.payload,
			};
		default:
			return state;
	}
};

export const GlobalContextProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, {
		...initialState,
	});
	
	return (
		<GlobalContext.Provider value={[state, dispatch]}>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalState = () => {
	const [state, dispatch] = useContext(GlobalContext);
	
	const updateCountries = useCallback(
		(geojson) => {
			dispatch({
				type: UPDATE_COUNTRIES,
				payload: geojson,
			});
		},
		[dispatch],
	);
	
	const updateData = useCallback(
		(tsData) => {
			dispatch({
				type: UPDATE_DATA,
				payload: tsData,
			});
		},
		[dispatch],
	);
	
	const updateSelectedGoal = useCallback(
		(goal) => {
			dispatch({
				type: UPDATE_SELECTED_GOAL,
				payload: goal,
			});
		},
		[dispatch],
	);
	
	const updateSelectedYear = useCallback(
		(year) => {
			dispatch({
				type: UPDATE_SELECTED_YEAR,
				payload: year,
			});
		},
		[dispatch],
	);
	
	const updateDataDuration = useCallback(
		(startEndArray) => {
			dispatch({
				type: UPDATE_DATA_DURATION,
				payload: startEndArray,
			});
		},
		[dispatch],
	);
	
	const updateSelectedVisualizationType = useCallback(
		(type) => {
			dispatch({
				type: UPDATE_SELECTED_VISUALIZATIONTYPE,
				payload: type,
			});
		},
		[dispatch],
	);
	
	const updateJenksClassification = useCallback(
		(array) => {
			dispatch({
				type: UPDATE_JENKS_CLASSIFICATION,
				payload: array,
			});
		},
		[dispatch],
	);
	
	return {
		updateData,
		updateCountries,
		updateSelectedGoal,
		updateSelectedYear,
		updateDataDuration,
		updateSelectedVisualizationType,
		updateJenksClassification,
		data: state.data,
		countries: state.countries,
		selectedGoal: state.selectedGoal,
		selectedYear: state.selectedYear,
		dataDuration: state.dataDuration,
		selectedVisualizationType: state.selectedVisualizationType,
		jenksClassification: state.jenksClassification,
	};
};

