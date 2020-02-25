import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './Styles/TextFieldDarkBGStyles'

export default class TextFieldDarkBG extends Component {
	constructor(props){
		super(props);
		this.state = {
			text: '',
			style: {
				...styles.TextInput
			}
		};
	}

	render() {
		return (
			<View style={styles.BorderStyle}>
				<TextInput
				  secureTextEntry={( this.state.text <= 0 && this.state.emailStatus!='onFocus' ) ? true : false }
		          placeholder='Insert Placeholder'
		          {...this.props}
		          style={this.state.style}
		          placeholderTextColor= '#D8D8D8'
		          theme={{ fonts: { regular: 'AvenirNext-Regular' } }}
		          onChangeText={(text) => {
		          	if(text === '') {
		          		this.setState({
				          	//text: text,
				          	style: {
				          		...styles.TextInput,
				          		opacity: 0.5,
				          	}
			          });	
		          	} else {
			          	this.setState({
				          	//text: text,
				          	style: {
				          		...styles.TextInput,
				          		opacity: 1.0
				          	}
			          });
			        }
		      	}}
		        />
	      	</View>
		)
	}
}
