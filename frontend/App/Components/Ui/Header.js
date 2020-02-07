import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles/IconButtonStyles'
import BrandImage from '../../Images/Icons/brand.svg'

import { Colors } from '../../Themes/';

export default class Header extends Component {

    

    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this);
        this.state = {
            greenButtonState: false, 
            BackgroundColor: Colors.white
        };
    }

    static propTypes = {
        text: PropTypes.string,
        onPress: PropTypes.func,
        svgName: PropTypes.string
    }

    onClick() {
        this.setState({ greenButtonState: true }); 
    }

    render() {

        const GetSvg = () => {
            switch(this.props.svgName) {
                case('BrandImage'):
                    return <BrandImage height={60} width={60}/>
                case('CreatorImage'): 
                    return <CreatorImage height={60} width={60}/>
                case('ECommerceImage'):
                    return <ECommerceImage height={60} width={60}/>
                case('BrickandMortarImage'): 
                    return <BrickAndMortarImage height={60} width={60}/>
            }
        }

        return (
            
            <View
                    style={styles.iconButton}
            >
                <TouchableHighlight onPress={ this.onClick } style={this.state, [styles.iconButton]} activeOpacity={ 0.9 } underlayColor={ Colors.pear}> 
                    
                        <View
                            style={styles.iconButtonContentContainer}
                        >
                            {/* <SustainabilityImage 
                                height={100}  width={100}
                            /> */}
                            <GetSvg />
                            <Text style={this.state.greenButtonState ? styles.buttonText : styles.buttonTextWhite }>{this.props.text && this.props.text}</Text>
                        </View>
                    
                </TouchableHighlight>

            </View>
        )
    }

}