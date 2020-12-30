import React from 'react';
import {Text, View} from 'react-native';

interface PropsType {}

interface StateType {}

class Settings extends React.Component<PropsType, StateType> {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#70a9db'}}>
        <Text>settings</Text>
      </View>
    );
  }
}

export default Settings;
