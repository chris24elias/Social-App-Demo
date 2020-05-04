import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import Post from '.';

interface Props {
  posts: any[];
}

const PostList = ({posts}: Props) => {
  return (
    <ScrollView>
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </ScrollView>
  );
};

export default PostList;
