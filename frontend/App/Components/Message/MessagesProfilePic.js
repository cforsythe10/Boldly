import React, { Component } from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Styles/MessagesProfilePicStyles';

export default class MessagesProfilePic extends Component {
	constructor(props){
		super(props);
	}

	render() {
		let props = this.props;

		return (
			<View>
				<View style={styles.profilePic}>
					{props.source ? 
						<Image style={styles.image} resizeMode='contain' source={require('../../Images/temporaryProfilePic.png')} /> :
						<View style={styles.noProfilePic}></View>
					}
				</View>
				{props.newMessage ? 
					<View style={styles.notification}></View>:
					null
				}
			</View>
		)
	}
}