import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';

export default function KrabiScreen() {
  const openHotelWebsite = () => {
    Linking.openURL('https://www.sofitelkrabiphokeethra.com/gallery/');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>קראבי (Krabi)</Text>
      <Image
        source={{ uri: 'https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
        style={styles.mainImage}
      />
      <Text style={styles.description}>
        קראבי היא פרובינציה בדרום תאילנד, המפורסמת בנופי החוף המרהיבים שלה, הכוללים צוקי גיר תלולים, חופים טרופיים ואיים קסומים. זהו יעד פופולרי למטיילים המחפשים שילוב של הרפתקאות, נופים עוצרי נשימה ותרבות מקומית עשירה.
      </Text>
      <TouchableOpacity style={styles.button} onPress={openHotelWebsite}>
        <Text style={styles.buttonText}>🏨 המלון שלנו</Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>אטרקציות מרכזיות:</Text>
      <View style={styles.attractionItem}>
        <Text style={styles.attractionTitle}>חוף ריילי (Railay Beach)</Text>
        <Text style={styles.attractionDescription}>חוף מדהים המוקף צוקי גיר, מושלם לטיפוס וקיאקים</Text>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' }}
          style={styles.attractionImage}
        />
      </View>
      <View style={styles.attractionItem}>
        <Text style={styles.attractionTitle}>ארבעת האיים (Four Islands)</Text>
        <Text style={styles.attractionDescription}>טיול סירות לאיים טרופיים קסומים עם חופים לבנים ומים צלולים</Text>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1490077476659-095159692ab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' }}
          style={styles.attractionImage}
        />
      </View>
      <View style={styles.attractionItem}>
        <Text style={styles.attractionTitle}>מעיינות חמים אמרלד פול</Text>
        <Text style={styles.attractionDescription}>בריכות טבעיות בג'ונגל עם מים חמים ומינרלים</Text>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' }}
          style={styles.attractionImage}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#333',
  },
  mainImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginHorizontal: 16,
    marginBottom: 16,
    color: '#444',
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#E76F51',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 16,
    color: '#333',
    textAlign: 'right',
  },
  attractionItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
  },
  attractionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#264653',
    textAlign: 'right',
  },
  attractionDescription: {
    fontSize: 14,
    marginBottom: 8,
    color: '#444',
    textAlign: 'right',
  },
  attractionImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginTop: 8,
  },
});