import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "./Products.scss";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
interface Product {
  id: number;
  title: string;
  price: number;
  images: string;
  description: string;
  category: string;
  rating: number;
}

interface Props {
  product: Product;
 
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();

 const addToCart = async () => {
  const userEmail = localStorage.getItem("email");
  if (!userEmail) {
   alert("Log in first to add products");
   navigate("/");
 }

  if(userEmail!==null){
  try {
   const response = await fetch("http://localhost:3002/cart", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",

    },
    body: JSON.stringify({userEmail,product,}),
   });
   if (!response.ok) {
    throw new Error("Error in adding product");
   }
  } catch (error) {
   console.log(error);
  }
}

 };
  return (
    <div className="product-card">
      <img src={product.images} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h4>{product.price} INR</h4>
     <NavLink to={"/cart"}>
      <button type="submit" onClick={() => addToCart()} >
        <FaShoppingCart /> Add to cart
      </button>
      </NavLink>
    </div>
  );
};

export default ProductCard;
