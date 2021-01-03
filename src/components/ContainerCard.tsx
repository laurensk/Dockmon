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
          marginTop: 10,
          height: 80,
          backgroundColor: 'white',
          borderRadius: 8,
          padding: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 3,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5,
        }}>
        <Text>{container.Names[0]}</Text>
      </View>
    );
  }
}

export default ContainerCard;
