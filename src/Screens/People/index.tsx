import React, {useState} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import AppHeader from '../../Components/AppHeader';
import Colors from '../../Constants/Colors';
import {View, Platform, FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';
import PeopleList from './PeopleList';

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const PeopleScreen = ({navigation, route}: Props) => {
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
        title="People"
        containerStyle={{
          backgroundColor: Colors.secondary,
          borderBottomWidth: 0,
        }}
        titleStyle={{color: 'white'}}
      />

      <View style={{paddingHorizontal: 5, marginVertical: 10}}>
        <SearchBar
          placeholder="Find friends..."
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

      <PeopleList />
    </Layout>
  );
};

export default PeopleScreen;
