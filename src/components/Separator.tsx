import React from 'react';
import {ColorSchemeName, View} from 'react-native';
import AppContext from './AppContext';

const Separator = (props: {colorScheme: ColorSchemeName}) => {
  const darkMode = props.colorScheme === 'dark';
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
        }}></View>
    </View>
  );
};

export default AppContext(Separator);
