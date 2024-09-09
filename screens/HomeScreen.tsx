import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Adicionar Produto" onPress={() => navigation.navigate('Adicionar Produto')} />
      <Button title="Ver Produtos" onPress={() => navigation.navigate('Lista de Produtos')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});