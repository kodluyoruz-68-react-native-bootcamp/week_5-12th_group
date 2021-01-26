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
      navigation.navigate('LogIn');
    });
  }

  return (
    <SafeAreaView>
      <SmallButton buttonTitle="Logout" onSelect={handleLogoutRequest} />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={posts}
        renderItem={({item}) => {
          return (
            <View>
              <Text>Date: {getDateString(item['time'])}</Text>
              <Text>User: {item['username']}</Text>
              <Text>Text: {item['text']}</Text>
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
