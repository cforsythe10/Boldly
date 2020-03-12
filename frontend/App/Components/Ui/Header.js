import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight, Button } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './Styles/HeaderStyles'
import BackButton from '../../Images/Icons/back.svg'
import SettingsButton from '../../Images/Icons/settings.svg'
import MenuButton from '../../Images/Icons/hamburger.svg'
import ProfileButton from '../../Images/Icons/profile.svg'
import EditButton from '../../Images/Icons/edit.svg'
import Logo from '../../Images/Icons/logo-purple.svg'
import LogoFog from '../../Images/Icons/logo-fog.svg'
import Check from '../../Images/Icons/check.svg'
import Close from '../../Images/Icons/close.svg'
import { Colors } from '../../Themes/';
import Modal from "react-native-modal";

export default class Header extends Component {

    constructor(props) {
        super(props)

        navigation=this.props.navigation;
        this.onClick = this.onClick.bind(this);
        this.state = {
            greenButtonState: false, 
            BackgroundColor: Colors.white,
            isModalVisible: false
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

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    
    open = () => this.setState({isModalVisible: true});
    close = () => this.setState({isModalVisible: false});

    

    

    render() {

        const MenuHTML = (
            <Modal 
            isVisible={this.state.isModalVisible} 
            style={{margin:0,padding:0}} 
            swipeDirection='left' 
            animationIn='slideInLeft' 
            animationOut='slideOutLeft' 
            animationInTiming={ 530 } 
            animationOutTiming={ 530 }
            onBackdropPress={this.close}
            onBackButtonPress={this.close}
            useNativeDriver={true}
             >
                    <StatusBar  backgroundColor={Colors.charcoal} translucent={false} barStyle="dark-content" />
                    <View style={styles.hamburgerMenu}>
                    <LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
                    <View style={styles.hamburgerMenuContainer}>
                        <View style={styles.rightIcon}>
                            <TouchableHighlight onPress={this.close} activeOpacity={ 0.9 } underlayColor={ Colors.cobalt}>
                                <Close height={20} width={20} stroke={Colors.fog }/>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.menuList}>
                            <TouchableHighlight onPress={() => {navigation.navigate('Dashboard'); this.close()}} activeOpacity={ 0.9 } underlayColor={ Colors.cobalt}>
                                <Text style={styles.menuItem}>Dashboard</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {navigation.navigate('Messages'); this.close()}} activeOpacity={ 0.9 } underlayColor={ Colors.cobalt}>
                                <Text style={styles.menuItem}>Messages</Text>
                            </TouchableHighlight>
                                <TouchableHighlight onPress={() => {navigation.navigate('Campaigns'); this.close()}} activeOpacity={ 0.9 } underlayColor={ Colors.cobalt}>
                            <Text style={styles.menuItem}>Campaigns</Text>
                                </TouchableHighlight>
                            <TouchableHighlight onPress={() => {navigation.navigate('Settings'); this.close()}} activeOpacity={ 0.9 } underlayColor={ Colors.cobalt}>
                                <Text style={styles.menuItem}>Settings</Text>
                            </TouchableHighlight>
                        </View>

                        <View>
                            <Text style={styles.menuItemSmall}>Sign Out</Text>
                        </View>
                    </View>
                    </LinearGradient>
                    </View>
                    
            </Modal>
        )

        const BackProfileHTML = (
            <View style={styles.headerContainer}>
                <StatusBar backgroundColor={Colors.fog} translucent={false} barStyle="dark-content" />
                <TouchableHighlight onPress={() => navigation.navigate('Profile')} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <BackButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
                <Logo height={30} width={70}/>
                
                <TouchableHighlight onPress={() => navigation.navigate('Profile')} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <ProfileButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                {MenuHTML}
            </View>
        )

        const BackProfileTitle = (
            <View style={styles.headerContainer}>
                <StatusBar backgroundColor={Colors.fog} translucent={false} barStyle="dark-content" />
                <TouchableHighlight onPress={() => navigation.navigate('Profile')} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <BackButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
                <Text style={styles.screenTitle}>
                    {this.props.title}
                </Text>
                
                <TouchableHighlight onPress={() => navigation.navigate('Profile')} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <ProfileButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                {MenuHTML}
            </View>
        )
        
        const MenuCheckHTML = (
            <View style={styles.headerContainer}>
                <StatusBar backgroundColor={Colors.fog} translucent={false} barStyle="dark-content" />
                <TouchableHighlight onPress={() => this.toggleModal() } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <MenuButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
                <Logo height={30} width={70}/>
                
                <TouchableHighlight onPress={() => navigation.goBack()} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <Check height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                {MenuHTML}
            </View>
        )

        const MenuCheckTitle = (
            <View style={styles.headerContainer}>
                <StatusBar backgroundColor={Colors.fog} translucent={false} barStyle="dark-content" />
                <TouchableHighlight onPress={() => this.toggleModal() } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <MenuButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
                <Text style={styles.screenTitle}>
                    {this.props.title}
                </Text>
                
                <TouchableHighlight onPress={() => navigation.goBack()} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <Check height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                {MenuHTML}
            </View>
        )

        const XCheckHTML = (
            <View style={styles.headerContainer}>
                <StatusBar backgroundColor={Colors.fog} translucent={false} barStyle="dark-content" />
                <TouchableHighlight onPress={() => navigation.goBack()} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <Close height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
                <Logo height={30} width={70}/>
                
                <TouchableHighlight onPress={() => navigation.goBack()} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <Check height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                {MenuHTML}
            </View>
        )

        const XCheckTitle = (
            <View style={styles.headerContainer}>
                <StatusBar backgroundColor={Colors.fog} translucent={false} barStyle="dark-content" />
                <TouchableHighlight onPress={() => navigation.goBack()} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <Close height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
                <Text style={styles.screenTitle}>
                    {this.props.title}
                </Text>
                
                <TouchableHighlight onPress={() => navigation.goBack()} activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <Check height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                {MenuHTML}
            </View>
        )

        const MenuProfileHTML = (
            <View style={styles.headerContainer}>
                <StatusBar backgroundColor={Colors.fog} translucent={false} barStyle="dark-content" />
                <TouchableHighlight onPress={() => this.toggleModal() } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <MenuButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
                <Logo height={30} width={70}/>

                <TouchableHighlight onPress={() => navigation.navigate('Profile') } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <ProfileButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                {MenuHTML}
            </View>
        )

        const MenuProfileTitle = (
            <View style={styles.headerContainer}>
                <StatusBar backgroundColor={Colors.fog} translucent={false} barStyle="dark-content" />
                <TouchableHighlight onPress={() => this.toggleModal() } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <MenuButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                
                <Text style={styles.screenTitle}>
                    {this.props.title}
                </Text>

                <TouchableHighlight onPress={() => navigation.navigate('Profile') } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <ProfileButton height={20} width={20} stroke={Colors.charcoal65 }/>
                </TouchableHighlight>
                {MenuHTML}
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
                <StatusBar backgroundColor={Colors.fog} translucent={false} barStyle="dark-content" />
                <TouchableHighlight onPress={() => this.toggleModal() } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <MenuButton height={20} width={20} stroke={ Colors.charcoal65 }/>
                </TouchableHighlight>
                 
                    <Logo height={30} width={70}/>

                <TouchableHighlight onPress={() => navigation.navigate('Edit') } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <EditButton height={20} width={20} stroke={ Colors.charcoal65 }/>
                </TouchableHighlight>
                {MenuHTML}
            </View>
        )

        const MenuEditTitle = (
            <View style={styles.headerContainer}>
                <StatusBar backgroundColor={Colors.fog} translucent={false} barStyle="dark-content" />
                <TouchableHighlight onPress={() => this.toggleModal() } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <MenuButton height={20} width={20} stroke={ Colors.charcoal65 }/>
                </TouchableHighlight>
                 
                <Text style={styles.screenTitle}>
                    {this.props.title}
                </Text>

                <TouchableHighlight onPress={() => navigation.navigate('Edit') } activeOpacity={ 0.8 } underlayColor={ Colors.fog}>
                    <EditButton height={20} width={20} stroke={ Colors.charcoal65 }/>
                </TouchableHighlight>
                {MenuHTML}
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