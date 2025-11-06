import React from "react";
import "./product.css";
import { Card, Button } from "antd";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


function Product() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="container">
        <h2 className="product_title">Yangi kelgan mahsulotlar</h2>
        <div className="product_wrapper">
          <div   className="product_box">
            <Card 
              hoverable
              cover={<img draggable={false} alt="example" src="/dazmol.png" />}
            >
              <div className="product_btn_wrapper">
                <button onClick={() => navigate("/cart")}   className="product_btn">
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
              cover={<img draggable={false} alt="example" src="/changyutkich.png" />}
            >
              <div className="product_btn_wrapper">
                <button onClick={() => navigate("/cart")} className="product_btn">
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
              cover={<img draggable={false} alt="example" src="/kirmashina.png" />}
            >
              <div className="product_btn_wrapper">
                <button onClick={() => navigate("/cart")} className="product_btn">
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
              cover={<img draggable={false} alt="example" src="/muzlatkich.png" />}
            >
              <div className="product_btn_wrapper">
                <button onClick={() => navigate("/cart")} className="product_btn">
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
                <button onClick={() => navigate("/cart")} className="product_btn">
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
                <button onClick={() => navigate("/cart")} className="product_btn">
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
                <button onClick={() => navigate("/cart")} className="product_btn">
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
                <button onClick={() => navigate("/cart")} className="product_btn">
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
          <Button style={{ height: "50px",fontSize:"16px" }} type="primary">Barchasini ko'rish</Button>
        </div>
      </div>
    </section>
  );
}

export default Product;
