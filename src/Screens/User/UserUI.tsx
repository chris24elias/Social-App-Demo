import React from 'react';
import {Layout} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {Text, Icon} from '../../Components/Common';
import Colors from '../../Constants/Colors';
import AppHeader from '../../Components/AppHeader';
import {User} from '../../Constants/types';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../Constants';
import UserPosts from './UserPosts';
import {Image} from 'react-native-elements';
import {Col, Row} from 'native-base';

interface Props {
  user: User;
}
const UserUI = ({user}: Props) => {
  const {
    profile_picture,
    name,
    bio,
    followersCount,
    followingCount,
    postsCount,
    following,
    isFollowingMe,
    online,
  } = user;

  return (
    <Layout style={{flex: 1, backgroundColor: Colors.secondary}}>
      <AppHeader
        title={user.name}
        containerStyle={{
          backgroundColor: Colors.secondary,
          borderBottomWidth: 0,
        }}
        titleStyle={{color: 'white'}}
        showLeft
        leftIconColor={'white'}
      />

      <View style={{flex: 1}}>
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.topHeader}>
            <View style={styles.topInner}>
              <View style={styles.profilePictureContainer}>
                <Image
                  source={{
                    uri: profile_picture,
                  }}
                  style={styles.profile_picture}
                />

                <Text style={styles.username}>{name}</Text>
                <Text style={styles.bio}>{bio}</Text>
                <View style={styles.infoContainer}>
                  <Col style={styles.textInfoContainer}>
                    <Text style={styles.textValue}>{postsCount}</Text>
                    <Text style={styles.textLabel}>Posts</Text>
                  </Col>
                  <View style={styles.divider} />
                  <Col style={styles.textInfoContainer}>
                    <Text style={styles.textValue}>{followersCount}</Text>
                    <Text style={styles.textLabel}>Followers</Text>
                  </Col>
                  <View style={styles.divider} />
                  <Col style={styles.textInfoContainer}>
                    <Text style={styles.textValue}>{followingCount}</Text>
                    <Text style={styles.textLabel}>Following</Text>
                  </Col>
                </View>
                <Row style={{marginTop: 20}}>
                  <TouchableOpacity style={styles.followBtn}>
                    <Text style={styles.followText}>Follow</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.messageBtn}>
                    <Icon name="send" fill="white" type="Feather" size={20} />
                  </TouchableOpacity>
                </Row>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: Colors.primary,
              paddingTop: 20,
            }}>
            <UserPosts />
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default UserUI;

const profilePicSize = 75;

const styles = StyleSheet.create({
  floatingHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
  },
  scrollViewContainer: {
    backgroundColor: Colors.secondary,
  },
  topHeader: {
    // height: SCREEN_HEIGHT * 0.35,
    zIndex: 100,
    backgroundColor: Colors.primary,
  },
  topInner: {
    flex: 1,
    backgroundColor: Colors.secondary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  profilePictureContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  profile_picture: {
    height: profilePicSize,
    width: profilePicSize,
    borderRadius: profilePicSize / 2,
  },
  username: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 32,
    fontWeight: '500',
  },
  bio: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 15,
    fontWeight: '400',
  },
  infoContainer: {
    // flex: 2,
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  textInfoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textValue: {
    fontWeight: '700',
    color: 'white',
  },
  textLabel: {
    fontWeight: '400',
    color: 'rgba(255,255,255,0.5)',
  },
  divider: {
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 1,
  },
  followBtn: {
    height: 40,
    width: 150,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    marginHorizontal: 5,
  },
  followText: {
    color: 'white',
    fontWeight: '500',
  },
  messageBtn: {
    height: 40,
    width: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    marginHorizontal: 5,
    paddingTop: 3,
  },
});
