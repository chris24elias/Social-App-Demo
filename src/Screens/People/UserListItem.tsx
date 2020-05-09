import React from 'react';
import {Layout} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {ListItem, Image} from 'react-native-elements';
import {User} from '../../Constants/types';
import Colors from '../../Constants/Colors';
import {View, TouchableOpacity} from 'react-native';
import {Button, Text} from '../../Components/Common';
import {SCREEN_WIDTH} from '../../Constants';

interface Props {
  user: User;
}

const UserListItem = ({user}: Props) => {
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
    const onlineSize = 10;

    return (
      <View style={{}}>
        <Image
          style={{height: 40, width: 40, borderRadius: 20}}
          source={{uri: profile_picture}}
        />
        {online && (
          <View
            style={{
              backgroundColor: '#4cd137',
              height: onlineSize,
              width: onlineSize,
              borderRadius: onlineSize / 2,
              borderWidth: 1,
              borderColor: Colors.primary,
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
          />
        )}
      </View>
    );
  };

  return (
    <ListItem
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
