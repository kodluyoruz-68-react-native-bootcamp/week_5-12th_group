import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {LogIn} from './LogIn/LogIn';
import {SignUp} from './SignUp/SignUp';
import {Posts} from './Posts/Posts'
import {SavedPosts} from './SavedPosts/SavedPosts';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Tab.Navigator 
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) =>
          generateIcon(focused, color, route),
        tabBarLabel: () => null,
    })}>
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="SavedPosts" component={SavedPosts} />
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

function generateIcon(focused, color, route) {
  let iconName;
  switch (route.name) {
    case 'Posts':
      iconName = focused ? 'envelope-open-text' : 'envelope';
      color = focused ? '#79a3b1' : 'grey';
      break;
    case 'SavedPosts':
      iconName ='save';
      color = focused ? '#79a3b1' : 'grey';
      break;
    default:
      break;
  }
  return <FontAwesome5 name={iconName} color={color} size={30}></FontAwesome5>;
}