import React, { useEffect, useState } from "react";
import "./product.css";
import { Card, Button, message, Space } from "antd";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Product() {
  const [sortproduct, setSortproduct] = useState([]);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Mahsulot savatga qo‘shildi!",
    });
  };
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

  return (
    <section>
      {contextHolder}

      <div className="container">
        <h2 className="product_title">Yangi kelgan mahsulotlar</h2>
        <div className="product_wrapper">
          <div className="product_box">
            {sortproduct.slice(0, 8).map((item) => (
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
                      e.stopPropagation();
                      addToCart(item);
                      success();
                    }}
                    className="product_btn"
                  >
                    <FiShoppingCart className="product_btn_icon" />{" "}
                  </button>
                </div>
                <h2 className="card_title">{item.title}</h2>
                <p className="card_description">{item.price} $</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="last_btn">
          <Button
            onClick={() => navigate("/products")}
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
