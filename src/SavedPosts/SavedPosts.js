import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
  Button,
} from 'react-native';
import {Input, SmallButton} from '../globalComponents';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { post_style } from '../globalComponents/styles';

function SavedPosts({navigation}) {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState('');
  const [currentUsername, setCurrentUsername] = useState('Anonymous');

  useEffect(() => {
    database()
      .ref(`Users/${auth().currentUser.uid}/Posts`)
      .on('value', (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          return;
        }
        setPosts(Object.values(data));
      });
  }, []);

  function getDateString(dateInMs) {
    let passedTime = new Date(dateInMs);
    return passedTime.toString();
  }

  function handleLogoutRequest() {
    auth().signOut().then(() => {
      navigation.navigate('LogIn', {messageToPrint: ' '});
    });
  }

  return (
    <SafeAreaView style = {{backgroundColor: '#79a3b1', flex:1}}>
      <SmallButton buttonTitle="Logout" onSelect={handleLogoutRequest} />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={posts}
        renderItem={({item}) => {
          return (
            <View style = {post_style.container}>
              <Text style = {post_style.user_style}>{item['username']}</Text>
              <Text style = {post_style.text_style}>{item['text']}</Text>
              <Text style = {post_style.date_style}>{getDateString(item['time'])}</Text>
            </View>
          );
        }}
        // TODO: Add a cooler empty list component
        ListEmptyComponent={<Text>No items</Text>}
      />
    </SafeAreaView>
  );
}

export {SavedPosts};
