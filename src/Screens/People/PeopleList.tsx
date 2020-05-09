import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {FlatList} from 'react-native';
import UserListItem from './UserListItem';
import {User} from '../../Constants/types';

const MOCK_USERS: User[] = [
  {
    profile_picture: 'https://picsum.photos/200',
    name: 'John Smith',
    following: false,
    isFollowingMe: false,
    online: false,
  },
  {
    profile_picture: 'https://picsum.photos/200',
    name: 'Jane Smith',
    following: true,
    isFollowingMe: true,
    online: true,
  },
  {
    profile_picture: 'https://picsum.photos/200',
    name: 'Cathy Griffin',
    following: false,
    isFollowingMe: true,
    online: false,
  },
  {
    profile_picture: 'https://picsum.photos/200',
    name: 'Robert Downey Jr',
    following: false,
    isFollowingMe: true,
    online: false,
  },
  {
    profile_picture: 'https://picsum.photos/200',
    name: 'Tony Stark',
    following: false,
    isFollowingMe: false,
    online: true,
  },
  {
    profile_picture: 'https://picsum.photos/200',
    name: 'Marco Polo',
    following: false,
    isFollowingMe: false,
    online: false,
  },
];

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
