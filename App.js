import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground,TouchableHighlight, Animated, Vibration, TextInput } from 'react-native';
import { AppRegistry, AsyncStorage, Image, TouchableOpacity, NavigatorIOS,PropTypes,ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TabNavigator } from 'react-navigation';
import Stores from './components/Stores';
import About from './components/About';
import Index from './components/index';
import { NavigationComponent } from 'react-native-material-bottom-navigation'
export default class App extends React.Component {


  render(){
  
  return (
    <NavigatorIOS
      initialRoute={{
        component: HomeScreen,
        title: 'Welcome',
      }}
       navigationBarHidden={true}
      style={{flex: 1}}
      />
      );
  }
}

class HomeScreen extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
    fadeAnim: new Animated.Value(0),
    userName: "nabeekh",
    password: "techverx",
    userNameinPut:'',
    passwordInput: '',
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
    if(this.state.userName == this.state.userNameinPut & this.state.password == this.state.passwordInput){
      this.saveUser(this.state.userName, this.state.password);
      this.props.navigator.push({
      title: 'Home',
      component: Index
    });
    }else{
       alert('Wrong Credentials!');
    }
  }

   async saveUser(userName, password) {
    try {
      await AsyncStorage.setItem('@UserObj:User', JSON.stringify({userName: userName, password: password}));
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  render() {
        return (
           <View style={styles.container}>
              <ImageBackground source={require('./assets/image6.jpeg')} style={styles.image}>
              <Animated.View style={{ opacity: this.state.fadeAnim}}>
              <KeyboardAwareScrollView 
              style={{marginTop:350}}
              resetScrollToCoords={{ x: 0, y: 0 }}
              scrollEnabled={true}>
              <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={(userNameinPut) => this.setState({userNameinPut})}
              />
              <TextInput
               style={styles.input}
              secureTextEntry={true}
              placeholder="Password"
              password={true}
              onChangeText={(passwordInput) => this.setState({passwordInput})}
              />
              <TouchableHighlight
              style={styles.submit}
              onPress={this.ViewStores.bind(this)}>
              <Text style={styles.submitText}>Get Started</Text>
              </TouchableHighlight>
              </KeyboardAwareScrollView>
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
  input:{
    height: 80,
    width: 350,
    borderColor: '#ba1013',
    borderWidth: 2,
     marginTop: 10,
    borderRadius: 10,
    fontSize: 20,
   backgroundColor: '#fff',
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
    marginTop:50,
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
