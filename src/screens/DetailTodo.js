import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {deleteTodoReducer} from '../redux/todosSlice';

const DetailTodo = () => {
  const route = useRoute();
  const {text, id} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const deleteHandler = () => {
    dispatch(deleteTodoReducer(id));
    navigation.goBack();
  };
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.textContent}>{text}</Text>
      <View style={styles.wrapButon}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.textButton}>Go back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={deleteHandler}>
          <Text style={styles.textButton}>Delete Task!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    fontSize: 20,
    color: 'green',
  },
  button: {
    backgroundColor: 'black',
    marginTop: 30,
    width: 80,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  textButton: {
    color: '#FFF',
  },
  wrapButon: {
    flexDirection: 'row',
  },
});
export default DetailTodo;
