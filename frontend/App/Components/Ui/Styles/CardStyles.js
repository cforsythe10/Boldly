import { StyleSheet } from 'react-native';
import { Fonts } from '../../../Themes'

export default StyleSheet.create({
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
        marginTop: 50,
        marginLeft: 10,
        fontFamily: Fonts.type.header,
        fontSize: Fonts.size.h1
    },
    description: {
        fontFamily: Fonts.type.header,
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
        flexDirection: 'row',
        alignContent: 'space-between',
    },
    value: {
        height: 35,
        width: 35,
        borderRadius: 35/2,
        backgroundColor: 'white',
        marginLeft: 10,
        fontFamily: Fonts.style.captions.fontFamily,
        fontSize: Fonts.style.captions.fontSize,
    }
});