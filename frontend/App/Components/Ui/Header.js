import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles/HeaderStyles'
import BackButton from '../../Images/Icons/back.svg'
import SettingsButton from '../../Images/Icons/settings.svg'
import MenuButton from '../../Images/Icons/hamburger.svg'
import ProfileButton from '../../Images/Icons/profile.svg'
import EditButton from '../../Images/Icons/edit.svg'
import Logo from '../../Images/Icons/logo-purple.svg'
import LogoFog from '../../Images/Icons/logo-fog.svg'
import Check from '../../Images/Icons/check.svg'
import { Colors } from '../../Themes/';

export default class Header extends Component {

    constructor(props) {
        super(props)

        navigation=this.props.navigation;
        this.onClick = this.onClick.bind(this);
        this.state = {
            greenButtonState: false, 
            BackgroundColor: Colors.white
        };
    }

    static propTypes = {
        text: PropTypes.string,
        onPress: PropTypes.func,
        RightSvgName: PropTypes.string,
        headerType: PropTypes.string,
        title: PropTypes.string
    }

    onClick() {
        if (this.state.greenButtonState) {
            this.setState({ greenButtonState: false }); 
        } else {
            this.setState({ greenButtonState: true }); 
        }
        
    }

    

    

    render() {

        const BackProfileHTML = (
            <View style={styles.headerContainer}>
                <TouchableHighlight onPress={() => navigation.navigate('Profile')} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <BackButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
                <Logo height={30} width={70}/>
                
                <TouchableHighlight onPress={() => navigation.navigate('Profile')} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <ProfileButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
            </View>
        )

        const BackProfileTitle = (
            <View style={styles.headerContainer}>
                <TouchableHighlight onPress={() => navigation.navigate('Profile')} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <BackButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
                <Text style={styles.screenTitle}>
                    {this.props.title}
                </Text>
                
                <TouchableHighlight onPress={() => navigation.navigate('Profile')} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <ProfileButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
            </View>
        )
        
        const MenuCheckHTML = (
            <View style={styles.headerContainer}>
                <TouchableHighlight onPress={() => navigation.openDrawer() } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <MenuButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
                <Logo height={30} width={70}/>
                
                <TouchableHighlight onPress={() => navigation.goBack()} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <Check height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
            </View>
        )

        const MenuCheckTitle = (
            <View style={styles.headerContainer}>
                <TouchableHighlight onPress={() => navigation.openDrawer() } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <MenuButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
                <Text style={styles.screenTitle}>
                    {this.props.title}
                </Text>
                
                <TouchableHighlight onPress={() => navigation.goBack()} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <Check height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
            </View>
        )

        const XCheckHTML = (
            <View style={styles.headerContainer}>
                <TouchableHighlight onPress={() => navigation.goBack()} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <SettingsButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
                <Logo height={30} width={70}/>
                
                <TouchableHighlight onPress={() => navigation.goBack()} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <Check height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
            </View>
        )

        const XCheckTitle = (
            <View style={styles.headerContainer}>
                <TouchableHighlight onPress={() => navigation.goBack()} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <SettingsButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
                <Text style={styles.screenTitle}>
                    {this.props.title}
                </Text>
                
                <TouchableHighlight onPress={() => navigation.goBack()} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <Check height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
            </View>
        )

        const MenuProfileHTML = (
            <View style={styles.headerContainer}>
                <TouchableHighlight onPress={() => navigation.openDrawer() } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <MenuButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
                <Logo height={30} width={70}/>

                <TouchableHighlight onPress={() => navigation.navigate('Profile') } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <ProfileButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
            </View>
        )

        const MenuProfileTitle = (
            <View style={styles.headerContainer}>
                <TouchableHighlight onPress={() => navigation.openDrawer() } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <MenuButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
                <Text style={styles.screenTitle}>
                    {this.props.title}
                </Text>

                <TouchableHighlight onPress={() => navigation.navigate('Profile') } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <ProfileButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
            </View>
        )

        const SurveyHTML = (
            <View style={styles.surveyHeaderContainer}>
                <TouchableHighlight onPress={() => navigation.goBack()} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <BackButton height={20} width={20} stroke={Colors.white }/>
                </TouchableHighlight>
                
                <LogoFog height={30} width={70}/>

                <View height={20} width={20} />
            </View>
        )

        const SurveyTitle = (
            <View style={styles.surveyHeaderContainer}>
                <TouchableHighlight onPress={() => navigation.goBack()} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <BackButton height={20} width={20} stroke={Colors.white }/>
                </TouchableHighlight>
                
                <Text style={styles.screenTitle}>
                    {this.props.title}
                </Text>

                <View height={20} width={20} />
            </View>
        )

        const MenuEditHTML = (
            <View style={styles.headerContainer}>
                <TouchableHighlight onPress={() => navigation.openDrawer() } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <MenuButton height={20} width={20} stroke={ Colors.charcoal65 }/>
                </TouchableHighlight>
                 
                    <Logo height={30} width={70}/>

                <TouchableHighlight onPress={() => navigation.navigate('Edit') } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <EditButton height={20} width={20} stroke={ Colors.charcoal65 }/>
                </TouchableHighlight>
                    
            </View>
        )

        const MenuEditTitle = (
            <View style={styles.headerContainer}>
                <TouchableHighlight onPress={() => navigation.openDrawer() } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <MenuButton height={20} width={20} stroke={ Colors.charcoal65 }/>
                </TouchableHighlight>
                 
                <Text style={styles.screenTitle}>
                    {this.props.title}
                </Text>

                <TouchableHighlight onPress={() => navigation.navigate('Edit') } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <EditButton height={20} width={20} stroke={ Colors.charcoal65 }/>
                </TouchableHighlight>
                    
            </View>
        )



        const HeaderSvgs = () => {
            switch(this.props.headerType) {
                case('BackProfile'): 
                    return BackProfileHTML
                case('BackProfileTitle'):
                    return BackProfileTitle     
                case('MenuCheck'): 
                    return MenuCheckHTML
                case('MenuCheckTitle'):
                    return MenuCheckTitle
                case('XCheck'): 
                    return MenuCheckHTML
                case('XCheckTitle'):
                    return MenuCheckTitle
                case('MenuProfile'):
                    return MenuProfileHTML
                case('MenuProfileTitle'):
                    return MenuProfileTitle
                case('Survey'): 
                    return SurveyHTML
                case('SurveyTitle'):
                    return SurveyTitle
                case('MenuEdit'): 
                    return MenuEditHTML
                case('MenuEditTitle'):
                    return MenuEditTitle
                default:
                    return BackProfileHTML
            }
        }


        return (

                <HeaderSvgs />
            
                

        )
    }

}