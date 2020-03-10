import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types'
import styles from './Styles/TextFieldWideStyles';

export default class TextFieldWide extends Component {
  static propTypes = {
    placeholder: PropTypes.string
  }

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
              placeholder={this.props.placeholder}
              {...this.props}
              style={this.state.style}
              placeholderTextColor= '#C1C1C1'
              theme={{ fonts: { regular: 'AvenirNext-Medium' } }}
              onChangeText={(text) => {
                if(text === '') {
                  this.setState({
                    text: text,
                    style: {
                      ...styles.TextInput,
                      opacity: 0.7,
                    }
                }); 
                } else {
                  this.setState({
                    text: text,
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
