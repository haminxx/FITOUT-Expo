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
      <Text style={styles.title}>Similar clothes</Text>
      <Text style={styles.subtitle}>
        {tagId ? `Results for tag` : 'Exact or similar items by style, color, fit'}
      </Text>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
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
  container: { flex: 1, backgroundColor: DESIGN.background, padding: 16 },
  title: { fontSize: 20, fontWeight: '700', color: '#fff', marginBottom: 4 },
  subtitle: { fontSize: 14, color: DESIGN.textGray, marginBottom: 20 },
  scrollContent: { paddingBottom: 40 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
});
