import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles/IconButtonStyles'
import BrandImage from '../../Images/Icons/brand.svg'
import CreatorImage from '../../Images/Icons/creator.svg'

import { Colors } from '../../Themes/';

export default class RadioIconButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            greenButtonState: false, 
            BackgroundColor: Colors.white
        };
    }

    static propTypes = {
        text: PropTypes.string,
        onPress:PropTypes.func,
        svgName: PropTypes.string,
        callback: PropTypes.func
    }

    changeState() {
        this.props.callback(!this.state.greenButtonState);
        this.setState({greenButtonState: !this.state.greenButtonState});
    }

    render() {

        const GetSvg = () => {
            switch(this.props.svgName) {
                case('BrandImage'):
                    return <BrandImage height={60} width={60} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('CreatorImage'): 
                    return <CreatorImage height={60} width={60} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>   
            }
        }

        return (
            
         
                <TouchableHighlight onPress={this.props.onPress} style={this.state.greenButtonState ? styles.greenIconButton : styles.iconButton} activeOpacity={ 0.5 } underlayColor={ Colors.pear35}> 
                    
                        <View
                            style={styles.iconButtonContentContainer}
                        >
                            <GetSvg />
                            <Text style={this.state.greenButtonState ? styles.buttonTextWhite : styles.buttonText }>{this.props.text && this.props.text}</Text>
                        </View>
                    
                </TouchableHighlight>

        )
    }

}