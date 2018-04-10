import React, { Component } from 'react';
import { StyleSheet, Text,Image, View, Button, ImageBackground,TouchableHighlight, Animated, Vibration, TextInput } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default class About extends Component {
  render() {
    return (
      <View style={{flex:1, marginTop:50}}>
      <ImageBackground
       source={require('../assets/image4.jpeg')}
       style={styles.image}
       >
      <Card title="About App">
    
        <View>
          <Image
            style={styles.displayImage}
            resizeMode="cover"
           source={require('../assets/icon.png')}
          />
          <Text style={styles.text}>This app represents the demo for React native aap for IOS. 
          Its simple. View stores, Get there visit card plus there products. Get the resonable price knowledge via this Awesome App.</Text>
        </View>
  </Card>
  </ImageBackground>
      </View>
    )
  }
} 


  const styles = StyleSheet.create({
    displayImage: {
      width: 300,
      height: 300,
      borderColor: '#2a4944',
      alignItems:'center',
      borderWidth: 1,

    },
    image: {
      flexGrow:1,
      height:null,
      width:null,
      alignItems: 'center',
      justifyContent:'center',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontFamily: 'Cochin',
      fontSize: 15,
      fontWeight: 'bold',
    },
  });