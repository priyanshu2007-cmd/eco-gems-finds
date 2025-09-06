import { useState, useEffect } from 'react';
import productsData from '@/data/products.json';
import cartData from '@/data/cart.json';
import purchasesData from '@/data/purchases.json';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  sellerId: string;
  createdAt: string;
  condition: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Purchase {
  id: string;
  productId: string;
  userId: string;
  purchaseDate: string;
  price: number;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    } else {
      setCart(cartData);
    }

    const savedPurchases = localStorage.getItem('purchases');
    if (savedPurchases) {
      setPurchases(JSON.parse(savedPurchases));
    } else {
      setPurchases(purchasesData);
    }
  }, []);

  const addProduct = (productData: Omit<Product, 'id' | 'createdAt'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0]
    };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    return newProduct;
  };

  const updateProduct = (id: string, productData: Partial<Product>) => {
    const updatedProducts = products.map(p => 
      p.id === id ? { ...p, ...productData } : p
    );
    setProducts(updatedProducts);
  };

  const deleteProduct = (id: string) => {
    const updatedProducts = products.filter(p => p.id !== id);
    setProducts(updatedProducts);
  };

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    let updatedCart;
    
    if (existingItem) {
      updatedCart = cart.map(item =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const purchaseItems = (userId: string, items: CartItem[]) => {
    const newPurchases = items.map(item => ({
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      productId: item.id,
      userId,
      purchaseDate: new Date().toISOString().split('T')[0],
      price: item.price * item.quantity
    }));

    const updatedPurchases = [...purchases, ...newPurchases];
    setPurchases(updatedPurchases);
    localStorage.setItem('purchases', JSON.stringify(updatedPurchases));
    
    // Clear cart after purchase
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  const getUserPurchases = (userId: string) => {
    return purchases
      .filter(purchase => purchase.userId === userId)
      .map(purchase => {
        const product = products.find(p => p.id === purchase.productId);
        return { ...purchase, product };
      });
  };

  return {
    products,
    cart,
    purchases,
    addProduct,
    updateProduct,
    deleteProduct,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    purchaseItems,
    getUserPurchases
  };
};