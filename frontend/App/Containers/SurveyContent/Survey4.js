import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import IconButton from '../../Components/Ui/IconButton';
import TextFieldDarkBG from '../../Components/Ui/TextFieldDarkBG';
import PrimaryButtonLarge from '../../Components/Ui/PrimaryButtonLarge';
import Header from '../../Components/Ui/Header';
import ProgressBar from '../../Components'

import styles from './Styles/Survey4Styles';
import { Colors } from '../../Themes';

export default class Survey4 extends Component {
  constructor(props){
      super(props);
      this.state = {
        currentState: {
          isCreator: props.navigation.state.params.isCreator,
          name: props.navigation.state.params.name,
          isECommerse: null,
          location: '',
          industries: [],
          values: [],
          interests: [],
          DOB: '',
          email: '',
          password: '',
        },
        showContinue: false,
        showLocation: props.navigation.state.params.isCreator
      }
    }

    callbackBnM = (data) => {
      this.setState({showLocation: data});
      if(data && this.state.currentState.isECommerse === null) this.setState({currentState: {...this.currentState, isECommerse: false}});
      if(data && this.state.currentState.isECommerse && this.state.currentState.location === '') this.setState({showContinue: false});
      if(!data) this.setState({currentState: {...this.state.currentState, location: ''}});
    } 

    callbackECom = (data) => {
      this.setState({ currentState: {...this.state.currentState, isECommerse: data}});
      if(data && !this.state.showLocation) this.setState({showContinue: true});
    }

    _textChanged(text){
      this.setState({currentState: {...this.state.currentState, location: text}, showContinue: true});
    }

    render() {
      const nextSurveyState = {...this.state.currentState};
      return (
      <View style={ styles.fullScreen } onResponderGrant={(event) => this.props.navigation.navigate('Survey4', {...nextSurveyState})} onStartShouldSetResponder={ (event) => [true|false]}>
          <LinearGradient colors={[ Colors.cobalt, Colors.violet ]}  style={styles.fullScreen} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
          <Header headerType='Survey' navigation={ this.props.navigation } />
          {nextSurveyState.isCreator ?
            <ProgressBar progress={2/10} /> :
            <ProgressBar progress={2/8} />
          }
          {!nextSurveyState.isCreator ?
            <IconButton svgName='BrickAndMortarImage' text='Brick & Mortar' callback={this.callbackBnM} /> : null
          }
          {!nextSurveyState.isCreator ?
            <IconButton svgName='ECommerceImage' text='E-Commerce' callback={this.callbackECom} /> : null 
          }
          {this.state.showLocation ?
            <TextFieldDarkBG placeholder='Location' onChangeText={(text) => this._textChanged(text)} secureTextEntry={false} /> : null
          }
          {(nextSurveyState.isECommerse && !this.state.showLocation) ||
           (this.state.showLocation && nextSurveyState.location !== '') ?
            <PrimaryButtonLarge text='Continue' onPress={() => this.props.navigation.navigate('Survey5', {...nextSurveyState})} /> : null
          }
        </ LinearGradient>
      </ View>
    )
  }
}