import React from 'react';
import { combineReducers } from 'redux';
import { LOGIN } from './types';

const INITIAL_STATE = {
	account: {
		name: ''
	},
};

const loginReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case LOGIN:
			const newState = {
				...state,
				account: action.payload,
			};

			return newState;
 
		default:

			return state;
	
	}
};

export default combineReducers({
	loginReducer
});