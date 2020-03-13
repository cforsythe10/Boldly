import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  messagesContainer: {
  	flex: 9,
  	alignItems: 'center',
  	justifyContent: 'center',
    backgroundColor: Colors.charcoal10
  },
  messageContainer: {
  	height: 95,
  	minWidth: '100%',
  	borderColor: Colors.charcoal35,
  	borderBottomWidth: 1,
  	flexDirection: 'row',
    alignItems: 'center'
  },
  infoContainer: {
    position: 'relative',
    minWidth: '70%'
  },
  picContainer: {
    marginLeft: '8.4%',
    marginRight: '2.4%',
  },
  boldText: {
    ...Fonts.style.h6,
    //fontWeight: 'bold',
    color: Colors.charcoal
  },
  normalText: {
    ...Fonts.style.small,
    color: Colors.charcoal
  },
  timeBold: {
    ...Fonts.style.h6,
    //fontWeight: 'bold',
    color: Colors.charcoal,
    position: 'absolute',
    left: '70%'
  },
  timeNormal: {
    ...Fonts.style.small,
    color: Colors.charcoal,
    position: 'absolute',
    left: '70%'
  }
})
