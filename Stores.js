import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { AppRegistry, Image, TouchableOpacity, NavigatorIOS, RefreshControl, ActivityIndicator } from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class Stores extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			stores: [],
			refreshing : false,
			loader: true
		}
	};
	_handleBackPress() {
		this.props.navigator.pop();
	}

	componentDidMount(){
		this.getStores().then((data) => {
			this.setState({
				stores: data,
				loader: false
			})
		})
	};
	_onRefresh() {
		this.setState({refreshing: true});
		this.getStores().then((data) => {
			this.setState({
				stores: data,
				refreshing:false
			})
		})
	}
	getStores(){
		return fetch('http://wcbit-dev.us-west-2.elasticbeanstalk.com/api/list/stores')
		.then((response) => response.json())
		.then((responseJson) => {
			return responseJson.Stores;
		})
		.catch((error) => {
			console.error(error);
		});
	}
	render(){
		return (

			<ScrollView style={{height: 300,flex: 1}}
			refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}/>
        }
        >
			<ActivityIndicator animating={this.state.loader} size="large" color="#0000ff"/>
        
			{
				this.state.stores.map((store, index)=>{
					return (
					<View key={store._id}  style = {styles.item}>
					<Image source={{uri : store.DisplayPicture}} style={styles.displayImage}/>
					<Text style={{textAlign: 'right'}}>{store.DisplayName}</Text>
					</View>
					)
					})
		}
			</ScrollView>
		)};
	}

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#fff',
			alignItems: 'center',
			justifyContent: 'center',
		},
		contentContainer: {
			paddingVertical: 20
		},
		displayImage: {
			width: 100,
			height: 100,
			borderColor: '#2a4944',

		},
		item: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: 30,
			margin: 2,
			borderColor: '#2a4944',
			borderWidth: 1,
			backgroundColor: '#fff',
		}
	});
