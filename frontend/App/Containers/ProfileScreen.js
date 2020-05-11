import React, { Component } from 'react';
import { ScrollView, View, Text, KeyboardAvoidingView, Dimensions, ImageBackground } from 'react-native';
import { useStore } from 'react-redux';

import { Colors } from '../Themes';

import Header from '../Components/Ui/Header'

import BoldlyImage from '../Components/Ui/BoldlyImage'

import styles from './Styles/ProfileScreenStyle';

import LinearGradient from 'react-native-linear-gradient';

import ColoredIcon from '../Components/Ui/ColoredIcon'


import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TextArea from '../Components/Ui/TextArea';
import TextFieldTall from '../Components/Ui/TextFieldTall';

const FirstRoute = () => {
  const store = useStore();
  const account = store.getState().loginReducer.loginReducer.account;

  let values = account.values.split(',');
  let isCreator = account.birthday;

  return(
    <View style={[styles.scene, styles.Fog]} >
      <View style={styles.profileScroll}>
      <ScrollView style={styles.fullScreen} borderRadius={15} resizeMode="cover">
      
        <ImageBackground source={require('../Images/janessa.jpg')} style={styles.coverImage} >
            <LinearGradient colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.9)']} style={{flex: 1, justifyContent: 'flex-end'}}>
              <View style={styles.profileHeader}>
              <Text style={styles.h3}>
                { account.name }
              </Text>
              <Text style={styles.sh3}>
                { account.industry }
              </Text>
              <Text style={styles.sh3}>
                Instagram info here
              </Text>
              </View>
            </LinearGradient>
            
        </ImageBackground>
        <View style={styles.profileSection}>
          <Text style={styles.h5}>
            {isCreator ? "My Values" : "Our Values"}
          </Text>
          
          <View style={styles.valueDisplay}>
            <ColoredIcon svgName={values[0]} text={values[0]} />
            <ColoredIcon svgName={values[1]} text={values[1]} />
            <ColoredIcon svgName={values[2]} text={values[2]} />
          </View>
        </View>
        <View style={styles.profileSection}>
          <Text style={styles.h5}>
            { isCreator ? "About Me" : "About Us" }
          </Text>
          
          
          <View style={styles.mockTextArea}>
            <Text style={styles.body}> 
            Put about me here
            </Text>
          </View>

          <View style={styles.mockTextField}>
            <Text style={styles.link}>
            Put website here
            </Text>
          </View>
        </View>
        <View style={styles.profileSection}>
          <Text style={styles.h5}>
            { isCreator ? "My Location" : "Our Location" }
          </Text>
          <View style={styles.mockTextField}>
            <Text style={styles.body}>
            { account.location }
            </Text>
          </View>
        </View>
        <View style={styles.profileSection}>
          <Text style={styles.h5}>
            { isCreator ? "My Featured Posts" : "Our Featured Posts" }
          </Text>
          <ImageBackground source={require('../Images/Janessa1.jpg')} style={styles.postFeature} />
        </View>
      </ScrollView>
      </View>
    </View>
  );
}

const SecondRoute = () => {
  const store = useStore();
  const account = store.getState().loginReducer.loginReducer.account;

  let values = account.values.split(',');
  let isCreator = account.birthday;

  return(
    <View style={[styles.scene, { backgroundColor: '#f7f7f7' }]} >

  <View style={styles.profileScroll}>
      <ScrollView style={styles.fullScreen} borderRadius={15} resizeMode="cover">
      
        <ImageBackground source={require('../Images/janessa.jpg')} style={styles.profileImage} >
            
              
            
        </ImageBackground>
        <View style={styles.cardContentContainer}>
              <Text style={styles.h5}>
                { account.name }
              </Text>
              <Text style={styles.body}>
                Instagram goes here
              </Text>
              <Text style={styles.link}>
                Website goes here
              </Text>
                
              </View>
        <View style={styles.profileSection}>
          <Text style={styles.h5}>
            { isCreator ? "My Values" : "Our Values" }
          </Text>
          
          <View style={styles.valueDisplay}>
            <ColoredIcon svgName={ values[0] } text={ values[0] } />
            <ColoredIcon svgName={ values[1] } text={ values[1] } />
            <ColoredIcon svgName={ values[2] } text={ values[2] } />
          </View>
        </View>
        <View style={styles.profileSection}>
          <Text style={styles.h5}>
            { isCreator ? "My Industry" : "Our Industry" }
          </Text>
          <TextFieldTall placeholder={ account.industry } />
        </View>
        <View style={styles.profileSection}>
          <Text style={styles.h5}>
            { isCreator ? "About Me" : "About Us" }
          </Text>
          
          
          <TextArea />
          <TextFieldTall placeholder="Your website"/>
        </View>
        <View style={styles.profileSection}>
          <Text style={styles.h5}>
            { isCreator ? "My Location" : "Our Location" }
          </Text>
          <TextFieldTall placeholder={ account.location } />
        </View>

        <View style={styles.profileSection}>
          <Text style={styles.h5}>
            { isCreator ? "My Featured Posts" : "Our Featured Posts" }
          </Text>
          <View style={styles.postRow}>
          <ImageBackground source={require('../Images/Janessa1.jpg')} style={styles.postThumb} />
          <ImageBackground source={require('../Images/Janessa2.jpg')} style={styles.postThumb} />
          <ImageBackground source={require('../Images/Janessa3.jpg')} style={styles.postThumb} />
          </View>
          <View style={styles.postRow}>
          <ImageBackground source={require('../Images/Janessa4.jpg')} style={styles.postThumb} />
          <ImageBackground source={require('../Images/Janessa1.jpg')} style={styles.postThumb} />
          <View style={styles.blankThumb}>
            <Text style={styles.scene, styles.h3}>+</Text>
          </View>
          
          </View>
        </View>
        <View style={styles.cardContentContainer}>
          <Text style={styles.caption}>
              Hold and drag your photos to change the order
          </Text>
        </View>
        { isCreator ? _renderInterests() : null }
      </ScrollView>
      </View>
    </View>
  );
}

const _renderInterests = () => (
<View style={styles.profileSection}>
          <Text style={styles.h5}>
            My Interests
          </Text>
          <TextFieldTall placeholder="Add or edit interests"/>
          <View style={styles.mockTextField}>
            <Text style={styles.body}>
            Reiki Healing
            </Text>
          </View>
          <View style={styles.mockTextField}>
            <Text style={styles.body}>
            Tarot
            </Text>
          </View>
          <View style={styles.mockTextField}>
            <Text style={styles.body}>
            Meditation
            </Text>
          </View>
        </View>
)

// This is our placeholder component for the tabs
// This will be rendered when a tab isn't loaded yet
// You could also customize it to render different content depending on the route
const LazyPlaceholder = ({ route }) => (
  <View style={styles.scene}>
    <Text>Loading {route.title}…</Text>
  </View>
);

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.violet}
    style={{ backgroundColor: '#f7f7f7' }}
    activeColor= '#424242'
    inactiveColor= '#848484'
    labelStyle= {styles.h6}
  />
);

export default class ProfileScreen extends Component {
  
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'View' },
      { key: 'second', title: 'Edit' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderLazyPlaceholder = ({ route }) => <LazyPlaceholder route={route} />;
  
  render () {

   
  


    return (
      <View style={styles.fullScreen}>
	    	<Header headerType='MenuCheckTitle' title="Profile" navigation={this.props.navigation}/>
        <View style={{...styles.centerContentContainer, flex: 9}}>
          <TabView
            lazy
            navigationState={this.state}
            renderScene={SceneMap({
              first: FirstRoute,
              second: SecondRoute,
            })}
            renderTabBar={renderTabBar}
            renderLazyPlaceholder={this._renderLazyPlaceholder}
            onIndexChange={this._handleIndexChange}
            initialLayout={{ width: Dimensions.get('window').width }}
            style={styles.fullScreen}
          />
        </View>
        
      </View>
    )
  }
}