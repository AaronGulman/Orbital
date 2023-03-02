import React, { useContext, useState } from "react";
import { client } from "../lib/client";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [department, setDepartment] = useState(false);
  const [activePage, setActivePage] = useState(1);

  //  Add To Cart Function

  const addToCart = (productIndex) => {
    //The Method here is to find the index of the product added to the cart, if the product is existing take only the first one

    let cartItem = cart.find(
      (item) => item.slug.current === productIndex.slug.current
    );

    let newCart = [...cart];

    if (cartItem) {
      cartItem.quantity++;
    } else {
      cartItem = {
        ...productIndex,
        quantity: 1,
      };
      newCart.push(cartItem);
    }
    setCart(newCart);
    console.log(cartItem);
  };

  //   Total Price Function
  const getTotalQuantity = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.slug.current !== index.slug.current)
    );
  };

  const handleIncreament = (current) => {
    console.log(current);
  };

  const handleDecreament = (current) => {
    console.log(current);
  };

  const toggleDepartmentCon = () => {
    setDepartment(!department);
  };

  const setQuantity = (product, amount) => {
    const cartItem = [...cart];
    cartItem.find(
      (item) => item.slug.current === product.slug.current
    ).quantity = amount;
    setCart(cartItem);
  };

  return (
    <AppContext.Provider
      value={{
        openCart,
        setOpenCart,
        cart,
        setCart,
        addToCart,
        getTotalQuantity,
        removeFromCart,
        handleDecreament,
        handleIncreament,
        department,
        toggleDepartmentCon,
        setQuantity,
        activePage,
        setActivePage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
