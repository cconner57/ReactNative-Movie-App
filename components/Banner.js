import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Banner = () => {
	return (
		<View style={styles.header}>
			<StatusBar
				backgroundColor='hsl(229, 17%, 13%)'
				barStyle='light-content'
			/>
			<Image
				style={styles.logo}
				source={require('../assets/Movie-Atlas-Logo.png')}
			/>
			<Ionicons name='search' size={28} color='hsl(0,0%,100%)' />
		</View>
	);
};

export default Banner;

const styles = StyleSheet.create({
	header: {
		height: 100,
		paddingTop: 40,
		paddingLeft: 5,
		paddingRight: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: 'hsl(229, 17%, 13%)',
		shadowColor: 'hsl(0,0%,80%)',
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: .5,
		shadowRadius: 12,
		zIndex: 10,
	},
	logo: {
		height: 25,
		width: 220,
	},
});
