import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {label_style} from './styles/components_styles';

function Label(props) {
  return (
    <View style={label_style.container}>
      <View style={[label_style.inputContainer, {borderColor: props.currentColor, borderWidth: 1}]}>
        <Text style={label_style.text}> {props.buttonTitle} </Text>
        <TextInput
          secureTextEntry={props.secureTextEntry}
          placeholder={props.placeholder}
          onChangeText={(value) => props.onText(value)}
          keyboardType={props.type}
        />
      </View>
    </View>
  );
}
export default Label;
