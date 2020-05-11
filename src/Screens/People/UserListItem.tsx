import React from 'react';
import {Layout} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {ListItem} from 'react-native-elements';
import {User} from '../../Constants/types';
import Colors from '../../Constants/Colors';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Button, Text} from '../../Components/Common';
import {SCREEN_WIDTH} from '../../Constants';
import AsyncImageAnimated from 'react-native-async-image-animated';

interface Props {
  user: User;
  onUserPress: () => void;
}

const UserListItem = ({user, onUserPress}: Props) => {
  const {following, isFollowingMe, name, profile_picture, online} = user;

  const renderRightElement = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: Colors.secondary,
          // padding: 7,
          borderRadius: 8,
          // paddingHorizontal: 25,
          width: SCREEN_WIDTH * 0.25,
          height: 35,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 13}}>
          {following ? 'Unfollow' : isFollowingMe ? 'Follow back' : 'Follow'}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderLeftAvatar = () => {
    return (
      <View style={{}}>
        {/* <Image
          style={{height: 40, width: 40, borderRadius: 20}}
          source={{uri: profile_picture}}
        /> */}
        <AsyncImageAnimated
          animationStyle="fade"
          source={{uri: profile_picture}}
          placeholderColor={Colors.secondary}
          resizeMode="cover"
          style={{height: 40, width: 40, borderRadius: 20}}
        />
        {online && <View style={styles.greenCircle} />}
      </View>
    );
  };

  return (
    <ListItem
      onPress={onUserPress}
      containerStyle={{
        backgroundColor: Colors.primary,
      }}
      titleStyle={{color: 'white'}}
      title={name}
      bottomDivider
      leftAvatar={renderLeftAvatar()}
      rightElement={renderRightElement()}
    />
  );
};

export default UserListItem;

const greenCircleSize = 10;

const styles = StyleSheet.create({
  greenCircle: {
    backgroundColor: '#4cd137',
    height: greenCircleSize,
    width: greenCircleSize,
    borderRadius: greenCircleSize / 2,
    borderWidth: 1,
    borderColor: Colors.primary,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
