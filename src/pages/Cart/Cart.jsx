import React from "react";
import Header from "../../components/Header/Header";
import "./cart.css";
import { Link } from "react-router-dom";
import { InputNumber } from "antd";
import { MdDelete } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { Card, Button } from "antd";
import Footer from "../../components/Footer/Footer";

function Cart() {
  const navigate = useNavigate();

  const onChange = (value) => {
    console.log("Qiymat:", value);
  };
  return (
    <section>
      <Header />
      <div className="container">
        <div className="savat">
          <h2 className="cart_title">Savat</h2>
          <div className="cart_home">
            <Link to="/" className="home">
              Bosh sahifa
            </Link>
            <p className="gaming">Savat</p>
          </div>
        </div>

        <div className="first_cart_wrapper">
          <div className="cart_box">
            <div className="cart_box_wrapper">
              <div className="cart_box_left">
                <img src="/cart.png" alt="" />
                <div className="cart_text">
                  <h3 className="cart_box_title">
                    Logitech G435 Gaming Headset
                  </h3>
                  <p className="cart_box_price">2 438 000 so'm</p>
                </div>
              </div>
              <div className="cart_box_right">
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={1}
                  onChange={onChange}
                  style={{
                    textAlign: "center", // raqam markazda turadi
                  }}
                />
                <MdDelete
                  style={{ color: "red", fontSize: "23px", cursor: "pointer" }}
                />
              </div>
            </div>
            <hr
              style={{
                border: "none",
                borderTop: "1px solid #e4e9ee",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            />

            <div className="cart_box_wrapper">
              <div className="cart_box_left">
                <img src="/cart.png" alt="" />
                <div className="cart_text">
                  <h3 className="cart_box_title">
                    Logitech G435 Gaming Headset
                  </h3>
                  <p className="cart_box_price">2 438 000 so'm</p>
                </div>
              </div>
              <div className="cart_box_right">
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={1}
                  onChange={onChange}
                  style={{
                    textAlign: "center",
                  }}
                />
                <MdDelete
                  style={{ color: "red", fontSize: "23px", cursor: "pointer" }}
                />
              </div>
            </div>
            <hr
              style={{
                border: "none",
                borderTop: "1px solid #e4e9ee",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            />

            <div className="cart_box_wrapper">
              <div className="cart_box_left">
                <img src="/cart.png" alt="" />
                <div className="cart_text">
                  <h3 className="cart_box_title">
                    Logitech G435 Gaming Headset
                  </h3>
                  <p className="cart_box_price">2 438 000 so'm</p>
                </div>
              </div>
              <div className="cart_box_right">
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={1}
                  onChange={onChange}
                  style={{
                    textAlign: "center", // raqam markazda turadi
                  }}
                />
                <MdDelete
                  style={{ color: "red", fontSize: "23px", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <div className="all_price_box">
            <h4 className="price">Umumiy mahsulot qiymati </h4>
            <div className="all_price_text">
              <p className="all_price">Jami narx:</p>
              <p className="all_price">4 153 000 so'm</p>
            </div>

            <div className="all_price_text">
              <p className="all_price">Yetkazib berish xizmati:</p>
              <p className="all_price">30 000 so'm</p>
            </div>
            <hr />

            <div className="all_price_text">
              <h4 style={{ marginTop: "10px" }} className="price">
                Umumiy narx{" "}
              </h4>

              <h4 style={{ marginTop: "10px" }} className="price">
                4 153 000 so'm{" "}
              </h4>
            </div>
            <Button
              onClick={() => navigate("/payment")}
              style={{ width: "100%", marginTop: "20px" }}
              type="primary"
              className="all_price_btn"
            >
              Davom etish
            </Button>
          </div>
        </div>

        <h2 className="product_title">O'xshash mahsulotlar</h2>

        <div className="product_wrapper">
          <div className="product_box">
            <Card
              hoverable
              cover={<img draggable={false} alt="example" src="/dazmol.png" />}
            >
              <div className="product_btn_wrapper">
                <button className="product_btn">
                  <FiShoppingCart className="product_btn_icon" />
                </button>
              </div>
              <h2 className="card_title">
                Dazmol Philips DST5040/80, 2400 w, Indonesia
              </h2>
              <p className="card_description">989 000 so'm</p>
            </Card>
          </div>

          <div className="product_box">
            <Card
              hoverable
              cover={
                <img draggable={false} alt="example" src="/changyutkich.png" />
              }
            >
              <div className="product_btn_wrapper">
                <button className="product_btn">
                  <FiShoppingCart className="product_btn_icon" />
                </button>
              </div>
              <h2 className="card_title">
                Dazmol Philips DST5040/80, 2400 w, Indonesia
              </h2>
              <p className="card_description">989 000 so'm</p>
            </Card>
          </div>

          <div className="product_box">
            <Card
              hoverable
              cover={
                <img draggable={false} alt="example" src="/kirmashina.png" />
              }
            >
              <div className="product_btn_wrapper">
                <button className="product_btn">
                  <FiShoppingCart className="product_btn_icon" />
                </button>
              </div>
              <h2 className="card_title">
                Dazmol Philips DST5040/80, 2400 w, Indonesia
              </h2>
              <p className="card_description">989 000 so'm</p>
            </Card>
          </div>

          <div className="product_box">
            <Card
              hoverable
              cover={
                <img draggable={false} alt="example" src="/muzlatkich.png" />
              }
            >
              <div className="product_btn_wrapper">
                <button className="product_btn">
                  <FiShoppingCart className="product_btn_icon" />
                </button>
              </div>
              <h2 className="card_title">
                Dazmol Philips DST5040/80, 2400 w, Indonesia
              </h2>
              <p className="card_description">989 000 so'm</p>
            </Card>
          </div>

          <div className="product_box">
            <Card
              hoverable
              cover={<img draggable={false} alt="example" src="/blender.png" />}
            >
              <div className="product_btn_wrapper">
                <button className="product_btn">
                  <FiShoppingCart className="product_btn_icon" />
                </button>
              </div>
              <h2 className="card_title">
                Dazmol Philips DST5040/80, 2400 w, Indonesia
              </h2>
              <p className="card_description">989 000 so'm</p>
            </Card>
          </div>

          <div className="product_box">
            <Card
              hoverable
              cover={<img draggable={false} alt="example" src="/kiyim.png" />}
            >
              <div className="product_btn_wrapper">
                <button className="product_btn">
                  <FiShoppingCart className="product_btn_icon" />
                </button>
              </div>
              <h2 className="card_title">
                Dazmol Philips DST5040/80, 2400 w, Indonesia
              </h2>
              <p className="card_description">989 000 so'm</p>
            </Card>
          </div>

          <div className="product_box">
            <Card
              hoverable
              cover={<img draggable={false} alt="example" src="/telefon.png" />}
            >
              <div className="product_btn_wrapper">
                <button className="product_btn">
                  <FiShoppingCart className="product_btn_icon" />
                </button>
              </div>
              <h2 className="card_title">
                Dazmol Philips DST5040/80, 2400 w, Indonesia
              </h2>
              <p className="card_description">989 000 so'm</p>
            </Card>
          </div>

          <div className="product_box">
            <Card
              hoverable
              cover={<img draggable={false} alt="example" src="/mouse.png" />}
            >
              <div className="product_btn_wrapper">
                <button className="product_btn">
                  <FiShoppingCart className="product_btn_icon" />
                </button>
              </div>
              <h2 className="card_title">
                Dazmol Philips DST5040/80, 2400 w, Indonesia
              </h2>
              <p className="card_description">989 000 so'm</p>
            </Card>
          </div>
        </div>

        <div className="last_btn">
          <Button style={{ height: "50px", fontSize: "16px" }} type="primary">
            Barchasini ko'rish
          </Button>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Cart;
