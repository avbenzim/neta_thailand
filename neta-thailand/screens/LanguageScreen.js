import React, { useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';

export default function LanguageScreen() {
  useEffect(() => {
    Speech.speak('', { language: 'th-TH' });
    return () => {
      Speech.stop();
    };
  }, []);

  const speakText = (text) => {
    Speech.speak(text, { language: 'th-TH', rate: 0.75 });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🗣️ למד תאית בסיסית 🇹🇭</Text>
      
      <View style={styles.phraseContainer}>
        <Text style={styles.phraseTitle}>👋 שלום:</Text>
        <View style={styles.phraseRow}>
          <Text style={styles.phraseTranslation}>🙋‍♀️ סוואדי קה (Sawadee ka) - נשים</Text>
          <TouchableOpacity 
            style={styles.playButton} 
            onPress={() => speakText('สวัสดีค่ะ')}
          >
            <Text style={styles.playButtonText}>▶️</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.phraseRow}>
          <Text style={styles.phraseTranslation}>🙋‍♂️ סוואדי קרב (Sawadee krab) - גברים</Text>
          <TouchableOpacity 
            style={styles.playButton} 
            onPress={() => speakText('สวัสดีครับ')}
          >
            <Text style={styles.playButtonText}>▶️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.phraseContainer}>
        <Text style={styles.phraseTitle}>🙏 תודה:</Text>
        <View style={styles.phraseRow}>
          <Text style={styles.phraseTranslation}>קוב קון קה/קרב (Kob khun ka/krab)</Text>
          <TouchableOpacity 
            style={styles.playButton} 
            onPress={() => speakText('ขอบคุณค่ะ ขอบคุณครับ')}
          >
            <Text style={styles.playButtonText}>▶️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.phraseContainer}>
        <Text style={styles.phraseTitle}>✅ כן:</Text>
        <View style={styles.phraseRow}>
          <Text style={styles.phraseTranslation}>צ'אי (Chai)</Text>
          <TouchableOpacity 
            style={styles.playButton} 
            onPress={() => speakText('ใช่')}
          >
            <Text style={styles.playButtonText}>▶️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.phraseContainer}>
        <Text style={styles.phraseTitle}>❌ לא:</Text>
        <View style={styles.phraseRow}>
          <Text style={styles.phraseTranslation}>מאי צ'אי (Mai chai)</Text>
          <TouchableOpacity 
            style={styles.playButton} 
            onPress={() => speakText('ไม่ใช่')}
          >
            <Text style={styles.playButtonText}>▶️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.phraseContainer}>
        <Text style={styles.phraseTitle}>🚽 איפה השירותים?</Text>
        <View style={styles.phraseRow}>
          <Text style={styles.phraseTranslation}>הונג נאם יו טי נאי? (Hong nam yu tee nai?)</Text>
          <TouchableOpacity 
            style={styles.playButton} 
            onPress={() => speakText('ห้องน้ำอยู่ที่ไหน')}
          >
            <Text style={styles.playButtonText}>▶️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.tip}>💡 טיפ: בתאית, "קה" משמש לנשים ו"קרב" לגברים בסוף משפטים כדי להיות מנומסים.</Text>
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
  phraseContainer: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  phraseTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF6600',
    marginBottom: 5,
  },
  phraseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  phraseTranslation: {
    fontSize: 18,
    color: '#333333',
    flex: 1,
  },
  playButton: {
    backgroundColor: '#4CAF50',
    padding: 5,
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonText: {
    color: 'white',
    fontSize: 16,
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