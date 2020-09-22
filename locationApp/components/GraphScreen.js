import React, { Component } from 'react'
import {BarChart, Grid} from 'react-native-svg-charts';
import { Text, View } from 'react-native';

// export default class GraphsScreen extends Component {
//     render() {
//       return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <Text>Graphs</Text>
//         </View>
//       )
//     }
//   }

export default class GraphsScreen extends Component {
    render(){
        const fill = 'rgb(158, 28, 138)'
        const dummydata = [20, 8, 32, 78, null, 0, 1, 10 ,16]
        return(
            <BarChart style={{ height: 200 }} data={dummydata} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                <Grid/>
            </BarChart>
        )
    }
}

