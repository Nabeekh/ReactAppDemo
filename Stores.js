import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { AppRegistry, Image, TouchableOpacity, NavigatorIOS, RefreshControl, ActivityIndicator } from 'react-native';
import {StackNavigator} from 'react-navigation';
import StoreView from './storeDetailsModal';
import PopupDialog, { DialogTitle , SlideAnimation}from 'react-native-popup-dialog';
import StoreProducts from './StoreProducts'

export default class Stores extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			stores: [],
			refreshing : false,
			loader: true,
			showdetails: false,
			selectedStore: {}
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
	showproducts(){
		this.props.navigator.push({
			title: this.state.selectedStore.DisplayName+ ' Products',
			component: StoreProducts,
			passProps: {store: this.state.selectedStore}
		});
	}
	_onRefresh() {
		this.setState({refreshing: true});
		this.getStores().then((data) => {
			this.setState({
				stores: data,
				refreshing:false
			})
		})
	}
	viewDetails(storeobj){

		let bool = this.state.showdetails? false: true
		this.setState({
			showdetails:bool,
			selectedStore: storeobj
		})
		this.popupDialog.show(() => {
			console.log('Show Dailouge')
		});
	}
	closePopUp(){
		this.popupDialog.dismiss(() => {
			console.log('callback - will be called immediately')
		});
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
			<View style={styles.container}>
			<PopupDialog
			dialogTitle={<DialogTitle title={this.state.selectedStore.DisplayName} />}
			ref={(popupDialog) => { this.popupDialog = popupDialog; }}
			dialogAnimation={slideAnimation}
			>
			<StoreView showProducts={this.showproducts.bind(this)} store={this.state.selectedStore}/>
			</PopupDialog>
			<ScrollView style={{position: 'absolute',top: 0,left: 0,right: 0,bottom: 0}}
			refreshControl={
				<RefreshControl
				refreshing={this.state.refreshing}
				onRefresh={this._onRefresh.bind(this)}/>}>

				<ActivityIndicator animating={this.state.loader} size="large" color="#ba1013"/>

				{
					this.state.stores.map((store, index)=>{
						return(

							<TouchableOpacity key={store._id} activeOpacity={.9} onPress={this.viewDetails.bind(this, store)}>
							<View style = {styles.item}>
							<Image source={{uri : store.DisplayPicture}} style={styles.displayImage}/>
							<Text>{store.DisplayName}</Text>
							</View>
							</TouchableOpacity>

							)
					})

				}
				</ScrollView>
				</View>
				)
	};
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
      	borderWidth: 1,
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
const slideAnimation = new SlideAnimation({
	toValue: 5,
	slideFrom: 'bottom',
});
