import React from 'react';
import {View, Text, ToastAndroid} from 'react-native';
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this.didFocusListener = this.props.navigation.addListener(
        'didFocus',
        () => {
          console.log('did focus')
          ToastAndroid.show('componentDidMount HomeScreen!', ToastAndroid.SHORT);
        },
      );
    }
  
    componentWillUnmount() {
      this.didFocusListener.remove();
    }

    render() {
      console.log()
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
        </View>
      );
    }
}
