import React, {useState} from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import HomeUI from './HomeUI';

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const HomeScreen = ({navigation, route}: Props) => {
  return <HomeUI />;
};

export default HomeScreen;
