import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Products.scss";
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
  products: Product[];
}

const ProductTable: React.FC<Props> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10| 0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleItemsPerPage=(event:any)=>{
    setItemsPerPage(event.target.value)
  }
  return (
    <>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Add Cart</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price} INR</td>
              <td>
                <img
                  className="table-image"
                  src={product.images}
                  alt={product.title}
                ></img>
              </td>
              <td>
                <button type="submit">
                  <FaShoppingCart />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button disabled={currentPage === 1} onClick={handlePrevPage}>
          Prev
        </button>
        {Array.from({ length: 0| totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={page === currentPage ? "active" : ""}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <button disabled={currentPage === totalPages} onClick={handleNextPage}>
          Next
        </button>
        <label>Items per page</label>
        <input type={'number'} placeholder="items per page" value={itemsPerPage} onChange={handleItemsPerPage}></input>
      </div>
    </>
  );
};

export default ProductTable;
