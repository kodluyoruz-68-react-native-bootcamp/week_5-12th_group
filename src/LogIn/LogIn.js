import React, {useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Label from '../globalComponents/Label';
import SmallButton from '../globalComponents/SmallButton';

import {logIn_items} from '../styles/Login_styles';
function LogIn({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(1);
  const [passwordValid, setPasswordValid] = useState(1);
  function checkEmailText(mailText) {
    setEmail(mailText);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (mailText.length==0 || re.test(mailText.toLowerCase())) {
      setEmailValid(1);
    } else {
      setEmailValid(0);
    }
  }

  function checkPasswordText(passwordText) {
    setPassword(passwordText);
    if (passwordText.length==0 || passwordText.length > 5) {
      setPasswordValid(1);
    } else {
      setPasswordValid(0);
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={logIn_items.container}>
        <Label
          buttonTitle="User Name"
          placeholder="Enter User Name..."
          onText={(userName) => checkEmailText(userName)}
          currentColor={emailValid ? '#0000' : 'red'}
        />
        <Label
          secureTextEntry={true}
          buttonTitle="Password"
          placeholder="User Password..."
          onText={(passwordText) => checkPasswordText(passwordText)}
          currentColor={passwordValid ? '#0000' : 'red'}
        />
        <SmallButton buttonTitle="Log in" />
        <SmallButton
          buttonTitle="Or sign up"
          isText="true"
          onSelect={() => navigation.navigate('SignUp')}
        />
      </View>
    </SafeAreaView>
  );
}

export {LogIn};
