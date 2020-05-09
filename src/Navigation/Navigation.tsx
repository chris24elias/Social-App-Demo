import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './Routes';
import HomeScreen from '../Screens/Home';
import {View} from 'react-native';
import SplashScreen from '../SplashScreen';
import Tabs from './Tabs';
import UserScreen from '../Screens/User';

const Stack = createStackNavigator();

let fakeApiCallWithoutBadNetwork = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const Navigation = () => {
  return (
    <View style={{flex: 1}}>
      <SplashScreen onLoad={() => fakeApiCallWithoutBadNetwork(1500)} />
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={Routes.HOME_TABS} component={Tabs} />
        <Stack.Screen name={Routes.USER_SCREEN} component={UserScreen} />
      </Stack.Navigator>
      {/* <Tabs /> */}
    </View>
  );
};

export default Navigation;
