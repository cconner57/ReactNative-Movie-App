import React from 'react';
import Banner from './components/Banner';
import AppNavigator from './navigation/AppNavigator';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
	let [fontsLoaded] = useFonts({
		Jost: require('./assets/fonts/Jost-VariableFont_wght.ttf'),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<>
				<Banner />
				<AppNavigator />
			</>
		);
	}
}
