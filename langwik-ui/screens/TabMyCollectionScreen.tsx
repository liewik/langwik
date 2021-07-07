import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
// @ts-ignore
import { v4 } from 'uuid';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { FloatingAction } from "react-native-floating-action";
import {MyCard} from "../components/MyCard";

export default function TabMyCollectionScreen() {
  const list = [{
    title: 'Name',
    text: 'lorem loremlorem loremlorem loremvvlorem lorem',
    imgUrl: '',
  }, {
    title: 'Name2',
    text: 'lorem loremlorem loremlorem loremvvlorem lorem',
    imgUrl: '',
  },{
    title: 'Name',
    text: 'lorem loremlorem loremlorem loremvvlorem lorem',
    imgUrl: '',
  }, {
    title: 'Name2',
    text: 'lorem loremlorem loremlorem loremvvlorem lorem',
    imgUrl: '',
  },{
    title: 'Name',
    text: 'lorem loremlorem loremlorem loremvvlorem lorem',
    imgUrl: '',
  }, {
    title: 'Name2',
    text: 'lorem loremlorem loremlorem loremvvlorem lorem',
    imgUrl: '',
  },{
    title: 'Name',
    text: 'lorem loremlorem loremlorem loremvvlorem lorem',
    imgUrl: '',
  }, {
    title: 'Name2',
    text: 'lorem loremlorem loremlorem loremvvlorem lorem',
    imgUrl: '',
  },{
    title: 'Name',
    text: 'lorem loremlorem loremlorem loremvvlorem lorem',
    imgUrl: '',
  }, {
    title: 'Name2',
    text: 'lorem loremlorem loremlorem loremvvlorem lorem',
    imgUrl: '',
  },{
    title: 'Name',
    text: 'lorem loremlorem loremlorem loremvvlorem lorem',
    imgUrl: '',
  }, {
    title: 'Name2',
    text: 'lorem loremlorem loremlorem loremvvlorem lorem',
    imgUrl: '',
  }]

  return (
    <View>
      <FlatList data={list} renderItem={({ item }) => <MyCard key={v4()} text={item.text} imgUrl={item.imgUrl} title={item.title}/>}></FlatList>
      <FloatingAction
          onPressMain={() => console.log('hello')}
          showBackground={false}
          position="center"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
