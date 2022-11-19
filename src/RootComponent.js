import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import AddTodo from './screens/AddTodo';
import DetailTodo from './screens/DetailTodo';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

const RootComponent = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Add" component={AddTodo} />
          <Stack.Screen
            name="Detail"
            component={DetailTodo}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default RootComponent;
