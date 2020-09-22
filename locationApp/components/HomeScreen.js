import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class HomeScreen extends Component{
    constructor(){
      super();
      this.state={visible:false}
    }
    showText = ()=> {
      this.setState({visible:!this.state.visible}) //toggle text
    }
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {this.state.visible?<Text style={{textAlign:"center"}}>Welcome to my react-native app that has a bar graph and implements an Apple Map!</Text>:null}
              <Button title="Try again!"
                onPress={this.showText}/>
            </View>
            
        )
    }
  }
  