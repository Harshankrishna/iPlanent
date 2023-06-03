import { NavLink } from "react-router-dom";
import data from "../Data";
import React, { useState, useEffect } from "react";

const Product = () => {
  const [filter, setFilter] = useState([]);
  const filterProduct = (cat) => {
    console.log("cat", cat);
    const updatedList = data.filter((x) => x.category === cat);
    console.log("updatedList", updatedList);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("iphone")}
          >
            iPhone
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("ipad")}
          >
            iPad
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("iwatch")}
          >
            iWatch
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("imac")}
          >
            iMac
          </button>
        </div>
      </>
    );
  };

  const cardItem = (item) => {
    return (
      <div class="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
        <img src={item.img} class="card-img-top" alt={item.title} />
        <div class="card-body text-center">
          <h5 class="card-title">{item.title}</h5>
          <p className="lead">₹{item.price}</p>
          <NavLink to={`/products/${item.id}`} class="btn btn-outline-primary">
            Buy Now
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Latest Products</h1>
            <hr />
          </div>
        </div>
      </div>
      {<ShowProducts />}
      <div className="container">
        <div className="row justify-content-around">
          {filter.length ? filter.map(cardItem) : data.map(cardItem)}
        </div>
      </div>
    </div>
  );
};
export default Product;
