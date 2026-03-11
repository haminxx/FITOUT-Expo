import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { DESIGN } from '../components/DesignTokens';

export default function ClosetScreen() {
  const [segment, setSegment] = useState<'items' | 'outfits'>('items');

  return (
    <View style={styles.container}>
      <View style={styles.segmented}>
        <Text
          onPress={() => setSegment('items')}
          style={[styles.segment, segment === 'items' && styles.segmentActive]}
        >
          Items
        </Text>
        <Text
          onPress={() => setSegment('outfits')}
          style={[styles.segment, segment === 'outfits' && styles.segmentActive]}
        >
          Outfits
        </Text>
      </View>
      {segment === 'items' ? (
        <ScrollView contentContainerStyle={styles.grid}>
          {Array.from({ length: 12 }).map((_, i) => (
            <View key={i} style={styles.gridItem} />
          ))}
        </ScrollView>
      ) : (
        <ScrollView contentContainerStyle={styles.grid}>
          {Array.from({ length: 6 }).map((_, i) => (
            <View key={i} style={styles.gridOutfit} />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: DESIGN.background },
  segmented: {
    flexDirection: 'row',
    padding: 16,
    gap: 8,
  },
  segment: { color: DESIGN.textGray, fontSize: 14 },
  segmentActive: { color: DESIGN.accent, fontWeight: '600' },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 20,
  },
  gridItem: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: DESIGN.card,
    borderRadius: 12,
  },
  gridOutfit: {
    width: '30%',
    height: 134,
    backgroundColor: DESIGN.card,
    borderRadius: 12,
  },
});
