import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../../Themes'

export const inputFieldDB = StyleSheet.create({
  TextInputEmpty: {
    color: Colors.fog,
    fontSize: 18,
    opacity: 0.5,
    fontFamily: Fonts.type.body
  },
  TextInputFilled: {
    color: Colors.fog,
    fontSize: 18,
    opacity: 0.5,
    fontFamily: Fonts.type.body
  },
  BorderStyle: {
    padding: 10, 
    paddingBottom: 1,
    width: 275, 
    height: 55,  
    borderRadius: 10,
    borderBottomWidth: 1, 
    borderColor: Colors.black,
    borderBottomColor: Colors.fog,
    opacity: 1.0
  }
});

export const inputFieldLB = StyleSheet.create({

});