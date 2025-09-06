import { useState, useEffect, useMemo } from 'react';
import productsData from '@/data/products.json';
import cartData from '@/data/cart.json';
import purchasesData from '@/data/purchases.json';

export const useProducts = () => {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [purchases, setPurchases] = useState([]);

  // ✅ New states for search and category
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
    else setCart(cartData);

    const savedPurchases = localStorage.getItem('purchases');
    if (savedPurchases) setPurchases(JSON.parse(savedPurchases));
    else setPurchases(purchasesData);
  }, []);

  // ✅ Filtering logic moved here
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    return filtered;
  }, [products, searchQuery, selectedCategory]);

  const addProduct = (productData) => {
    const newProduct = {
      ...productData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0]
    };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    return newProduct;
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return {
    products: filteredProducts, // ✅ already filtered list
    cart,
    purchases,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    addProduct,
    addToCart
  };
};
