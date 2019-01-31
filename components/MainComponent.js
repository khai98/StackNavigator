import React, { Component } from 'react';
import { Text, View , StyleSheet} from 'react-native';
import { DaitelScreen, ThirdScreen} from '../sreenNames';
import Button from 'react-native-button'
export default class MainComponent extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}> This is MainScreen </Text>
        <Button
        containerStyle={{ padding: 10, margin: 20, width: 200, height: 45,  borderRadius: 10, backgroundColor:'#778899'}}
        style={{ fontSize:18, color:'white'}}
        onPress={()=> {
          this.props.navigate(DaitelScreen);
        }}
        >Navigate to Daitel</Button>

        <Button
        containerStyle={{ padding: 10, margin: 20, width: 200, height: 45,  borderRadius: 10, backgroundColor:'#778899'}}
        style={{ fontSize:18, color:'white'}}
        onPress={()=> {
          this.props.navigate(ThirdScreen);
        }}
        >Navigate to Third</Button>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
   flex: 1,
   justifyContent: 'center',
   backgroundColor: '#1C86EE',
   alignItems: 'center'
  },
  text: {
    fontWeight: "bold",
    fontSize: 22,
    color: 'white',
  }
});