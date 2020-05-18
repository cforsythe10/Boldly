import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';

import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient';
import { Fonts, Colors } from '../../Themes/'
import styles from './Styles/IGConnectStyles';
import { LoginButton, LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';


export default class IGConnect extends Component {
    constructor(props) {
        super(props);
        this.state = {
             buttonText: 'Connect your Instagram',
             loggedIn: false,


        }

        AccessToken.getCurrentAccessToken().then(
            (data) => {
                if (data !== null) {
                    //console.log(data);
                    this.setState({
                        buttonText: 'Disconnect your Instagram',
                        loggedIn: true
                    });
                }
                
            } //Refresh it every time
        );
        
    }

    static propTypes = {
        callback: PropTypes.func
    }

    

    

    callback = (stateJSON) => {
        //cleans and passes JSON data back to parent component
        //console.log(stateJSON);
        var cleanJSON = JSON.parse(JSON.stringify(stateJSON));
        delete cleanJSON.buttonText;
        delete cleanJSON.loggedIn;
        this.props.callback(
            cleanJSON
        )
        
    }
   //Create response callback.
   _responseInfoCallback = (error, result) => {
    if (error) {
      console.log('Error fetching data: ' + error);
    } else {
      //console.log('Success fetching data: ', result);
      this.setState(
          {
            username : result.data[0].instagram_business_account.username,
            follower_count : result.data[0].instagram_business_account.followers_count,  
            ig_id : result.data[0].instagram_business_account.id,
                
            },
          () => {

                //console.log(this.state);
                const mediaRequest = new GraphRequest(
            
                    '/' + this.state.ig_id + '/media?fields=id,media_url,comments_count,like_count',
                    null,
                    this._responseMediaCallback,
                );

                new GraphRequestManager().addRequest(mediaRequest).start();

          }
      );
    }
}
    
    _responseMediaCallback = (error, result) => {
        if (error) {
          console.log('Error fetching data: ' + error);
        } else {
          //console.log('Success fetching data: ', result);
          var totalEngagement = 0;
          var postCount;
          if (result.data.length < 10) {
              postCount = result.data.length;
          } else {
              postCount = 10;
          }

          for (var i = 0; i < result.data.length; i++) {
            totalEngagement += result.data[i].comments_count;
            totalEngagement += result.data[i].like_count;
           
            if (i >= 9) {
                break;
            }
          }
          
          this.setState(
              {
                  engagement_rate : this.calculateEngagementRate(totalEngagement,postCount,this.state.follower_count)

              }, () => {
                  this.setState(
                      {
                        media : result.data
                      },
                      () => {
                          //console.log('Full state: ', this.state);
                          this.callback(this.state);
                      }
                  );
              }
          );
          
        }
      }
    
  
  // Create a graph request asking for user information with a callback to handle the response.
  
    calculateEngagementRate = (totalEngagement,followerCount,postCount) => {
   
        var engagementRate = Math.round(10*((totalEngagement/followerCount)/postCount)*100)/10;
        return engagementRate;
    }

    handleFacebookLogin = () => {
        const infoRequest = new GraphRequest(
            '/me/accounts?fields=instagram_business_account{id,followers_count,username}',
            null,
            this._responseInfoCallback,
          );
        if (this.state.loggedIn) {
            LoginManager.logOut();
            this.setState(
                {
                    loggedIn : false,
                    buttonText : 'Connect your Instagram'
                }
            )
        } else {
            LoginManager.logInWithPermissions(['public_profile']).then(
            func = (result) => {
                if (result.isCancelled) {
                //console.log('Login cancelled')
                } else {
                //console.log('Login success with permissions: ' + result.grantedPermissions.toString());
                AccessToken.getCurrentAccessToken().then(
                    (data) => {
                        this.setState(
                            {
                                loggedIn : true,
                                buttonText : 'Disconnect your Instagram'
                            }
                        )
                        //console.log(data.accessToken.toString(),)
                        new GraphRequestManager().addRequest(infoRequest).start();
                        

                    }
                    )
                }
            },
            function (error) {
                console.log('Login fail with error: ' + error)
            }
            )
        }
      }

      updateStats = () => {

        const infoRequest = new GraphRequest(
            '/me/accounts?fields=instagram_business_account{id,followers_count,username}',
            null,
            this._responseInfoCallback,
          );

        new GraphRequestManager().addRequest(infoRequest).start();
    }



render() {

    

    

    const createMediaRequest = async() =>{
        
        const igId = await this.state.ig_id;
        return new GraphRequest(
            
            '/' + igId + '/media?fields=id,media_url,comments_count,like_count',
            null,
            this._responseMediaCallback,
        );
    }
    
    

    

    return (
        
        <TouchableOpacity
        onPress={this.handleFacebookLogin} style={this.state.loggedIn ? styles.logoutButton : styles.loginButton}
        ><LinearGradient colors={[ this.state.loggedIn ? Colors.charcoal35 : Colors.magenta, this.state.loggedIn ? Colors.charcoal35 : Colors.tangerine ]}  style={styles.buttonFill} useAngle={ true } angle={125} angleCenter={{x: 0.5, y: 0.5}} >
            
            <Image source={require('../../Images/Icons/instagram.png')} style={styles.icon}></Image>
            <Text style={styles.buttonText}>
                {this.state.buttonText}
            </Text>
            <View style={styles.emptySpace}></View>
            </LinearGradient>
        </TouchableOpacity>
                    
        
                        
  )
}

}