import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import { AddProductScreen } from './screens/AddProductScreen';
import { ProductListScreen } from './screens/ProductListScreen';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Adicionar Produto" component={AddProductScreen} />
        <Stack.Screen name="Lista de Produtos" component={ProductListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;