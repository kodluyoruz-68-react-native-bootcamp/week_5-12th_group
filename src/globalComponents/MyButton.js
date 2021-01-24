import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Button } from "./styles/components_styles";

function MyButton(props){
    return( 
        <TouchableOpacity >
            <View style={Button[props.isTrue ? 'container_register' : 'container']}>
                <Text style={Button[props.isTrue ? 'text_register' : 'text']}> {props.myTitle} </Text>
            </View>    
        </TouchableOpacity>
    );
};

export default MyButton;

