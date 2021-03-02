import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

const ListItem = ({ movies }) => {
	return (
		<>
			<Text style={styles.title}></Text>
			<FlatList
				data={movies}
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.movie}>
						<Text style={styles.title} numberOfLines={1}>
							{item.title}
						</Text>
						<Text style={styles.text}>{item.release}</Text>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.id}
			/>
		</>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	movie: {
		width: 400,
		marginVertical: 10,
		padding: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderWidth: 2,
		borderRadius: 5,
		borderColor: 'hsl(350, 81%, 49%)',
	},
	title: {
		flex: 1,
		fontSize: 18,
		color: '#fff',
	},
	text: {
		paddingLeft: 50,
		fontSize: 18,
		color: '#fff',
	},
});
