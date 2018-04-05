import React, {Component} from 'react';
import {Text, TouchableHighlight, View,StyleSheet, Image, NavigatorIOS, RefreshControl, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import { Card } from "react-native-elements";
export default class StoreProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store: this.props.store,
      products: [],
      refreshing : false,
      loader: true,
    }
  };
  componentDidMount(){
    this.getProducts().then((data) => {
      if(data.length <= 0){
        alert("Store Doesnot Have any product");
      }else{
      this.setState({
        products: data,
        loader: false
      })
      }
    })
  };
    showAr(){
    this.props.navigator.push({
      title: this.state.selectedStore.DisplayName+ ' Product',
      component: StoreProducts
    });
  }
  _onRefresh() {
    this.setState({refreshing: true});
    this.getProducts().then((data) => {
      this.setState({
       products: data,
       loader: false,
       refreshing: false
     })
    })
  }
  getProducts(){
    return fetch('http://wcbit-dev.us-west-2.elasticbeanstalk.com/api/store/products', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    ProfileID: this.state.store._id,
  }),
}).then((response) => response.json())
    .then((responseJson) => {
      return responseJson.Products;
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
    return (
      <View style={styles.container}>

      <FlatList
        horizontal
        contentContainerStyle={{height:0, flexGrow:0}}
        data={this.state.products}
        renderItem={({ item: product }) => {
          return (
            <Card
              title={product.ProductDetails.product_name}
              containerStyle={{ padding: 0, width: 300, height:400 }}
            > 
              <Image source={{ uri: product.ProductDetails.Image }} style={styles.displayImage}/>
              <Text style={styles.text}>Price: ${product.BasePrice}</Text>
              <Text style={styles.text}>Category: {product.ProductDetails.barcode}</Text>
            </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />
      </View>
    );
  }
}

  const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 600,
    marginTop: 70
  },
  contentContainer: {
    paddingVertical: 20
  },
  displayImage: {
    width: 280,
    height: 280,
    borderColor: '#2a4944',
  },
  text:{
    fontFamily: 'Cochin',
    fontSize: 15,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    margin: 50,
    height: 500,
    width: 400,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
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