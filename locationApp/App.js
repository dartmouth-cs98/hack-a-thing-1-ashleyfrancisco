import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
// import React from 'react';
import Styled from 'styled-components/native';
import MapView, {Marker} from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GraphsScreen from './components/GraphScreen';
import MapScreen from './components/MapScreen';
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


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Location Tracker through Graphs!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Graphs" component={GraphsScreen} />
        <Tab.Screen name="Map" component={MapScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

