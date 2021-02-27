import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Banner = () => {
	return (
		<View style={styles.header}>
			<StatusBar backgroundColor='hsl(229, 17%, 13%)' barStyle='light-content' />
			<Text style={styles.title}>Movie Atlas</Text>
			<Ionicons name='search' size={28} color='hsl(0,0%,100%)' />
		</View>
	);
};

export default Banner;

const styles = StyleSheet.create({
	header: {
		height: 100,
		paddingTop: 40,
		paddingHorizontal: 30,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		backgroundColor: 'hsl(229, 17%, 13%)',
	},
	title: {
		fontSize: 24,
		fontFamily: 'Jost',
		color: 'hsl(0,0%,100%)',
	},
});
