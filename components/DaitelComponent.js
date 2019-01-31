import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'

export default class MainComponent extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}> This is DaitelScreen </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
   flex: 1,
   justifyContent: 'center',
   backgroundColor: '#EE3B3B',
   alignItems: 'center'
  },
  text: {
    fontWeight: "bold",
    fontSize: 22,
    color: 'white',
  }
});