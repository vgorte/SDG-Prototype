/**
 * User: v.gorte
 * Date: 13.01.2020
 * Time: 9:43
 */

import React, {useCallback, useContext, useReducer} from 'react';

const UPDATE_COLORMODE_USER = 'UPDATE_COLORMODE_USER';

const initialState = {
    userControlledColorMode: null,
};

export const GlobalContext = React.createContext(initialState);

function reducer(state, action) {
    switch (action.type) {
        case UPDATE_COLORMODE_USER:
            return state = {
                ...state,
                darkMode: action.payload === 'dark' ? true : false,
            };
        default:
            return state;
    }
}
;

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
    
    const updateColorMode = useCallback(
        (mode) => {
            dispatch({
                type: UPDATE_COLORMODE_USER,
                payload: mode,
            });
        },
        [dispatch],
    );
    

    return {
        updateColorMode,
        userControlledColorMode: state.userControlledColorMode,
    };
};

