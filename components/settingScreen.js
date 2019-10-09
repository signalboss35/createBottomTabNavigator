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

    componentDidMount() {
      if(this.value){
        this.setState({count: 2});
      }
    }

    componentWillUnmount() {
      console.log('Unmount');
    }

    render() {
      const {count} = this.state;
      console.log('render : ', count);
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {count == 1 ? (<Text>{count}</Text>) : (<Text>{count}</Text>)}  
        </View>
      );
    }
}
