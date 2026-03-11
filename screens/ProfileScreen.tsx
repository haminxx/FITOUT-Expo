import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DESIGN } from '../components/DesignTokens';

type ProfileTab = 'contents' | 'items' | 'outfits';

export default function ProfileScreen() {
  const [tab, setTab] = useState<ProfileTab>('contents');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="add-circle-outline" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="paper-plane-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Profile info */}
        <View style={styles.profileSection}>
          <View style={styles.avatar} />
          <Text style={styles.username}>@user</Text>
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1234</Text>
              <Text style={styles.statLabel}>Downloads</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1234</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1234</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
          <Text style={styles.bio}>XXXXXXXXXXXXXXXXXXXXXXXX</Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity onPress={() => setTab('contents')} style={styles.tab}>
            <Text style={[styles.tabText, tab === 'contents' && styles.tabTextActive]}>Contents</Text>
            {tab === 'contents' && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTab('items')} style={styles.tab}>
            <Text style={[styles.tabText, tab === 'items' && styles.tabTextActive]}>Items</Text>
            {tab === 'items' && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTab('outfits')} style={styles.tab}>
            <Text style={[styles.tabText, tab === 'outfits' && styles.tabTextActive]}>Outfits</Text>
            {tab === 'outfits' && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
        </View>

        {/* Content grid */}
        <View style={styles.grid}>
          {Array.from({ length: 9 }).map((_, i) => (
            <View key={i} style={styles.gridItem} />
          ))}
        </View>
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
    paddingBottom: 8,
  },
  headerRight: { flexDirection: 'row', gap: 16 },
  headerIcon: { padding: 4 },
  scrollContent: { paddingBottom: 100 },
  profileSection: { alignItems: 'center', paddingVertical: 24 },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: DESIGN.card,
    marginBottom: 12,
  },
  username: { color: '#fff', fontSize: 16, marginBottom: 16 },
  stats: { flexDirection: 'row', gap: 32, marginBottom: 16 },
  statItem: { alignItems: 'center' },
  statNumber: { color: '#fff', fontSize: 16, fontWeight: '700', marginBottom: 4 },
  statLabel: { color: DESIGN.textGray, fontSize: 12 },
  bio: { color: DESIGN.textGray, fontSize: 14, paddingHorizontal: 32 },
  tabs: { flexDirection: 'row', justifyContent: 'center', gap: 24, marginBottom: 20 },
  tab: { alignItems: 'center' },
  tabText: { color: DESIGN.textGray, fontSize: 14 },
  tabTextActive: { color: '#fff', fontWeight: '700' },
  tabUnderline: { width: '100%', height: 2, backgroundColor: '#fff', marginTop: 4 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 8,
  },
  gridItem: {
    width: '31%',
    aspectRatio: 1,
    backgroundColor: DESIGN.card,
    borderRadius: 12,
  },
});
