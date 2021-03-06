import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles/IconButtonStyles'
import CommunityImage from '../../Images/Icons/community-color.svg'
import DiversityImage from '../../Images/Icons/diversity-color.svg'
import EducationImage from '../../Images/Icons/education-color.svg'
import FamilyImage from '../../Images/Icons/family-color.svg'
import InnovationImage from '../../Images/Icons/innovation-color.svg'
import SpiritualityImage from '../../Images/Icons/spirituality-color.svg'
import SustainabilityImage from '../../Images/Icons/sustainability-color.svg'
import TraditionImage from '../../Images/Icons/tradition-color.svg'
import WellnessImage from '../../Images/Icons/wellness-color.svg'


import { Colors } from '../../Themes';

export default class ColoredIcon extends Component {

    constructor(props) {
        super(props);

        this.state = {
            greenButtonState: false, 
            BackgroundColor: Colors.white
        };
    }

    static propTypes = {
        text: PropTypes.string,
        svgName: PropTypes.string,
        callback: PropTypes.func
    }

    render() {

        const GetSvg = () => {
            switch(this.props.svgName) {
                case('Community'):
                    return <CommunityImage height={48} width={48} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('Diversity'): 
                    return <DiversityImage height={48} width={48} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('Education'):
                    return <EducationImage height={48} width={48} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('Family'): 
                    return <FamilyImage height={48} width={48} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('Innovation'): 
                    return <InnovationImage height={48} width={48} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('Spirituality'): 
                    return <SpiritualityImage height={48} width={48} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('Sustainability'): 
                    return <SustainabilityImage height={48} width={48} stro ke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('Tradition'): 
                    return <TraditionImage height={48} width={48} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('Wellness'): 
                    return <WellnessImage height={48} width={48} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
            }
        }

        return (
            
            <View style={styles.valueButtonAlignment}>
                <View style={styles.coloredValue}> 
                    
                        <View
                            style={styles.valueButtonContainer}
                        >
                            <GetSvg />
                        </View>
                    
                </View>
                <Text style={{ ...styles.buttonText }} >{this.props.text}</ Text>
            </ View>
        )
    }

}