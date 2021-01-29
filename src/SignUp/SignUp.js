import React, {useState} from 'react';
import {SafeAreaView, Text, View, ScrollView, ActivityIndicator, Alert} from 'react-native';
import {Input, SmallButton} from '../globalComponents';
import {useRegister} from '../hooks/useRegister';
import database from '@react-native-firebase/database';
import {logIn_items} from '../styles/Login_styles';
function SignUp({navigation}) {
  /*fields validation hooks*/
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [emailValid, setEmailValid] = useState(0);
  const [passwordValid, setPasswordValid] = useState(0);
  const [passwordConfirmValid, setPasswordConfirmValid] = useState(1);
  const [nameValid, setNameValid] = useState(0);
  const [surnameValid, setSurnameValid] = useState(0);

  const {loading, error, response, register} = useRegister();

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
    checkConfirmPassword(passwordRepeat, passwordText);
  }

  function checkConfirmPassword(passwordText, passwordToCompare) {
    passwordText == passwordToCompare
      ? setPasswordConfirmValid(1)
      : setPasswordConfirmValid(0);
  }

  function checkName(nameText) {
    setName(nameText);
    nameText.length > 2 ? setNameValid(1) : setNameValid(0);
  }

  function checkSurname(surnameText) {
    setSurname(surnameText);
    surnameText.length > 1 ? setSurnameValid(1) : setSurnameValid(0);
  }

  function registerHandler() {
    let conditions =
      nameValid &&
      emailValid &&
      passwordValid &&
      surnameValid &&
      passwordConfirmValid;
    if (conditions) {
      register(email, password, name, surname);
    } else {
      //TODO: add something that indicates invalid fields /done
      Alert.alert(
        "EMPTY FIELD(S)!",
        "Don't leave empty fields"
      )  
    }
  }

  if (response) {
    //TODO: send something to login page using params and tell the user that they are registered
    navigation.navigate('LogIn');
  }

  if (loading) {
    //TODO: maybe improve ActivityIndicator
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (error) {
    //TODO: handle register error /done
    Alert.alert(
      "ERROR!",
      "Error has occured. Please try again..."
    )  
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={logIn_items.container}>
          <Input
            buttonTitle="Name"
            placeholder="Enter Your Name..."
            onText={(nameText) => checkName(nameText)}
            currentColor={nameValid || !name.length ? '#0000' : 'red'}
          />
          <Input
            buttonTitle="Surname"
            placeholder="Enter Your Surame..."
            onText={(surnameText) => checkSurname(surnameText)}
            currentColor={surnameValid || !surname.length ? '#0000' : 'red'}
          />
          <Input
            buttonTitle="Email Adress"
            placeholder="Enter Email Adress..."
            onText={(userName) => checkEmailText(userName)}
            currentColor={emailValid || !email.length ? '#0000' : 'red'}
          />
          <Input
            secureTextEntry={true}
            buttonTitle="Password"
            placeholder="Enter Password..."
            onText={(passwordText) => checkPasswordText(passwordText)}
            currentColor={passwordValid || !password.length ? '#0000' : 'red'}
          />
          <Input
            secureTextEntry={true}
            buttonTitle="Confirm Password"
            placeholder="Confirm..."
            onText={(passwordText) => {
              setPasswordRepeat(passwordText);
              checkConfirmPassword(passwordText, password);
            }}
            currentColor={passwordConfirmValid ? '#0000' : 'red'}
          />
          <SmallButton buttonTitle="Sign up" onSelect={registerHandler} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export {SignUp};
