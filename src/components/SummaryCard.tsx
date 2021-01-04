import React from 'react';
import {Text, View} from 'react-native';

interface PropsType {}

class SummaryCard extends React.Component<PropsType> {
  render() {
    return (
      <View
        style={{
          height: 100,
          backgroundColor: 'white',
          padding: 10,
          paddingLeft: 17,
        }}>
        <Text>summary</Text>
      </View>
    );
  }
}

export default SummaryCard;
