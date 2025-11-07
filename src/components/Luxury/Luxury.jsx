import React from "react";
import { useEffect, useState } from "react";
import { Card, Button } from "antd";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Luxury() {
  const navigate = useNavigate();

  const [luxury, setLuxury] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?sortBy=title&order=asc")
      .then((res) => setLuxury(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
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
                      navigate("/cart");
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
            <Button onClick={() => navigate("/allproduct")} style={{ height: "50px", fontSize: "16px" }} type="primary">
              Barchasini ko'rish
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Luxury;
