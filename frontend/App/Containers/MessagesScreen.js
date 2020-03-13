import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';

import Header from '../Components/Ui/Header';
import MessagesProfilePic from '../Components/Message/MessagesProfilePic';

import styles from './Styles/MessagesScreenStyle';

export default class MessagesScreen extends Component {
  constructor(props){
    super(props);
  }

  renderLastMessage(message) {
    if(message.text.length < 40) return message.text;
    else {
      let finalMessage = message.text.substring(0, 37) + '...';
      return finalMessage;
    }
  }

  renderMessage(message, i) {
    return(
      <TouchableOpacity key={i} style={styles.messageContainer} onPress={() => this.props.navigation.navigate( 'DirectMessages', {user: message} )}>
        <View style={ styles.picContainer }>
          <MessagesProfilePic source={message.image} newMessage={ message.newMessage } />
        </View>
        <View style={ styles.textContainer }>
          <View style={ styles.infoContainer }>
            <Text style={ styles.boldText }>{ message.name }</Text>
            <Text style={ styles.boldText }>{ message.company }</Text>
            <Text style={ message.newMessage ? styles.boldText : styles.normalText }>{ this.renderLastMessage(message.messages[message.messages.length - 1]) }</Text>
          </View>
          <Text style={ message.newMessage ? styles.timeBold : styles.timeNormal }>{message.messages[message.messages.length - 1].time}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderMessages(messages) {
      return messages.map((message, i) => this.renderMessage(message, i));
  }

  render() {
      const messages = [{image: true, matchTime:'1:26 PM', name:'Morgan', company:'Audible', newMessage: true, messages: [{ text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', fromUser: false, time: '1:29 PM' }, { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', fromUser: true, time: '2:46 PM' }, { text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', fromUser: true, time: '3:45 PM' }, { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', fromUser: false, time: '3:56 PM' }, { text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', fromUser: true, time: '4:02 PM' }, { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', fromUser: false, time: '4:36 PM' }]},
                        {image: null, matchTime:'3/12/19', name:'Avery', company:'FitTea', newMessage: false, messages: [{ text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', fromUser: false, time: '9:31 AM' }, { text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', fromUser: false, time: '9:32 PM' }, { text: 'Lorem ipsum dolor sit amet', fromUser: true, time: '3:56 PM' }]},
                        {image: null, matchTime:'3/12/19', name:'Avery', company:'FitTea', newMessage: false, messages: [{ text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', fromUser: false, time: '9:31 AM' }, { text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', fromUser: false, time: '9:32 PM' }, { text: 'Lorem ipsum dolor sit amet', fromUser: true, time: '3:56 PM' }]},
                        {image: null, matchTime:'3/12/19', name:'Avery', company:'FitTea', newMessage: false, messages: [{ text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', fromUser: false, time: '9:31 AM' }, { text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', fromUser: false, time: '9:32 PM' }, { text: 'Lorem ipsum dolor sit amet', fromUser: true, time: '3:56 PM' }]},
                        {image: null, matchTime:'3/12/19', name:'Avery', company:'FitTea', newMessage: false, messages: [{ text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', fromUser: false, time: '9:31 AM' }, { text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', fromUser: false, time: '9:32 PM' }, { text: 'Lorem ipsum dolor sit amet', fromUser: true, time: '3:56 PM' }]},
                        {image: null, matchTime:'3/12/19', name:'Avery', company:'FitTea', newMessage: false, messages: [{ text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', fromUser: false, time: '9:31 AM' }, { text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', fromUser: false, time: '9:32 PM' }, { text: 'Lorem ipsum dolor sit amet', fromUser: true, time: '3:56 PM' }]},
                        {image: null, matchTime:'3/12/19', name:'Avery', company:'FitTea', newMessage: false, messages: [{ text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', fromUser: false, time: '9:31 AM' }, { text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', fromUser: false, time: '9:32 PM' }, { text: 'Lorem ipsum dolor sit amet', fromUser: true, time: '3:56 PM' }]},
                        {image: null, matchTime:'3/12/19', name:'Avery', company:'FitTea', newMessage: false, messages: [{ text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', fromUser: false, time: '9:31 AM' }, { text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', fromUser: false, time: '9:32 PM' }, { text: 'Lorem ipsum dolor sit amet', fromUser: true, time: '3:56 PM' }]},
                        {image: null, matchTime:'3/12/19', name:'Avery', company:'FitTea', newMessage: false, messages: [{ text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', fromUser: false, time: '9:31 AM' }, { text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', fromUser: false, time: '9:32 PM' }, { text: 'Lorem ipsum dolor sit amet', fromUser: true, time: '3:56 PM' }]},
                        {image: null, matchTime:'3/12/19', name:'Avery', company:'FitTea', newMessage: false, messages: [{ text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', fromUser: false, time: '9:31 AM' }, { text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', fromUser: false, time: '9:32 PM' }, { text: 'Lorem ipsum dolor sit amet', fromUser: true, time: '3:56 PM' }]},
                        {image: null, matchTime:'3/12/19', name:'Avery', company:'FitTea', newMessage: false, messages: [{ text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', fromUser: false, time: '9:31 AM' }, { text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', fromUser: false, time: '9:32 PM' }, { text: 'Lorem ipsum dolor sit amet', fromUser: true, time: '3:56 PM' }]},
                        {image: null, matchTime:'3/12/19', name:'Avery', company:'FitTea', newMessage: false, messages: [{ text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', fromUser: false, time: '9:31 AM' }, { text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', fromUser: false, time: '9:32 PM' }, { text: 'Lorem ipsum dolor sit amet', fromUser: true, time: '3:56 PM' }]},
                        {image: null, matchTime:'3/12/19', name:'Avery', company:'FitTea', newMessage: false, messages: [{ text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', fromUser: false, time: '9:31 AM' }, { text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', fromUser: false, time: '9:32 PM' }, { text: 'Lorem ipsum dolor sit amet', fromUser: true, time: '3:56 PM' }]},
                        {image: null, matchTime:'3/12/19', name:'Avery', company:'FitTea', newMessage: false, messages: [{ text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', fromUser: false, time: '9:31 AM' }, { text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', fromUser: false, time: '9:32 PM' }, { text: 'Lorem ipsum dolor sit amet', fromUser: true, time: '3:56 PM' }]},
                        ];

    return (
        <View style={styles.fullScreen}>
        <Header headerType='MenuSearchTitle' title='Messages' navigation={this.props.navigation} />

        <View style={styles.messagesContainer}>
            <ScrollView>
              {this.renderMessages(messages)}
           </ScrollView>
        </View>
      </View>
    )
  }

}