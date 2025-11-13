import React from "react";
import "./sortdetail.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";
import { Button, message, Space } from "antd";

function Detail() {
  const { id } = useParams();
  const [sortdetail, setSortdetail] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Mahsulot savatga qo‘shildi!",
    });
  };

  const [sortproduct, setSortproduct] = useState([]);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?sortBy=title&order=asc")
      .then((res) => setSortproduct(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (item) => {
    const exist = cartItems.find((cartItem) => cartItem.id === item.id);
    if (!exist) {
      const newCart = [...cartItems, item];
      setCartItems(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setSortdetail(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!sortdetail) return <div className="loading">Loading...</div>;

  return (
    <section>
      {contextHolder}
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
              <Button
                type="primary"
                onClick={() => {
                  addToCart(sortdetail);
                  success();
                }}
              >
                Add to Cart
              </Button>

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
