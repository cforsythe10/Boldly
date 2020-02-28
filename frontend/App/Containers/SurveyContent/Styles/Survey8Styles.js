import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors } from '../../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  text:{
  	...Fonts.style.h3,
  	color: Colors.fog,
    paddingTop: '9%',
    paddingBottom: '3%'
  },
  subtext: {
  	...Fonts.style.sh3,
  	color: Colors.fog,
    paddingBottom: '9%'
  },
  back:{
  	...Fonts.style.h2,
  	color: Colors.fog
  },
  textFieldFormatter: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  svgs: {
    paddingTop: '25%',
    paddingLeft: '3%'
  },
  contentContainer: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: '11%',
    width: '100%',
    backgroundColor: 'transparent',
  },
  subheaderContainer: {
    flex: 2,
    alignItems: 'center'
  },
  continueContainer: {
    flex: 1,
    height: '11%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent'
  }
})
