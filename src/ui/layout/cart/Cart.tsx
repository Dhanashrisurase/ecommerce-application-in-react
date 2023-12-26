import React, { useEffect, useState } from "react";
import "./Cart.scss";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";

interface CartItem {
  product: any;
  id: number;
  title: string;
  price: number;
  images: string;
  quantity: number;
} 
const Cart:any = () => {
  const email = localStorage.getItem("email");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(
          `http://localhost:3002/cart?userEmail=${email}`
        );
        if (!response.ok) {
          throw new Error("Error fetching cart items");
        }
        const cartItemsData = await response.json();
        setCartItems(cartItemsData.map((item: any) => ({...item, quantity: 1})));
      } catch (error) {
        console.log(error);
      }
    };
    fetchCartItems();
  }, [email]);
  
  const handleIncreaseQuantity = (itemId: number) => { // Pass itemId as parameter
    setCartItems(prevCartItems => 
      prevCartItems.map(item => {
        if (item.id === itemId) { // Update quantity only for the specific item
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };
  
  const handleDecreaseQuantity = (itemId: number) => { // Pass itemId as parameter
    setCartItems(prevCartItems => 
      prevCartItems.map(item => {
        if (item.id === itemId && item.quantity > 1) { // Update quantity only for the specific item if it's greater than 1
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };
  const removeCartItem = async (itemId: number) => {
    try {
      const response = await fetch(`http://localhost:3002/cart/${itemId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error removing cart item");
      }
      setCartItems(cartItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.log(error);
    }
  };
  
  const calculateprice = (item: CartItem) => item.product.price * item.quantity;

  
 

let grandTotal = 0;
for (let i = 0; i < cartItems.length; i++) {
  grandTotal = grandTotal + calculateprice(cartItems[i]); 
}

  return (
    <>
      <Navbar />
      {cartItems.length === 0 ? (
        <p>No cart items</p>
      ) : (
        <div className="checkout">
          <h2>Cart Items</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Rate in INR</th>
                <th>Quantity</th>
                <th>Price in INR</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="product-info">
                      <img src={item.product.images} alt={item.title} />
                      <div className="product-details">
                        <p>{item.product.title}</p>
                      </div>
                    </div>
                  </td>
                  <td>{item.product.price} INR</td>
                  <td>
                    <div className="product-details">
                      <div className="add-to-cart">
                        <button
                          className="RemoveBtn"
                          onClick={() => handleDecreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <span> {item.quantity} </span>
                        <button
                          className="AddQBtn"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>{calculateprice(item)} </td>
                  <td>
                    <button
                      className="RemoveBtn"
                      onClick={() => removeCartItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>Total</td>
                <td colSpan={2}>{grandTotal} </td>
              </tr>
            </tfoot>
          </table>
          <NavLink to={"/CartBill"}><button>checkout</button></NavLink>
        </div>
      )}
      
    </>
  );
}
;
export default Cart;








