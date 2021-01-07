import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {LogBox, Platform, StatusBar, useColorScheme} from 'react-native';
import 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import {AuthUtils} from './utils/AuthUtils';
import {OrientationUtils} from './utils/OrientationUtils';

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        headerRight: () => {
          return route.name == 'Home' ? (
            <TouchableOpacity
              style={{marginRight: 20, marginBottom: 1}}
              onPress={() => AuthUtils.logoutAlert(navigation)}>
              <Icon name="log-out-outline" size={25} color="#ffffff"></Icon>
            </TouchableOpacity>
          ) : null;
        },
      })}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Dockmon',
          headerLeft: () => null,
          headerStyle: {
            backgroundColor: useColorScheme() == 'dark' ? '#1a5a91' : '#337AB7',
            borderColor: '#BCBCC0',
            shadowOpacity: 0.0,
          },
          headerTitleStyle: {color: 'white'},
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          animationEnabled: false,
          headerStyle: {
            backgroundColor: useColorScheme() == 'dark' ? '#1a5a91' : '#337AB7',
            borderColor: '#BCBCC0',
            shadowOpacity: 0.0,
          },
          headerTitleStyle: {color: 'white'},
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerLeft: () => null,
          headerStyle: {
            backgroundColor: useColorScheme() == 'dark' ? '#1a5a91' : '#337AB7',
            borderColor: '#BCBCC0',
            shadowOpacity: 0.0,
          },
          headerTitleStyle: {color: 'white'},
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  StatusBar.setBarStyle('light-content');
  OrientationUtils.lock();
  LogBox.ignoreAllLogs();
  if (Platform.OS == 'android') StatusBar.setBackgroundColor('#337AB7');
  return (
    <NavigationContainer>
      <StackScreen></StackScreen>
    </NavigationContainer>
  );
}
