import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const logIn_items = StyleSheet.create({
    container: {
        backgroundColor: '#79a3b1',
        justifyContent:"center",
        height: deviceSize.height,
        alignItems: 'center',
      },
      message: {
        color: 'white',
        fontSize: 20,
        margin: 15,
      }
})
export {logIn_items};
