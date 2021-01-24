import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Button } from "./styles/components_styles";
function MyButton(props){
    return( 
        <TouchableOpacity >
            <View style={Button.container}>
                <Text style={Button.text}> {props.myTitle} </Text>
            </View>    
        </TouchableOpacity>
    );
};

export default MyButton;

