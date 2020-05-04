import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {View, StyleSheet, Image} from 'react-native';
import {Icon} from '../../../Components/Common';

interface Props {
  avatar: string;
  username: string;
}

const PostHeader = ({avatar, username}: Props) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Image style={styles.avatar} source={{uri: avatar}} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Icon name="more-horizontal" type="Feather" size={24} fill="white" />
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  username: {
    fontWeight: '500',
    fontSize: 16,
    color: 'white',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  header: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
