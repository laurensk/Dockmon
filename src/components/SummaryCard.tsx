import React from 'react';
import {ColorSchemeName, Text, View} from 'react-native';
import {Summary} from '../models/Summary';
import Icon from 'react-native-vector-icons/Ionicons';
import AppContext from './AppContext';

interface PropsType {
  summary: Summary;
  colorScheme: ColorSchemeName;
}

class SummaryCard extends React.Component<PropsType> {
  render() {
    const darkMode = this.props.colorScheme === 'dark';
    const {summary} = this.props;
    let upContainers = 0,
      downContainers = 0;
    this.props.summary.containers.forEach((container) => {
      if (container.State === 'running') {
        upContainers++;
      } else {
        downContainers++;
      }
    });
    return (
      <View
        style={{
          height: 100,
          backgroundColor: darkMode ? 'black' : 'white',
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="server-outline" size={35} color="#337AB7"></Icon>
          <Text
            style={{
              marginLeft: 5,
              marginRight: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#337AB7',
            }}>
            {summary.endpoints}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="cube-outline" size={35} color="#337AB7"></Icon>
          <Text
            style={{
              marginLeft: 5,
              marginRight: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#337AB7',
            }}>
            {summary.containers.length}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="happy-outline" size={35} color="#337AB7"></Icon>
          <Text
            style={{
              marginLeft: 5,
              marginRight: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#337AB7',
            }}>
            {upContainers}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="sad-outline" size={35} color="#337AB7"></Icon>
          <Text
            style={{
              marginLeft: 5,
              marginRight: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#337AB7',
            }}>
            {downContainers}
          </Text>
        </View>
      </View>
    );
  }
}

export default AppContext(SummaryCard);
