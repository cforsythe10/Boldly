import { UPDATE_MATCHES, UPDATE_MESSAGES, UPDATE_REMINDERS, UPDATE_APPLICANTS, UPDATE_INVISIBLE } from './types';

export const updateMatches = () => (
	{
		type: UPDATE_MATCHES,
		payload: null,
	}
);

export const updateMessages = () => (
	{
		type: UPDATE_MESSAGES,
		payload: null,
	}
);

export const updateReminders = () => (
	{
		type: UPDATE_REMINDERS,
		payload: null,
	}
);

export const updateApplicants = () => (
	{
		type: UPDATE_APPLICANTS,
		payload: null,
	}
);

export const updateInvisible = () => (
	{
		type: UPDATE_INVISIBLE,
		payload: null,
	}
);