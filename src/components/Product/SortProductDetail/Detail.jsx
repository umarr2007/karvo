import React from "react";
import "./sortdetail.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../Header/Header";

function Detail() {
  const { id } = useParams();
  const [sortdetail, setSortdetail] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setSortdetail(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!sortdetail) return <div>Loading...</div>;

  return (
    <section>
      <Header />
      <div className="container">
        <div className="sort_detail_wrapper">
          {/* Product Image */}
          <div className="sortdetail_box">
            <div className="sortimg">
              <img
                className="sortdetail_img"
                draggable={false}
                src={sortdetail?.images?.[0]}
                alt={sortdetail?.title}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="sortdetail_text">
            <h2 className="product_detail_title">{sortdetail?.title}</h2>
            <p className="product_detail_text">{sortdetail?.description}</p>
            <h3 className="product_detail_price">${sortdetail?.price}</h3>

            {/* Buttons */}
            <div className="detail_buttons">
              <button className="add_to_cart_btn">Add to Cart</button>
              <Link to="/" className="back_to_products">
                ← Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
