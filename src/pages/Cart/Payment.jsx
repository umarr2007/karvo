import React from "react";
import "./payment.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Input, Select } from "antd";
import { InputNumber } from "antd";
import { MdDelete } from "react-icons/md";

function Payment() {
  const { Option } = Select;
  const onChange = (value) => {
    console.log("Qiymat:", value);
  };

  const navigate = useNavigate();
  return (
    <section>
      <Header />
      <div className="container">
        <div className="savat">
          <h2 className="cart_title">Savat</h2>
          <div className="cart_home">
            <Link to="/cart" className="home">
              Bosh sahifa
            </Link>
            <p className="gaming">Savat</p>
          </div>
        </div>
        <div className="location_left">
          <div className="cart_location_box">
            <h3 className="cart_location">Yetkazib berish manzili</h3>
            <div className="location_wrapper">
              <div className="location_input">
                <div className="place_input">
                  <div className="place_wrapper">
                    <label className="place_label">Viloyat</label>
                    <Select
                      placeholder="Viloyatni tanlang"
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "45px",
                      }}
                    >
                      <Option value="toshkent">Toshkent</Option>
                      <Option value="samarqand">Samarqand</Option>
                      <Option value="andijon">Andijon</Option>
                      <Option value="namangan">Namangan</Option>
                      <Option value="fargona">Farg‘ona</Option>
                      <Option value="buxoro">Buxoro</Option>
                      <Option value="navoiy">Navoiy</Option>
                      <Option value="xorazm">Xorazm</Option>
                      <Option value="surxondaryo">Surxondaryo</Option>
                      <Option value="qashqadaryo">Qashqadaryo</Option>
                      <Option value="sirdaryo">Sirdaryo</Option>
                      <Option value="jizzax">Jizzax</Option>
                    </Select>
                  </div>

                  <div className="place_wrapper">
                    <label className="place_label">Tuman</label>
                    <Select
                      placeholder="Viloyatni tanlang"
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "45px",
                      }}
                    >
                      <Option value="toshkent">Toshkent</Option>
                      <Option value="samarqand">Samarqand</Option>
                      <Option value="andijon">Andijon</Option>
                      <Option value="namangan">Namangan</Option>
                      <Option value="fargona">Farg‘ona</Option>
                      <Option value="buxoro">Buxoro</Option>
                      <Option value="navoiy">Navoiy</Option>
                      <Option value="xorazm">Xorazm</Option>
                      <Option value="surxondaryo">Surxondaryo</Option>
                      <Option value="qashqadaryo">Qashqadaryo</Option>
                      <Option value="sirdaryo">Sirdaryo</Option>
                      <Option value="jizzax">Jizzax</Option>
                    </Select>
                  </div>

                  <div className="place_wrapper">
                    <label className="place_label">Ko'cha manzili</label>
                    <Input
                      style={{ height: "45px", marginTop: "10px" }}
                      placeholder="Ko'cha manzili"
                    />
                  </div>

                  <div className="place_wrapper">
                    <label className="place_label">Pochta indeksi</label>
                    <Input
                      style={{ height: "45px", marginTop: "10px" }}
                      placeholder="Pochta indeksi"
                    />
                  </div>
                </div>
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
              onClick={() => navigate("/correctly")}
              style={{ width: "100%", marginTop: "20px" }}
              type="primary"
              className="all_price_btn"
            >
              Buyurtma berish
            </Button>
          </div>
        </div>

        <div style={{ marginTop: "20px" }} className="cart_box">
          <div className="cart_box_wrapper">
            <div className="cart_box_left">
              <img src="/cart.png" alt="" />
              <div className="cart_text">
                <h3 className="cart_box_title">Logitech G435 Gaming Headset</h3>
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
                style={{
                  color: "red",
                  fontSize: "23px",
                  cursor: "pointer",
                }}
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
                <h3 className="cart_box_title">Logitech G435 Gaming Headset</h3>
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
                style={{
                  color: "red",
                  fontSize: "23px",
                  cursor: "pointer",
                }}
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
                <h3 className="cart_box_title">Logitech G435 Gaming Headset</h3>
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
                style={{
                  color: "red",
                  fontSize: "23px",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
