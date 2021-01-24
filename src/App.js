import React from 'react';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { LogIn } from './LogIn/LogIn';
import { SignUp } from './SignUp/SignUp';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = 'LogIn' component = {LogIn} />
          <Stack.Screen name = 'SignUp' component = {SignUp} />
          
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
