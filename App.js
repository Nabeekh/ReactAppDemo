import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground,TouchableHighlight, Animated, Vibration } from 'react-native';
import { AppRegistry, Image, TouchableOpacity, NavigatorIOS,PropTypes,ActivityIndicator } from 'react-native';
import Stores from './Stores'
export default class App extends React.Component {


  render(){
  
  return (
    <NavigatorIOS
      initialRoute={{
        component: HomeScreen,
        title: 'Welcome',
      }}
      // navigationBarHidden={true}
      style={{flex: 1}}
      />
      );
  }
}

class HomeScreen extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
    fadeAnim: new Animated.Value(0)  // Initial value for opacity: 0
  }
    PATTERN = [1, 2, 3, 2];

  };
    _handleBackPress() {
    this.props.navigator.pop();
  }
    componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 5000,              // Make it take a while
      }
    ).start();  
    Vibration.vibrate(this.PATTERN) ;                     // Starts the animation
  }
  ViewStores() {
      this.props.navigator.push({
      title: 'List Stores',
      component: Stores,
      rightButtonTitle: 'refresh',
      onRightButtonPress: function() {
        alert('Refresh will be added later');
      }
    });
  }

  render() {
        return (
           <View style={styles.container}>
              <ImageBackground source={require('./assets/image6.jpeg')} style={styles.image}>
              <Animated.View style={{ opacity: this.state.fadeAnim}}>
              <TouchableHighlight
              style={styles.submit}
              onPress={this.ViewStores.bind(this)}>
              <Text style={styles.submitText}>Get Started</Text>
              </TouchableHighlight>
              </Animated.View>
              </ImageBackground>
            </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  image: {
    flexGrow:1,
    height:null,
    width:null,
    alignItems: 'center',
    justifyContent:'center',
  },
  paragraph: {
    textAlign: 'center',
  },
  submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:500,
    paddingTop:18,
    paddingBottom:18,
    paddingRight:15,
    paddingLeft:15,
    backgroundColor:'#ba1013',
    borderRadius:10,
    borderWidth: 2,
    borderColor: '#fff'
  },
  submitText:{
    color:'#fff',
    fontSize: 18,
    textAlign:'center',
  }
});

