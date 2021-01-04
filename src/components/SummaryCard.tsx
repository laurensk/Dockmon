import React from 'react';
import {Text, View} from 'react-native';
import {Summary} from '../models/Summary';

interface PropsType {
  summary: Summary;
}

class SummaryCard extends React.Component<PropsType> {
  render() {
    const {summary} = this.props;
    return (
      <View
        style={{
          height: 100,
          backgroundColor: 'white',
          padding: 10,
          paddingLeft: 17,
        }}>
        <Text>{summary.endpoints} endpoints</Text>
        <Text>{summary.containers.length} containers</Text>
      </View>
    );
  }
}

export default SummaryCard;
