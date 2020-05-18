import React, { useState, useCallback} from 'react';
import { Image, YellowBox, TouchableHighlight, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Colors from '../../../Themes/Colors'
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import { Fonts } from '../../../Themes';
// import style from '../Styles/LocationFieldStyles';

const googlePlacesApiKey = 'AIzaSyAaRpC7Y_nkSiJqEJr-84K_BcZEyDfLwy4';

const GooglePlacesAutocompleteStylesLight = {
	description: {
		fontFamily: Fonts.type.link,
		fontSize: 16,
		color: Colors.charcoal65,
		flex: 1,
		opacity: 0.75,
		zIndex: 1,
	},
	predefinedPlacesDescription: {
		color: Colors.fog
	},
	textInputContainer: {
		color: Colors.fog,
		font: Fonts.type.body,
		fontSize: 18,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderTopWidth: 0,
		borderBottomWidth: 1.5,
		borderBottomColor: Colors.fog,
		backgroundColor: Colors.transparent,
	},
	textInput: {
		backgroundColor: Colors.transparent,
		color: Colors.charcoal65,
	},
	container: {
		width: '95%',
	},
	listView: {
		flex: 1,
		bottom: 15,
		width: '90%',
		paddingTop: 5,
		paddingBottom: 5,
		backgroundColor: 'rgba(247, 247, 247, 0.1)',
		borderBottomLeftRadius: 22.5,
		borderBottomRightRadius: 22.5,
	},
	separator: {
		height: 0,
	},
	row: {
		flex: 1,
		left: 15,
		padding: 0,
		height: 22,
		opacity: 1,
		zIndex: 1,
	}
}

const GooglePlacesAutocompleteStyles = {
	description: {
		fontFamily: Fonts.type.link,
		fontSize: 16,
		color: Colors.fog,
		flex: 1,
		opacity: 0.75,
		zIndex: 1,
	},
	predefinedPlacesDescription: {
		color: Colors.fog
	},
	textInputContainer: {
		color: Colors.fog,
		font: Fonts.type.body,
		fontSize: 18,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderTopWidth: 0,
		borderBottomWidth: 1.5,
		borderBottomColor: Colors.fog,
		backgroundColor: Colors.transparent,
	},
	textInput: {
		backgroundColor: Colors.transparent,
		color: Colors.fog,
	},
	container: {
		width: '95%',
	},
	listView: {
		flex: 1,
		bottom: 15,
		width: '90%',
		left: 15,
		paddingTop: 5,
		paddingBottom: 5,
		backgroundColor: 'rgba(247, 247, 247, 0.1)',
		borderBottomLeftRadius: 22.5,
		borderBottomRightRadius: 22.5,
	},
	separator: {
		height: 0,
	},
	row: {
		flex: 1,
		left: 15,
		padding: 0,
		height: 22,
		opacity: 1,
		zIndex: 1,
	}
}

export default LocationInputField = ({styleType = 'dark', placeholder='Set your location', width=300, darkBg=true, callback}) => {
	const [text, changeText] = useState('')
	const [locations, modifyLocations] = useState([])
	
	let textColor = Colors.charcoal65;
	if(darkBg) textColor = Colors.fog;

	YellowBox.ignoreWarnings([ 'VirtualizedLists should never be nested']);  // TODO: Remove when fixed
	return (
		<GooglePlacesAutocomplete
			placeholder= {placeholder}
			minLength={2} // minimum length of text to search
			autoFocus={false}
			returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
			keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
			listViewDisplayed='auto'    // true/false/undefined
			fetchDetails={true}
			enablePoweredByContainer={false}
			renderDescription={row => row.description} // custom description render
			onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
				callback(data);
				changeText(data);
				return;
			}}
			listUnderlayColor={'rgba(247, 247, 247, 0.75)'}

			textInputProps={{
				clearButtonMode: 'never',
				placeholderTextColor: textColor,
			}}

			getDefaultValue={() => ''}

			query={{
				// available options: https://developers.google.com/places/web-service/autocomplete
				key: googlePlacesApiKey,
				language: 'en', // language of the results
				types: '(cities)' // default: 'geocode'
			}}

			styles={darkBg ? GooglePlacesAutocompleteStyles : GooglePlacesAutocompleteStylesLight}
			nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
			GoogleReverseGeocodingQuery={{
				// available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
			}}
			GooglePlacesSearchQuery={{
				// available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
				rankby: 'distance',
				type: 'cafe'
			}}
			
			GooglePlacesDetailsQuery={{
				// available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
				fields: 'formatted_address',
			}}

			filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

			debounce={300} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
			renderRightButton={() => {if(darkBg) <Image source={require('../../../Images/set-location.png')} style={{width: 25, height: 25, margin: 6, marginBottom: 10}} />}}
		/>
	)
}