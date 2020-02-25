import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles/IconButtonStyles'
import CommunityImage from '../../Images/Icons/community.svg'
import DiversityImage from '../../Images/Icons/diversity.svg'
import EducationImage from '../../Images/Icons/education.svg'
import FamilyImage from '../../Images/Icons/family.svg'
import InnovationImage from '../../Images/Icons/innovation.svg'
import SpiritualityImage from '../../Images/Icons/spirituality.svg'
import SustainabilityImage from '../../Images/Icons/sustainability.svg'
import TraditionImage from '../../Images/Icons/tradition.svg'
import WellnessImage from '../../Images/Icons/wellness.svg'


import { Colors } from '../../Themes';

export default class ValueButton extends Component {

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
        if (this.state.greenButtonState) {
            this.setState({ greenButtonState: false }); 
        } else {
            this.setState({ greenButtonState: true }); 
        }
        
    }

    render() {

        const GetSvg = () => {
            switch(this.props.svgName) {
                case('CommunityImage'):
                    return <CommunityImage height={20} width={20} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('DiversityImage'): 
                    return <DiversityImage height={20} width={20} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('EducationImage'):
                    return <EducationImage height={20} width={20} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('FamilyImage'): 
                    return <FamilyImage height={20} width={20} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('InnovationImage'): 
                    return <InnovationImage height={20} width={20} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('SpiritualityImage'): 
                    return <SpiritualityImage height={20} width={20} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('SustainabilityImage'): 
                    return <SustainabilityImage height={20} width={20} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('TraditionImage'): 
                    return <TraditionImage height={20} width={20} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
                case('WellnessImage'): 
                    return <WellnessImage height={20} width={20} stroke={this.state.greenButtonState ? Colors.white : Colors.black }/>
            }
        }

        return (
            
         
                <TouchableHighlight onPress={ this.onClick } style={this.state.greenButtonState ? styles.greenValueButton : styles.valueButton} activeOpacity={ 0.5 } underlayColor={ Colors.pear35}> 
                    
                        <View
                            style={styles.valueButtonContainer}
                        >
                            <GetSvg />
                        </View>
                    
                </TouchableHighlight>

        )
    }

}