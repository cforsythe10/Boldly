import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types'
import styles from './Styles/TextFieldWideStyles';

export default class TextArea extends Component {
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
      <View style={styles.TextAreaBorder}>
        <TextInput
          secureTextEntry={( this.state.text <= 0 && this.state.emailStatus!='onFocus' ) ? true : false }
              placeholder={this.props.placeholder}
              {...this.props}
              style={this.state.style}
              multiline={true}
              placeholderTextColor= '#C1C1C1'
              theme={{ fonts: { regular: 'AvenirNext-Medium' } }}
              onChange={() => {
                  this.setState({
                    style: {
                      ...styles.TextInput,
                      opacity: 1.0
                    }
                });
              }
            }
            />
          </View>
    )
  }
}
