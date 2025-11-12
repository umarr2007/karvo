import React, { useEffect, useState } from "react";
import { Card, Button, message, Space } from "antd";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Empty } from "antd";
import "./cart.css";

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  const handleDeleteCart = (item) => {
    const kardlarniochir = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(kardlarniochir);
    localStorage.setItem("cart", JSON.stringify(kardlarniochir));
  };


  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "Mahsulot savatdan o‘chirildi!",
    });
  };

  return (
    <section>
      {contextHolder}

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
        <h2 className="cart_titlee">Savatchadagi mahsulotlar</h2>
        {cartItems.length === 0 ? (
          <Empty style={{ marginTop: "100px" }} />
        ) : (
          <div className="cart_box_wrapper">
            {cartItems.map((item) => (
              <div key={item.id} className="cart_item">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="cart_img"
                />
                <div>
                  <h3 className="cart_box_title">{item.title}</h3>
                  <p className="cart_box_price">{item.price} $</p>
                  <div className="cart_box_btn">
                    <Button onClick={() => handleDeleteCart(item) || warning() }>
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
