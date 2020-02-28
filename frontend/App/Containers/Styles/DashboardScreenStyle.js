import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  text:{
  	marginTop: 8,
  	marginBottom: 8,
  	...Fonts.style.h4,
  	color: Colors.cobalt
  },
  insights:{
  	alignItems: 'center',
  	justifyContent: 'center',
  	flex: 2,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  messages:{
  	alignItems: 'center',
  	justifyContent: 'center',
  	flex: 8,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  campaigns:{
  	alignItems: 'center',
  	justifyContent: 'center',
	flex: 3,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  link:{
    ...Fonts.style.link,
    color: '#A8A8A8',
    paddingTop: '3%'
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '11%'
  },
  centerContentContainer: {
    alignItems: 'center',
    flex: 3
  },
  newUserContentBar: {
    borderTopWidth: 1,
    width: 160,
    borderColor: '#E1E1E1',
    alignItems: 'center',
    marginTop: '7%'
  },
  contentText: {
    ...Fonts.captions,
    color: Colors.charcoal,
    paddingVertical: '7%',
    textAlign: 'center'
  },
  darkText:{
    marginTop: 8,
    marginBottom: 8,
    ...Fonts.style.h4,
    color: Colors.charcoal
  },
  bulletPoints:{
    ...Fonts.captions,
    color: Colors.charcoal,
    paddingVertical: '1%',
    textAlign: 'center'
  },
  bulletContainer: {
    alignItems: 'flex-start',
    width:'75%'
  },
  buttonContainer: {
    paddingTop: '15%'
  }
})
