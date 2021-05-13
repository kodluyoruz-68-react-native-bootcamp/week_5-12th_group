import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  function login(email, password) {
    setError(null);
    setLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then((serverResponse) => {
        setLoading(false);
        setResponse(serverResponse);
      })
      .catch((serverError) => {
        setLoading(false);
        setError(serverError);
      });
  }

  return {loading, error, response, login};
}
