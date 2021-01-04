import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, Alert, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationScreenProp} from 'react-navigation';
import {ApiService} from '../api/ApiService';
import AppContext from '../components/AppContext';
import ContainerCard from '../components/ContainerCard';
import SummaryCard from '../components/SummaryCard';
import {Container} from '../models/Container';
import {Summary} from '../models/Summary';
import {AuthUtils} from '../utils/AuthUtils';

interface PropsType {
  navigation: NavigationScreenProp<any, any>;
}

interface StateType {
  summary: Summary | null;
}

class Home extends React.Component<PropsType, StateType> {
  interval: any;

  constructor(props: PropsType) {
    super(props);
    this.state = {
      summary: null,
    };
  }

  componentDidMount() {
    this.checkAuth();
  }

  async checkAuth() {
    if (!(await AuthUtils.isAuth())) {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Welcome'}],
        }) as any,
      );
    } else {
      this.getData(true);
      this.interval = setInterval(() => this.getData(false), 10000);
    }
  }

  async getData(init: boolean) {
    const summary = await ApiService.getData(init);
    if (!summary) return Alert.alert('Error', 'An unknown error occurred.');
    this.setState({summary: summary});
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#EFEFF4'}}>
        <ScrollView>
          {!this.state.summary && (
            <View style={{marginTop: 50}}>
              <ActivityIndicator size={'small'}></ActivityIndicator>
            </View>
          )}
          {this.state.summary && (
            <SummaryCard summary={this.state.summary}></SummaryCard>
          )}
          {this.state.summary &&
            this.state.summary.containers.map((container) => {
              return (
                <ContainerCard
                  key={container.Id}
                  container={container}></ContainerCard>
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

export default AppContext(Home);
