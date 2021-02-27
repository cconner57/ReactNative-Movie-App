import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen';

const AppNavigator = () => {
	const Tab = createBottomTabNavigator();

	return (
		<NavigationContainer>
			<Tab.Navigator
				tabBarOptions={{
					showLabel: false,
					activeTintColor: 'hsl(0,0%,100%)',
					inactiveTintColor: 'hsl(0,0%,100%)',
					activeBackgroundColor: 'hsl(350, 78%, 37%)',
					style: {
						paddingTop: 12,
						paddingHorizontal: 15,
						backgroundColor: 'hsl(350, 81%, 49%)',
					},
					tabStyle: {
						height: 40,
						maxWidth: 65,
						marginHorizontal: 18,
						borderRadius: 15,
					},
				}}>
				<Tab.Screen
					name='Home'
					component={HomeScreen}
					options={{
						tabBarIcon: ({ size, color }) => (
							<Ionicons name='home' size={size} color={color} />
						),
					}}
				/>
				<Tab.Screen
					name='Calendar'
					component={CalendarScreen}
					options={{
						tabBarIcon: ({ size, color }) => (
							<Ionicons name='calendar' size={size} color={color} />
						),
					}}
				/>
				<Tab.Screen
					name='Favorite'
					component={FavoriteScreen}
					options={{
						tabBarIcon: ({ size, color }) => (
							<Ionicons name='heart' size={size} color={color} />
						),
					}}
				/>
				<Tab.Screen
					name='Profile'
					component={ProfileScreen}
					options={{
						tabBarIcon: ({ size, color }) => (
							<Ionicons name='person-circle' size={size} color={color} />
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
