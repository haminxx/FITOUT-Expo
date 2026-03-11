import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DESIGN } from '../components/DesignTokens';

const CATEGORIES = ['All', 'Tops', 'Bottoms', 'Shoes', 'Accessories'];

export default function ClosetScreen() {
  const [segment, setSegment] = useState<'items' | 'outfits'>('items');
  const [category, setCategory] = useState('All');

  return (
    <View style={styles.container}>
      {/* Header: Items | Outfits */}
      <View style={styles.segmented}>
        <Text
          onPress={() => setSegment('items')}
          style={[styles.segment, segment === 'items' && styles.segmentActive]}
        >
          Items
        </Text>
        <View style={styles.segmentDivider} />
        <Text
          onPress={() => setSegment('outfits')}
          style={[styles.segment, segment === 'outfits' && styles.segmentActive]}
        >
          Outfits
        </Text>
      </View>

      {/* Category filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryRow}
        style={styles.categoryScroll}
      >
        {CATEGORIES.map((c) => (
          <TouchableOpacity
            key={c}
            onPress={() => setCategory(c)}
            style={[styles.categoryPill, category === c && styles.categoryPillActive]}
          >
            <Text style={[styles.categoryText, category === c && styles.categoryTextActive]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Grid */}
      {segment === 'items' ? (
        <ScrollView contentContainerStyle={styles.grid} showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.addItemBtn}>
            <Ionicons name="add" size={40} color="#fff" />
          </TouchableOpacity>
          {Array.from({ length: 14 }).map((_, i) => (
            <View key={i} style={styles.gridItem} />
          ))}
        </ScrollView>
      ) : (
        <ScrollView contentContainerStyle={styles.grid} showsVerticalScrollIndicator={false}>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  segment: { color: DESIGN.textGray, fontSize: 16 },
  segmentActive: { color: '#fff', fontWeight: '700', borderBottomWidth: 2, borderBottomColor: '#fff', paddingBottom: 4 },
  segmentDivider: { width: 1, height: 16, backgroundColor: DESIGN.textGray },
  categoryScroll: { marginBottom: 16 },
  categoryRow: { paddingHorizontal: 16, gap: 12, paddingBottom: 8 },
  categoryPill: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
  },
  categoryPillActive: { backgroundColor: DESIGN.card, borderColor: DESIGN.card },
  categoryText: { color: '#fff', fontSize: 14 },
  categoryTextActive: { color: '#000', fontWeight: '600' },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 8,
    paddingBottom: 100,
  },
  addItemBtn: {
    width: '31%',
    aspectRatio: 1,
    backgroundColor: DESIGN.searchBar,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    width: '31%',
    aspectRatio: 1,
    backgroundColor: DESIGN.card,
    borderRadius: 12,
  },
  gridOutfit: {
    width: '31%',
    height: 134,
    backgroundColor: DESIGN.card,
    borderRadius: 12,
  },
});
