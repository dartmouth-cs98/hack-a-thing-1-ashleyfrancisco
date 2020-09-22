import { StatusBar } from 'expo-status-bar';
//import * as React from 'react';
import {Component} from 'react';
import React from 'react';
import Styled from 'styled-components/native';
import MapView, {Marker} from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GraphsScreen from './components/GraphScreen';
import MapScreen from './components/MapScreen';
import HomeScreen from './components/HomeScreen';
import { StyleSheet, Text, View, Button } from 'react-native';

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
function clickButton(){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to my react-native app that has a bar graph and implements an Apple Map!</Text>
    </View>
  )
}


// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Button title="Click Me!"
//       onPress={clickButton}/>
//     </View>
//   );
// }

// export default class App extends Component{
//   constructor(){
//     super();
//     this.state={visible:true}
//   }
//   showText = ()=> {
//     if (this.state.visible){
//       return <clickButton />
//     }
//     return(
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Button title="Hello!" onPress={this.showText}></Button>
//       </View>
//     )
//   }
//   render(){
//     return (
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen name="Home" component={HomeScreen} />
//           <Tab.Screen name="Graphs" component={GraphsScreen} />
//           <Tab.Screen name="Map" component={MapScreen}/>
//         </Tab.Navigator>
//       </NavigationContainer>
//     );
//   }
// }


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

