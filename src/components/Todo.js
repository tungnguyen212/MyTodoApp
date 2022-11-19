import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Checkbox from './Checkbox';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {deleteTodoReducer} from '../redux/todosSlice';
import {useNavigation} from '@react-navigation/native';
const Todo = ({id, text, isCompleted}) => {
  const navigation = useNavigation();
  const handleDeleteTodo = () => {
    dispatch(deleteTodoReducer(id));
  };
  const pressHandler = () =>
    navigation.navigate('Detail', {text: text, id: id});
  const dispatch = useDispatch();
  return (
    <Pressable style={styles.container} onPress={pressHandler}>
      <View style={styles.wrap}>
        <Checkbox id={id} text={text} isCompleted={isCompleted} />
        <Text
          style={
            isCompleted
              ? [
                  styles.text,
                  {textDecorationLine: 'line-through', color: '#73737330'},
                ]
              : styles.text
          }>
          {text}
        </Text>
      </View>
      <TouchableOpacity onPress={handleDeleteTodo}>
        <MaterialIcons name="delete" size={24} style={styles.delete} />
      </TouchableOpacity>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrap: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
});

export default Todo;
