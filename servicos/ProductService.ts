import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../types/Product';

const PRODUCTS_KEY = 'products';

export const ProductService = {
  async getProducts(): Promise<Product[]> {
    try {
      const storedProducts = await AsyncStorage.getItem(PRODUCTS_KEY);
      return storedProducts ? JSON.parse(storedProducts) : [];
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      return [];
    }
  },

  async saveProduct(newProduct: Product): Promise<void> {
    try {
      const products = await this.getProducts();
      products.push(newProduct);
      await AsyncStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
    }
  },
};
