import React from 'react';
import {Layout} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {Text} from '../../Components/Common';
import UserUI from './UserUI';
import {User} from '../../Constants/types';

interface Props {
  navigation: NavigationProp<any>;
  route: RouteProp<Record<string, {user: User}>, string>;
}

const UserScreen = ({navigation, route}: Props) => {
  const {user} = route.params;
  return <UserUI {...{user}} />;
};

export default UserScreen;
