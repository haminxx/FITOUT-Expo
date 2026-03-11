import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import ExploreStack from './navigation/ExploreStack';
import AddStack from './navigation/AddStack';
import ClosetScreen from './screens/ClosetScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import InboxScreen from './screens/InboxScreen';

const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const DESIGN = {
  background: '#000000',
  card: '#FFFFFF',
  searchBar: '#212121',
  accent: '#d7ff81',
  textGray: '#636363',
};

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: DESIGN.background },
        tabBarActiveTintColor: DESIGN.accent,
        tabBarInactiveTintColor: DESIGN.textGray,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Text style={[styles.tabFt, { color }]}>FT</Text>,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStack}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="grid-outline" size={size ?? 24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddStack}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="add-circle" size={size ?? 24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Closet"
        component={ClosetScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="bag-outline" size={size ?? 24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size ?? 24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: DESIGN.background },
        }}
      >
        <RootStack.Screen name="MainTabs" component={MainTabs} />
        <RootStack.Screen name="Search" component={SearchScreen} />
        <RootStack.Screen name="Inbox" component={InboxScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabFt: { fontSize: 14, fontWeight: '700' },
});
