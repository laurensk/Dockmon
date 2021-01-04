import React from 'react';
import {ColorSchemeName, Text, View} from 'react-native';
import {Container} from '../models/Container';
import AppContext from './AppContext';

interface PropsType {
  container: Container;
  colorScheme: ColorSchemeName;
}

class ContainerCard extends React.Component<PropsType> {
  render() {
    const darkMode = this.props.colorScheme === 'dark';
    const {container} = this.props;
    return (
      <View
        style={{
          backgroundColor: darkMode ? 'black' : 'white',
        }}>
        <View
          style={{
            marginLeft: 17,
            height: 1,
            borderTopWidth: 0.6,
            borderColor: darkMode ? '#2C2C2E' : '#D4D4D6',
          }}></View>
        <View
          style={{
            marginTop: 8,
            marginBottom: 8,
            paddingRight: 15,
            flexGrow: 1,
            flex: 1,
            padding: 10,
            paddingLeft: 17,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: darkMode ? 'white' : undefined,
                }}>
                {container.Names[0]}
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: darkMode ? 'white' : undefined}}>
                {container.State === 'exited'
                  ? container.Status.split(') ')[1]
                  : container.Status}
                {'  -  '}
              </Text>
              <View
                style={{
                  backgroundColor:
                    container.State === 'running' ? '#5cb85c' : '#d9534f',
                  borderRadius: 5,
                  padding: 5,
                  paddingHorizontal: 10,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  {container.State === 'exited' ? 'stopped' : container.State}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default AppContext(ContainerCard);
