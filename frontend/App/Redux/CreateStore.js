import { createStore, combineReducers } from 'redux';

import loginReducer from './loginReducer';
import settingsReducer from './settingsReducer';
import campaignBuilder from './campaignBuilder/campaignBuilderReducer';
// import { inputReducer } from './Inputs/input-reducer'; Example of a import of a reducer file

// FAKE ACTION

const TEST_ACTION = 'TEST_ACTION';

// FAKE ACTION CREATOR

export const testActionCreator = (someData) => {
    console.log('ActionCreator', someData);
    return {
        type: TEST_ACTION,
        data: someData
    }
}

// FAKE REDUCER

const test = (state = {}, action) => {
    switch(action.type) {
        case TEST_ACTION: {
            console.log('Reducer', action.type, action.data);
            return action.data;
        }
        default: {
            return state;
        }
    }
}

const rootReducer = combineReducers({
    test,
    loginReducer,
    settingsReducer,
    campaignBuilder
});

const initStore = () => createStore(rootReducer, {}); // Second Param is the inital state of the whole store

export default initStore;