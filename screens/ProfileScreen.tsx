import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DESIGN } from '../components/DesignTokens';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>👤</Text>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DESIGN.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: { fontSize: 60, marginBottom: 16 },
  title: { fontSize: 18, fontWeight: '600', color: '#fff' },
});
