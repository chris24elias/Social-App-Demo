import React, {useState} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import AppHeader from '../../Components/AppHeader';
import MasonryList from 'react-native-masonry-list';
import AsyncImageAnimated from 'react-native-async-image-animated';
import {Platform, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Colors from '../../Constants/Colors';
import {generateRandomPics} from '../../Utils/Functions';

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const SearchScreen = ({navigation, route}: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1400);
  };

  return (
    <Layout style={{flex: 1, backgroundColor: Colors.primary}}>
      <AppHeader
        title="Search"
        containerStyle={{backgroundColor: Colors.primary, borderBottomWidth: 0}}
        titleStyle={{color: 'white'}}
      />

      <View style={{paddingHorizontal: 5}}>
        <SearchBar
          placeholder="Search..."
          platform={Platform.OS == 'ios' ? 'ios' : 'android'}
          onChangeText={setSearch}
          value={search}
          containerStyle={{
            backgroundColor: 'transparent',
            paddingTop: 5,
            paddingBottom: 5,
          }}
          inputContainerStyle={{
            backgroundColor: Colors.secondary,
            borderRadius: 19,
            height: 40,
          }}
          inputStyle={{color: 'white'}}
        />
      </View>

      <MasonryList
        backgroundColor={Colors.primary}
        spacing={3}
        imageContainerStyle={{
          borderRadius: 19,
        }}
        rerender={false}
        images={[...generateRandomPics(10)]}
        onRefresh={onRefresh}
        refreshing={refreshing}
        // customImageComponent={Image}
        completeCustomComponent={(props) => {
          const {style, source, data} = props;
          return (
            <AsyncImageAnimated
              animationStyle="fade"
              source={source}
              placeholderColor={Colors.secondary}
              resizeMode="cover"
              style={[style, {borderRadius: 19, alignSelf: 'center'}]}
            />
          );
        }}
      />
    </Layout>
  );
};

export default SearchScreen;
