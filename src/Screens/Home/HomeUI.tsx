import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import AppHeader from '../../Components/AppHeader';
import PostsList from './Post/PostList';
import {PostInterface} from '../../Constants/types';
import Colors from '../../Constants/Colors';
import {posts} from '../../Constants/Mock';

interface Props {}

const HomeUI = ({}: Props) => {
  return (
    <Layout style={{flex: 1, backgroundColor: Colors.primary}}>
      <AppHeader
        title="Home"
        containerStyle={{
          backgroundColor: Colors.secondary,
          borderBottomWidth: 0,
        }}
        titleStyle={{color: 'white'}}
      />
      <PostsList posts={posts} />
    </Layout>
  );
};

export default HomeUI;
