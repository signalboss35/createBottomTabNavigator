import React from 'react';
import { View, Text, ToastAndroid } from 'react-native';
export default class profileScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.didFocusListener = this.props.navigation.addListener(
      'didFocus',
      () => {
        console.log('did focus')
        ToastAndroid.show('componentDidMount profileScreen!', ToastAndroid.SHORT);
      },
    );
  }

  componentWillUnmount() {
    this.didFocusListener.remove();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }
}
