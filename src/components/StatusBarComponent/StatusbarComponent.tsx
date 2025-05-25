import {StatusBar} from 'react-native';
import React from 'react';

export default function StatusBarComponent({darkStyle}: {darkStyle: boolean}) {
  return (
    <StatusBar
      translucent={true}
      backgroundColor={'transparent'}
      barStyle={darkStyle ? 'dark-content' : 'light-content'}
    />
  );
}
