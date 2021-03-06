import React, {useState} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {FlatList} from 'react-native';
import UserListItem from './UserListItem';
import {User} from '../../Constants/types';
import {MOCK_USERS} from '../../Constants/Mock';
import Routes from '../../Navigation/Routes';

interface Props {}

const PeopleList = ({}: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1400);
  };

  const _renderItem = ({item}) => {
    return (
      <UserListItem
        user={item}
        onUserPress={() =>
          navigation.navigate(Routes.USER_SCREEN, {user: item})
        }
      />
    );
  };

  return (
    <FlatList
      data={MOCK_USERS}
      renderItem={_renderItem}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
};

export default PeopleList;
