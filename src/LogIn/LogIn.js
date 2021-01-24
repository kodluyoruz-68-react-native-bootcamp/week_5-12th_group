import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Label from "./logInComponents/Label";
import MyButton from '../globalComponents/MyButton'

import { logIn_items } from "./styles/Login_styles";
function LogIn() {
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={logIn_items.container}>
                <Label 
                  secureTextEntry={false}
                  myTitle = 'User Name' 
                  placeholder = 'Enter User Name...' 
                  onText = {(userName) => console.log(userName)}

                />  
                <Label 
                  secureTextEntry={true}
                  myTitle = 'Password' 
                  placeholder = 'User Password...' 
                  onText = {(password) => console.log(password)}
                />  
                <MyButton myTitle = 'Log in'/>
            </View>
        </SafeAreaView>
    )
}

export {LogIn};

