import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import AppHeader from '../../Components/AppHeader';
import Colors from '../../Constants/Colors';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {SCREEN_HEIGHT} from '../../Constants';
import {Col} from 'native-base';
import {Button, Icon} from '../../Components/Common';
import MyPosts from './MyPosts';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const ProfileScreen = ({navigation, route}: Props) => {
  const BellIcon = () => (
    <TouchableOpacity>
      <Icon name="bell" type="Feather" fill="white" />
    </TouchableOpacity>
  );

  return (
    <Layout style={{flex: 1, backgroundColor: Colors.primary}}>
      <AppHeader
        title="Profile"
        containerStyle={{
          backgroundColor: Colors.secondary,
          borderBottomWidth: 0,
        }}
        titleStyle={{color: 'white'}}
        rightControls={[<BellIcon />]}
      />
      <ScrollView
        style={styles.innerContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.topSection}>
          <View style={styles.flexAndCenter}>
            <Image
              source={{uri: 'https://picsum.photos/200'}}
              style={styles.avatar}
            />
          </View>
          <View style={styles.infoContainer}>
            <Col style={styles.textInfoContainer}>
              <Text style={styles.textValue}>13</Text>
              <Text style={styles.textLabel}>Posts</Text>
            </Col>
            <Col style={styles.textInfoContainer}>
              <Text style={styles.textValue}>3</Text>
              <Text style={styles.textLabel}>Followers</Text>
            </Col>
            <Col style={styles.textInfoContainer}>
              <Text style={styles.textValue}>5</Text>
              <Text style={styles.textLabel}>Following</Text>
            </Col>
          </View>
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
          <View style={styles.flexAndCenter}>
            <Text style={styles.username}>John Smith</Text>
          </View>
          <View style={{flex: 2}} />
        </View>
        <View style={{paddingHorizontal: 15}}>
          <Button
            style={{
              borderRadius: 9,
              marginVertical: 20,
              backgroundColor: Colors.secondary,
              borderWidth: 0,
            }}
            activeOpacity={0.5}
            text="Profile Settings"
          />
        </View>
        {/* <View style={styles.bottomSection}>
          
        </View> */}
        <MyPosts />
      </ScrollView>
    </Layout>
  );
};

export default ProfileScreen;

const avatarSize = SCREEN_HEIGHT * 0.13;

const styles = StyleSheet.create({
  topSection: {
    // height: SCREEN_HEIGHT * 0.2,
    flexDirection: 'row',
    // backgroundColor: 'blue',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  bottomSection: {
    // height: SCREEN_HEIGHT * 0.8,
  },
  flexAndCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontWeight: '700',
    color: 'white',
  },
  avatar: {
    height: avatarSize,
    width: avatarSize,
    borderRadius: avatarSize / 2,
  },
  infoContainer: {
    flex: 2,
    flexDirection: 'row',
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
    color: 'white',
  },
  innerContainer: {
    flex: 1,

    // paddingTop: 15,
  },
});
