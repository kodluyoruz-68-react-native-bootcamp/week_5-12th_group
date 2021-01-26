import React, {useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {Input, SmallButton} from '../globalComponents';
import auth from '@react-native-firebase/auth';
import {useLogin} from '../hooks/useLogin';
import {logIn_items} from '../styles/Login_styles';

function LogIn({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(0);
  const [passwordValid, setPasswordValid] = useState(0);

  const {loading, error, response, login} = useLogin();

  function checkEmailText(mailText) {
    setEmail(mailText);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(mailText.toLowerCase())) {
      setEmailValid(1);
    } else {
      setEmailValid(0);
    }
  }

  function checkPasswordText(passwordText) {
    setPassword(passwordText);
    if (passwordText.length > 5) {
      setPasswordValid(1);
    } else {
      setPasswordValid(0);
    }
  }

  function loginHandler() {
    let conditions =
      emailValid &&
      passwordValid;
    if (conditions) {
      login(email, password);
    } else {
      //TODO: add something that indicates invalid fields
      console.log('Invalid fields');
    }
  }

  if (loading) {
    //TODO: maybe improve ActivityIndicator
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }
  
  if (response) {
    //TODO: send something to login page using params and tell the user that they are registered
    navigation.navigate('MainScreen');
  }


  if (error) {
    //TODO: handle register error
    console.log(error.message);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={logIn_items.container}>
        <Input
          buttonTitle="Email Adress"
          placeholder="Enter Email Adress..."
          onText={(userName) => checkEmailText(userName)}
          currentColor={emailValid || !email.length ? '#0000' : 'red'}
          fieldType='email'
        />
        <Input
          secureTextEntry={true}
          buttonTitle="Password"
          placeholder="User Password..."
          onText={(passwordText) => checkPasswordText(passwordText)}
          currentColor={passwordValid || !password.length ? '#0000' : 'red'}
        />
        <SmallButton buttonTitle="Log in" onSelect={loginHandler}/>
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
