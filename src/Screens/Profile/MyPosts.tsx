import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {FlatList, Image, View} from 'react-native';
import {generateRandomPics} from '../../Utils/Functions';
import AsyncImageAnimated from 'react-native-async-image-animated';
import Colors from '../../Constants/Colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Constants';

interface Props {}

const MyPosts = ({}: Props) => {
  const _renderItem = ({item}) => {
    const margin = 2.5;
    const size = SCREEN_WIDTH / 3 - margin * 2;

    return (
      <View style={{height: size, width: size, margin}}>
        {/* <AsyncImageAnimated
          animationStyle="fade"
          source={item}
          placeholderColor={Colors.secondary}
          resizeMode="cover"
          style={{height: '100%', width: '100%'}}
        /> */}
        <Image
          source={item}
          style={{height: '100%', width: '100%', borderRadius: 7}}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={generateRandomPics(10)}
      renderItem={_renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
      //   style={{padding: 10, }}
      contentContainerStyle={{}}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MyPosts;
