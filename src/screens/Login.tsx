import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationScreenProp} from 'react-navigation';
import {ApiService} from '../api/ApiService';

interface PropsType {
  navigation: NavigationScreenProp<any, any>;
}

interface StateType {
  endpoint: string;
  username: string;
  password: string;
}

class Login extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      endpoint: '',
      username: '',
      password: '',
    };
  }
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#70a9db'}}>
        <SafeAreaView
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/dockmon_cubes.png')}
              style={{width: 100, height: 88}}></Image>
            <TextInput
              onChangeText={(t) => this.setState({endpoint: t})}
              autoCompleteType={'off'}
              autoCapitalize={'none'}
              autoCorrect={false}
              placeholder="Portainer URL"
              keyboardType={'url'}
              style={{
                paddingHorizontal: 20,
                width: 250,
                height: 53,
                borderRadius: 15,
                backgroundColor: '#CBD7E5',
                marginTop: 40,
              }}></TextInput>
            <TextInput
              onChangeText={(t) => this.setState({username: t})}
              placeholder="Username"
              autoCompleteType={'off'}
              autoCapitalize={'none'}
              autoCorrect={false}
              style={{
                paddingHorizontal: 20,
                width: 250,
                height: 53,
                borderRadius: 15,
                backgroundColor: '#CBD7E5',
                marginTop: 10,
              }}></TextInput>
            <TextInput
              onChangeText={(t) => this.setState({password: t})}
              placeholder="Password"
              autoCorrect={false}
              autoCompleteType={'password'}
              autoCapitalize={'none'}
              secureTextEntry={true}
              style={{
                paddingHorizontal: 20,
                width: 250,
                height: 53,
                borderRadius: 15,
                backgroundColor: '#CBD7E5',
                marginTop: 10,
              }}></TextInput>
          </View>
          <View
            style={{
              width: '100%',
              paddingHorizontal: 30,
              alignItems: 'center',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => this.login()}
              style={{
                marginBottom: 15,
                borderRadius: 15,
                padding: 15,
                backgroundColor: '#337AB7',
                width: 250,
                alignSelf: 'stretch',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  textAlign: 'center',
                  fontWeight: '500',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              marginTop: 30,
              color: 'white',
              fontSize: 16,
              paddingHorizontal: 50,
              textAlign: 'center',
            }}>
            You need Portainer on your Docker node to use Dockmon. When
            Portainer is already running, login with your credentials.
          </Text>
        </SafeAreaView>
      </ScrollView>
    );
  }

  login() {
    const {endpoint, username, password} = this.state;
    if (endpoint.length <= 0 || username.length <= 0 || password.length <= 0)
      return Alert.alert(
        'Credentials required',
        'Please enter your Portainer credentials to log in.',
      );

    ApiService.loginWith(endpoint, username, password, (result: boolean) => {
      if (result) {
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Tabs'}],
          }) as any,
        );
      } else {
        Alert.alert(
          'Login failed',
          'Make sure URL, username and password are correct.',
        );
      }
    });
  }
}

export default Login;
