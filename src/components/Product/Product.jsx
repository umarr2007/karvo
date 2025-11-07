import React from "react";
import "./product.css";
import { Card, Button } from "antd";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  const [sortproduct, setSortproduct] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?sortBy=title&order=asc")
      .then((res) => setSortproduct(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    // localStorage ga ham saqlash mumkin
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    alert(`${product.title} cartga qo'shildi!`);
  };
  const navigate = useNavigate();
  return (
    <section>
      <div className="container">
        <h2 className="product_title">Yangi kelgan mahsulotlar</h2>

        <div className="product_wrapper">
          <div className="product_box">
            {sortproduct.slice(0, 8).map((item, index) => (
              <Card
                onClick={() => navigate(`/detail/${item.id}`)}
                key={item.id}
                hoverable
                cover={
                  <img draggable={false} alt="example" src={item.images[0]} />
                }
              >
                <div className="product_btn_wrapper">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Card onClick ishlashini to‘xtatadi
                      navigate("/cart");
                    }}
                    className="product_btn"
                  >
                    <FiShoppingCart className="product_btn_icon" />
                  </button>
                </div>
                <h2 className="card_title">{item.title}</h2>
                <p className="card_description">{item.price}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="last_btn">
          <Button
            onClick={() => navigate("/allproduct")}
            style={{ height: "50px", fontSize: "16px" }}
            type="primary"
          >
            Barchasini ko'rish
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Product;
