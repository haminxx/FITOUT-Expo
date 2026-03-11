import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddScreen from '../screens/AddScreen';
import GeneratedImageView from '../screens/GeneratedImageView';
import ProductResultsScreen from '../screens/ProductResultsScreen';

const Stack = createNativeStackNavigator();

export default function AddStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#000000' },
      }}
    >
      <Stack.Screen name="Add" component={AddScreen} />
      <Stack.Screen name="GeneratedImage" component={GeneratedImageView} />
      <Stack.Screen name="ProductResults" component={ProductResultsScreen} />
    </Stack.Navigator>
  );
}
