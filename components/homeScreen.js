import React from 'react';
import {View, Text, ToastAndroid} from 'react-native';
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        ToastAndroid.show('constructor HomeScreen!', ToastAndroid.SHORT);
    }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
        </View>
      );
    }
}
