import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ListItem from '../components/ListItem';

import MovieData from '../data/events.json';

const CalendarScreen = () => {
	const [toggle, setToggle] = useState('');

	return (
		<View style={styles.container}>
			<View style={styles.heading}>
				<TouchableOpacity onPress={() => setToggle('january')}>
					<Text style={styles.month}>January</Text>
				</TouchableOpacity>
				{toggle === 'january' && <ListItem movies={MovieData.january} />}
			</View>
			<TouchableOpacity onPress={() => setToggle(!toggle)}>
				<Text style={styles.month}>Febuary</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setToggle(!toggle)}>
				<Text style={styles.month}>March</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CalendarScreen;

const styles = StyleSheet.create({
	container: {
		paddingTop: 30,
		flex: 1,
		backgroundColor: 'hsl(229, 17%, 13%)',
		alignItems: 'center',
	},
	heading: {
		alignItems: 'center',
	},
	month: {
		fontSize: 32,
		color: 'hsl(0,0%,100%)',
	},
});
