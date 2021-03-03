import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ListItem = ({ movies }) => {
	return (
		<>
			<Text style={styles.title}></Text>
			<FlatList
				data={movies}
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.movie}>
						<View style={styles.container}>
							<Text style={styles.title} numberOfLines={1}>
								{item.title}
							</Text>
							<Text style={styles.text}>{item.release}</Text>
						</View>
						<View style={styles.container}>
							<Text style={styles.details}>{item.media}</Text>
							<Text style={styles.details}>
								<FontAwesome
									name={
										item.rating >= 1
											? 'star'
											: item.rating >= 0.5
											? 'star-half-full'
											: 'star-o'
									}
									size={20}
									color='hsl(50,100%,60%)'
								/>
								<FontAwesome
									name={
										item.rating >= 2
											? 'star'
											: item.rating >= 1.5
											? 'star-half-full'
											: 'star-o'
									}
									size={20}
									color='hsl(50,100%,60%)'
								/>
								<FontAwesome
									name={
										item.rating >= 3
											? 'star'
											: item.rating >= 2.5
											? 'star-half-full'
											: 'star-o'
									}
									size={20}
									color='hsl(50,100%,60%)'
								/>
								<FontAwesome
									name={
										item.rating >= 4
											? 'star'
											: item.rating >= 3.5
											? 'star-half-full'
											: 'star-o'
									}
									size={20}
									color='hsl(50,100%,60%)'
								/>
								<FontAwesome
									name={
										item.rating >= 5
											? 'star'
											: item.rating >= 4.5
											? 'star-half-full'
											: 'star-o'
									}
									size={20}
									color='hsl(50,100%,60%)'
								/>
							</Text>
						</View>
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
		justifyContent: 'space-between',
		borderWidth: 2,
		borderRadius: 5,
		borderColor: 'hsl(350, 81%, 49%)',
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	title: {
		flex: 1,
		fontSize: 18,
		color: 'hsl(0,0%,100%)',
	},
	text: {
		paddingLeft: 50,
		fontSize: 18,
		color: 'hsl(0,0%,100%)',
	},
	details: {
		marginTop: 10,
		fontSize: 18,
		color: 'hsl(0,0%,100%)',
	},
});
