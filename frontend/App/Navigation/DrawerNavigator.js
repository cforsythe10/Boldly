import React from 'react';
import { View } from 'react-native';
import { DrawerItems } from 'react-navigation';

import DrawerNavigatorStyles from './Styles/DrawerNavigatorStyles.js'

export default DrawerNavigator = (props) => (
	<View style={[DrawerNavigatorStyles.container]}>
		<DrawerItems
			labelStyle = { DrawerNavigatorStyles.text }
			{...props}
		/>
	</ View>
);