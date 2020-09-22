import React, { Component } from 'react'
// import * as React from 'react';
// import React from 'react';
import Styled from 'styled-components/native';
import MapView, {Marker} from 'react-native-maps';
import { Text, View } from 'react-native';


const Container = Styled.View`
    flex: 1;
`;

// Test adding a marker on the location with a label
const AddMarker = () => {
    return (
      <Container>
        <MapView 
          style={{flex: 1}}
          initialRegion={{
            latitude:39.952583,
            longitude:-75.165222,
            latitudeDelta: 0.04,
            longitudeDelta: 0.03
        }}>
        <Marker
        coordinate={{latitude:39.952583, longitude:-75.165222}}
        title="Philly"
        />
        </MapView>
      </Container>
    );
  };

//   export default class GraphsScreen extends Component {
//     render() {
//       return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <Text>Graphs</Text>
//         </View>
//       )
//     }
//   }
export default class MapScreen extends Component{
    render(){
        return(
            <AddMarker/>
        )
    }
}