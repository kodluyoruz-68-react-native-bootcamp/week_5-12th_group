import React from 'react';
import {View, Text} from 'react-native';
import {post_style} from './styles';

function PostCard(props) {
  return(
    <Text>{props.post.text}</Text>
  );
}
