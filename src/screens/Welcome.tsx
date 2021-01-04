import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationScreenProp} from 'react-navigation';
import AppContext from '../components/AppContext';

interface PropsType {
  navigation: NavigationScreenProp<any, any>;
}

class Welcome extends React.Component<PropsType, any> {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#70a9db',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/dockmon_cubes.png')}
            style={{width: 150, height: 131, marginTop: 35}}></Image>
          <Text
            style={{
              marginTop: 60,
              color: 'white',
              fontSize: 22,
              fontWeight: 'bold',
            }}>
            Welcome to Dockmon
          </Text>
          <Text
            style={{
              marginTop: 20,
              color: 'white',
              fontSize: 17,
              paddingHorizontal: 50,
              textAlign: 'center',
            }}>
            With Dockmon, you can monitor all your Docker containers with ease,
            get push-notifications and always make sure your containers are
            running.
          </Text>
        </View>
        <View style={{width: '100%', paddingHorizontal: 30}}>
          <TouchableOpacity
            onPress={() => this.login()}
            style={{
              marginBottom: 15,
              borderRadius: 15,
              padding: 15,
              backgroundColor: '#337AB7',
              width: '100%',
              alignSelf: 'stretch',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                textAlign: 'center',
                fontWeight: '500',
              }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  login() {
    this.props.navigation.navigate('Login');
  }
}

export default AppContext(Welcome);
