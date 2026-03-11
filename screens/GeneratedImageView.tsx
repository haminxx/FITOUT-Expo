import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const DESIGN = { background: '#000000', accent: '#d7ff81', card: '#FFFFFF', textGray: '#636363' };

const TAGS = [
  { id: '1', label: 'Top', x: '20%', y: '25%' },
  { id: '2', label: 'Bottom', x: '55%', y: '60%' },
  { id: '3', label: 'Shoes', x: '75%', y: '85%' },
];

interface GeneratedImageViewProps {
  navigation: any;
}

export default function GeneratedImageView({ navigation }: GeneratedImageViewProps) {
  const onTagPress = (tagId: string) => {
    navigation.navigate('ProductResults', { tagId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.placeholderImage} />
        {TAGS.map((tag) => (
          <TouchableOpacity
            key={tag.id}
            style={[styles.tag, { left: tag.x, top: tag.y }]}
            onPress={() => onTagPress(tag.id)}
            activeOpacity={0.8}
          >
            <Text style={styles.tagIcon}>🛒</Text>
            <Text style={styles.tagLabel}>{tag.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.hint}>Tap a tag to find similar clothes online</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: DESIGN.background, padding: 16 },
  imageContainer: { flex: 1, position: 'relative' },
  placeholderImage: {
    width: '100%',
    aspectRatio: 3 / 4,
    backgroundColor: DESIGN.textGray,
    opacity: 0.4,
    borderRadius: 20,
  },
  tag: {
    position: 'absolute',
    backgroundColor: DESIGN.accent,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  tagIcon: { fontSize: 16 },
  tagLabel: { fontSize: 12, fontWeight: '700', color: '#000' },
  hint: { textAlign: 'center', color: DESIGN.textGray, fontSize: 12, marginTop: 16 },
});
