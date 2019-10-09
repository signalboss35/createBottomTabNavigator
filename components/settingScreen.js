import React from 'react';
import {View, Text, ToastAndroid} from 'react-native';
export default class SettingsScreen extends React.Component {
  value = null
    constructor(props) {
        super(props);
        this.state = {count: 1};
        ToastAndroid.show('constructor SettingsScreen!', ToastAndroid.SHORT);
        this.value = this.props.navigation.state.params.value;
    }

    // componentDidMount() {
    //   console.log('VALUE 1 : ', this.value);
    // }

    componentWillMount() {
      console.log('VALUE 1 : ', this.value);
    }

    render() {
      console.log('VALUE : ', this.value);
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
      );
    }
}
