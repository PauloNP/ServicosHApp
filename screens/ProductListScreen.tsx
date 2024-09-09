import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Product {
  id: string;
  name: string;
  description: string;
}

export const ProductListScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const storedProducts = await AsyncStorage.getItem('products');
        if (storedProducts) {
          const parsedProducts = JSON.parse(storedProducts);
          setProducts(Array.isArray(parsedProducts) ? parsedProducts : []);
        }
      } catch (error) {
        console.error('Erro ao carregar produtos', error);
      }
    };

    loadProducts();
  }, []);

  const removeProduct = async (id: string) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    await AsyncStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const renderProductItem = ({ item }: { item: Product }) => (
    <View style={styles.productContainer}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name ?? 'Nome indisponível'}</Text>
        <Text style={styles.productDescription}>
          {item.description ? `${item.description}` : 'Sem descrição disponível'}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Remover" onPress={() => removeProduct(item.id)} color="red" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    flexWrap: 'wrap',
  },
  productInfo: {
    flex: 1,
    paddingRight: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});