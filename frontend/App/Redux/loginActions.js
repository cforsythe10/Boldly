import { LOGIN } from './types';

export const login = account => (
	{
		type: LOGIN,
		payload: account,
	}
);