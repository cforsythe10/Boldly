import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'
import colors from './Colors'
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');
// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
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

    cardContainer: {
      justifyContent: 'center',
      marginVertical: Metrics.section,
      flex: 0.88,
      paddingVertical: 15.5,
      width: '88%',
      backgroundColor: Colors.white,
      shadowColor: '#E6E6E6',
      shadowOffset: { width: 4, height: 3},
      shadowRadius: 4,
      borderRadius: 15,
      elevation: 3
    },

    coverImage: {
      width: '100%',
        height: 70*vh,
        alignSelf: 'center',
        borderRadius: 15,
        overflow: 'hidden'
    },
    
    cardContentContainer: {
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      flex: 0.77,
      paddingHorizontal: '6%',
      textAlign: 'center'
    },

    profileSection: {
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignSelf: 'center',
      paddingHorizontal: 0,
      paddingVertical: 12,
    },
    
    centerContentContainer: {
      alignItems: 'center',
      flex: 3
    },

    container: {
      flex: 0.88,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent,
      paddingHorizontal: '12%'

    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.snow,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center'
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text
    },
    cerulean: {
      ...Fonts.style.h1,
      color: Colors.violet
    },
    screenTitle: {
      ...Fonts.style.h4,
      color: Colors.cobalt
    },
    surveyQuestion: {
      ...Fonts.style.h1,
      color: Colors.white
    },
    sh2: {
      fontFamily: Fonts.type.body,
      fontSize: Fonts.size.h3,
      color: Colors.charcoal
    },
    h3: {
      ...Fonts.style.h3,
      color: Colors.fog,
      marginTop: 4,
      
    },
    h5: {
      ...Fonts.style.h5,
      color: Colors.charcoal,
      marginTop: 4,
      marginBottom: 8,
      flex:0.88,
      paddingHorizontal: '6%',
    },
    sh3: {
      ...Fonts.style.sh3,
      color: Colors.fog,
      marginTop: 4,
    },
    h6: {
      ...Fonts.style.h6,
      textTransform: 'capitalize'
      
    },
    valueDisplay: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '8%',
      flex: 1,
      width: '100%',
      alignSelf: 'center',
      paddingVertical: 12,
      
    },
    body: {
      ...Fonts.style.body,
      color: colors.charcoal
    },
    fullScreen: {
      height: '100%',
      width: '100%',
      backgroundColor: Colors.cobalt
    },
    profileHeader: {
      height: 90,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignContent: 'space-between',
      paddingHorizontal: 35,
      marginBottom: 35,
      overflow: 'hidden',
    },
    scene: {
      flex: 1
    },
    buttonContainer: {
      flex: 3,
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '100%',
      paddingVertical: '17%'
    },
    valueButtonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '8%'
    },

    background: {
      backgroundColor: Colors.violet,
      height: '100%',
      flex: 1
    },
    fullScreen: {
      height: '100%',
      width: '100%',
      padding: 0,
      margin: 0
    },
    headerContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 88,
      paddingHorizontal: '11%',
      backgroundColor: Colors.fog,
      alignItems: 'center'
    },
    surveyHeaderContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 88,
      paddingHorizontal: '4%',
      backgroundColor: 'transparent',
      alignItems: 'center'
    },
    hamburgerMenu: {
      height: '100%',
      color: Colors.fog,
      width: '76%',
      margin: 0,
      
    },
    hamburgerMenuContainer: {
      padding: 24,
      paddingLeft: 40,
      paddingTop: 32,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    menuList: {
 
      paddingTop: 32,
      paddingBottom: 120,
      
    },
    menuItem: {
      ...Fonts.style.h2,
      color: Colors.fog,
      paddingBottom: 32
    },
    menuItemSmall: {
      ...Fonts.style.h4,
      color: Colors.fog,
      paddingBottom: 120,
      paddingTop: 32
    },
    rightIcon: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    fog: {
      backgroundColor: Colors.fog
    },
    violet: {
      backgroundColor: Colors.violet
    },
    profileScroll: {
      margin: '6%',
      borderRadius: 15,
      width: '88%',
      height: '92%',
      overflow: 'hidden',
    }
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center'
  },
  
  
}

export default ApplicationStyles