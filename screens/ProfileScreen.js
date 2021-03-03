import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.profile}>Profile</Text>
			<View style={styles.settings}>
				<TouchableOpacity style={styles.textContainer}>
					<Ionicons style={styles.icon} name='md-person-outline' size={26} />
					<Text style={styles.text}>User Info</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.textContainer}>
					<Ionicons style={styles.icon} name='settings-outline' size={26} />
					<Text style={styles.text}>Preferences</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.textContainer}>
					<Ionicons
						style={styles.icon}
						name='notifications-outline'
						size={26}
					/>
					<Text style={styles.text}>Notifications</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.textContainer}>
					<Ionicons style={styles.icon} name='bulb-outline' size={26} />
					<Text style={styles.text}>FAQ</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 25,
		backgroundColor: 'hsl(229, 17%, 13%)',
	},
	profile: {
		paddingLeft: 15,
		fontSize: 24,
		color: 'hsl(0,0%,100%)',
		alignSelf: 'flex-start',
	},
	settings: {
		marginTop: 20,
		backgroundColor: 'hsl(0,0%,100%)',
	},
	textContainer: {
		borderBottomWidth: 1,
		borderColor: 'hsl(0,0%,100%)',
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		fontSize: 18,
		color: 'hsl(0,0%,0%)',
	},
	icon: {
		width: 40,
		margin: 5,
		paddingVertical: 5,
		paddingHorizontal: 7,
		overflow: 'hidden',
		color: 'white',
		backgroundColor: '#18b3f1',
		borderRadius: 10,
	},
});
