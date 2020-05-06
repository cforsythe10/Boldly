import React, {useState, useCallback, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native'
import { inputFieldDB, InputFieldLB, inputFieldLB } from '../Styles/InputFieldStyles'

// CONSTANTS
const PLACEHOLDER_TEXT_COLOR = '#D8D8D8';
const THEME = { 
	fonts: { 
		regular: 'AvenirNext-Regular' 
	} 
};

const TextField = ({style = '', placeholder='Insert Placeholder'}) => {
	const [text, changeText] = useState('');
	const [styleType, setStyleType] = useState('TextInputEmpty');
	const [type, setType] = useState('light');
	// Commented out cause we do not use this
	// const secureTextEntryValue = useMemo(text <= 0 && emailStatus!='onFocus' ) ? true : false, []);

	const handleTextChange = useCallback(text => {
		changeText(text);
		console.log(text);
		text.length ? setStyleType('TextInputFilled') : setStyleType('TextInputEmpty');
	}, [text]);

	return (
		<View style={inputFieldLB.BorderStyle}>
			<TextInput
				// secureTextEntry={( this.state.text <= 0 && this.state.emailStatus!='onFocus' ) ? true : false }
				placeholder={placeholder}
				style={inputFieldLB[styleType]}
				placeholderTextColor= {PLACEHOLDER_TEXT_COLOR}
				theme={THEME}
				onChangeText={handleTextChange}
			/>
		</View>
	);
}

export default TextField;