import React, { Component } from 'react';
import { connect, useStore } from 'react-redux';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';

import Header from '../Components/Ui/Header';
import MessagesProfilePic from '../Components/Message/MessagesProfilePic';

import styles from './Styles/MessagesScreenStyle';

const MessagesScreen = ({navigation}) => {
  const store = useStore();
  const account = store.getState().loginReducer.loginReducer.account;

  const renderLastMessage = (message) => {
    if(message.content.length < 40) return message.content;
    else {
      let finalMessage = message.content.substring(0, 37) + '...';
      return finalMessage;
    }
  }

  const renderMessage = (message, i) => {
    let isCreator = false;
    if('birthday' in account) isCreator = true;
    return(
      <TouchableOpacity key={i} style={styles.messageContainer} onPress={() => navigation.navigate( 'DirectMessages', {user: message, isCreator: isCreator, conversationId: message.conversationId} )}>
        <View style={ styles.picContainer }>
          <MessagesProfilePic source={message.image} newMessage={ message.newMessage } />
        </View>
        <View style={ styles.textContainer }>
          <View style={ styles.infoContainer }>
            <Text style={ styles.boldText }>{ message.name }</Text>
            <Text style={ styles.normalText }>{message.messages.length > 0 ? renderLastMessage(message.messages[0]) : null}</Text>
          </View>
          <Text style={ message.newMessage ? styles.timeBold : styles.timeNormal }>{message.messages.length > 0 ? message.messages[0].date.substring(11, 16) : null}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const renderMessages = (messages) => {
    return Object.values(messages).map((message, i) => renderMessage(message, i));
  }

  let convos = [];
  for(i=0; i < navigation.state.params.convos.length; i++) {
    let conv = {...navigation.state.params.convos[i], ...navigation.state.params.userData.data[i]};
    convos.push(conv);
  }

  return (
      <View style={styles.fullScreen}>
      <Header headerType='MenuSearchTitle' title='Messages' navigation={navigation} />

      <View style={styles.messagesContainer}>
          <ScrollView>
            {renderMessages(convos)}
         </ScrollView>
      </View>
    </View>
  )

}

const mapStateToProps = state => ({
  conversations: state.conversations
});

const mapDispatchToProps = dispatch => ({
  updateConversations: (conversation) => dispatch(updateConversations(conversation))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesScreen);