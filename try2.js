import React from 'react';
import {Image,
        Dimensions,
        Text,
        View,
        StyleSheet,
        StatusBar,
        ImageBackground
} from 'react-native';

import Sierra from './assets/Sierra-Spencer.png';
import Tanner from './assets/Tanner-McTab.png';

class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <ImageBackground style={styles.pic} source={Sierra}>
          <Text style={styles.userName}>Sierra Spencer</Text>
        </ImageBackground>
        <ImageBackground style={styles.pic} source={Tanner}>
          <Text style={styles.userName}>Tanner-McTab</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center'
  },
  pic:{
    flex:1,
    width: Dimensions.get('window').width,
    justifyContent:'flex-end',
    alignItems:'flex-end'
  },
  userName:{
    fontSize:25,
    color:'white',
    backgroundColor:'rgba(0,0,0,0.7)',
  }
})

export default App;