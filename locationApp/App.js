import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Styled from 'styled-components/native';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Text>It works!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const Container = Styled.View`
    flex: 1;
`;
// Test set location
// const AppleMapLocation = () => {
//   return (
//     <Container>
//       <MapView style={{flex: 1}}
//         initialRegion={{
//           latitude:39.952583,
//           longitude:-75.165222,
//           latitudeDelta: 0.04,
//           longitudeDelta: 0.03
//         }}
//       />

//     </Container>
//   );
// };

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

// test

//export default AppleMapLocation;
export default AddMarker;
