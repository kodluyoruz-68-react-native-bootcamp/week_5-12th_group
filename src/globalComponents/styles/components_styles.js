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
const Label_style = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#fcf8ec',
        padding: 10,
        paddingVertical: 10,
        margin: 5,
        borderRadius: 10,
        width:250,
        alignSelf:"center",
        
      },
      text:{
        color:'#79a3b1',
        fontWeight: 'bold'
    }
})

export {Label_style, Button};