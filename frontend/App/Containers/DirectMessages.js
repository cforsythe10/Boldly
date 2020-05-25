import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'react-native-fetch-blob';

import Header from '../Components/Ui/Header';
import MessageBox from '../Components/Ui/MessageBox';
import { makePost, uploadFile } from '../Services/Api.js';

import Close from '../Images/Icons/close.svg';
import Import from '../Images/Icons/import.svg';

import styles from './Styles/DirectMessagesStyles';
import { Colors } from '../Themes';

export default class DirectMessages extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: this.props.navigation.state.params.user.messages,
			conversationId: props.navigation.state.params.user.conversationId,
			currentMessage: '',
			optionsOpened: false,
			isCreator: props.navigation.state.params.isCreator
		}
		this.inputRef = React.createRef();
	}

	sendText() {
		const date = new Date();
		let message = { content: this.state.currentMessage, sent_by_creator: this.state.isCreator, conversation_id: this.state.conversationId, date: date };
		this.setState({ messages: [ message, ...this.state.messages], currentMessage: '' });
		makePost('/api/messages', JSON.stringify({
			message: {
				content: this.state.currentMessage,
				date: date,
				sent_by_creator: this.state.isCreator,
				conversation_id: this.state.conversationId
			}
		})).then(response => response.json())
		.then(data => {
			console.log(data);
		});
	}

	async uploadClicked() {
		try {
		  	const res = await DocumentPicker.pick({
		    	type: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
		 	});

			RNFetchBlob.fs.readFile(res.uri, 'base64')
				.then((data) => {
					//use type and base 64 encoded data, will be able to convert back from anything
					console.log({type: res.type, data: data});
				});
		} catch (err) {
		  if (DocumentPicker.isCancel(err)) {
		    // User cancelled the picker, exit any dialogs or menus and move on
		  } else {
		    throw err;
		  }
		}
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
			<TouchableOpacity onPress={() => this.uploadClicked()}>
				<View style={ styles.optionWrapper }>
					<Import height={12} width={15} stroke={ Colors.fog } />
				</View>
			</TouchableOpacity>
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
				{this.state.currentMessage === '' ? this.renderOptions() : null}
				{this.state.currentMessage !== '' ? this.renderSend() : null }
			</View>
		)
	}

	renderMessage(message, i) {
		let messageSide = '';
		if((message.sent_by_creator && this.state.isCreator) || (!message.sent_by_creator && !this.state.isCreator)) messageSide = 'sent';
		else messageSide = 'received';
		return <MessageBox key={i} text={message.content} styles={messageSide} />
	}

	renderMessages(messages) {
		let newArr = []
		Object.values(messages).map((message) => newArr.unshift(message));
		return newArr.map((message, i) => this.renderMessage(message, i));
	}

	render() {
		let user = this.props.navigation.state.params.user;
		let hasImage = user.image;
		return (
			<View style={ styles.fullScreen }>
				<Header navigation={this.props.navigation} headerType='BackEllipsesOtherProfile' title={user.name} source={hasImage} />
				<View style={ styles.directMessagesContainer }>
					<ScrollView ref={ ref => this.inputRef = ref } onContentSizeChange={(contentWidth, contentHeight) => { this.inputRef.scrollToEnd({animated: true}) }} contentContainerStyle={ styles.messagesContainer }>
						{/* <Text style={ styles.matchedText }>You matched with { user.name } { user.matchTime.includes(':') ? 'at' : 'on' } { user.matchTime } </Text> */ }
						{ this.renderMessages(this.state.messages) }
					</ScrollView>
					{this.renderTextField()}
				</View>
			</View>
		)
	}
}