import React from "react";
import { useEffect, useState } from "react";
import { Card, Button, message, Space } from "antd";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Luxury() {
  const navigate = useNavigate();
  const [luxury, setLuxury] = useState([]);
  const [sortproduct, setSortproduct] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Mahsulot savatga qo‘shildi!",
    });
  };

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?sortBy=title&order=asc")
      .then((res) => setLuxury(res.data.products))
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
        <h2 className="product_title">Ommabop mahsulotlar</h2>

        <div className="product_wrapper">
          <div className="product_box">
            {luxury.slice(0, 8).map((item, index) => (
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
                      addToCart(item);
                      success();
                    }}
                    className="product_btn"
                  >
                    <FiShoppingCart className="product_btn_icon" />
                  </button>
                </div>
              </Card>
            ))}
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
      </div>
    </section>
  );
}

export default Luxury;
