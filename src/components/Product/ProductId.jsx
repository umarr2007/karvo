import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import "./productid.css";
import { Select, Slider } from "antd";
import { FiShoppingCart } from "react-icons/fi";
import { Card, Button } from "antd";
const { Meta } = Card;
import { useNavigate } from "react-router-dom";
import { Empty } from "antd";

import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function ProductId() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const kategoriya = query.get("category");
  const [data, setData] = useState(false);
  const [tanlangan, setTanlangan] = useState("");

  useEffect(() => {
    if (kategoriya) setTanlangan(kategoriya);
  }, [kategoriya]);

  const kategoriyalar = [
    "Elektronika",
    "Maishiy texnika",
    "Kiyim",
    "Poyabzallar",
    "Aksessuarlar",
  ];

  useEffect(() => {
    if (data) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [data]);

  return (
    <section>
      <Header />
      <div className="container">
        <div className="category_text">
          <Link to={"/"} className="home">
            Bosh sahifa
          </Link>

          <h2 className="home">{tanlangan}</h2>
          <p className="gaming">Gaming</p>
        </div>
        <div className="second_text">
          <div className="second_left">
            <h4>“Gaming Gear” uchun natijalar</h4>
            <p>420 ta mahsulotlar</p>
          </div>

          <div className="second_right">
            <Select
              styles={{ width: "196px" }}
              defaultValue="all"
              style={{ width: 120 }}
            >
              <Select.Option value="all">Barcha</Select.Option>
              {kategoriyalar.map((kat, i) => (
                <Select.Option key={i} value={kat}>
                  {kat}
                </Select.Option>
              ))}
            </Select>
            <Button onClick={() => setData(!data)} className="data">
              Menu
            </Button>
          </div>
        </div>
        {data && (
          <div className="data_box">
            <h3>Kategoriyalar</h3>
            <div className="category_labels">
              {kategoriyalar.map((kat, i) => (
                <label className="category_label" key={i}>
                  <input type="checkbox" checked={tanlangan === kat} readOnly />{" "}
                  {kat}
                </label>
              ))}
            </div>
            <p className="category_all">Barchasini ko'rish </p>
            <hr style={{ color: "#e4e9ee" }} />
            <div className="sliders">
              <h5 className="sliders_title">Narxi(so'm)</h5>

              <Slider
                range
                style={{ width: "100%" }}
                defaultValue={[0, 100000]}
              />
            </div>
            <Button
              onClick={() => setData(!data)}
              className="data_exit"
              type="primary"
            >
              Chiqish
            </Button>
          </div>
        )}

        <div className="category_wrapper">
          {/* Chap tomon */}
          <div className="category_left">
            <div className="category_box">
              <h3>Kategoriyalar</h3>
              <div className="category_labels">
                {kategoriyalar.map((kat, i) => (
                  <label className="category_label" key={i}>
                    <input
                      type="checkbox"
                      checked={tanlangan === kat}
                      readOnly
                    />{" "}
                    {kat}
                  </label>
                ))}
              </div>
              <p className="category_all">Barchasini ko'rish </p>
              <hr style={{ color: "#e4e9ee" }} />
              <div className="sliders">
                <h5 className="sliders_title">Narxi(so'm)</h5>

                <Slider
                  range
                  style={{ width: "100%" }}
                  defaultValue={[0, 100000]}
                />
              </div>
            </div>
          </div>

          {/* O'ng tomon */}
          <div className="category_right">
            {kategoriya === "Elektronika" ? (
              <div className="category_card">
                <Card
                  className="card_category"
                  hoverable
                  onClick={() =>
                    navigate(
                      `/productdetail?category=${tanlangan || "Elektronika"}`
                    )
                  }
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "#f6f6f6",
                  }}
                  cover={
                    <img
                      alt="G502 X Lightspeed Wireless Gaming Mouse"
                      src="/mouse.png"
                      style={{
                        objectFit: "contain",
                        height: 180,
                        padding: "10px",
                      }}
                    />
                  }
                >
                  <Meta
                    style={{ textAlign: "center" }}
                    title={
                      <span
                        className="card_title"
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#000",
                        }}
                      >
                        G502 X Lightspeed Wireless <br /> Gaming Mouse
                      </span>
                    }
                    description={
                      <span
                        style={{
                          color: "#0077FF",
                          fontWeight: "600",
                          fontSize: "15px",
                          display: "block",
                          marginTop: "5px",
                        }}
                      >
                        1 325 000 so‘m
                      </span>
                    }
                  />
                </Card>

                <Card
                  className="card_category"
                  hoverable
                  onClick={() =>
                    navigate(
                      `/productdetail?category=${tanlangan || "Elektronika"}`
                    )
                  }
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "#f6f6f6",
                  }}
                  cover={
                    <img
                      alt="G502 X Lightspeed Wireless Gaming Mouse"
                      src="/rul.svg"
                      style={{
                        objectFit: "contain",
                        height: 180,
                        padding: "10px",
                      }}
                    />
                  }
                >
                  <Meta
                    style={{ textAlign: "center" }}
                    title={
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#000",
                        }}
                      >
                        G502 X Lightspeed Wireless <br /> Gaming Mouse
                      </span>
                    }
                    description={
                      <span
                        style={{
                          color: "#0077FF",
                          fontWeight: "600",
                          fontSize: "15px",
                          display: "block",
                          marginTop: "5px",
                        }}
                      >
                        1 325 000 so‘m
                      </span>
                    }
                  />
                </Card>

                <Card
                  className="card_category"
                  hoverable 
                  onClick={() =>
                    navigate(
                      `/productdetail?category=${tanlangan || "Elektronika"}`
                    )
                  }
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "#f6f6f6",
                  }}
                  cover={
                    <img
                      alt="G502 X Lightspeed Wireless Gaming Mouse"
                      src="/mouse.png"
                      style={{
                        objectFit: "contain",
                        height: 180,
                        padding: "10px",
                      }}
                    />
                  }
                >
                  <Meta
                    style={{ textAlign: "center" }}
                    title={
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#000",
                        }}
                      >
                        G502 X Lightspeed Wireless <br /> Gaming Mouse
                      </span>
                    }
                    description={
                      <span
                        style={{
                          color: "#0077FF",
                          fontWeight: "600",
                          fontSize: "15px",
                          display: "block",
                          marginTop: "5px",
                        }}
                      >
                        1 325 000 so‘m
                      </span>
                    }
                  />
                </Card>

                <Card
                  className="card_category"
                  hoverable
                  onClick={() =>
                    navigate(
                      `/productdetail?category=${tanlangan || "Elektronika"}`
                    )
                  }
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "#f6f6f6",
                  }}
                  cover={
                    <img
                      alt="G502 X Lightspeed Wireless Gaming Mouse"
                      src="/mishkaoq.png"
                      style={{
                        objectFit: "contain",
                        height: 180,
                        padding: "10px",
                      }}
                    />
                  }
                >
                  <Meta
                    style={{ textAlign: "center" }}
                    title={
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#000",
                        }}
                      >
                        G502 X Lightspeed Wireless <br /> Gaming Mouse
                      </span>
                    }
                    description={
                      <span
                        style={{
                          color: "#0077FF",
                          fontWeight: "600",
                          fontSize: "15px",
                          display: "block",
                          marginTop: "5px",
                        }}
                      >
                        1 325 000 so‘m
                      </span>
                    }
                  />
                </Card>

                <Card
                  className="card_category"
                  hoverable
                  onClick={() =>
                    navigate(
                      `/productdetail?category=${tanlangan || "Elektronika"}`
                    )
                  }
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "#f6f6f6",
                  }}
                  cover={
                    <img
                      alt="G502 X Lightspeed Wireless Gaming Mouse"
                      src="/airpodsmax.png"
                      style={{
                        objectFit: "contain",
                        height: 180,
                        padding: "10px",
                      }}
                    />
                  }
                >
                  <Meta
                    style={{ textAlign: "center" }}
                    title={
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#000",
                        }}
                      >
                        G502 X Lightspeed Wireless <br /> Gaming Mouse
                      </span>
                    }
                    description={
                      <span
                        style={{
                          color: "#0077FF",
                          fontWeight: "600",
                          fontSize: "15px",
                          display: "block",
                          marginTop: "5px",
                        }}
                      >
                        1 325 000 so‘m
                      </span>
                    }
                  />
                </Card>

                <Card
                  className="card_category"
                  hoverable
                  onClick={() =>
                    navigate(
                      `/productdetail?category=${tanlangan || "Elektronika"}`
                    )
                  }
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "#f6f6f6",
                  }}
                  cover={
                    <img
                      alt="G502 X Lightspeed Wireless Gaming Mouse"
                      src="/largemouse.png"
                      style={{
                        objectFit: "contain",
                        height: 180,
                        padding: "10px",
                      }}
                    />
                  }
                >
                  <Meta
                    style={{ textAlign: "center" }}
                    title={
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#000",
                        }}
                      >
                        G502 X Lightspeed Wireless <br /> Gaming Mouse
                      </span>
                    }
                    description={
                      <span
                        style={{
                          color: "#0077FF",
                          fontWeight: "600",
                          fontSize: "15px",
                          display: "block",
                          marginTop: "5px",
                        }}
                      >
                        1 325 000 so‘m
                      </span>
                    }
                  />
                </Card>

                <Card
                  className="card_category"
                  hoverable
                  onClick={() =>
                    navigate(
                      `/productdetail?category=${tanlangan || "Elektronika"}`
                    )
                  }
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "#f6f6f6",
                  }}
                  cover={
                    <img
                      alt="G502 X Lightspeed Wireless Gaming Mouse"
                      src="/cmouse.png"
                      style={{
                        objectFit: "contain",
                        height: 180,
                        padding: "10px",
                      }}
                    />
                  }
                >
                  <Meta
                    style={{ textAlign: "center" }}
                    title={
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#000",
                        }}
                      >
                        G502 X Lightspeed Wireless <br /> Gaming Mouse
                      </span>
                    }
                    description={
                      <span
                        style={{
                          color: "#0077FF",
                          fontWeight: "600",
                          fontSize: "15px",
                          display: "block",
                          marginTop: "5px",
                        }}
                      >
                        1 325 000 so‘m
                      </span>
                    }
                  />
                </Card>

                <Card
                  className="card_category"
                  hoverable
                  onClick={() =>
                    navigate(
                      `/productdetail?category=${tanlangan || "Elektronika"}`
                    )
                  }
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "#f6f6f6",
                  }}
                  cover={
                    <img
                      alt="G502 X Lightspeed Wireless Gaming Mouse"
                      src="/qora.png"
                      style={{
                        objectFit: "contain",
                        height: 180,
                        padding: "10px",
                      }}
                    />
                  }
                >
                  <Meta
                    style={{ textAlign: "center" }}
                    title={
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#000",
                        }}
                      >
                        G502 X Lightspeed Wireless <br /> Gaming Mouse
                      </span>
                    }
                    description={
                      <span
                        style={{
                          color: "#0077FF",
                          fontWeight: "600",
                          fontSize: "15px",
                          display: "block",
                          marginTop: "5px",
                        }}
                      >
                        1 325 000 so‘m
                      </span>
                    }
                  />
                </Card>

                <Card
                  className="card_category"
                  hoverable
                  onClick={() =>
                    navigate(
                      `/productdetail?category=${tanlangan || "Elektronika"}`
                    )
                  }
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "#f6f6f6",
                  }}
                  cover={
                    <img
                      alt="G502 X Lightspeed Wireless Gaming Mouse"
                      src="/oq.png"
                      style={{
                        objectFit: "contain",
                        height: 180,
                        padding: "10px",
                      }}
                    />
                  }
                >
                  <Meta
                    style={{ textAlign: "center" }}
                    title={
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#000",
                        }}
                      >
                        G502 X Lightspeed Wireless <br /> Gaming Mouse
                      </span>
                    }
                    description={
                      <span
                        style={{
                          color: "#0077FF",
                          fontWeight: "600",
                          fontSize: "15px",
                          display: "block",
                          marginTop: "5px",
                        }}
                      >
                        1 325 000 so‘m
                      </span>
                    }
                  />
                </Card>

                <Card
                  className="card_category"
                  hoverable
                  onClick={() =>
                    navigate(
                      `/productdetail?category=${tanlangan || "Elektronika"}`
                    )
                  }
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "#f6f6f6",
                  }}
                  cover={
                    <img
                      alt="G502 X Lightspeed Wireless Gaming Mouse"
                      src="/c2.png"
                      style={{
                        objectFit: "contain",
                        height: 180,
                        padding: "10px",
                      }}
                    />
                  }
                >
                  <Meta
                    style={{ textAlign: "center" }}
                    title={
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#000",
                        }}
                      >
                        G502 X Lightspeed Wireless <br /> Gaming Mouse
                      </span>
                    }
                    description={
                      <span
                        style={{
                          color: "#0077FF",
                          fontWeight: "600",
                          fontSize: "15px",
                          display: "block",
                          marginTop: "5px",
                        }}
                      >
                        1 325 000 so‘m
                      </span>
                    }
                  />
                </Card>

                <Card
                  className="card_category"
                  hoverable
                  onClick={() =>
                    navigate(
                      `/productdetail?category=${tanlangan || "Elektronika"}`
                    )
                  }
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "#f6f6f6",
                  }}
                  cover={
                    <img
                      alt="G502 X Lightspeed Wireless Gaming Mouse"
                      src="/oqm.png"
                      style={{
                        objectFit: "contain",
                        height: 180,
                        padding: "10px",
                      }}
                    />
                  }
                >
                  <Meta
                    style={{ textAlign: "center" }}
                    title={
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#000",
                        }}
                      >
                        G502 X Lightspeed Wireless <br /> Gaming Mouse
                      </span>
                    }
                    description={
                      <span
                        style={{
                          color: "#0077FF",
                          fontWeight: "600",
                          fontSize: "15px",
                          display: "block",
                          marginTop: "5px",
                          textAlign: "center",
                        }}
                      >
                        1 325 000 so‘m
                      </span>
                    }
                  />
                </Card>

                <Card
                  className="card_category"
                  hoverable
                  onClick={() =>
                    navigate(
                      `/productdetail?category=${tanlangan || "Elektronika"}`
                    )
                  }
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "#f6f6f6",
                  }}
                  cover={
                    <img
                      alt="G502 X Lightspeed Wireless Gaming Mouse"
                      src="/mousee.png"
                      style={{
                        objectFit: "contain",
                        height: 180,
                        padding: "10px",
                      }}
                    />
                  }
                >
                  <Meta
                    style={{ textAlign: "center" }}
                    title={
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#000",
                        }}
                      >
                        G502 X Lightspeed Wireless <br /> Gaming Mouse
                      </span>
                    }
                    description={
                      <span
                        style={{
                          color: "#0077FF",
                          fontWeight: "600",
                          fontSize: "15px",
                          display: "block",
                        }}
                      >
                        1 325 000 so‘m
                      </span>
                    }
                  />
                </Card>
              </div>
            ) : (
              <div className="product_empty">
                {" "}
                <Empty />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default ProductId;
