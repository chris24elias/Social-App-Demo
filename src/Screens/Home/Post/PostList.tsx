import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import Post from '.';
import {PostInterface, User} from '../../../Constants/types';
import Routes from '../../../Navigation/Routes';

interface Props {
  posts: PostInterface[];
}

const PostList = ({posts}: Props) => {
  const navigation = useNavigation();
  const onUserPress = (user: User) => {
    navigation.navigate(Routes.USER_SCREEN, {user});
  };
  return (
    <ScrollView>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            post={post}
            onUserPress={() => onUserPress(post.user)}
          />
        );
      })}
    </ScrollView>
  );
};

export default PostList;
