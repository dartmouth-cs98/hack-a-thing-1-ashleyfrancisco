import React, { Component } from 'react'
import {BarChart, Grid} from 'react-native-svg-charts';
import { Text, View } from 'react-native';


export default class GraphsScreen extends Component {
    render(){
        const fill = 'rgb(158, 28, 138)'
        const dummydata = [20, 8, 32, 78, null, 0, 1, 10 ,16]
        return(
            <View style={{height: 800, padding:30}}>
                <BarChart style={{ height: 500, justifyContent: 'center' , flex:1}} data={dummydata} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                    <Grid/>
                </BarChart>
                <Text style={{textAlign:'center'}}>This is a simple bar graph!</Text>
            </View>
            
        )
    }
}

