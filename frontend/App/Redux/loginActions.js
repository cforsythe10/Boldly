import { LOGIN, LOGOUT } from './types';

export const login = account => (
	{
		type: LOGIN,
		payload: account,
	}
);

export const logout = () => (
	{
		type: LOGOUT,
		payload: null
	}
);