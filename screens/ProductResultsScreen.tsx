import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { DESIGN } from '../components/DesignTokens';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../services/mockData';

interface ProductResultsScreenProps {
  route?: { params?: { tagId?: string } };
}

export default function ProductResultsScreen({ route }: ProductResultsScreenProps) {
  const tagId = route?.params?.tagId;
  return (
    <View style={styles.container}>
      {/* Header bar */}
      <View style={styles.headerBar} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Large central image placeholder */}
        <View style={styles.centralImage} />

        {/* 3-column product grid */}
        <View style={styles.grid}>
          {MOCK_PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: DESIGN.background },
  headerBar: {
    height: 44,
    backgroundColor: DESIGN.searchBar,
    borderRadius: 12,
    marginHorizontal: 21,
    marginTop: 16,
    marginBottom: 20,
  },
  scrollContent: { paddingHorizontal: 21, paddingBottom: 100 },
  centralImage: {
    width: '100%',
    aspectRatio: 3 / 4,
    backgroundColor: DESIGN.searchBar,
    borderRadius: 20,
    marginBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
});
