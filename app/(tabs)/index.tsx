import CustomButton from '@/components/custom-button';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer} />
      <Text style={styles.title}>All your favorites</Text>
      <Text style={styles.contentText}>Get all your loved foods in one once place, you just place the orer we do the rest</Text>
      <View style={styles.dotsContainer} />
      <View style={styles.buttonContainer}>
        <CustomButton title='Next' />
      </View>
      <View style={styles.linkContainer}>
        <Link style={styles.link} href={'/'}>Skip</Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingLeft: 24,
    paddingRight: 24,
  },
  imageContainer: {
    width: 240,
    height: 292,
    borderRadius: 12,
    backgroundColor: '#98A8B8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 63,
  },
  contentText: {
    lineHeight: 24,
    fontSize: 16,
    color: '#646982',
    marginTop: 18,
    textAlign: 'center',
  },
  dotsContainer: {
    width: 76,
    height: 10,
    backgroundColor: '#FF7622',
    marginTop: 32,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 69,
  },
  linkContainer: {
    marginTop: 16,
  },
  link: {
    color: '#646982',
  },
});
