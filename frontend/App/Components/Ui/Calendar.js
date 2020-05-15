import React, { Component } from 'react'
import { StatusBar, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight, Button, Image } from 'react-native'
import { Colors, Fonts } from '../../Themes/';
import CalendarPicker from 'react-native-calendar-picker';
import styles from './Styles/ModalStyles'

export default class Calendar extends Component {

    constructor(props) {
        super(props)

        this.onDateChange = this.onDateChange.bind(this);
    }

    static propTypes = {
        range: PropTypes.bool,
        callback: PropTypes.func
    }

    static defaultProps = {
        range: true
    }

    onDateChange(date, type) {
      this.setState(
        this.props.callback(
            date ? date.toString() : '', 
            type
          )
        );
      }

    render() {

        return (

        <View style={styles.calendarContainer}>
            
            <CalendarPicker
                width={328}
                allowBackwardRangeSelect={true}
                textStyle={Fonts.style.avenir}
                selectedDayTextColor={Colors.fog}
                selectedDayColor={Colors.violet}
                onDateChange={this.onDateChange}
                allowRangeSelection={this.props.range}
            />
            
        </View>
        )
    }
}