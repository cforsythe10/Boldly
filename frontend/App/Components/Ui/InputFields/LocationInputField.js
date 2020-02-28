import React, { useState, useCallback} from 'react';
import { Image, YellowBox } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Colors from '../../../Themes/Colors'
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import { Fonts } from '../../../Themes';
// import style from '../Styles/LocationFieldStyles';

const googlePlacesApiKey = 'AIzaSyAaRpC7Y_nkSiJqEJr-84K_BcZEyDfLwy4';

const GooglePlacesAutocompleteStyles = {
	description: {
		fontWeight: 'bold',
		color: Colors.fog,
	},
	predefinedPlacesDescription: {
		color: Colors.fog
	},
	textInputContainer: {
		margin: 15,
		color: Colors.fog,
		font: Fonts.type.body,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderTopWidth: 0,
		borderBottomWidth: 1,
		borderBottomColor: Colors.fog,
		backgroundColor: Colors.transparent,
	},
	textInput: {
		color: Colors.fog,
		backgroundColor: Colors.transparent,
	},
	container: {
		backgroundColor: Colors.transparent,
	},
	listView: {
		marginLeft: 10,
		flex: 1,
		fontSize: 18,
	},
}

export default LocationInputField = ({styleType = 'dark', placeholder='Set your location', width=250}) => {
	const [text, changeText] = useState('')
	const [locations, modifyLocations] = useState([])
	
	YellowBox.ignoreWarnings([ 'VirtualizedLists should never be nested']);  // TODO: Remove when fixed
	return (
		<LinearGradient colors={[Colors.violet, Colors.magenta]} style={{flex: 1, width: width, borderRadius: 22.5}}>
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
					changeText(data);
				}}

				getDefaultValue={() => ''}

				query={{
					// available options: https://developers.google.com/places/web-service/autocomplete
					key: googlePlacesApiKey,
					language: 'en', // language of the results
					types: '(cities)' // default: 'geocode'
				}}

				styles={GooglePlacesAutocompleteStyles}
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

				debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
				renderRightButton={() => <Image source={require('../../../Images/set-location.png')} style={{width: 30, height: 30, margin: 5}} />}
    		/>
		</LinearGradient>
	)
}