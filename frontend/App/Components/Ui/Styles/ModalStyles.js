import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../../Themes'


export default StyleSheet.create({
    ...ApplicationStyles.screen,
  
  iconButton: {
    justifyContent: 'center',
    marginVertical: Metrics.section,
    width: '47.5%',
    height: 150,
    paddingVertical: 15.5,
    backgroundColor: Colors.white,
    shadowColor: '#C1C1C1',
    shadowOffset: { width: 4, height: 3},
    shadowRadius: 4,
    borderRadius: 22.5,
    elevation: 4,
    
  },

  valueButtonContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: '12%',
    paddingHorizontal: 0,
    margin: 0
  },

  calendarContainer: {
      width:'50%',
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 6,
    marginVertical: 8,
    height: 300
  },

  newUserContentBar: {
    borderTopWidth: 2,
    width: 160,
    borderColor: '#E1E1E1',
    alignItems: 'center',
    marginVertical: 8,
    marginBottom: 16
  },
  
  iconButtonContentContainer: {
    alignSelf: 'center',
    alignItems: 'center'
  },

  valueButton: {
    justifyContent: 'center',
    marginVertical: Metrics.section,
    width: 48,
    height: 48,
    paddingVertical: 15.5,
    backgroundColor: Colors.white,
    shadowColor: '#C1C1C1',
    shadowOffset: { width: 4, height: 3},
    shadowRadius: 4,
    borderRadius: 48 / 2 ,
    elevation: 4,
  },

 

  buttonText: {
      fontSize: Fonts.size.h6,
      ...Fonts.style.h6,
      color: Colors.charcoal,
      paddingTop: 16
  },

  buttonTextWhite: {
    fontSize: Fonts.size.h6,
    ...Fonts.style.h6,
    color: Colors.white,
    paddingTop: 16
  },

  greenIconButton: {
    justifyContent: 'center',
    marginVertical: Metrics.section,
    width: '47.5%',
    height: 150,
    paddingVertical: 15.5,
    shadowColor: '#C1C1C1',
    shadowOffset: { width: 4, height: 3},
    shadowRadius: 4,
    borderColor: Colors.pear65,
    borderWidth: 2,
    borderRadius: 22.5,
    elevation: 4,
    backgroundColor: Colors.pear
  },

  greenValueButton: {
    justifyContent: 'center',
    marginVertical: Metrics.section,
    width: 48,
    height: 48,
    paddingVertical: 15.5,
    backgroundColor: Colors.pear,
    shadowColor: '#C1C1C1',
    shadowOffset: { width: 4, height: 3},
    shadowRadius: 4,
    borderRadius: 48 / 2,
    borderColor: Colors.pear65,
    borderWidth: 2,
    elevation: 4,
  },
  profilePic: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    alignItems: 'center',
    marginRight: 5
  },
  noProfilePic: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: Colors.charcoal35,
  },
  image: { 
    flex: 1, 
    height: 30, 
    width: 30,
  },
  otherProfileContainer:{
    flexDirection: 'row',
    alignItems: 'center'
  }
})

