import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {Alert, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationScreenProp} from 'react-navigation';
import {ApiService} from '../api/ApiService';
import ContainerCard from '../components/ContainerCard';
import SummaryCard from '../components/SummaryCard';
import {Container} from '../models/Container';
import {Summary} from '../models/Summary';
import {AuthUtils} from '../utils/AuthUtils';

interface PropsType {
  navigation: NavigationScreenProp<any, any>;
}

interface StateType {
  summary: Summary;
  containers: Container[];
}

class Home extends React.Component<PropsType, StateType> {
  interval: any;
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
      this.getData();
      //this.interval = setInterval(() => this.getData(), 10000);
    }
  }

  async getData() {
    ApiService.getData((summary: Summary, containers: Container[]) => {
      if (summary && containers)
        this.setState({summary: summary, containers: containers});
      else {
        Alert.alert('Error', 'An unknown error occurred.');
      }
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
