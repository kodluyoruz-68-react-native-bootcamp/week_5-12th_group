import {StyleSheet} from 'react-native';

const Button = StyleSheet.create({
    container:{
        backgroundColor: '#fcf8ec',
        borderRadius:20,
        alignItems:"center",
        width:250,
        alignSelf:"center",
        padding:10,
        margin:10,
    },
    text:{
        color:'#79a3b1',
        fontWeight:'bold'
        
    },
    text_register:{
        color:'#fcf8ec',
    },
    container_register:{
        alignSelf:"center",
    }
})

export {Button};