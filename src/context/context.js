import React, { useContext, useState } from "react";
import { client } from "../lib/client";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [department, setDepartment] = useState(false);

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
    console.log(cart);
  };

  //   Total Price Function
  const getTotalQuantity = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  const removeFromCart = (index) => {
    return cart.filter((product) => product !== index);
  };

  const handleIncreament = (data) => {
    console.log(data.quantity);
  };

  const handleDecreament = (data) => {};

  const toggleDepartmentCon = () => {
    setDepartment(!department);
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