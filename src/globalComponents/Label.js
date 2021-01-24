import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { Label_style } from "./styles/components_styles";

function Label(props){
    return(
        <View style={Label_style.container}>
                <View style={Label_style.inputContainer}>
                    <Text style={Label_style.text}> {props.myTitle} </Text>
                    <TextInput
                        secureTextEntry = {props.secureTextEntry}
                        placeholder={props.placeholder}
                        onChangeText={(value) => props.onText(value)}
                        keyboardType={props.type}
                    />
                </View>
        </View>
    );
};
export default Label;

