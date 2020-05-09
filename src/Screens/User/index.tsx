import React from 'react';
import {Layout} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {Text} from '../../Components/Common';

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const UserScreen = ({navigation, route}: Props) => {
  return (
    <Layout style={{flex: 1}}>
      <Text>UserScreen</Text>
    </Layout>
  );
};

export default UserScreen;
