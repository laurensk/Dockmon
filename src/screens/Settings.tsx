import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {Alert, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationScreenProp} from 'react-navigation';
import {AuthUtils} from '../utils/AuthUtils';

interface PropsType {
  navigation: NavigationScreenProp<any, any>;
}

interface StateType {
  endpoint: string;
  user: string;
}

class Settings extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      endpoint: '',
      user: '',
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const userData = await AuthUtils.getAuth();
    this.setState({
      endpoint: userData.endpoint || '',
      user: userData.user || '',
    });
  }

  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#70a9db', padding: 20}}>
        <View style={{padding: 10}}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
              lineHeight: 25,
            }}>
            Endpoint: {this.state.endpoint}
            {'\n'}User: {this.state.user}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.logout()}
          style={{
            marginTop: 10,
            marginBottom: 15,
            borderRadius: 15,
            padding: 15,
            backgroundColor: '#337AB7',
            alignSelf: 'stretch',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
              fontWeight: '500',
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  logout() {
    Alert.alert('Are you sure?', 'You have to log in again to use Dockmon.', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          await AuthUtils.logout();
          this.props.navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'Login'}],
            }) as any,
          );
        },
      },
    ]);
  }
}

export default Settings;
