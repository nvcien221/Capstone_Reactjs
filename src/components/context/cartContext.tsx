import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { getLocalStorage, removeLocalStorage, setLocalStorage } from 'src/utils';

interface Category {
  id: string
  category: string
}

interface RelatedProduct {
  id: number
  name: string
  alias: string
  feature: boolean
  price: number
  description: string
  shortDescription: string
  image: string
}

export interface IProduct {
  id: number
  name: string
  alias: string
  price: number
  feature: boolean
  description: string
  size: string[]
  shortDescription: string
  quantity: number
  image: string
  categories: Category[]
  relatedProducts: RelatedProduct[]
}

interface CartContextType {
  cartQuantity: number;
  cartQuantityDetail: number;
  cartItems: IProduct[];
  userEmail: string;
  setCartQuantityDetail: (quantity: number) => void;
  addToCart: (item: IProduct) => void;
  updateCartItemQuantity: (productId: number, change: number) => void;
  updateQuantityDetail: (productId: number, change: number) => void;
  remove: (productId: number) => void;
  handleLogout: () => void;
  handldeLogin: () => void;
}
interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartItems, setCartItem] = useState<IProduct[]>([])
  const [cartQuantityDetail, setCartQuantityDetail] = useState(1);
  const [userEmail, setUserEmail] = useState(getLocalStorage('email_user') || "");

  const addToCart = (item: IProduct) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id)
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = { ...cartItems[existingItemIndex], quantity: cartItems[existingItemIndex].quantity + cartQuantityDetail };
      setCartItem(updatedCartItems);

    } else {
      setCartItem([...cartItems, { ...item, quantity: cartQuantityDetail }]);
    }
    setCartQuantityDetail(1)
    saveCartToLocalStorage(userEmail, cartItems)
  };

  const updateCartItemQuantity = (idProduct: number, currentQuantity: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (idProduct === item.id) {
        const newQuantity = item.quantity + currentQuantity
        return { ...item, quantity: newQuantity }
      }
      return item
    })

    setCartItem(updatedCartItems);
    setCartQuantity(cartQuantity + currentQuantity);
    saveCartToLocalStorage(userEmail, updatedCartItems)
  }

  
  // Cập nhật số lượng sản phẩm khi tăng giảm trong DETAIL
  const updateQuantityDetail = (idProduct: number, currentQuantity: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (idProduct === item.id) {
        const newQuantity = item.quantity + currentQuantity
        return { ...item, quantity: newQuantity }
        
      }
      return item
    })
    setCartQuantityDetail(cartQuantityDetail + currentQuantity);
    saveCartToLocalStorage(userEmail, updatedCartItems)
  }

  // Remove 
  const remove = (idProduct: number) => {
    const newCart = cartItems.filter((sp) => sp.id !== idProduct)
    const newQuantity = newCart.reduce((total, item) => total + item.quantity, 0)
    setCartItem(newCart)
    setCartQuantity(newQuantity)
    saveCartToLocalStorage(userEmail, newCart)
  }

  // save cart
  function saveCartToLocalStorage(email: string, cartItems: IProduct[]) {
    const key = `cart_${email}`;
    setLocalStorage(key, cartItems);
  }

  // get cart
  useEffect(() => {
    const cartItemsFromStorage = getLocalStorage(`cart_${userEmail}`);
    if (cartItemsFromStorage) {
      setCartItem(cartItemsFromStorage);
    }
  }, [userEmail]);

  // Cập nhật sau mỗi lần gọi setCartItem
  useEffect(() => {
    saveCartToLocalStorage(userEmail, cartItems);
  }, [cartItems, userEmail]);


  const handldeLogin = () => {
    const email = getLocalStorage('email_user');
    setUserEmail(email);
    const cartItemsFromStorage = getLocalStorage(`cart_${email}`);
    if (cartItemsFromStorage) {
      setCartItem(cartItemsFromStorage);
    } else {
      setCartItem([]); 
    }
  };

  const handleLogout = () => {
    removeLocalStorage('accessToken');
    removeLocalStorage('totalQuantity');
    removeLocalStorage('email_user');
    setUserEmail(''); 
    setCartItem([]);
  };



  const contextValue: CartContextType = {
    cartQuantity,
    cartQuantityDetail,
    cartItems,
    userEmail,
    setCartQuantityDetail,
    addToCart,
    updateCartItemQuantity,
    updateQuantityDetail,
    remove,
    handleLogout,
    handldeLogin

  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};


