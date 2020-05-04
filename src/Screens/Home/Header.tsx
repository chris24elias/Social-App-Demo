import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from '../../Components/Common';

// import Logo from "./Logo";

export const HEADER_HEIGHT = 64;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF9F9',
    paddingBottom: 0,
    borderBottomWidth: 1,
    borderColor: '#DADADA',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    height: HEADER_HEIGHT,
  },
});

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Icon name="camera" type="Feather" size={24} />
        {/* <Logo /> */}
        <Icon name="send" type="Feather" size={24} />
      </View>
    </SafeAreaView>
  );
};
