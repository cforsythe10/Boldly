import * as MessagesActionTypes from './MessagesActionTypes';
import { makePost, makeGet } from '../../Services/Api';

const initialState = {
	conversations: [], 
}

const getOtherUser = (id, parameter) => {
    return makeGet('/api/brands', parameter, id);
  }

const getMessages = (id) => {
return makePost('api/message', JSON.stringify({
  conversation_id: id
}));
}

const MessagesReducer = (state = initialState, action) => {
	switch(action.type) {
		case MessagesActionTypes.GO_TO_MESSAGES:
			if(action.data.loginReducer.loginReducer.account.birthday){
				let convos = [];

	          	makePost('/api/conversations/all', JSON.stringify({
	            	creator_id: action.data.loginReducer.loginReducer.account.id
	          	})).then(response => response.json())
		            .then(data => {
		              data.data.map((conversation) => {
		                let convo = {conversationId: conversation.id};

		                getOtherUser(conversation.brand_id)
		                  .then(response => response.json())
		                  .then(data => {
		                    convo = {...convo, ...data.data[0]};
		                    getMessages(conversation.id)
		                      .then(response => response.json())
		                      .then(data => {
		                        convo = {...convo, messages: data.data};
		                        convos.push(convo);
		                        action.data.navigation.navigate('Messages', convos);
		                      });
		                });  
		              });
		            });
	        } else {
	          let convos = [];

	          makePost('/api/conversations/all', JSON.stringify({
	            brand_id: action.data.loginReducer.loginReducer.account.id
	          })).then(response => response.json())
	            .then(data => {
	              data.data.map((conversation) => {
	                let convo = {conversationId: conversation.id};

	                getOtherUser(conversation.creator_id)
	                  .then(response => response.json())
	                  .then(data => {
	                    convo = {...convo, ...data.data[0]};
	                    getMessages(conversation.id)
	                      .then(response => response.json())
	                      .then(data => {
	                        convo = {...convo, messages: data.data};
	                        convos.push(convo);
	                        action.data.navigation.navigate('Messages', convos);
	                      });
	                });  
	              });
	            });
	        }
		default: 
			return state
	}
}

export default MessagesReducer;