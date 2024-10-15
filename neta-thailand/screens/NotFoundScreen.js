import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function NotFoundScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>404 - Page Not Found</Text>
      <Text style={styles.message}>Sorry, the page you're looking for doesn't exist.</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Return to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F8FF',
  },
  errorText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF6347',
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});