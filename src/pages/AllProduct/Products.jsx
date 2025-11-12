import React from "react";
import { useState, useEffect } from "react";
import { Card, Button } from "antd";
import axios from "axios";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./allproduct.css";
import { useNavigate } from "react-router-dom";
function Products() {
  const [allproduct, setAllProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setAllProduct(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <Header />
      <div className="container">
        <div className="savat">
          <h2 className="cart_title">Shaxsiy kabinet</h2>
          <div className="cart_home">
            <Link to="/" className="home">
              Bosh sahifa
            </Link>
            <p className="gaming">Shaxsiy kabinet</p>
          </div>
        </div>
        <h2>All Product</h2>

        <div className="product_wrapper">
          <div className="all_product_box">
            {allproduct.map((item, index) => (
              <Card
                onClick={() => navigate(`/detail/${item.id}`)}
                key={item.id}
                hoverable
                cover={
                  <img draggable={false} alt="example" src={item.images[0]} />
                }
              >
                {/* <div className="product_btn_wrapper">
                <button>
                  <FiShoppingCart />
                </button>
              </div> */}
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <p>{item.discountPercentage}</p>
                <p>{item.rating}</p>
                <p>{item.stock}</p>
                <p>{item.brend}</p>
                <p>{item.sku}</p>
                <p>{item.weight}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
