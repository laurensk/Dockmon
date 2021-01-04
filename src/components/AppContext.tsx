import React from 'react';
import {useColorScheme} from 'react-native';

export default (Component: any) => {
  return (props: any) => {
    const colorScheme = useColorScheme();
    return <Component {...props} colorScheme={colorScheme} />;
  };
};
