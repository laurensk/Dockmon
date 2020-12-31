import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationScreenProp} from 'react-navigation';
import ContainerCard from '../components/ContainerCard';
import SummaryCard from '../components/SummaryCard';
import {AuthUtils} from '../utils/AuthUtils';

interface PropsType {
  navigation: NavigationScreenProp<any, any>;
}

interface StateType {}

class Home extends React.Component<PropsType, StateType> {
  componentDidMount() {
    this.checkAuth();
  }

  async checkAuth() {
    if (!(await AuthUtils.isAuth())) {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Login'}],
        }) as any,
      );
    } else {
      // fetching data
    }
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#70a9db'}}>
        <ScrollView style={{padding: 15}}>
          <SummaryCard></SummaryCard>
          <View style={{height: 15}}></View>
          <ContainerCard></ContainerCard>
          <ContainerCard></ContainerCard>
          <ContainerCard></ContainerCard>
          <ContainerCard></ContainerCard>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
