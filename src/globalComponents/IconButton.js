import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {button_style} from './styles/components_styles';
import { post_style } from "./styles";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
function IconButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View >
         <FontAwesome5 style = {post_style.icon_style} name= {props.icon} solid></FontAwesome5>
      </View>
    </TouchableOpacity>
  );
}

export {IconButton};