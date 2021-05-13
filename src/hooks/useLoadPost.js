import {useState} from 'react';
import database from '@react-native-firebase/database';

export function useLoadPost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  function loadPosts() {
    setError(null);
    setLoading(true);

    database().ref(`Posts`).on('value', snapshot => {
      const recievedData = snapshot.val();
      if (!recievedData) {
        setLoading(false);
        console.log(recievedData);
        return {loading, error, response, loadPosts};
      }
      setLoading(false);
      setResponse(recievedData);
      console.log(recievedData);
    });
  }

  return {loading, error, response, loadPosts};
}
