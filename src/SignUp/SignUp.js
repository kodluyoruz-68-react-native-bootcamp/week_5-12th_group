import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Label from "../globalComponents/Label";
import MyButton from '../globalComponents/MyButton';

import { logIn_items } from "../styles/Login_styles";
function SignUp() {
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={logIn_items.container}>
                <View>
                    <Label
                      myTitle = 'Name' 
                      placeholder = 'Enter Your Name...' 
                      onText = {(Name) => console.log(Name)}
                    />
                    <Label
                      myTitle = 'Surname' 
                      placeholder = 'Enter Your Surame...' 
                      onText = {(Surname) => console.log(Surname)}
                    />  
                </View>
                
                <Label 
                  myTitle = 'User Name' 
                  placeholder = 'Enter User Name...' 
                  onText = {(userName) => console.log(userName)}

                />  
                <Label 
                  secureTextEntry={true}
                  myTitle = 'Password' 
                  placeholder = 'Enter Password...' 
                  onText = {(password) => console.log(password)}
                />
                <Label 
                  secureTextEntry={true}
                  myTitle = 'Confirm Password' 
                  placeholder = 'Confirm...' 
                  onText = {(password) => console.log(password)}

                />  
                <MyButton myTitle = 'Sign up' />
            </View>
        </SafeAreaView>
    )
}

export {SignUp};