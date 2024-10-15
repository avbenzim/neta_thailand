import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ExploreScreen() {
  const navigation = useNavigation();

  const destinations = [
    { 
      name: 'פוקט (Phuket)', 
      screen: 'Phuket',
      image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      name: 'קאו לאק (Khao Lak)', 
      screen: 'KhaoLak',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      name: 'קראבי (Krabi)', 
      screen: 'Krabi',
      image: 'https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];

  const navigateToScreen = (screenName) => {
    if (navigation.getState().routeNames.includes(screenName)) {
      navigation.navigate(screenName);
    } else {
      Alert.alert("דף לא זמין", "יעד זה אינו זמין עדיין.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>גלה את תאילנד</Text>
      {destinations.map((dest, index) => (
        <TouchableOpacity
          key={index}
          style={styles.destinationContainer}
          onPress={() => navigateToScreen(dest.screen)}
        >
          <Image
            source={{ uri: dest.image }}
            style={styles.destinationImage}
            resizeMode="cover"
          />
          <View style={styles.overlay}>
            <Text style={styles.destinationName}>{dest.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  destinationContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  destinationImage: {
    width: '100%',
    height: 200,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-end',
    padding: 10,
  },
  destinationName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'right',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
});