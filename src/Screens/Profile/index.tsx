import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const ProfileScreen = ({navigation, route}: Props) => {
  return (
    <Layout style={{flex: 1}}>
      <Text>ProfileScreen</Text>
    </Layout>
  );
};

export default ProfileScreen;
