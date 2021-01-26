import React, {useState} from 'react';
import {Text, SafeAreaView, View, FlatList} from 'react-native';

function Posts(props) {
  const [posts, setPosts] = useState([]);
  
  return (
    <SafeAreaView>
      <Text>Posts</Text>
    </SafeAreaView>
  );
}

export {Posts};
