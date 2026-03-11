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
    width: '31%',
    backgroundColor: DESIGN.card,
    borderRadius: 12,
    padding: 8,
  },
  imagePlaceholder: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: DESIGN.textGray,
    opacity: 0.3,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: { fontSize: 12, fontWeight: '600', color: '#000', marginBottom: 2 },
  price: { fontSize: 13, fontWeight: '700', color: DESIGN.background, marginBottom: 2 },
  source: { fontSize: 10, color: DESIGN.textGray },
});
