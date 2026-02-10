import MainContainer from '@/components/main-container';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeViewScreen() {
  return (
    <MainContainer style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.officeIcon} />
        <View style={styles.topContentContainer}>
          <Text style={styles.topContentText}>Deliver to</Text>
          <Text style={styles.bottomContentText}>Halal Lab office</Text>
        </View>
        <View style={styles.basketIcon} />
      </View>
      <Text style={styles.greetingText}>Hey Halal, <strong>Good Afternoon!</strong></Text>
      <View style={styles.categoriesContainer}>
        <View style={styles.topCategoriesContainer}>
          <Text style={styles.topTextHeader}>All Categories</Text>
          <View style={styles.linkContainer}>
            <Text style={styles.topTextLink}>See All</Text>
            <View style={styles.linkIcon} />
          </View>
        </View>
        <ScrollView horizontal style={styles.bottomCategoriesContainer}>
          <View style={[styles.categoryItemContainer, styles.activeCategory]}>
            <View style={styles.categoryItemImage}></View>
            <Text style={styles.categoryText}>All</Text>
          </View>
          <View style={[styles.categoryItemContainer]}>
            <View style={styles.categoryItemImage}></View>
            <Text style={styles.categoryText}>All</Text>
          </View>
          <View style={[styles.categoryItemContainer, styles.activeCategory]}>
            <View style={styles.categoryItemImage}></View>
            <Text style={styles.categoryText}>All</Text>
          </View>
          <View style={[styles.categoryItemContainer, styles.activeCategory]}>
            <View style={styles.categoryItemImage}></View>
            <Text style={styles.categoryText}>All</Text>
          </View>
          <View style={[styles.categoryItemContainer, styles.activeCategory]}>
            <View style={styles.categoryItemImage}></View>
            <Text style={styles.categoryText}>All</Text>
          </View>
          <View style={[styles.categoryItemContainer, styles.activeCategory]}>
            <View style={styles.categoryItemImage}></View>
            <Text style={styles.categoryText}>All</Text>
          </View>
          <View style={[styles.categoryItemContainer, styles.activeCategory]}>
            <View style={styles.categoryItemImage}></View>
            <Text style={styles.categoryText}>All</Text>
          </View>
          <View style={[styles.categoryItemContainer, styles.activeCategory]}>
            <View style={styles.categoryItemImage}></View>
            <Text style={styles.categoryText}>All</Text>
          </View>
        </ScrollView>
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'flex-start',
  },
  officeIcon: {
    width: 45,
    height: 45,
    borderRadius: '50%',
    backgroundColor: '#181C2E',
  },
  topContentContainer: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignSelf: 'center',
    marginLeft: 18,
    marginRight: 18,
  },
  topContentText: {
    color: '#FC6E2A',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  bottomContentText: {
    color: '#676767',
    fontSize: 14,
  },
  basketIcon: {
    width: 45,
    height: 45,
    borderRadius: '50%',
    backgroundColor: '#181C2E',
  },
  greetingText: {
    fontSize: 16,
    color: '#1E1D1D',
    lineHeight: 26,
    marginTop: 24,
  },
  categoriesContainer: {
    display: 'flex',
    width: '100%',
    marginTop: 32,
  },
  topCategoriesContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  topTextHeader: {
    fontSize: 20,
    color: '#32343E',
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkIcon: {
    width: 5,
    height: 10,
    marginLeft: 10,
    backgroundColor: '#A0A5BA',
  },
  topTextLink: {
    fontSize: 16,
    color: '#333333',
  },
  bottomCategoriesContainer: {
    marginTop: 20,
    gap: 7,
  },
  categoryItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 39,
  },
  activeCategory: {
    backgroundColor: '#FFD27C',
  },
  categoryItemImage: {
    width: 44,
    height: 44,
    borderRadius: '50%',
    backgroundColor: '#98A8B8',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '700',
  },
});
