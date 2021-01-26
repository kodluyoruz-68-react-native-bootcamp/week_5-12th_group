import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  function register(email, password, name, surname) {
    setError(null);
    setLoading(true);

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((serverResponse) => {
        setLoading(false);
        setResponse(serverResponse);
        database().ref(`Users/${serverResponse.user.uid}`).set({name, surname});
      })
      .catch((serverError) => {
        setLoading(false);
        setError(serverError);
      });
  }

  return {loading, error, response, register};
}
