import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';

export default function KhaoLakScreen() {
  const openHotelWebsite = () => {
    Linking.openURL('https://www.thesandskhaolak.com/facilities_water.php');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>קאו לק (Khao Lak)</Text>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' }}
        style={styles.mainImage}
      />
      <Text style={styles.description}>
        קאו לק הוא אזור חופים מרהיב בדרום תאילנד, הידוע בחופיו הטרופיים השקטים, הפארקים הלאומיים המרשימים והאווירה הרגועה. זהו יעד מושלם למטיילים המחפשים שילוב של טבע, שלווה ופעילויות מים.
      </Text>
      <TouchableOpacity style={styles.button} onPress={openHotelWebsite}>
        <Text style={styles.buttonText}>🏨 המלון שלנו</Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>אטרקציות מרכזיות:</Text>
      <View style={styles.attractionItem}>
        <Text style={styles.attractionTitle}>חוף נאנג טונג (Nang Thong Beach)</Text>
        <Text style={styles.attractionDescription}>חוף טרופי ארוך ושקט, מושלם לשחייה ושיזוף</Text>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' }}
          style={styles.attractionImage}
        />
      </View>
      <View style={styles.attractionItem}>
        <Text style={styles.attractionTitle}>פארק לאומי חאו לאק-למרו</Text>
        <Text style={styles.attractionDescription}>ג'ונגל עשיר, מפלים ובעלי חיים מגוונים</Text>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1600255821058-c4f89958d700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' }}
          style={styles.attractionImage}
        />
      </View>
      <View style={styles.attractionItem}>
        <Text style={styles.attractionTitle}>איי סימילאן</Text>
        <Text style={styles.attractionDescription}>קבוצת איים מרהיבה עם אתרי צלילה מהמובילים בעולם</Text>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' }}
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
    backgroundColor: '#2A9D8F',
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