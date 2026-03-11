import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DESIGN } from '../components/DesignTokens';

interface InboxScreenProps {
  navigation: any;
}

type InboxTab = 'activity' | 'fittos' | 'groups';

const MOCK_ACTIVITY = [
  { id: '1', user: 'z._.ryan', time: '1hr', text: 'started following you?!', type: 'follow' },
  { id: '2', user: 'z._.ryan', time: '1hr', text: 'and 1234 Fittos liked your post?!', type: 'like' },
  { id: '3', user: 'z._.ryan', time: '2hr', text: 'commented on your post?!', type: 'comment' },
  { id: '4', user: 'z._.ryan', time: '3hr', text: 'liked your story?!', type: 'story' },
  { id: '5', user: 'z._.ryan', time: '5hr', text: 'saved your items?!', type: 'save' },
];

export default function InboxScreen({ navigation }: InboxScreenProps) {
  const [tab, setTab] = useState<InboxTab>('activity');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Inbox</Text>
        <View style={{ width: 28 }} />
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={18} color={DESIGN.textGray} style={styles.searchIcon} />
        <Text style={styles.searchPlaceholder}>Search Fitout</Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setTab('activity')} style={styles.tab}>
          <Text style={[styles.tabText, tab === 'activity' && styles.tabTextActive]}>Activity</Text>
          {tab === 'activity' && <View style={styles.tabUnderline} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab('fittos')} style={styles.tab}>
          <Text style={[styles.tabText, tab === 'fittos' && styles.tabTextActive]}>Fittos</Text>
          {tab === 'fittos' && <View style={styles.tabUnderline} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab('groups')} style={styles.tab}>
          <Text style={[styles.tabText, tab === 'groups' && styles.tabTextActive]}>Groups</Text>
          {tab === 'groups' && <View style={styles.tabUnderline} />}
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.feed}>
        {tab === 'activity' &&
          MOCK_ACTIVITY.map((item) => (
            <View key={item.id} style={styles.feedItem}>
              <View style={styles.avatar} />
              <View style={styles.feedContent}>
                <Text style={styles.feedUser}>{item.user}</Text>
                <Text style={styles.feedTime}>{item.time}</Text>
                <Text style={styles.feedText}>{item.text}</Text>
              </View>
              <View style={styles.feedRight}>
                {item.type === 'follow' ? (
                  <TouchableOpacity style={styles.followBtn}>
                    <Ionicons name="add" size={20} color="#fff" />
                  </TouchableOpacity>
                ) : (
                  <View style={styles.thumb} />
                )}
              </View>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: DESIGN.background },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  title: { color: '#fff', fontSize: 18, fontWeight: '600' },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    backgroundColor: DESIGN.searchBar,
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  searchIcon: { marginRight: 12 },
  searchPlaceholder: { color: DESIGN.textGray, fontSize: 15 },
  tabs: { flexDirection: 'row', paddingHorizontal: 16, gap: 24, marginBottom: 20 },
  tab: { alignItems: 'center' },
  tabText: { color: DESIGN.textGray, fontSize: 14 },
  tabTextActive: { color: '#fff', fontWeight: '700' },
  tabUnderline: { width: '100%', height: 2, backgroundColor: '#fff', marginTop: 4 },
  feed: { paddingBottom: 40 },
  feedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: DESIGN.card,
    marginRight: 12,
  },
  feedContent: { flex: 1 },
  feedUser: { color: '#fff', fontWeight: '700', fontSize: 14 },
  feedTime: { color: DESIGN.textGray, fontSize: 12, marginTop: 2 },
  feedText: { color: '#fff', fontSize: 14, marginTop: 2 },
  feedRight: { marginLeft: 12 },
  followBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: DESIGN.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumb: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: DESIGN.searchBar,
  },
});
