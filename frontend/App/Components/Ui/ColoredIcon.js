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
                case('CommunityImage'):
                    return <CommunityImage height={48} width={48} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('DiversityImage'): 
                    return <DiversityImage height={48} width={48} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('EducationImage'):
                    return <EducationImage height={48} width={48} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('FamilyImage'): 
                    return <FamilyImage height={48} width={48} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('InnovationImage'): 
                    return <InnovationImage height={48} width={48} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('SpiritualityImage'): 
                    return <SpiritualityImage height={48} width={48} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('SustainabilityImage'): 
                    return <SustainabilityImage height={48} width={48} stro ke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('TraditionImage'): 
                    return <TraditionImage height={48} width={48} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('WellnessImage'): 
                    return <WellnessImage height={48} width={48} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
            }
        }

        return (
            
            <View style={styles.valueButtonAlignment}>
                <TouchableHighlight onPress={() => {
                    if(!this.props.disabled || this.state.greenButtonState){
                        this.setState({greenButtonState: !this.state.greenButtonState});
                        this.props.callback(!this.state.greenButtonState);
                    }
                }} style={this.state.greenButtonState ? styles.greenValueButton : styles.coloredValue} activeOpacity={ 0.5 } underlayColor={ Colors.pear35}> 
                    
                        <View
                            style={styles.valueButtonContainer}
                        >
                            <GetSvg />
                        </View>
                    
                </TouchableHighlight>
                <Text style={{ ...styles.buttonText }} >{this.props.text}</ Text>
            </ View>
        )
    }

}