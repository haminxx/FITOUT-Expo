import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { DESIGN } from '../components/DesignTokens';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const H_PADDING = 21;
const CARD_WIDTH = width - H_PADDING * 2;

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerIcon}>◇</Text>
          <Text style={styles.logo}>FT</Text>
          <Text style={styles.headerIcon}>✉</Text>
        </View>

        {/* Search bar */}
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <Text style={styles.searchPlaceholder}>Search</Text>
        </View>

        {/* OOTD story carousel */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storyRow}
          style={styles.storyScroll}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <View key={i} style={styles.storyCard}>
              <Text style={styles.storyLabel}>ootd{'\n'}story</Text>
            </View>
          ))}
        </ScrollView>

        {/* Content cards */}
        <View style={styles.landscapeCard}>
          <View style={styles.userPill}>
            <Text style={styles.userPillIcon}>👤</Text>
            <Text style={styles.userPillText}>name</Text>
          </View>
          <View style={styles.likeButton}>
            <Text style={styles.heartIcon}>♡</Text>
          </View>
          <Text style={styles.aspectLabel}>Landscape{'\n'}(1.91:1)</Text>
        </View>

        {/* Pagination dots */}
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <View style={styles.portraitCard}>
          <View style={styles.userPill}>
            <Text style={styles.userPillIcon}>👤</Text>
            <Text style={styles.userPillText}>name</Text>
          </View>
          <View style={styles.likeButton}>
            <Text style={styles.heartIcon}>♡</Text>
          </View>
          <Text style={styles.aspectLabel}>Portrait{'\n'}(3:4)</Text>
          <View style={styles.likedPill}>
            <Text style={styles.heartIconSmall}>♥</Text>
            <Text style={styles.likedCount}>number</Text>
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DESIGN.background,
  },
  scroll: { flex: 1 },
  scrollContent: { paddingBottom: 100 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: H_PADDING,
    paddingBottom: 8,
  },
  headerIcon: { color: '#fff', fontSize: 20 },
  logo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    backgroundColor: DESIGN.searchBar,
    borderRadius: 20,
    marginHorizontal: H_PADDING,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  searchIcon: { marginRight: 12, fontSize: 16 },
  searchPlaceholder: { color: DESIGN.textGray, fontSize: 15 },
  storyScroll: { marginBottom: 12 },
  storyRow: {
    paddingHorizontal: H_PADDING,
    gap: 21,
  },
  storyCard: {
    width: 70,
    height: 98,
    backgroundColor: DESIGN.card,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: DESIGN.textGray,
    textAlign: 'center',
  },
  landscapeCard: {
    width: CARD_WIDTH,
    height: 191,
    backgroundColor: DESIGN.card,
    borderRadius: 20,
    marginHorizontal: H_PADDING,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    padding: 12,
  },
  userPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 30,
  },
  userPillIcon: { marginRight: 8, fontSize: 14 },
  userPillText: { color: '#fff', fontSize: 10, fontWeight: '600' },
  likeButton: { position: 'absolute', top: 12, right: 12 },
  heartIcon: { color: DESIGN.textGray, fontSize: 20 },
  heartIconSmall: { color: '#fff', fontSize: 12, marginRight: 6 },
  aspectLabel: {
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
    marginTop: -17,
    fontSize: 15,
    fontWeight: '700',
    color: DESIGN.textGray,
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 16,
  },
  dot: {
    width: 10,
    height: 3,
    borderRadius: 10,
    backgroundColor: DESIGN.paginationInactive,
  },
  dotActive: { backgroundColor: DESIGN.accent },
  portraitCard: {
    width: CARD_WIDTH,
    height: 456,
    backgroundColor: DESIGN.card,
    borderRadius: 20,
    marginHorizontal: H_PADDING,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    padding: 12,
  },
  likedPill: {
    position: 'absolute',
    bottom: 16,
    left: H_PADDING + 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 30,
  },
  likedCount: { color: '#fff', fontSize: 10, fontWeight: '600' },
  bottomSpacer: { height: 80 },
});
