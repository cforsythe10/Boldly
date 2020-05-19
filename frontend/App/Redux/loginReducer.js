import React from 'react';
import { combineReducers } from 'redux';
import { LOGIN, LOGOUT } from './types';

const INITIAL_STATE = {
	account: {
		name: ''
	},
};

const loginReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case LOGIN:
			return {
				...state,
				account: action.payload,
			};

		case LOGOUT:
			return {...INITIAL_STATE};
 
		default:

			return state;
	
	}
};

export default combineReducers({
	loginReducer
});