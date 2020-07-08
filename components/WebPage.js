import React from 'react';
import {StyleSheet
} from 'react-native';
import {WebView} from 'react-native-webview';

const WebPage= ()=>{
    return(
    <WebView style={StyleSheet.container}
             source={{uri: "https://www.w3schools.com/colors/colors_groups.asp"}}
             contentInset={{top:-400}}
     />
    );
};

const styles= StyleSheet.create({
    container:{
        flex:1
    }
});

export default WebPage;