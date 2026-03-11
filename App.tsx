import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import ClosetScreen from './screens/ClosetScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const DESIGN = {
  background: '#000000',
  card: '#FFFFFF',
  searchBar: '#212121',
  accent: '#d7ff81',
  textGray: '#636363',
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: DESIGN.background },
          tabBarActiveTintColor: DESIGN.accent,
          tabBarInactiveTintColor: DESIGN.textGray,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarIcon: ({ color }) => <Text style={[styles.tabIcon, { color }]}>⌂</Text> }}
        />
        <Tab.Screen
          name="Add"
          component={AddScreen}
          options={{ tabBarIcon: ({ color }) => <Text style={[styles.tabIcon, { color }]}>+</Text> }}
        />
        <Tab.Screen
          name="Closet"
          component={ClosetScreen}
          options={{ tabBarIcon: ({ color }) => <Text style={[styles.tabIcon, { color }]}>🛍</Text> }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ tabBarIcon: ({ color }) => <Text style={[styles.tabIcon, { color }]}>👤</Text> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabIcon: { fontSize: 20 },
});
