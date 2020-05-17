import React, { Component } from 'react'
import { StatusBar, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight, Button, Image } from 'react-native'
import { Colors, Fonts } from '../../Themes/';
import Modal from "react-native-modal";
import CalendarPicker from 'react-native-calendar-picker';
import styles from './Styles/ModalStyles'
import ColoredIcon from './ColoredIcon'
import PrimaryButtonLarge from './PrimaryButtonLarge'
import ValueButton from '../../Components/Ui/ValueButton';

export default class ValuesModal extends Component {

    

    static propTypes = {
        range: PropTypes.bool,
        values: PropTypes.array,
        callback: PropTypes.func
    }

    constructor(props) {
        super(props)

        //this.onClick = this.onClick.bind(this);
        
        this.state= {
            values: this.props.values ? this.props.values : [],
            isModalVisible: false,
            communitySelected: false,
  			diversitySelected: false,
  			educationSelected: false,
  			familySelected: false,
  			innovationSelected: false,
  			spiritualitySelected: false,
  			sustainabilitySelected: false,
  			traditionSelected: false,
  			wellnessSelected: false,
  			selectedCount: 3
        };

        

    }

    readValuesArray = (arr) => {
        arr.forEach(element => {
            switch(element) {
                case('Community'):
                    this.setState({communitySelected: true})
                case('Diversity'):
                    this.setState({diversitySelected: true})
                case('Education'):
                    this.setState({educationSelected: true})
                case('Family'):
                    this.setState({familySelected: true})
                case('Innovaiton'):
                    this.setState({innovationSelected: true})
                case('Spirituality'):
                    this.setState({spiritualitySelected: true})
                case('Sustainability'):
                    this.setState({sustainabilitySelected: true})
                case('Tradition'):
                    this.setState({traditionSelected: true})
                case('Wellness'):
                    this.setState({wellnessSelected: true})
                default:
                    this.setState({
                        communitySelected: true,
                        diversitySelected: true,
                        educationSelected: true,
                        familySelected: false,
                        innovationSelected: false,
                        spiritualitySelected: false,
                        sustainabilitySelected: false,
                        traditionSelected: false,
                        wellnessSelected: false,
                    })
            };
            console.log(element);
        });
    }

    callback0 = (data) => {
        let iter = 0;
        if(data) iter += 1;
        else iter -= 1;
        this.setState({...this.state, communitySelected: data, selectedCount: this.state.selectedCount + iter},console.log(this.state));
        this.props.callback(this.state);
    } 

    callback1 = (data) => {
        let iter = 0;
        if(data) iter += 1;
        else iter -= 1;
        this.setState({...this.state, diversitySelected: data, selectedCount: this.state.selectedCount + iter},console.log(this.state));
        this.props.callback(this.state);
    }

    callback2 = (data) => {
        let iter = 0;
        if(data) iter += 1;
        else iter -= 1;
        this.setState({...this.state, educationSelected: data, selectedCount: this.state.selectedCount + iter},console.log(this.state));
        this.props.callback(this.state);
    }

    callback3 = (data) => {
        let iter = 0;
        if(data) iter += 1;
        else iter -= 1;
        this.setState({...this.state, familySelected: data, selectedCount: this.state.selectedCount + iter},console.log(this.state));
        this.props.callback(this.state);
    }

    callback4 = (data) => {
        let iter = 0;
        if(data) iter += 1;
        else iter -= 1;
        this.setState({...this.state, innovationSelected: data, selectedCount: this.state.selectedCount + iter},console.log(this.state));
        this.props.callback(this.state);
    }

    callback5 = (data) => {
        let iter = 0;
        if(data) iter += 1;
        else iter -= 1;
        this.setState({...this.state, spiritualitySelected: data, selectedCount: this.state.selectedCount + iter},console.log(this.state));
        this.props.callback(this.state);
    }

    callback6 = (data) => {
        let iter = 0;
        if(data) iter += 1;
        else iter -= 1;
        this.setState({...this.state, sustainabilitySelected: data, selectedCount: this.state.selectedCount + iter},console.log(this.state));
        this.props.callback(this.state);
    }

    callback7 = (data) => {
        let iter = 0;
        if(data) iter += 1;
        else iter -= 1;
        this.setState({...this.state, traditionSelected: data, selectedCount: this.state.selectedCount + iter},console.log(this.state));
        this.props.callback(this.state);
    }

    callback8 = (data) => {
        let iter = 0;
        if(data) iter += 1;
        else iter -= 1;
        this.setState({...this.state, wellnessSelected: data, selectedCount: this.state.selectedCount + iter},console.log(this.state));
        this.props.callback(this.state);
    }

    setValuesArray(){
        let arr = [];
        if(this.state.communitySelected) arr.push('Community');
        if(this.state.diversitySelected) arr.push('Diversity');
        if(this.state.educationSelected) arr.push('Education');
        if(this.state.familySelected) arr.push('Family');
        if(this.state.innovationSelected) arr.push('Innovation');
        if(this.state.spiritualitySelected) arr.push('Spirituality');
        if(this.state.sustainabilitySelected) arr.push('Sustainability');
        if(this.state.traditionSelected) arr.push('Tradition');
        if(this.state.wellnessSelected) arr.push('Wellness');

        return arr;
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible },
            this.readValuesArray(this.state.values )
            );
    };

    saveValues = () => {
        this.setState({ values: this.setValuesArray() },    
        this.close()
        );
        
    };
//I THINK THE CALLBACK FUNCTIONS NEED TO BE FUNDAMENTALLY CHANGED
    grid = () => {
        return (
        <View style={styles.valueButtonContainer}>
                    <View style={ styles.valueButtonRow }>
                    <ValueButton text='Community' svgName='CommunityImage' callback={this.callback0} disabled={this.state.selectedCount > 2} whiteBG={true} selected={this.state.communitySelected}/>
                    <ValueButton text='Diversity' svgName='DiversityImage' callback={this.callback1} disabled={this.state.selectedCount > 2} whiteBG={true} selected={this.state.diversitySelected}/>
                    <ValueButton text='Education' svgName='EducationImage' callback={this.callback2} disabled={this.state.selectedCount > 2} whiteBG={true} selected={this.state.educationSelected}/>
                    </View>

                    <View style={ styles.valueButtonRow }>
                    <ValueButton text='Family' svgName='FamilyImage' callback={this.callback3} disabled={this.state.selectedCount > 2} whiteBG={true} selected={this.state.familySelected}/>
                    <ValueButton text='Innovation' svgName='InnovationImage' callback={this.callback4} disabled={this.state.selectedCount > 2} whiteBG={true} selected={this.state.innovationSelected}/>
                    <ValueButton text='Spirituality' svgName='SpiritualityImage' callback={this.callback5} disabled={this.state.selectedCount > 2} whiteBG={true} selected={this.state.spiritualitySelected}/>
                    </View>

                    <View style={ styles.valueButtonRow }>
                    <ValueButton text='Sustainability' svgName='SustainabilityImage' callback={this.callback6} disabled={this.state.selectedCount > 2} whiteBG={true} selected={this.state.sustainabilitySelected}/>
                    <ValueButton text='Tradition' svgName='TraditionImage' callback={this.callback7} disabled={this.state.selectedCount > 2} whiteBG={true} selected={this.state.traditionSelected}/>
                    <ValueButton text='Wellness' svgName='WellnessImage' callback={this.callback8} disabled={this.state.selectedCount > 2} whiteBG={true} selected={this.state.wellnessSelected}/>
                    </View>	
                </View>
        )
    };

    open = () => this.setState({isModalVisible: true});
    close = () => this.setState({isModalVisible: false});

    render() {

        return (
//CONVERT SELECTED VALUES TO DISPLAYED VALUES AND VICE VERSA
        <View>
            <Modal
            isVisible={this.state.isModalVisible}
            style={{margin:0,padding:0,flex:1,justifyContent:'flex-end',alignItems:'center'}}
            animationIn='slideInUp'
            swipeDirection = {[ 'left', 'right', 'up', 'down']}
            animationOut='slideOutDown'
            animationInTiming={ 530 }
            animationOutTiming={ 330 }
            onBackdropPress={this.close}
            onBackButtonPress={this.close}
            useNativeDriver={true}
            >
                <View style={styles.mainModal}>
                <View style={styles.newUserContentBar}>
                    
                </View>
                <Text style={styles.h5}>What do you value?</Text>
                <Text style={styles.caption}>Select your top three</Text>

                {this.grid()}

                <PrimaryButtonLarge text='Save' onPress={() => this.saveValues()} />
            </View>
            </Modal>

            
                <View style={styles.valueDisplay}>
                    <TouchableHighlight onPress={() => this.toggleModal() } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                        <ColoredIcon svgName={ this.state.values[0] } text={ this.state.values[0] } />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.toggleModal() } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                        <ColoredIcon svgName={ this.state.values[1] } text={ this.state.values[1] } />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.toggleModal() } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                        <ColoredIcon svgName={ this.state.values[2] } text={ this.state.values[2] } />
                    </TouchableHighlight>
                </View>
            
        </View>
        )
    }
}