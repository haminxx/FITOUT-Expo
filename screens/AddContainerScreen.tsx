import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DESIGN } from '../components/DesignTokens';
import ScanScreen from './ScanScreen';
import GeneratedImageView from './GeneratedImageView';
import NewPostScreen from './NewPostScreen';

type AddMode = 'scan' | 'output' | 'post';

interface AddContainerScreenProps {
  navigation: any;
}

export default function AddContainerScreen({ navigation }: AddContainerScreenProps) {
  const [mode, setMode] = useState<AddMode>('scan');

  const renderContent = () => {
    switch (mode) {
      case 'scan':
        return <ScanScreen />;
      case 'output':
        return <GeneratedImageView navigation={navigation} />;
      case 'post':
        return <NewPostScreen />;
      default:
        return <ScanScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderContent()}</View>

      {/* Bottom strip: SCAN | OUTPUT | POST */}
      <View style={styles.bottomStrip}>
        <TouchableOpacity onPress={() => setMode('scan')} style={styles.stripItem}>
          <Text style={[styles.stripText, mode === 'scan' && styles.stripTextActive]}>SCAN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMode('output')} style={styles.stripItem}>
          <Text style={[styles.stripText, mode === 'output' && styles.stripTextActive]}>OUTPUT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMode('post')} style={styles.stripItem}>
          <Text style={[styles.stripText, mode === 'post' && styles.stripTextActive]}>POST</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: DESIGN.background },
  content: { flex: 1 },
  bottomStrip: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: DESIGN.background,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  stripItem: { paddingHorizontal: 24 },
  stripText: { color: DESIGN.textGray, fontSize: 14 },
  stripTextActive: { color: '#fff', fontWeight: '700' },
});
