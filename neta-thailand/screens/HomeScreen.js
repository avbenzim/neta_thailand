import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this awesome Thailand travel app!',
        title: 'Thailand Travel App',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.shareButton} onPress={onShare}>
          <Ionicons name="share-social" size={24} color="#4A90E2" />
        </TouchableOpacity>
        <Text style={styles.title}>ברוך הבא לתאילנד! 🇹🇭</Text>
      </View>
      
      <TouchableOpacity 
        style={[styles.card, styles.exploreCard]}
        onPress={() => navigation.navigate('Explore')}
      >
        <Text style={styles.cardEmoji}>🏞️</Text>
        <Text style={styles.cardTitle}>גלה את תאילנד</Text>
        <Text style={styles.cardDescription}>סיורים וירטואליים באתרים מפורסמים</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.card, styles.languageCard]}
        onPress={() => navigation.navigate('Language')}
      >
        <Text style={styles.cardEmoji}>🗣️</Text>
        <Text style={styles.cardTitle}>למד תאית</Text>
        <Text style={styles.cardDescription}>למד מילים ומשפטים בסיסיים בתאית</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.card, styles.cultureCard]}
        onPress={() => navigation.navigate('Culture')}
      >
        <Text style={styles.cardEmoji}>🏮</Text>
        <Text style={styles.cardTitle}>תרבות תאילנדית</Text>
        <Text style={styles.cardDescription}>גלה מנהגים ומסורות תאילנדיות</Text>
      </TouchableOpacity>

      <Text style={styles.tip}>💡 טיפ: נסה את האוכל המקומי כשאתה מטייל!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F8FF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    flex: 1,
    textAlign: 'center',
    marginRight: 40, // To balance the layout since the share button is on the left
  },
  shareButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginRight: 10,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  languageCard: {
    backgroundColor: '#FFD700',
  },
  cultureCard: {
    backgroundColor: '#FF6347',
  },
  exploreCard: {
    backgroundColor: '#32CD32',
  },
  cardEmoji: {
    fontSize: 40,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFFFFF',
  },
  cardDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  tip: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 20,
    backgroundColor: '#FFF9C4',
    padding: 10,
    borderRadius: 5,
    color: '#666666',
  },
});
