import React, {useState, useCallback, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native'
import { inputFieldDB, InputFieldLB } from '../Styles/InputFieldStyles'

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

	// Commented out cause we do not use this
	// const secureTextEntryValue = useMemo(text <= 0 && emailStatus!='onFocus' ) ? true : false, []);

	const handleTextChange = useCallback(text => {
		changeText(text);
		text.length ? setStyleType('TextInputFilled') : setStyleType('TextInputEmpty');
	}, [text]);

	return (
		<View style={inputFieldDB.BorderStyle}>
			<TextInput
				{...this.props}
				// secureTextEntry={( this.state.text <= 0 && this.state.emailStatus!='onFocus' ) ? true : false }
				placeholder={placeholder}
				style={inputFieldDB[styleType]}
				placeholderTextColor= {PLACEHOLDER_TEXT_COLOR}
				theme={THEME}
				onChangeText={handleTextChange}
			/>
		</View>
	);
}

TextField.propTypes = {
	type: PropTypes.string,
}

export default TextField;