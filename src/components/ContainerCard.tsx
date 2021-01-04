import React from 'react';
import {Text, View} from 'react-native';
import {Container} from '../models/Container';

interface PropsType {
  container: Container;
}

class ContainerCard extends React.Component<PropsType> {
  render() {
    const {container} = this.props;
    return (
      <View
        style={{
          height: 80,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            marginLeft: 17,
            height: 1,
            borderTopWidth: 0.8,
            borderColor: '#C6C6C8',
          }}></View>
        <View style={{flex: 1, padding: 10, paddingLeft: 17}}>
          <Text>{container.Names[0]}</Text>
        </View>
      </View>
    );
  }
}

export default ContainerCard;
