import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DESIGN } from '../components/DesignTokens';

interface SearchScreenProps {
  navigation: any;
}

const RECENT_TAGS = ['fashion', 'outfit', 'style'];

export default function SearchScreen({ navigation }: SearchScreenProps) {
  const [recentSearches, setRecentSearches] = useState(RECENT_TAGS);

  const removeTag = (tag: string) => {
    setRecentSearches((prev) => prev.filter((t) => t !== tag));
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Explore</Text>
        <View style={{ width: 28 }} />
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color={DESIGN.textGray} style={styles.searchIcon} />
        <TextInput
          placeholder="Search Fitout"
          placeholderTextColor={DESIGN.textGray}
          style={styles.searchInput}
          autoFocus
        />
      </View>

      <View style={styles.recentSection}>
        <Text style={styles.recentTitle}>Recent searches</Text>
        <TouchableOpacity>
          <Ionicons name="chevron-forward" size={20} color={DESIGN.textGray} />
        </TouchableOpacity>
      </View>
      <View style={styles.tagsRow}>
        {recentSearches.map((tag) => (
          <View key={tag} style={styles.tagPill}>
            <Text style={styles.tagText}>{tag}</Text>
            <TouchableOpacity onPress={() => removeTag(tag)} style={styles.tagRemove}>
              <Ionicons name="close" size={14} color="#fff" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
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
    paddingBottom: 20,
  },
  title: { color: '#fff', fontSize: 18, fontWeight: '600' },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    backgroundColor: DESIGN.searchBar,
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  searchIcon: { marginRight: 12 },
  searchInput: { flex: 1, color: '#fff', fontSize: 16 },
  recentSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  recentTitle: { color: '#fff', fontSize: 16, fontWeight: '600' },
  tagsRow: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 16, gap: 12 },
  tagPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 16,
    paddingRight: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: DESIGN.searchBar,
  },
  tagText: { color: '#fff', fontSize: 14, marginRight: 8 },
  tagRemove: { padding: 4 },
});

