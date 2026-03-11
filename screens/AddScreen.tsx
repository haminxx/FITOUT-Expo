import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DESIGN } from '../components/DesignTokens';

interface AddScreenProps {
  navigation?: any;
}

export default function AddScreen({ navigation }: AddScreenProps) {
  const [hasImage, setHasImage] = useState(false);

  const handleUpload = () => {
    setHasImage(true);
  };

  const handleGenerate = () => {
    if (navigation) navigation.navigate('GeneratedImage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload your photo</Text>
      <Text style={styles.subtitle}>Mirror shot, selfie, or friend's photo</Text>

      <TouchableOpacity style={styles.uploadArea} onPress={handleUpload}>
        <Text style={styles.uploadIcon}>{hasImage ? '✓' : '📷'}</Text>
        <Text style={styles.uploadText}>
          {hasImage ? 'Image selected' : 'Tap to select image'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.generateBtn, !hasImage && styles.generateBtnDisabled]}
        onPress={handleGenerate}
        disabled={!hasImage}
      >
        <Text style={styles.generateBtnText}>Generate</Text>
      </TouchableOpacity>

      <Text style={styles.hint}>AI will apply clothes style (Banana.dev)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DESIGN.background,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontSize: 20, fontWeight: '700', color: '#fff', marginBottom: 8 },
  subtitle: { fontSize: 14, color: DESIGN.textGray, marginBottom: 32 },
  uploadArea: {
    width: '100%',
    aspectRatio: 3 / 4,
    maxHeight: 320,
    backgroundColor: DESIGN.searchBar,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  uploadIcon: { fontSize: 48, marginBottom: 12 },
  uploadText: { fontSize: 14, color: DESIGN.textGray },
  generateBtn: {
    backgroundColor: DESIGN.accent,
    paddingHorizontal: 48,
    paddingVertical: 14,
    borderRadius: 30,
    marginBottom: 16,
  },
  generateBtnDisabled: { opacity: 0.5 },
  generateBtnText: { fontSize: 16, fontWeight: '700', color: '#000' },
  hint: { fontSize: 12, color: DESIGN.textGray },
});
