import React from 'react';
import { combineReducers } from 'redux';
import { UPDATE_MATCHES, UPDATE_MESSAGES, UPDATE_REMINDERS, UPDATE_APPLICANTS, UPDATE_INVISIBLE } from './types';

const INITIAL_STATE = {
	isOnMatches: true,
	isOnMessages: true,
	isOnReminders: true,
	isOnApplicants: true,
	isOnInvisible: false
};

const settingsReducer = (state = INITIAL_STATE, action) => {
	let newState = state;
	switch(action.type) {
		case UPDATE_MATCHES:
			newState = {
				...state,
				isOnMatches: !state.isOnMatches,
			};

			return newState;

		case UPDATE_MESSAGES:
			newState = {
				...state,
				isOnMessages: !state.isOnMessages,
			};

			return newState;

		case UPDATE_REMINDERS:
			newState = {
				...state,
				isOnReminders: !state.isOnReminders,
			};

			return newState;

		case UPDATE_APPLICANTS:
			newState = {
				...state,
				isOnApplicants: !state.isOnApplicants,
			};

			return newState;

		case UPDATE_INVISIBLE:
			newState = {
				...state,
				isOnInvisible: !state.isOnInvisible,
			};

			return newState;
 
		default:

			return state;
	
	}
};

export default combineReducers({
	settingsReducer
});