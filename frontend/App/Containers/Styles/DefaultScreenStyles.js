import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  bigText: {
  	...Fonts.style.h2,
  	color: Colors.fog
  },
  smallText: {
  	...Fonts.style.h5,
  	color: Colors.fog,
  	paddingVertical: '2.5%',
    paddingRight: '2%'
  },
  logoContainer: {
  	flex: 1,
  	height: '11%',
  	alignItems: 'center',
    justifyContent: 'center',
  	width: '100%',
  	backgroundColor: 'transparent',
  },
  contentContainer: {
  	flex: 4,
  	alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: '11%',
  	width: '100%',
  	backgroundColor: 'transparent',
  },
  loginContainer: {
  	flex: 1,
  	height: '11%',
  	flexDirection: 'row',
    justifyContent: 'center',
  	width: '100%',
  	backgroundColor: 'transparent',
  }
})
