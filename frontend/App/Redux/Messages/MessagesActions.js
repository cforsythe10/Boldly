import * as MessagesActionTypes from './MessagesActionTypes';
import { makePost } from '../../Services/Api';

export const goToMessages = (state) => ({
	type: MessagesActionTypes.GO_TO_MESSAGES,
	data: state
});

export const updateConversations = (Conversation) => ({
	type: MessagesActionTypes.UPDATE_CONVERSATIONS,
	data: Conversation
});