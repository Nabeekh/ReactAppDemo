import React, {Component} from 'react';
import { StyleSheet, Text,Image, View, FlatList,Button,ScrollView, ImageBackground,TouchableOpacity, Animated, Vibration, TextInput } from 'react-native';
import { Card, ListItem } from 'react-native-elements';



export default class Contact  extends React.Component {
    render(){
      return(
        <ScrollView  style={{position: 'absolute',top: 0,left: 0,right: 0,bottom: 0}}>
        		<Card title="User Card">
        		<View>
        		<Image
        		style={styles.displayImage}
        		resizeMode="cover"
        		source={require('../assets/userAvatar.png')}
        		/>
        		<Text style={styles.text}>Contact: 0920377223</Text>
        		<Text style={styles.text}>Email: email@gmail.com</Text>
        		<Text style={styles.text}>Web: www.awesome.com</Text>
        		<View style={{flex:1, flexDirection: 'row'}}>
        		<TouchableOpacity>
        		<Image
        		resizeMode="cover"
        		style={styles.socialIcon}
        		source={require('../assets/facebook.png')}
        		/>
        		</TouchableOpacity>
        		<TouchableOpacity>
        		<Image
        		style={styles.socialIcon}
        		resizeMode="cover"
        		source={require('../assets/snapchat.png')}
        		/>
        		</TouchableOpacity>
        		<TouchableOpacity>
        		<Image
        		style={styles.socialIcon}
        		resizeMode="cover"
        		source={require('../assets/instagram.jpg')}
        		/>
        		</TouchableOpacity>
        		</View>
        		</View>
        		</Card>

        		<Card title="Bussiness Card">
        		<View>
        		<Image
        		style={styles.displayImage}
        		resizeMode="cover"
        		source={require('../assets/bussinesAvatar.jpg')}
        		/>
        		<Text style={styles.text}>Contact: 0920377223</Text>
        		<Text style={styles.text}>Email: email@gmail.com</Text>
        		<Text style={styles.text}>Web: www.awesome.com</Text>
        		<View style={{flex:1, flexDirection: 'row'}}>
        		<TouchableOpacity>
        		<Image
        		resizeMode="cover"
        		style={styles.socialIcon}
        		source={require('../assets/facebook.png')}
        		/>
        		</TouchableOpacity>
        		<TouchableOpacity>
        		<Image
        		style={styles.socialIcon}
        		resizeMode="cover"
        		source={require('../assets/snapchat.png')}
        		/>
        		</TouchableOpacity>
        		<TouchableOpacity>
        		<Image
        		style={styles.socialIcon}
        		resizeMode="cover"
        		source={require('../assets/instagram.jpg')}
        		/>
        		</TouchableOpacity>
        		</View>
        		</View>
        		</Card>
        </ScrollView>
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
  	text:{
  		fontFamily: 'Cochin',
  		fontSize: 15,
  		fontWeight: 'bold',
  	},
  	socialIcon:{
  		width: 50,
  		height:50
  	}

})
