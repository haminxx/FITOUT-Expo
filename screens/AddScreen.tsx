import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DESIGN } from '../components/DesignTokens';

export default function AddScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📷</Text>
      <Text style={styles.title}>SCAN</Text>
      <Text style={styles.subtitle}>Scan your outfit</Text>
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
  icon: { fontSize: 60, marginBottom: 24 },
  title: { fontSize: 15, fontWeight: '700', color: DESIGN.textGray, marginBottom: 8 },
  subtitle: { fontSize: 14, color: 'rgba(255,255,255,0.8)' },
});
