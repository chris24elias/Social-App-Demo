import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {FlatList, Image, View, StyleSheet} from 'react-native';
import {generateRandomPics} from '../../Utils/Functions';
import AsyncImageAnimated from 'react-native-async-image-animated';
import Colors from '../../Constants/Colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Constants';
import {FlatGrid} from 'react-native-super-grid';

interface Props {}
const itemSize = (SCREEN_WIDTH / 2) * 0.9;
const numColumns = 2;
const UserPosts = ({}: Props) => {
  const _renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
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
    // <FlatList
    //   data={generateRandomPics(25)}
    //   renderItem={_renderItem}
    //   keyExtractor={(item, index) => index.toString()}
    //   numColumns={numColumns}
    //   //   style={{padding: 10, }}
    //   contentContainerStyle={{}}
    //   showsVerticalScrollIndicator={false}
    // />

    <FlatGrid
      itemDimension={itemSize}
      items={generateRandomPics(25)}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={_renderItem}
    />
  );
};

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    // borderRadius: 5,
    // padding: 5,
    height: itemSize,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

export default UserPosts;
