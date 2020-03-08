import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'
import colors from './Colors'

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
    
    cardContentContainer: {
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      flex: 0.77,
      paddingHorizontal: '6%',
      textAlign: 'center'
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
    body: {
      ...Fonts.style.body,
      color: colors.charcoal
    },
    fullScreen: {
      height: '100%',
      width: '100%',
      backgroundColor: Colors.cobalt
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
      width: '100%'
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