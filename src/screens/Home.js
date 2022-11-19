import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Todolist from '../components/Todolist';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
const Home = () => {
  const todos = useSelector(state => state.todos.todos);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/564x/51/60/b8/5160b8ae57eadbce633e166c8c7e1164.jpg',
        }}
        style={styles.pic}
      />
      <View style={styles.completed}>
        <Text style={styles.title}>My Todo Appilication</Text>
      </View>
      <Todolist todosData={todos} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Add')}
        style={styles.button}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  pic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 35,
    marginTop: 10,
    alignSelf: 'center',
  },
  completed: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#3478f6',
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 50,
    right: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  plus: {
    fontSize: 40,
    color: '#FFF',
    position: 'absolute',
    top: -6,
    left: 9,
  },
});

export default Home;
