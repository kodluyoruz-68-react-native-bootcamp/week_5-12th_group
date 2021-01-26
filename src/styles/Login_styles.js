import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const logIn_items = StyleSheet.create({
    container: {
        backgroundColor: '#79a3b1',
        justifyContent:"center",
        height: deviceSize.height,
      }
})
export {logIn_items};
