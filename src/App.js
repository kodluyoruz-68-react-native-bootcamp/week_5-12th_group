import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { LogIn } from './LogIn/LogIn';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = 'LogIn' component = {LogIn} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
