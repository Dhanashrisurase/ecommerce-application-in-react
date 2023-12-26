import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductTable from "./ProductTable";
import "./Products.scss";
//import Sidebar from "../SideBarData/Sidebar";
//import { BsSearch } from "react-icons/bs";
import Navbar from "../Navbar/Navbar";
interface Product {
  id: number;
  title: string;
  price: number;
  images: string;
  description: string;
  category: string;
  rating: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [view, setView] = useState<"grid" | "table">("grid");
  const [numProducts, setNumProducts] = useState<number>(15);
  const [searchTerm,setSearchTerm]=useState("")


  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(()=>{
    setNumProducts(15);
  },[searchTerm])

  const toggleView = () => {
    setView(view === "grid" ? "table" : "grid");
  };

  const handleLoadMore = () => {
    setNumProducts(numProducts + 15);
  };

  const handleSearch=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setSearchTerm(event.target.value)
  };

  const filteredProducts=products.filter((product)=>
  product.title.toLowerCase().includes(searchTerm.toLowerCase()));

  

  return (
    <>
    <Navbar/>
    <div className="container">
      
      <div className="product-list">
        <button onClick={toggleView}>
          Switch to {view === "grid" ? "table" : "grid"} view
        </button>
        <input placeholder="Search Mobile" value={searchTerm} onChange={handleSearch}></input>
        <h2 className="title">Mobiles</h2>
        {filteredProducts.length>0?(
        view === "grid" ? (
          <div className="product-grid">
            {filteredProducts.slice(0, numProducts).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {filteredProducts.length > numProducts && (
              <h3 onClick={handleLoadMore}>Load More...</h3>
            )}
          </div>
        ) : (
          <ProductTable products={filteredProducts}  />
        )
        ):(
          <p>No Mobile found!!</p>
        )}
      </div>
    </div>
    </>
  );
};

export default ProductList;
