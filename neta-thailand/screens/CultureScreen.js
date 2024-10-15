import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function CultureScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🏯 תרבות תאילנדית 🐘</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>🙏 וואי (Wai):</Text>
        <Text style={styles.infoText}>זוהי הדרך המסורתית לברך בתאילנד. מחברים את כפות הידיים מול החזה ומרכינים מעט את הראש.</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>👑 כבוד למלוכה:</Text>
        <Text style={styles.infoText}>בתאילנד יש כבוד רב למשפחת המלוכה. הימנע מאמירות או מחוות שליליות כלפיהם.</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>🛕 מקדשים:</Text>
        <Text style={styles.infoText}>בעת ביקור במקדשים, לבש בגדים צנועים המכסים כתפיים וברכיים. הסר נעליים לפני הכניסה.</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>🍜 אוכל רחוב:</Text>
        <Text style={styles.infoText}>תאילנד מפורסמת באוכל הרחוב הטעים שלה. נסה מאכלים מקומיים, אבל היזהר ממים לא מבוקבקים.</Text>
      </View>

      <Text style={styles.tip}>💡 טיפ: תאילנדים מעריכים מאוד חיוכים וסבלנות. היה נחמד ומכבד תמיד!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF0E6',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#CC6600',
  },
  infoContainer: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#009900',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 18,
    color: '#333333',
    marginLeft: 10,
  },
  tip: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 20,
    backgroundColor: '#E6FFE6',
    padding: 10,
    borderRadius: 5,
    color: '#666666',
  },
});