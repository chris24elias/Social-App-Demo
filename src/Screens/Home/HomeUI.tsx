import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import AppHeader from '../../Components/AppHeader';
import PostsList from './Post/PostList';
import {PostInterface} from '../../Constants/types';
import Colors from '../../Constants/Colors';
import {posts} from '../../Constants/Mock';
import {Icon} from '../../Components/Common';
import InstagramLogo from './InstagramLogo';

interface Props {}

const HomeUI = ({}: Props) => {
  const SendIcon = () => {
    return (
      <Icon name="send" type="Feather" size={24} fill="white" style={{}} />
    );
  };

  const CameraIcon = () => {
    return (
      <Icon name="camera" type="Feather" size={24} fill="white" style={{}} />
    );
  };

  return (
    <Layout style={{flex: 1, backgroundColor: Colors.primary}}>
      <AppHeader
        title="Home"
        containerStyle={{
          backgroundColor: Colors.secondary,
          borderBottomWidth: 0,
        }}
        titleStyle={{color: 'white'}}
        rightControls={[<SendIcon />]}
        leftControl={<CameraIcon />}
        titleComponent={<InstagramLogo />}
      />

      <PostsList posts={posts} />
    </Layout>
  );
};

export default HomeUI;
