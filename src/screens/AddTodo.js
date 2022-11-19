import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodoReducer} from '../redux/todosSlice';
import {useNavigation} from '@react-navigation/native';
const AddTodo = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleAdd = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000000),
      text: name,
      isCompleted: false,
    };
    if (newTodo.text.length === 0) {
      // eslint-disable-next-line no-alert
      alert('Please enter Something dude!');
    } else {
      dispatch(addTodoReducer(newTodo));
      navigation.goBack();
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a Task</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="task"
          onChangeText={text => {
            setName(text);
          }}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handleAdd()}>
        <Text style={styles.text}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 35,
    marginTop: 10,
  },
  textInput: {
    borderBottomColor: '#00000030',
    borderBottomWidth: 1,
    width: '80%',
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    paddingHorizontal: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
  },
  button: {
    marginTop: 30,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    height: 46,
    borderRadius: 11,
  },
  text: {
    color: '#FFF',
    fontSize: 20,
  },
});
export default AddTodo;
