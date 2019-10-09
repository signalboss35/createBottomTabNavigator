import React from 'react';
import {View, Text, ToastAndroid} from 'react-native';
export default class profileScreen extends React.Component {
    constructor(props) {
        super(props);
        ToastAndroid.show('constructor profileScreen!', ToastAndroid.SHORT);
    }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile!</Text>
        </View>
      );
    }
}
