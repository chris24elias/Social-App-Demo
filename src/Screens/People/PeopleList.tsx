import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {FlatList} from 'react-native';
import UserListItem from './UserListItem';
import {User} from '../../Constants/types';
import {MOCK_USERS} from '../../Constants/Mock';

interface Props {}

const PeopleList = ({}: Props) => {
  const _renderItem = ({item}) => {
    return <UserListItem user={item} />;
  };

  return (
    <FlatList
      data={MOCK_USERS}
      renderItem={_renderItem}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default PeopleList;
