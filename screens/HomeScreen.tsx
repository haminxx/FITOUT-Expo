import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DESIGN } from '../components/DesignTokens';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const H_PADDING = 21;
const CARD_WIDTH = width - H_PADDING * 2;

type HomeStyle = 'style1' | 'style2' | 'style3' | 'style4';

interface HomeScreenProps {
  navigation?: any;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [homeStyle, setHomeStyle] = useState<HomeStyle>('style1');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const selectStyle = (style: HomeStyle) => {
    setHomeStyle(style);
    setDropdownVisible(false);
  };

  const goToSearch = () => navigation?.getParent?.()?.navigate?.('Search');
  const goToInbox = () => navigation?.getParent?.()?.navigate?.('Inbox');

  const renderHeaderLeft = () => {
    if (homeStyle === 'style1' || homeStyle === 'style2') {
      return <Ionicons name="flash-outline" size={22} color="#fff" />;
    }
    if (homeStyle === 'style3') {
      return (
        <TouchableOpacity onPress={goToSearch}>
          <Ionicons name="search-outline" size={22} color="#fff" />
        </TouchableOpacity>
      );
    }
    return <View style={{ width: 24 }} />;
  };

  const renderHeaderRight = () => {
    if (homeStyle === 'style3') {
      return (
        <TouchableOpacity onPress={goToInbox} style={styles.inboxBtn}>
          <Ionicons name="chatbubble-outline" size={22} color="#fff" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onPress={goToInbox}>
        <Ionicons name="chatbubble-outline" size={22} color="#fff" />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          {renderHeaderLeft()}
          <TouchableOpacity onPress={() => setDropdownVisible(true)}>
            <Text style={styles.logo}>{homeStyle === 'style3' ? 'F!TOUT' : 'FT'}</Text>
          </TouchableOpacity>
          {renderHeaderRight()}
        </View>

        {/* Style dropdown modal */}
        <Modal visible={dropdownVisible} transparent animationType="fade">
          <Pressable style={styles.dropdownOverlay} onPress={() => setDropdownVisible(false)}>
            <View style={styles.dropdown} onStartShouldSetResponder={() => true}>
              <TouchableOpacity style={styles.dropdownItem} onPress={() => selectStyle('style1')}>
                <Text style={styles.dropdownText}>Style 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem} onPress={() => selectStyle('style2')}>
                <Text style={styles.dropdownText}>Style 2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem} onPress={() => selectStyle('style3')}>
                <Text style={styles.dropdownText}>Style 3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem} onPress={() => selectStyle('style4')}>
                <Text style={styles.dropdownText}>Style 4</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Modal>

        {homeStyle === 'style1' ? (
          <>
            {/* Search bar */}
        <TouchableOpacity style={styles.searchBar} onPress={goToSearch} activeOpacity={0.8}>
          <Ionicons name="search-outline" size={18} color={DESIGN.textGray} style={styles.searchIcon} />
          <Text style={styles.searchPlaceholder}>Search</Text>
        </TouchableOpacity>

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
          </>
        ) : homeStyle === 'style2' ? (
          <>
            {/* Style 2: Shop Landscape, Cloth carousel, Reel Portrait */}
            <View style={styles.landscapeCard}>
              <View style={styles.userPill}>
                <Text style={styles.userPillIcon}>👤</Text>
                <Text style={styles.userPillText}>name</Text>
              </View>
              <View style={styles.style2Actions}>
                <Ionicons name="bag-outline" size={20} color={DESIGN.textGray} />
                <Ionicons name="heart-outline" size={20} color={DESIGN.textGray} />
              </View>
              <Text style={styles.aspectLabel}>Shop Landscape{'\n'}(1080x566)</Text>
            </View>
            <View style={styles.pagination}>
              <View style={[styles.dot, styles.dotActive]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.clothRow} style={styles.clothScroll}>
              {[1, 2, 3, 4].map((i) => (
                <View key={i} style={styles.clothCard}>
                  <Text style={styles.clothLabel}>Cloth{'\n'}(1:1)</Text>
                </View>
              ))}
            </ScrollView>
            <View style={styles.portraitCard}>
              <View style={styles.userPill}>
                <Text style={styles.userPillIcon}>👤</Text>
                <Text style={styles.userPillText}>name</Text>
              </View>
              <View style={styles.likeButton}>
                <Ionicons name="heart-outline" size={20} color={DESIGN.textGray} />
              </View>
              <Text style={styles.aspectLabel}>Reel Portrait{'\n'}(1080x1350)</Text>
              <View style={styles.viewButton}>
                <Ionicons name="play" size={14} color="#fff" />
                <Text style={styles.viewButtonText}>view</Text>
              </View>
            </View>
          </>
        ) : homeStyle === 'style3' ? (
          <>
            {/* Style 3: OOTD with camera first, feed card with Gamy Boy Fit, red FITOUT tag */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.storyRow} style={styles.storyScroll}>
              <TouchableOpacity style={styles.storyCardCamera}>
                <Ionicons name="camera-outline" size={28} color={DESIGN.textGray} />
              </TouchableOpacity>
              {['z._.ryan', 'z._.ryan123', 'z._.ryan1234'].map((u, i) => (
                <View key={i} style={styles.storyUser}>
                  <View style={styles.storyAvatar} />
                  <Text style={styles.storyUserName} numberOfLines={1}>{u}</Text>
                </View>
              ))}
            </ScrollView>
            <View style={styles.feedCard}>
              <View style={styles.feedCardTop}>
                <View style={styles.feedUserPill}>
                  <View style={styles.feedAvatar} />
                  <Text style={styles.feedUserName}>z._.ryan</Text>
                  <TouchableOpacity style={styles.feedFollowBtn}>
                    <Ionicons name="add" size={16} color="#fff" />
                  </TouchableOpacity>
                </View>
                <View style={styles.feedIcons}>
                  <View style={styles.feedIconItem}>
                    <Ionicons name="heart-outline" size={20} color={DESIGN.textGray} />
                    <Text style={styles.feedIconCount}>1234</Text>
                  </View>
                  <View style={styles.feedIconItem}>
                    <Ionicons name="download-outline" size={20} color={DESIGN.textGray} />
                    <Text style={styles.feedIconCount}>1234</Text>
                  </View>
                  <Ionicons name="share-outline" size={20} color={DESIGN.textGray} />
                </View>
              </View>
              <View style={styles.feedImagePlaceholder} />
              <Text style={styles.feedCaption}>Gamy Boy Fit</Text>
              <View style={styles.fitoutTag}>
                <Text style={styles.fitoutTagText}>FITOUT</Text>
              </View>
            </View>
          </>
        ) : (
          <>
            {/* Style 4: Story view with progress bar, product carousel, red FITOUT button */}
            <View style={styles.storyHeader}>
              <Text style={styles.storyTime}>1hr ago</Text>
              <Text style={styles.storyTitle}>Story time</Text>
              <TouchableOpacity>
                <Ionicons name="close" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.storyProgress}>
              <View style={[styles.storyProgressFill, { width: '33%' }]} />
              <View style={styles.storyProgressEmpty} />
              <View style={styles.storyProgressEmpty} />
            </View>
            <View style={styles.style4UserRow}>
              <View style={styles.style4Avatar} />
              <Text style={styles.style4UserName}>z_ryan</Text>
              <View style={styles.style4Icons}>
                <View style={styles.style4IconItem}>
                  <Ionicons name="heart-outline" size={18} color="#fff" />
                  <Text style={styles.style4IconCount}>1234</Text>
                </View>
                <View style={styles.style4IconItem}>
                  <Ionicons name="download-outline" size={18} color="#fff" />
                  <Text style={styles.style4IconCount}>1234</Text>
                </View>
                <Ionicons name="share-outline" size={18} color="#fff" />
              </View>
            </View>
            <View style={styles.style4MainImage} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.style4ProductRow}>
              {[1, 2, 3, 4].map((i) => (
                <View key={i} style={styles.style4ProductCard} />
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.style4FitoutBtn}>
              <Text style={styles.style4FitoutBtnText}>FITOUT</Text>
            </TouchableOpacity>
          </>
        )}

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
  dropdownOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 100, paddingHorizontal: H_PADDING, alignItems: 'flex-start' },
  dropdown: { backgroundColor: DESIGN.searchBar, borderRadius: 12, paddingVertical: 8, minWidth: 140 },
  dropdownItem: { paddingHorizontal: 20, paddingVertical: 12 },
  dropdownText: { color: '#fff', fontSize: 16 },
  style2Actions: { position: 'absolute', top: 12, right: 12, flexDirection: 'row', gap: 12 },
  clothScroll: { marginBottom: 16 },
  clothRow: { paddingHorizontal: H_PADDING, gap: 12 },
  clothCard: {
    width: 100,
    height: 100,
    backgroundColor: DESIGN.card,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clothLabel: { fontSize: 12, fontWeight: '700', color: DESIGN.textGray, textAlign: 'center' },
  viewButton: {
    position: 'absolute',
    bottom: 16,
    left: H_PADDING + 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 6,
  },
  viewButtonText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  inboxBtn: { position: 'relative' },
  badge: { position: 'absolute', top: -4, right: -8, backgroundColor: '#E53935', borderRadius: 10, minWidth: 18, height: 18, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 4 },
  badgeText: { color: '#fff', fontSize: 10, fontWeight: '700' },
  storyCardCamera: { width: 70, height: 98, backgroundColor: DESIGN.card, borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#fff' },
  storyUser: { alignItems: 'center', marginLeft: 16 },
  storyAvatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: DESIGN.searchBar, marginBottom: 4 },
  storyUserName: { color: '#fff', fontSize: 11, maxWidth: 70 },
  feedCard: { marginHorizontal: H_PADDING, marginBottom: 20, backgroundColor: DESIGN.card, borderRadius: 20, overflow: 'hidden', padding: 12 },
  feedCardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  feedUserPill: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 20 },
  feedAvatar: { width: 24, height: 24, borderRadius: 12, backgroundColor: DESIGN.searchBar, marginRight: 12 },
  feedUserName: { color: '#fff', fontSize: 12, fontWeight: '600', marginRight: 8 },
  feedFollowBtn: { width: 20, height: 20, borderRadius: 10, backgroundColor: DESIGN.accent, justifyContent: 'center', alignItems: 'center' },
  feedIcons: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  feedIconItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  feedIconCount: { color: DESIGN.textGray, fontSize: 12 },
  feedImagePlaceholder: { height: 200, backgroundColor: DESIGN.searchBar, borderRadius: 12, marginBottom: 12 },
  feedCaption: { color: '#fff', fontSize: 20, fontWeight: '700', marginBottom: 8 },
  fitoutTag: { alignSelf: 'flex-start', backgroundColor: '#E53935', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
  fitoutTagText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  storyHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: H_PADDING, marginBottom: 8 },
  storyTime: { color: DESIGN.textGray, fontSize: 12 },
  storyTitle: { color: '#fff', fontSize: 14, fontWeight: '600' },
  storyProgress: { flexDirection: 'row', paddingHorizontal: H_PADDING, marginBottom: 16, gap: 4 },
  storyProgressFill: { height: 3, backgroundColor: '#fff', borderRadius: 2 },
  storyProgressEmpty: { flex: 1, height: 3, backgroundColor: DESIGN.textGray, borderRadius: 2, opacity: 0.5 },
  style4UserRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: H_PADDING, marginBottom: 12 },
  style4Avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: DESIGN.card, marginRight: 10 },
  style4UserName: { color: '#fff', fontSize: 14, fontWeight: '600', flex: 1 },
  style4Icons: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  style4IconItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  style4IconCount: { color: '#fff', fontSize: 12 },
  style4MainImage: { width: CARD_WIDTH, height: 400, backgroundColor: DESIGN.searchBar, borderRadius: 20, marginHorizontal: H_PADDING, marginBottom: 16 },
  style4ProductRow: { paddingHorizontal: H_PADDING, gap: 12, paddingBottom: 16 },
  style4ProductCard: { width: 80, height: 80, borderRadius: 12, backgroundColor: DESIGN.card },
  style4FitoutBtn: { backgroundColor: '#E53935', marginHorizontal: H_PADDING, paddingVertical: 16, borderRadius: 12, alignItems: 'center' },
  style4FitoutBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
