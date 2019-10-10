import React from 'react';
import { View, Text, ToastAndroid } from 'react-native';
export default class SettingsScreen extends React.Component {
  value = null
  constructor(props) {
    super(props);
    this.state = { count: 1 };
    this.value = this.props.navigation.state.params.value;
  }

  componentDidMount() {
    this.didFocusListener = this.props.navigation.addListener(
      'didFocus',
      () => {
        console.log('did focus')
        ToastAndroid.show('componentDidMount SettingsScreen!', ToastAndroid.SHORT);
        if (this.value) {
          this.setState({ count: 2 });
        }
      },
    );
  }

  componentWillUnmount() {
    this.didFocusListener.remove();
    this.setState({ count: 1 });
    console.log('Unmount');
  }

  render() {
    const { count } = this.state;
    console.log('render : ', count);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{count}</Text>
      </View>
    );
  }
}
