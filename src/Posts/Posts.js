import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
  Button
} from 'react-native';
import {Input, SmallButton} from '../globalComponents';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

function Posts(props) {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState('');
  const [currentUsername, setCurrentUsername] = useState('Anonymous');

  useEffect(() => {
    database()
      .ref(`Posts`)
      .on('value', (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          return;
        }
        console.log(Object.values(data));
        setPosts(Object.values(data));
      });
      database()
        .ref(`Users/${auth().currentUser.uid}`)
        .on('value', (snapshot) => {
          const data = snapshot.val();
          console.log(data);
          if (!data) {
            return;
          }
          setCurrentUsername(data.name + " " + data.surname);
        });
  }, []);

  function savePost(item) {
    database()
      .ref(`Users/${auth().currentUser.uid}/Posts`)
      .push({time: item["time"], username: item["username"],text: item["text"]});
  }

  function handlePostingRequest() {
    if (!currentPost.length) {
      //TODO: indicate that post is empty
      return 0;
    }
    database()
      .ref(`Posts`)
      .push({time: Date.now(), username: currentUsername,text: currentPost});
  }

  function getDateString(dateInMs) {
    let passedTime = new Date(dateInMs);
    return passedTime.toString();
  }

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={posts}
        renderItem={({item}) => {
          return(
            <View>
              <Text>Date: {getDateString(item["time"])}</Text>
              <Text>User: {item["username"]}</Text>
              <Text>Text: {item["text"]}</Text>
              <Button title="Save" onPress={() => savePost(item)}/>
            </View>
          );
        }}
        // TODO: Add a cooler empty list component
        ListEmptyComponent={<Text>No items</Text>}
      />
      <Input
        buttonTitle="Post"
        placeholder="Make your thoughts heard..."
        onText={(postText) => setCurrentPost(postText)}
        currentColor="#0000"
      />
      <SmallButton buttonTitle="Publish" onSelect={handlePostingRequest} />
    </SafeAreaView>
  );
}

export {Posts};
