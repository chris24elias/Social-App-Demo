import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {StyleSheet, View, Image} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../Constants';
import PostHeader from './PostHeader';
import {PostInterface} from '../../../Constants/types';
import PostFooter from './PostFooter';
import Colors from '../../../Constants/Colors';

interface Props {
  post: PostInterface;
  onUserPress: () => void;
}

const SIZE = SCREEN_WIDTH;

const Post = ({post, onUserPress}: Props) => {
  const {comments, image, likes, caption, id, timestamp, user} = post;
  const {name, profile_picture} = user;
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <PostHeader
          avatar={profile_picture}
          username={name}
          {...{onUserPress}}
        />
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <PostFooter {...{likes, caption}} />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: SCREEN_WIDTH,
    padding: 15,
  },
  innerContainer: {
    // shadowColor: "#9b9b9b",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.7,
    // shadowRadius: 2,
    // elevation: 1,
    borderRadius: 19,
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  imageContainer: {
    padding: 15,
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 19,
    height: SIZE,
    width: undefined,
  },
});
