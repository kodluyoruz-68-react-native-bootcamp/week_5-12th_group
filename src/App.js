import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {LogIn} from './LogIn/LogIn';
import {SignUp} from './SignUp/SignUp';
import {Posts} from './Posts/Posts'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Posts" component={Posts} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={() => ({headerShown: false})}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="MainScreen" component={MainStack} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
