import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// pages for your app
import HomeScreen from './../screens/HomeScreen';
import TypeScreen from './../screens/TypeScreen';
import DetailScreen from './../screens/DetailScreen';
import SplashScreen from '../screens/SplashScreen';
import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/LoginScreen';
import MyTabsComponent from './BottomNavigator';
import RegisterScreen from '../screens/RegisterScreen';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Splash Screen">
        <Stack.Screen name="Splash Screen" component={SplashScreen} />
        <Stack.Screen name="Landing Screen" component={LandingScreen} />
        <Stack.Screen name="Login Screen" component={LoginScreen} />
        <Stack.Screen name="Register Screen" component={RegisterScreen} />
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen name="Type Screen" component={TypeScreen} />
        <Stack.Screen name="Detail Screen" component={DetailScreen} />
        <Stack.Screen name="Bottom" component={MyTabsComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
