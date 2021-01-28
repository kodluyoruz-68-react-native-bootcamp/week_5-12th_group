import React from 'react';
import {View, TextInput} from 'react-native';
import {post_input_style,post_style} from './styles/components_styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
function PostInput(props) {
  return (
    <View style={[post_input_style.container, {borderColor: props.currentColor, borderWidth: 1} ]}>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={(value) => props.onText(value)}
        autoCompleteType={props.fieldType}
      />
      <TouchableOpacity onPress={props.onSelect}>
        <FontAwesome5 style = {post_input_style.icon} name= {'play'} solid></FontAwesome5>    
      </TouchableOpacity>  
        
    </View>
  );
}
export {PostInput};
