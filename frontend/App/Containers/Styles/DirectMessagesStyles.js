import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../Themes/';

export default StyleSheet.create({
	...ApplicationStyles.screen,

	directMessagesContainer: {
		flex: 9,
		minWidth: '100%'
	},
	messagesContainer: {
		alignItems: 'center',
		minWidth: '100%'
	},
	textInputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderColor: Colors.charcoal35,
		borderRadius: 15,
		borderWidth: 1,
		marginLeft: '6.5%',
		marginRight: '6.5%',
		marginBottom: '5.7%',
		paddingHorizontal: '4.8%'
	},
	optionWrapper: {
		height: 24,
		width: 24,
		borderRadius: 12,
		backgroundColor: Colors.violet,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: '1%'
	},
	plus: {
		color: Colors.fog
	},
	optionsContainer: {
		flexDirection: 'row'
	}
	

})