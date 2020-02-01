import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import IconButton from './App/Components/Ui/IconButton'



// Styles
import styles from './App/Containers/Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.background}>
        {/* <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' /> */}
        <ScrollView style={styles.background}>
          <View style={styles.centered}>
            {/* <Image source={Images.launch} style={styles.logo} /> */}
          </View>

          <View style={styles.section} >
            
            <Text style={styles.cerulean}>
              Welcome to boldly
            </Text>
            <Text style={styles.sh2}>
              Live your values. 
            </Text>
            <View style={styles.cardContainer}>
              
              <View style={styles.cardContentContainer}>
                <IconButton
                text='Brand'
                >
                  
                </IconButton>
                <Text style={styles.body}>
                Lorem ipsum dolor sit amet. Once the styles are configured, we can start building our component App. Because we only have a light and dark theme, we created a utility function.
                </Text>
              </View>
              
            </View>
          </View>

        </ScrollView>
      </View>
    )
  }
}
