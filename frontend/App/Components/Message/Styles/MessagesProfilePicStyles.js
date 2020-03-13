import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from '../../../Themes';

export default StyleSheet.create({
	profilePic: {
		height: 48,
		width: 48,
		borderRadius: 24,
		position: 'relative',
		backgroundColor: Colors.white,
		overflow: 'hidden',
		alignItems: 'center'
	},
	noProfilePic: {
		height: 48,
		width: 48,
		borderRadius: 24,
		position: 'relative',
		backgroundColor: Colors.charcoal35
	},
	notification: {
		height: 15,
		width: 15,
		borderRadius: 7.5,
		backgroundColor: Colors.magenta,
		borderWidth: 2,
		borderColor: Colors.white,
		position: 'absolute',
		transform: [ {translateX: 35 } ]
	},
	image: { 
		flex: 1, 
		height: 55, 
		width: 55 
	}
})