import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View } from 'react-native'
import styles from './Styles/MessageBoxStyles'
import ExamplesRegistry from '../../Services/ExamplesRegistry'

export default class MessageBox extends Component {
  static propTypes = {
    text: PropTypes.string,
    styles: PropTypes.string // styles should be one of "sent", "received". render() will apply the appropriate box/text stylings
  }

  render() {

    //These spacers make the message box stay to the left or the right, depending on who is speaking, even if the message is multiple lines.
    var leftSpacer = this.props.styles === "received" ? null : <View style={{width: 70}}/>;
    var rightSpacer = this.props.styles === "received" ? <View style={{width: 70}}/> : null;

    var boxStyles = this.props.styles === "received" ? [styles.messageBox, styles.messageBoxLeft] : [styles.messageBox, styles.messageBoxRight];
    var boxTextStyle = this.props.styles === "received" ? styles.messageBoxTextLeft : styles.messageBoxTextRight;

    return (
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            {leftSpacer}
            <View style={boxStyles}>
              <Text style={boxTextStyle}>
                {this.props.text}
              </Text>
            </View>
            {rightSpacer}
          </View>
      );
  }
}
