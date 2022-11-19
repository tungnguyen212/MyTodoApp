import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {updateTodoReducer} from '../redux/todosSlice';
import {useDispatch, useSelector} from 'react-redux';
const Checkbox = ({id, text, isCompleted}) => {
  const dispatch = useDispatch();
  const listTodos = useSelector(state => state.todos.todos);
  const handleCheckbox = () => {
    dispatch(updateTodoReducer({id, isCompleted}));
    listTodos.map(todo => {
      if (todo.id === id) {
        return {...todo, isCompleted: !todo.isCompleted};
      }
      return todo;
    });
    console.log('todo saved successfully');
  };
  return (
    <TouchableOpacity
      style={isCompleted ? styles.checked : styles.unChecked}
      onPress={handleCheckbox}>
      {isCompleted && <Entypo name="check" size={16} color="#FAFAFA" />}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  checked: {
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  unChecked: {
    width: 20,
    height: 20,
    marginRight: 13,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    borderRadius: 6,
    backgroundColor: '#fff',
    marginLeft: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default Checkbox;
