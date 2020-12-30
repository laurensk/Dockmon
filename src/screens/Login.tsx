import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

interface PropsType {
  navigation: NavigationScreenProp<any, any>;
}

interface StateType {}

class Login extends React.Component<PropsType, StateType> {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#70a9db'}}>
        <Text>login</Text>
      </View>
    );
  }
}

export default Login;
