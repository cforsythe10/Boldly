import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../Themes'
import styles from './IconButtonStyles';

export default StyleSheet.create({
    ...styles,
    cardContainer: {
        width: '90%',
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15
    },
    backgroundImage: {
        borderRadius: 10,
    },
    header: {
        marginTop: 30,
        marginLeft: 10,
        fontFamily: Fonts.type.header,
        color: Colors.white,
        fontSize: Fonts.size.h1,
        marginBottom: 20
    },
    description: {
        fontFamily: Fonts.type.header,
        color: Colors.white,
        marginLeft: 10,
        marginBottom: 10
    },
    otherCardInfo: {
        flexDirection: 'row',
        marginLeft: 10,
        width: '100%',
    },
    values: {
        position: 'absolute',
        bottom: 10,
        right: 30,
        width: '30%',
        flexDirection: 'row',
        alignContent: 'flex-end',
    },
    value: {
        height: 35,
        width: 35,
        borderRadius: 35/2,
        backgroundColor: 'white',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        borderRadius: 35 / 2 ,
        borderColor: Colors.charcoal,
        borderWidth: 1,
        marginLeft: 5
    },
});