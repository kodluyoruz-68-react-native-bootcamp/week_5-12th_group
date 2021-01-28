import {StyleSheet} from 'react-native';

const button_style = StyleSheet.create({
  container: {
    backgroundColor: '#fcf8ec',
    borderRadius: 20,
    alignItems: 'center',
    width: 250,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  text: {
    color: '#79a3b1',
    fontWeight: 'bold',
  },
  text_register: {
    color: '#fcf8ec',
  },
  container_register: {
    alignSelf: 'center',
  },
});
const input_style = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#fcf8ec',
    padding: 10,
    paddingVertical: 10,
    margin: 5,
    borderRadius: 10,
    width: 250,
    alignSelf: 'center',
  },
  text: {
    color: '#79a3b1',
    fontWeight: 'bold',
  },
});

const post_style = StyleSheet.create({
  container: {
    backgroundColor: "#fcf8ec",
    padding:10,
    margin: 10,
    borderRadius:10,
    
  },
  user_style:{
    borderBottomWidth:1,
    borderBottomColor:'#456268',
    padding:5
  },
  text_style:{
    padding:10,
  },
  date_style:{
    fontSize:10,
    padding:10,
  },
  icon_style:{
    color:'#79a3b1',
    fontSize:25
  }
});

export {input_style,button_style, post_style};
