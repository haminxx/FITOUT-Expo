import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DESIGN } from '../components/DesignTokens';

interface ScanScreenProps {
  onOutput?: () => void;
  onPost?: () => void;
}

export default function ScanScreen({ onOutput, onPost }: ScanScreenProps) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="close" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={{ width: 28 }} />
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Main area - camera placeholder with plus */}
      <View style={styles.cameraArea}>
        <View style={styles.plusIcon}>
          <Ionicons name="add" size={48} color="#fff" />
        </View>
      </View>

      {/* Mid-bottom controls */}
      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlBtn}>
          <View style={styles.galleryThumb} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shutterBtn}>
          <Ionicons name="sparkles" size={36} color={DESIGN.accent} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlBtn}>
          <Ionicons name="camera-reverse-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: DESIGN.searchBar },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  cameraArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingBottom: 24,
    paddingTop: 16,
    backgroundColor: DESIGN.searchBar,
  },
  controlBtn: { padding: 8 },
  galleryThumb: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  shutterBtn: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
