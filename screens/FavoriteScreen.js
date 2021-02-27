import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FavoriteScreen = () => {
    return (
        <View style={styles.container}>
			<Text>Favorite Screen</Text>
		</View>
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});