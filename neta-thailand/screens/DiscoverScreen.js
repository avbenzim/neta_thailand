import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function DiscoverScreen() {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🔍 גלה עוד על תאילנד</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🏞️ אתרים מומלצים</Text>
        <TouchableOpacity style={styles.link} onPress={() => openLink('https://www.tourismthailand.org/')}>
          <Text style={styles.linkText}>אתר התיירות הרשמי של תאילנד</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🍲 מטבח תאילנדי</Text>
        <TouchableOpacity style={styles.link} onPress={() => openLink('https://www.eatingthaifood.com/')}>
          <Text style={styles.linkText}>מדריך לאוכל תאילנדי</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📚 לימוד שפה</Text>
        <TouchableOpacity style={styles.link} onPress={() => openLink('https://www.thaipod101.com/')}>
          <Text style={styles.linkText}>ThaiPod101 - לימוד תאית אונליין</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🧳 טיפים לטיול</Text>
        <TouchableOpacity style={styles.link} onPress={() => openLink('https://www.nomadicmatt.com/travel-guides/thailand-travel-tips/')}>
          <Text style={styles.linkText}>מדריך טיולים לתאילנד</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F8FF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4A90E2',
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  link: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});