import React, {Component} from 'react';
import {Text, TouchableHighlight, View,StyleSheet, Image, NavigatorIOS} from 'react-native';
import StoreProducts from './StoreProducts'
export default class StoreView extends Component {
  formatDate(date){
    var formattedDate = new Date(date);
    var newDate = formattedDate.getDay().toString() + "/" + formattedDate.getMonth().toString() + "/" + formattedDate.getFullYear().toString();
    return newDate;
  }
  showProducts(){
    this.props.showProducts();
  }
  render() {
    return (
      <View style={styles.container}>
      <Image source={{uri : this.props.store.DisplayPicture}} style={styles.displayImage}/>
      <Text style={styles.text}> Store: {this.props.store.DisplayName}</Text>
      <Text style={styles.text}> Contact : {this.props.store.PhoneNumber}</Text>
      <Text style={styles.text}> Rating : {this.props.store.Rating}</Text>
      <Text style={styles.text}> Joined on : {this.formatDate(this.props.store.DOB)}</Text>
      <TouchableHighlight
      style={styles.submit}
      onPress={this.showProducts.bind(this)}>
      <Text style={styles.submitText}>Show Products</Text>
      </TouchableHighlight>
      </View>

    );
  }
}

  const styles = StyleSheet.create({
    displayImage: {
      width: 100,
      height: 100,
      borderColor: '#2a4944',
      alignItems:'center',
      borderWidth: 1,

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