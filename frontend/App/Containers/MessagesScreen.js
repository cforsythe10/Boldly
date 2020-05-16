import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';

import Header from '../Components/Ui/Header';
import MessagesProfilePic from '../Components/Message/MessagesProfilePic';

import styles from './Styles/MessagesScreenStyle';

class MessagesScreen extends Component {
  constructor(props){
    super(props);
  }

  renderLastMessage(message) {
    if(message.content.length < 40) return message.content;
    else {
      let finalMessage = message.content.substring(0, 37) + '...';
      return finalMessage;
    }
  }

  renderMessage(message, i) {
    return(
      <TouchableOpacity key={i} style={styles.messageContainer} onPress={() => this.props.navigation.navigate( 'DirectMessages', {user: message, isCreator: !message.birthday, conversationId: message.conversationId} )}>
        <View style={ styles.picContainer }>
          <MessagesProfilePic source={message.image} newMessage={ message.newMessage } />
        </View>
        <View style={ styles.textContainer }>
          <View style={ styles.infoContainer }>
            <Text style={ styles.boldText }>{ message.name }</Text>
            <Text style={ styles.normalText }>{message.messages.length > 0 ? this.renderLastMessage(message.messages[0]) : null}</Text>
          </View>
          <Text style={ message.newMessage ? styles.timeBold : styles.timeNormal }>{message.messages.length > 0 ? message.messages[0].date.substring(11, 16) : null}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderMessages(messages) {
      if(messages[0]) return Object.values(messages).map((message, i) => this.renderMessage(message, i));
  }

  render() {
    return (
        <View style={styles.fullScreen}>
        <Header headerType='MenuSearchTitle' title='Messages' navigation={this.props.navigation} />

        <View style={styles.messagesContainer}>
            <ScrollView>
              {this.renderMessages(this.props.navigation.state.params)}
           </ScrollView>
        </View>
      </View>
    )
  }

}

const mapStateToProps = state => ({
  conversations: state.conversations
});

const mapDispatchToProps = dispatch => ({
  updateConversations: (conversation) => dispatch(updateConversations(conversation))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesScreen);