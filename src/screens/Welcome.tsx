import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

interface PropsType {
  navigation: NavigationScreenProp<any, any>;
}

interface StateType {}

class Welcome extends React.Component<PropsType, StateType> {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#70a9db'}}>
        <Text>welcome</Text>
        <Button
          title="next"
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}></Button>
      </View>
    );
  }
}

export default Welcome;
