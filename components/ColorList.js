import React, {Component} from 'react';

import {View,
        StyleSheet,
        FlatList,
        AsyncStorage
} from 'react-native';

import ColorButton from './ColorButton'
import ColorForm from './ColorForm';

class ColorList extends Component{

  constructor(){
    super();
    this.state={
      availableColors: []
    }
    this.newColor=this.newColor.bind(this);
  }

  componentDidMount(){
    AsyncStorage.getItem(
      '@ColorListStore:Colors',
      (err,data)=> {
        if(err){
          console.log("Error loading the colors"+err);
        }
        else{
          const availableColors= JSON.parse(data);
          this.setState({availableColors});
        }
      }
    )
  }

  newColor(color){
    const availableColors=[
      ...this.state.availableColors,
      {key: color}
    ];
    this.setState({availableColors});
    this.saveColors(availableColors);
  }

  saveColors(colors){
    AsyncStorage.setItem(
      '@ColorListStore:Colors',
      JSON.stringify(colors)
    )
  }

  renderHeader = ()=>{
    return(
      <View style={styles.header}>
        <ColorForm onNewColor={this.newColor}
        navigation={this.props.navigation}
        />
      </View>
    )
  }
  
  render(){
    const {navigate} = this.props.navigation;
    const {backgroundColor, availableColors}= this.state;
    
    return(
      <View style={[styles.container,{backgroundColor}]}>
        <FlatList data={availableColors}
        renderItem={({item})=> <ColorButton backgroundColor={item.key} 
        onSelect={()=>navigate('Details',{item})}/> }
        ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container:{
    flex:1
  },
  header:{
    backgroundColor:'lightgrey',
    paddingTop:10,
    padding:5,
    textAlign:'center'
  },
  text:{
    fontSize:30,
    textAlign:'center'
  }

});

export default ColorList;