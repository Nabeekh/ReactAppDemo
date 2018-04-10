import React, {Component} from 'react';
import {Text,AsyncStorage, TextInput, TouchableHighlight, View,StyleSheet, Image, NavigatorIOS, RefreshControl, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import { Card } from "react-native-elements";
export default class Settings extends Component {


	  constructor(props) {

    super(props)
    this.state = {
      user:{},
    }
  };

  async getUser() {
  	try {
  		const user = await AsyncStorage.getItem('@UserObj:User');
  		this.setState({user: JSON.parse(user)});
  	} catch (error) {
  		console.log("Error retrieving data" + error);
  	}
  }
	componentDidMount(){
		this.getUser();
	}
	handleInputs(key , value){
		user = this.state.user;
		key == "password"? user.password = value: user.userName = value;
		this.setState({
			user: user
		});
	}
	updateInfo(){
		alert("info updated");
	}
	logout(){
		alert("cannot logout.")
	}
	render(){
		return(
			<View style={{marginTop: 50, marginLeft:10}}>
			<Text>User Name: {this.state.user.userName}</Text>
			<TextInput
			value={this.state.user.userName}
			style={styles.input}
			placeholder="Username"
			onChangeText={(text) => this.handleInputs("userName", text)}
			/>

			<Text>User password: {this.state.user.password}</Text>
			<TextInput
			value={this.state.user.password}
			style={styles.input}
			placeholder="Username"
			onChangeText={(text) => this.handleInputs("password", text)}
			/>

			<TouchableHighlight
			style={styles.submit}
			onPress={this.updateInfo .bind(this)}>
			<Text style={styles.submitText}>Update</Text>
			</TouchableHighlight>
			<TouchableHighlight
			style={styles.logout}
			onPress={this.logout.bind(this)}>
			<Text style={styles.submitText}>Logout</Text>
			</TouchableHighlight>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  input:{
   height: 50,
    width: 350,
    borderColor: '#ba1013',
    borderWidth: 2,
     marginTop: 10,
    borderRadius: 10,
    fontSize: 20,
   backgroundColor: '#fff',
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
  logout:{
  	marginRight:40,
  	marginLeft:40,
  	marginTop:50,
  	paddingTop:18,
  	paddingBottom:18,
  	paddingRight:15,
  	paddingLeft:15,
  	backgroundColor:'#070000',
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