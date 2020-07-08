import React , {Component} from 'react';
import {View,
        Text,
        StyleSheet
} from 'react-native';
import ColorTools from 'color';

class ColorInfo extends Component{
    render(){
        const {params}= this.props.route;
        const color = ColorTools(params.item.key);
        return(
            <View style={[styles.container, {backgroundColor: color}]}>
                <Text style={[styles.text,{color: color.negate()}]}>
                    {color.hex()}
                </Text>
                <Text style={[styles.text,{color: color.negate()}]}>
                    {color.rgb().string()}
                </Text>
                <Text style={[styles.text,{color: color.negate()}]}>
                    {color.hsl().string()}
                </Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:20,
        margin:10
    }
})

export default ColorInfo;