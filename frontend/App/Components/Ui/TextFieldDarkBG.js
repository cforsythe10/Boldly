import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './Styles/TextFieldDarkBGStyles'

export default class TextFieldDarkBG extends Component {
	constructor(props){
		super(props)
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
				  placeholder='Insert Placeholder'
		          {...this.props}
		          style={this.state.style}
		          placeholderTextColor= '#D8D8D8'
		          theme={{ fonts: { regular: 'AvenirNext-Regular' } }}
		          onChange={() => {
	          		this.setState({
			          	style: {
			          		...styles.TextInput,
			          		opacity: 1.0,
			          	}
		          	});}}
		        />
	      	</View>
		)
	}
}
