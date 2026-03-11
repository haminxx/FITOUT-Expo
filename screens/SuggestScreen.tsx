import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DESIGN } from '../components/DesignTokens';

interface SuggestScreenProps {
  navigation: any;
}

const HASHTAGS = ['#fashion', '#outfit', '#style', '#ootd', '#fit'];
const PRODUCT_COUNT = 4;

export default function SuggestScreen({ navigation }: SuggestScreenProps) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Explore</Text>
        <View style={styles.headerRight}>
          <View style={styles.userPill}>
            <View style={styles.avatarSmall} />
            <Text style={styles.userName}>z._.ryan</Text>
            <TouchableOpacity style={styles.followBtn}>
              <Ionicons name="add" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.iconsRow}>
            <Ionicons name="heart-outline" size={22} color="#fff" />
            <Text style={styles.iconCount}>1234</Text>
          </View>
          <View style={styles.iconsRow}>
            <Ionicons name="download-outline" size={22} color="#fff" />
            <Text style={styles.iconCount}>1234</Text>
          </View>
          <Ionicons name="share-outline" size={22} color="#fff" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.mainImage} />
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <View style={styles.details}>
          <Text style={styles.title}>Gamy Boy Fit</Text>
          <View style={styles.descRow}>
            <Text style={styles.description} numberOfLines={2}>
              I love fashion and I love clothing... more
            </Text>
            <TouchableOpacity style={styles.fitoutBtn}>
              <Text style={styles.fitoutBtnText}>Fitout</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.timestamp}>1 hour ago</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.hashtagRow}>
          {HASHTAGS.map((tag) => (
            <View key={tag} style={styles.hashtag}>
              <Text style={styles.hashtagText}>{tag}</Text>
            </View>
          ))}
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productRow}>
          {Array.from({ length: PRODUCT_COUNT }).map((_, i) => (
            <View key={i} style={styles.productCard} />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: DESIGN.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: '600', marginRight: 12 },
  headerRight: { flex: 1, flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 12 },
  userPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 8,
  },
  avatarSmall: { width: 24, height: 24, borderRadius: 12, backgroundColor: DESIGN.card, marginRight: 6 },
  userName: { color: '#fff', fontSize: 12, fontWeight: '600', marginRight: 4 },
  followBtn: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: DESIGN.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  iconCount: { color: '#fff', fontSize: 12 },
  scrollContent: { paddingBottom: 100 },
  mainImage: {
    width: '100%',
    aspectRatio: 3 / 4,
    backgroundColor: DESIGN.searchBar,
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  pagination: { flexDirection: 'row', justifyContent: 'center', gap: 6, marginBottom: 16 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: DESIGN.textGray },
  dotActive: { backgroundColor: '#fff' },
  details: { paddingHorizontal: 16, marginBottom: 16 },
  title: { color: '#fff', fontSize: 20, fontWeight: '700', marginBottom: 8 },
  descRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 8 },
  description: { flex: 1, color: '#fff', fontSize: 14 },
  fitoutBtn: {
    backgroundColor: '#E53935',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 12,
  },
  fitoutBtnText: { color: '#fff', fontSize: 14, fontWeight: '700' },
  timestamp: { color: DESIGN.textGray, fontSize: 12 },
  hashtagRow: { flexDirection: 'row', paddingHorizontal: 16, gap: 12, marginBottom: 20 },
  hashtag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
  },
  hashtagText: { color: '#fff', fontSize: 14 },
  productRow: { flexDirection: 'row', paddingHorizontal: 16, gap: 12, paddingBottom: 24 },
  productCard: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: DESIGN.card,
  },
});
