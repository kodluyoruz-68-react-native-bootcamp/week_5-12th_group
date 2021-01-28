import {StyleSheet, Dimensions} from 'react-native';

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

const publish_style = StyleSheet.create({
  container:{
    position: 'absolute',
    alignSelf:'center',
    justifyContent: 'flex-end',
    bottom:0,
  },
});

const post_input_style = StyleSheet.create({
  container: {
    backgroundColor: '#d0e8f2',
    margin: 10,
    borderRadius: 10,
    width: Dimensions.get("screen").width/1.1,   
    alignSelf: 'center',
    borderWidth:1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  icon:{
    color:'#79a3b1',
    fontSize:25,
    padding:12
  },
});
export {input_style,button_style, post_style, publish_style,post_input_style};
