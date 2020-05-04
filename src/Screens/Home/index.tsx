import React, {useState} from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {View, ScrollView} from 'react-native';
import {Layout, Input} from '@ui-kitten/components';
import AppHeader from '../../Components/AppHeader';
import {useStoreState, useStoreActions} from '../../Store';
import {Button, Text} from '../../Components/Common';
import HomeUI from './HomeUI';

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const HomeScreen = ({navigation, route}: Props) => {
  const todos = useStoreState((state) => state.todosModel.todos);
  const addTodo = useStoreActions((actions) => actions.todosModel.addTodo);

  const [inputText, setInputText] = useState('');

  return <HomeUI />;
};

export default HomeScreen;
