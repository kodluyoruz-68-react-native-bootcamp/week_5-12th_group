import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  Alert,
  ActivityIndicator,
  Button,
} from 'react-native';
import {IconButton, PostInput} from '../globalComponents';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {post_style, post_input_style} from '../globalComponents/styles';

function Posts(props) {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState('');
  const [postValid, setPostValid] = useState(1);
  const [currentUsername, setCurrentUsername] = useState('Anonymous');

  function sortByTime( a, b) {
    if ( a.time < b.time ){
    return 1;
  }
  if ( a.time > b.time ){
    return -1;
  }
  return 0;
  }

  useEffect(() => {
    database()
      .ref(`Posts`)
      .on('value', (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          return;
        }
        setPosts(Object.values(data).sort(sortByTime));
      });
    database()
      .ref(`Users/${auth().currentUser.uid}`)
      .once('value', (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          return;
        }
        setCurrentUsername(data.name + ' ' + data.surname);
      });
  }, []);

  function hasProperty(arr, val) {
    return arr.some((arrVal) => val === arrVal['time']);
  }
  function savePost(item) {
    console.log('SAVED POST:', item);
    let alreadySaved = false;
    //check if exists
    database()
      .ref(`Users/${auth().currentUser.uid}/Posts`)
      .once('value', (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          return;
        }
        if (hasProperty(Object.values(data), item['time'])) {
          //TODO: indicate that the post is aleady saved / done
          console.log(Object.values(data));
          console.log('ALREADY SAVED!');
          Alert.alert('ALREADY SAVED!', "You can't save the same post twice");
          alreadySaved = true;
        }
      })
      .then(() => {
        if (!alreadySaved) {
          database()
            .ref(`Users/${auth().currentUser.uid}/Posts`)
            .push({
              time: item['time'],
              username: item['username'],
              text: item['text'],
            });
        }
      });
  }

  function handlePostingRequest() {
    if (!currentPost.length) {
      //TODO: indicate that post is empty  /done
      setPostValid(0);
      return 0;
    }
    database()
      .ref(`Posts`)
      .push({time: Date.now(), username: currentUsername, text: currentPost});
  }

  function getDateString(dateInMs) {
    let passedTime = new Date(dateInMs);
    return passedTime.toString();
  }

  return (
    <SafeAreaView style={{backgroundColor: '#79a3b1', flex: 1}}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={posts}
        renderItem={({item}) => {
          return (
            <View style={post_style.container}>
              <Text style={post_style.user_style}>{item['username']}</Text>
              <Text style={post_style.text_style}>{item['text']}</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={post_style.date_style}>
                  {getDateString(item['time'])}
                </Text>
                <IconButton
                  style={post_style.icon_style}
                  icon="save"
                  onPress={() => savePost(item)}
                />
              </View>
            </View>
          );
        }}
        // TODO: Add a cooler empty list component
        ListEmptyComponent={<Text>No items</Text>}
      />
      <View style={post_input_style.container}>
        <PostInput
          buttonTitle="Post"
          placeholder="Make your thoughts heard..."
          onText={(postText) => {
            if (postText.length && !postValid) {
              setPostValid(1);
            }
            setCurrentPost(postText);
          }}
          currentColor={postValid ? '#0000' : 'red'}
          onSelect={handlePostingRequest}
        />
      </View>
    </SafeAreaView>
  );
}

export {Posts};
