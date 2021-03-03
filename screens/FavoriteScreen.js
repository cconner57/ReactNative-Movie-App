import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FavoriteScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>No Favorites saved</Text>
		</View>
	);
};

export default FavoriteScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'hsl(229, 17%, 13%)',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#fff',
	},
});