import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../Themes'


export default StyleSheet.create({
  
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

  valueButtonContainer: {
    alignSelf: 'center',
    alignItems: 'center'
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
  }

})
