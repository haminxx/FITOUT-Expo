import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DESIGN } from '../components/DesignTokens';

export default function NewPostScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Post</Text>
        <TouchableOpacity>
          <Text style={styles.headerNext}>Next</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Main image placeholder */}
        <View style={styles.mainImage}>
          <Text style={styles.placeholderText}>Image / Video</Text>
          <TouchableOpacity style={styles.expandBtn}>
            <Ionicons name="expand-outline" size={20} color={DESIGN.textGray} />
          </TouchableOpacity>
        </View>

        {/* Add outfit section */}
        <Text style={styles.sectionTitle}>Add outfit</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.outfitRow}>
          <TouchableOpacity style={styles.addOutfitBtn}>
            <Ionicons name="add" size={32} color="#fff" />
          </TouchableOpacity>
          {[1, 2, 3].map((i) => (
            <View key={i} style={styles.outfitItem}>
              <TouchableOpacity style={styles.removeBtn}>
                <Ionicons name="close" size={14} color="#fff" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: DESIGN.background },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: '600' },
  headerNext: { color: DESIGN.accent, fontSize: 16, fontWeight: '600' },
  scrollContent: { paddingBottom: 120 },
  mainImage: {
    aspectRatio: 1,
    backgroundColor: DESIGN.card,
    borderRadius: 20,
    marginHorizontal: 16,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: { color: DESIGN.textGray, fontSize: 14 },
  expandBtn: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: { color: '#fff', fontSize: 16, fontWeight: '600', marginHorizontal: 16, marginBottom: 12 },
  outfitRow: { flexDirection: 'row', paddingHorizontal: 16, gap: 12 },
  addOutfitBtn: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: DESIGN.searchBar,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outfitItem: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: DESIGN.card,
  },
  removeBtn: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
