import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {input_style} from './styles/components_styles';

function Input(props) {
  return (
    <View style={input_style.container}>
      <View style={[input_style.inputContainer, {borderColor: props.currentColor, borderWidth: 1}]}>
        <Text style={input_style.text}> {props.buttonTitle} </Text>
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
export {Input};
