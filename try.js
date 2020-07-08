import React from 'react';
import {Text,
        View,
        StatusBar,
        StyleSheet
        } from 'react-native';

class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <StatusBar style="auto"/>
        <Text style={styles.defaultText}>Lokesh</Text>
        <Text style={[styles.defaultText,styles.selectedText]}>Kumar</Text>
        <Text style={styles.defaultText}>Dulani</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#DDD',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  defaultText:{
    textAlign:'center',
    fontSize:22,
    padding:10,
    margin:5,
    borderWidth: StyleSheet.hairlineWidth,
    color:'black'
  },
  selectedText:{
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold'
  }
})

export default App;