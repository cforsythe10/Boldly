import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types'
import styles from './Styles/TextFieldTallStyles';

export default class TextFieldTall extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      style: {
        ...styles.TextInput
      }
    };
  }

  static propTypes = {
    placeholder: PropTypes.string,
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
