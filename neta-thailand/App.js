import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LanguageScreen from './screens/LanguageScreen';
import CultureScreen from './screens/CultureScreen';
import ExploreScreen from './screens/ExploreScreen';
import PhuketScreen from './screens/PhuketScreen';
import KhaoLakScreen from './screens/KhaoLakScreen';
import KrabiScreen from './screens/KrabiScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'ברוך הבא לתאילנד' }} />
        <Stack.Screen name="Language" component={LanguageScreen} options={{ title: 'למד תאית' }} />
        <Stack.Screen name="Culture" component={CultureScreen} options={{ title: 'תרבות תאילנדית' }} />
        <Stack.Screen name="Explore" component={ExploreScreen} options={{ title: 'גלה את תאילנד' }} />
        <Stack.Screen name="Phuket" component={PhuketScreen} options={{ title: 'פוקט' }} />
        <Stack.Screen name="KhaoLak" component={KhaoLakScreen} options={{ title: 'קאו לאק' }} />
        <Stack.Screen name="Krabi" component={KrabiScreen} options={{ title: 'קראבי' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}