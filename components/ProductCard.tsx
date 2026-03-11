import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DESIGN } from './DesignTokens';
import type { MockProduct } from '../services/mockData';

interface ProductCardProps {
  product: MockProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder} />
      <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.source}>{product.source}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: DESIGN.card,
    borderRadius: 12,
    padding: 12,
    width: '47%',
    marginBottom: 16,
  },
  imagePlaceholder: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: DESIGN.textGray,
    opacity: 0.3,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: { fontSize: 14, fontWeight: '600', color: '#000', marginBottom: 4 },
  price: { fontSize: 16, fontWeight: '700', color: DESIGN.background, marginBottom: 2 },
  source: { fontSize: 12, color: DESIGN.textGray },
});
