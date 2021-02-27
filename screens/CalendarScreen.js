import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CalendarScreen = () => {
    return (
        <View style={styles.container}>
			<Text>Calendar Screen</Text>
		</View>
    )
}

export default CalendarScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});