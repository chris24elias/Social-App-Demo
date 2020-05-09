import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const PeopleScreen = ({navigation, route}: Props) => {
  return (
    <Layout style={{flex: 1}}>
      <Text>LikesScreen</Text>
    </Layout>
  );
};

export default PeopleScreen;
