import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import Header from '../Components/Ui/Header';
import MessageBox from '../Components/Ui/MessageBox';

import Close from '../Images/Icons/close.svg';
import Import from '../Images/Icons/import.svg';

import styles from './Styles/DirectMessagesStyles';
import { Colors } from '../Themes';

export default class DirectMessages extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: this.props.navigation.state.params.user.messages,
			currentMessage: '',
			optionsOpened: false,
		}
		this.inputRef = React.createRef();
	}

	sendText() {
		this.setState({ messages: [...this.state.messages, { text: this.state.currentMessage, fromUser: true }], currentMessage: '' });
	}

	renderSend() {
		return(
			<TouchableOpacity onPress={() => this.sendText()}>
				<Text style={ styles.sendText }>Send</Text>
			</TouchableOpacity>
		)
	}

	renderPlusOption() {
		return(
			<TouchableOpacity style={ styles.optionWrapper } onPress={() => this.setState({ optionsOpened: true })}>
				<Text style={ styles.plus }>+</Text>
			</TouchableOpacity>
		)
	}

	renderOptions() {
		return(
			<View style={ styles.optionsContainer }>
				<View style={ styles.optionWrapper }>
					<Import height={12} width={15} stroke={ Colors.fog } />
				</View>
				<TouchableOpacity style={ styles.optionWrapper } onPress={() => this.setState({ optionsOpened: false })}>
					<Close height={10} width={10} stroke={ Colors.fog } />
				</TouchableOpacity>
			</View>
		)
	}

	renderTextField() {
		return (
			<View style={ styles.textInputWrapper }>
				<TextInput
					placeholder='Message...'
					style={ styles.textInput }
					theme={{ fonts: { regular: 'AvenirNext-Medium' } }}
					onChangeText={(text) => this.setState({ currentMessage: text })}
					onSubmitEditing={() => this.sendText()}
					value={ this.state.currentMessage }
				/>
				{this.state.currentMessage === '' && this.state.optionsOpened ? this.renderOptions() : null }
				{this.state.currentMessage === '' && !this.state.optionsOpened ? this.renderPlusOption() : null }
				{this.state.currentMessage !== '' ? this.renderSend() : null }
			</View>
		)
	}

	renderMessage(message, i) {
		let messageSide = '';
		if(message.fromUser) messageSide = 'sent';
		else messageSide = 'received';
		return <MessageBox key={i} text={message.text} styles={messageSide} />
	}

	renderMessages(messages) {
		return messages.map((message, i) => this.renderMessage(message, i));
	}

	render() {
		let user = this.props.navigation.state.params.user;
		let hasImage = user.image;
		return (
			<View style={ styles.fullScreen }>
				<Header navigation={this.props.navigation} headerType='BackEllipsesOtherProfile' title={user.name} source={hasImage} />
				<View style={ styles.directMessagesContainer }>
					<ScrollView ref={ ref => this.inputRef = ref } onContentSizeChange={(contentWidth, contentHeight) => { this.inputRef.scrollToEnd({animated: true}) }} contentContainerStyle={ styles.messagesContainer }>
						<Text style={ styles.matchedText }>You matched with { user.name } { user.matchTime.includes(':') ? 'at' : 'on' } { user.matchTime } </Text>
						{ this.renderMessages(this.state.messages) }
					</ScrollView>
					{this.renderTextField()}
				</View>
			</View>
		)
	}
}