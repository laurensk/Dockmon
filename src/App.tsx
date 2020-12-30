import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Settings from './screens/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import {LogBox, StatusBar} from 'react-native';
import Login from './screens/Login';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Dockmon"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#337AB7',
            borderColor: '#BCBCC0',
            shadowOpacity: 0.0,
          },
          headerTitleStyle: {color: 'white'},
        }}
      />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: {
            backgroundColor: '#337AB7',
            borderColor: '#BCBCC0',
            shadowOpacity: 0.0,
          },
          headerTitleStyle: {color: 'white'},
        }}
      />
    </SettingsStack.Navigator>
  );
}

const LoginStack = createStackNavigator();

function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{
          headerStyle: {
            backgroundColor: '#337AB7',
            borderColor: '#BCBCC0',
            shadowOpacity: 0.0,
          },
          headerTitleStyle: {color: 'white'},
        }}
      />
    </LoginStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#337AB7',
          shadowOpacity: 0.0,
          borderTopWidth: 0.0,
          borderColor: '#BCBCC0',
        },
        activeTintColor: 'white',
        inactiveTintColor: '#d6d6d6',
      }}>
      <Tab.Screen
        name="Dockmon"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="cube-outline"
              size={size}
              color={focused ? 'white' : '#d6d6d6'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="cog-outline"
              size={size}
              color={focused ? 'white' : '#d6d6d6'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AppStack = createStackNavigator();

function AppStackScreen() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Tabs"
        component={TabScreen}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="Dockmon"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="Login"
        component={LoginStackScreen}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
}

export default function App() {
  StatusBar.setBarStyle('light-content');
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <AppStackScreen></AppStackScreen>
    </NavigationContainer>
  );
}
