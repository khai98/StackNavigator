import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'

export default class MainComponent extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}> This is ThirdSreen </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
   flex: 1,
   justifyContent: 'center',
   backgroundColor: '#828282',
   alignItems: 'center'
  },
  text: {
    fontWeight: "bold",
    fontSize: 22,
    color: 'white',
  }
});