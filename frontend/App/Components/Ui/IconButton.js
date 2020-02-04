import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './Styles/IconButtonStyles';

export default class IconButton extends Component {

    static propTypes = {
        text: PropTypes.string,
        onPress: PropTypes.func,
    }

    render() {
        return (
            <View
                style={styles.iconButton}
            >
                <View
                    style={styles.iconButtonContentContainer}
                >
                    
                    <Text style={styles.buttonText}>{this.props.text && this.props.text}</Text>
                </View>
            </View>
        )
    }

}