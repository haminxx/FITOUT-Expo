import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DESIGN } from '../components/DesignTokens';

interface ExploreScreenProps {
  navigation: any;
}

export default function ExploreScreen({ navigation }: ExploreScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.getParent?.()?.navigate?.('Home')}>
          <Ionicons name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Explore</Text>
        <View style={{ width: 28 }} />
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={18} color={DESIGN.textGray} style={styles.searchIcon} />
        <Text style={styles.searchPlaceholder}>Search Fitout</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.grid}>
        {Array.from({ length: 12 }).map((_, i) => (
          <TouchableOpacity
            key={i}
            style={styles.gridItem}
            onPress={() => navigation.navigate('Suggest')}
            activeOpacity={0.8}
          />
        ))}
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
    paddingTop: 16,
    paddingBottom: 16,
  },
  title: { color: '#fff', fontSize: 18, fontWeight: '600' },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    backgroundColor: DESIGN.searchBar,
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  searchIcon: { marginRight: 12 },
  searchPlaceholder: { color: DESIGN.textGray, fontSize: 15 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 8,
    paddingBottom: 100,
  },
  gridItem: {
    width: '31%',
    aspectRatio: 1,
    backgroundColor: DESIGN.searchBar,
    borderRadius: 12,
  },
});
