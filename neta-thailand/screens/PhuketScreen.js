import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const YouTubePreview = ({ videoId, title }) => {
  const openYouTubeVideo = () => {
    Linking.openURL(`https://www.youtube.com/watch?v=${videoId}`);
  };

  return (
    <TouchableOpacity style={styles.videoContainer} onPress={openYouTubeVideo}>
      <Image 
        source={{ uri: `https://img.youtube.com/vi/${videoId}/0.jpg` }}
        style={styles.videoThumbnail}
      />
      <View style={styles.playButton}>
        <Ionicons name="play" size={50} color="white" />
      </View>
      <Text style={styles.videoTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const attractions = [
  {
    name: 'חוף פאטונג',
    description: 'חוף פופולרי עם פעילויות רבות ונוף מרהיב',
    image: 'https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fFBhdG9uZyUyMEJlYWNoJTJDJTIwVGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
    videoId: 'PiruAhDbVN4'
  },
  {
    name: 'שייט לשבעת האיים',
    description: 'הפלגה מרהיבה סביב איים טרופיים קסומים',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    videoId: 'JIfFMCDiAYE'
  },
  {
    name: 'איי סימילן',
    description: 'גן עדן לצוללנים עם מים צלולים ושוניות אלמוגים',
    image: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    videoId: '1MBnHApk5sE'
  },
  {
    name: 'חוות פילים',
    description: 'הזדמנות לפגוש ולטפל בפילים באופן אתי',
    image: 'https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    videoId: 'MiMzLTDCs4g'
  },
];

export default function PhuketScreen() {
  const openHotelLink = () => {
    Linking.openURL('https://www.instagram.com/phuketemeraldresort/');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>פוקט (Phuket)</Text>
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' }} 
        style={styles.headerImage}
      />
      <Text style={styles.description}>
        פוקט היא אי טרופי מרהיב בתאילנד, המפורסם בחופיו הלבנים, המים הצלולים והנופים המרהיבים. האי מציע שילוב מושלם של חופים יפהפיים, תרבות עשירה ואטרקציות מגוונות.
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={openHotelLink}>
        <Text style={styles.buttonText}>המלון שלנו 🏨</Text>
      </TouchableOpacity>
      
      <Text style={styles.subtitle}>אטרקציות מרכזיות:</Text>
      {attractions.map((attraction, index) => (
        <View key={index} style={styles.attractionContainer}>
          <Image source={{ uri: attraction.image }} style={styles.attractionImage} />
          <View style={styles.attractionTextContainer}>
            <Text style={styles.attractionName}>{attraction.name}</Text>
            <Text style={styles.attractionDescription}>{attraction.description}</Text>
          </View>
          <YouTubePreview videoId={attraction.videoId} title={`סרטון על ${attraction.name}`} />
        </View>
      ))}
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#4A90E2',
  },
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'right',
  },
  attractionContainer: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  attractionImage: {
    width: '100%',
    height: 200,
  },
  attractionTextContainer: {
    padding: 10,
  },
  attractionName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A90E2',
    textAlign: 'right',
  },
  attractionDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
    marginBottom: 10,
  },
  videoContainer: {
    width: '100%',
    height: 200,
    marginBottom: 15,
    position: 'relative',
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoTitle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: 5,
    textAlign: 'center',
    fontSize: 14,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});