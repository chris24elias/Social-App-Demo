import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import Post from '.';
import {PostInterface} from '../../../Constants/types';

interface Props {
  posts: PostInterface[];
}

const PostList = ({posts}: Props) => {
  return (
    <ScrollView>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </ScrollView>
  );
};

export default PostList;
