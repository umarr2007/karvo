import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import AdminMenu from "../../MenuAdmin/AdminMenu";
import "./market.css";
import { Input, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Button, Flex, Space, Card } from "antd";
const { Meta } = Card;
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Market() {
  const location = useLocation();

  const { Option } = Select;
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
        <div className="section_wrapper">
          <AdminMenu />
          <div className="section_top_wrapper">
            <div className="marketbox">
              <div className="market_input">
                <Space.Compact
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Select
                    defaultValue="Kategoriyalar"
                    style={{ width: "30%", height: "40px" }}
                  >
                    <Option value="yangi">Yangi</Option>
                    <Option value="top">Top</Option>
                    <Option value="zaxira">Zaxira</Option>
                    <Option value="yuqori_sotuv">Yuqori Sotuv</Option>
                    <Option value="elektronika">Elektronika</Option>
                    <Option value="maishiy_texnika">Maishiy Texnika</Option>
                    <Option value="kiyim">Kiyim</Option>
                    <Option value="poyabzallar">Poyabzallar</Option>
                    <Option value="aksessuarlar">Aksessuarlar</Option>
                  </Select>
                  <Input
                    style={{ width: "70%", height: "40px" }}
                    placeholder="Qidiruv"
                  />
                </Space.Compact>
              </div>

              <div className="button_kategoriya">
                <Button style={{ width: "20%" }}>Yangi</Button>
                <Button style={{ width: "20%" }}>Top</Button>
                <Button style={{ width: "20%" }}>Zaxira</Button>
                <Button style={{ width: "20%" }}>Yuqori Sotuv</Button>
                <Button style={{ width: "20%" }}>Elektronika</Button>
                <Button style={{ width: "20%" }}>Maishiy Texnika</Button>
                <Button style={{ width: "20%" }}>Kiyim</Button>
                <Button style={{ width: "20%" }}>Poyabzallar</Button>
              </div>
              <div className="market_product_wrapper">
                <Card
                  className="card_category"
                  hoverable
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
                  <div className="market_button_wrapper">
                    <Button style={{ width: "100%", height: "40px" }}>
                      Reklama
                    </Button>
                    <Button
                      type="primary"
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",
                      }}
                    >
                      Oqim yaratish
                    </Button>
                  </div>
                </Card>

                <Card
                  className="card_category"
                  hoverable
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

                  <div className="market_button_wrapper">
                    <Button style={{ width: "100%", height: "40px" }}>
                      Reklama
                    </Button>
                    <Button
                      type="primary"
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",
                      }}
                    >
                      Oqim yaratish
                    </Button>
                  </div>
                </Card>

                <Card
                  className="card_category"
                  hoverable
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

                  <div className="market_button_wrapper">
                    <Button
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",
                      }}
                    >
                      Reklama
                    </Button>
                    <Button
                      type="primary"
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",
                      }}
                    >
                      Oqim yaratish
                    </Button>
                  </div>
                </Card>

                <Card
                  className="card_category"
                  hoverable
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

                  <div className="market_button_wrapper">
                    <Button
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",
                      }}
                    >
                      Reklama
                    </Button>
                    <Button
                      type="primary"
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",
                      }}
                    >
                      Oqim yaratish
                    </Button>
                  </div>
                </Card>

                <Card
                  className="card_category"
                  hoverable
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

                  <div className="market_button_wrapper">
                    <Button
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",
                      }}
                    >
                      Reklama
                    </Button>
                    <Button
                      type="primary"
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",
                      }}
                    >
                      Oqim yaratish
                    </Button>
                  </div>
                </Card>

                <Card
                  className="card_category"
                  hoverable
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

                  <div className="market_button_wrapper">
                    <Button
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",
                      }}
                    >
                      Reklama
                    </Button>
                    <Button
                      type="primary"
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",
                      }}
                    >
                      Oqim yaratish
                    </Button>
                  </div>
                </Card>

                <Card
                  className="card_category"
                  hoverable
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

                  <div className="market_button_wrapper">
                    <Button
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",
                      }}
                    >
                      Reklama
                    </Button>
                    <Button
                      type="primary"
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",
                      }}
                    >
                      Oqim yaratish
                    </Button>
                  </div>
                </Card>

                <Card
                  className="card_category"
                  hoverable
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

                  <div className="market_button_wrapper">
                    <Button
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",
                      }}
                    >
                      Reklama
                    </Button>
                    <Button
                      type="primary"
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",
                      }}
                    >
                      Oqim yaratish
                    </Button>
                  </div>
                </Card>

                <Card
                  className="card_category"
                  hoverable
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

                  <div className="market_button_wrapper">
                    <Button
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",
                      }}
                    >
                      Reklama
                    </Button>
                    <Button
                      type="primary"
                      style={{ width: "100%", marginTop: "10px", height: "40px" }}
                    >
                      Oqim yaratish
                    </Button>
                  </div>
                </Card>

                <Card
                  className="card_category"
                  hoverable
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

                  <div className="market_button_wrapper">
                    <Button style={{ width: "100%", marginTop: "10px", height: "40px" }}>
                      Reklama
                    </Button>
                    <Button
                      type="primary"
                      style={{ width: "100%", marginTop: "10px", height: "40px" }}
                    >
                      Oqim yaratish
                    </Button>
                  </div>
                </Card>

                <Card
                  className="card_category"
                  hoverable
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

                  <div className="market_button_wrapper">
                    <Button style={{ width: "100%", marginTop: "10px", height: "40px" }}>
                      Reklama
                    </Button>
                    <Button
                      type="primary"
                      style={{ width: "100%", marginTop: "10px", height: "40px" }}
                    >
                      Oqim yaratish
                    </Button>
                  </div>
                </Card>

                <Card
                  className="card_category"
                  hoverable
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

                  <div className="market_button_wrapper">
                    <Button
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",
                      }}
                    >
                      Reklama
                    </Button>
                    <Button
                      type="primary"
                      style={{ width: "100%", marginTop: "10px", height: "40px" }}
                    >
                      Oqim yaratish
                    </Button>
                  </div>
                </Card>

                <Card
                  className="card_category"
                  hoverable
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

                  <div className="market_button_wrapper">
                    <Button style={{ width: "100%", marginTop: "10px", height: "40px" }}>
                      Reklama
                    </Button>
                    <Button
                      type="primary"
                      style={{ width: "100%", marginTop: "10px", height: "40px" }}
                    >
                      Oqim yaratish
                    </Button>
                  </div>
                </Card>

                <Card
                  className="card_category"
                  hoverable
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

                  <div className="market_button_wrapper">
                    <Button style={{ width: "100%", marginTop: "10px", height: "40px" }}>
                      Reklama
                    </Button>
                    <Button
                      type="primary"
                      style={{ width: "100%", marginTop: "10px", height: "40px" }}
                    >
                      Oqim yaratish
                    </Button>
                  </div>
                </Card>

                <Card
                  className="card_category"
                  hoverable
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

                  <div className="market_button_wrapper">
                    <Button
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",

                      }}
                    >
                      Reklama
                    </Button>
                    <Button
                      type="primary"
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",
                      }}
                    >
                      Oqim yaratish
                    </Button>
                  </div>
                </Card>

                <Card
                  className="card_category"
                  hoverable
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

                  <div className="market_button_wrapper">
                    <Button style={{ width: "100%", marginTop: "10px", height: "40px" }}>
                      Reklama
                    </Button>
                    <Button
                      type="primary"
                      style={{ width: "100%", marginTop: "10px", height: "40px" }}
                    >
                      Oqim yaratish
                    </Button>
                  </div>
                </Card>

                <Card
                  className="card_category"
                  hoverable
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

                  <div className="market_button_wrapper">
                    <Button style={{ width: "100%", marginTop: "10px", height: "40px" }}>
                      Reklama
                    </Button>
                    <Button
                      type="primary"
                      style={{ width: "100%", marginTop: "10px", height: "40px" }}
                    >
                      Oqim yaratish
                    </Button>
                  </div>
                </Card>

                <Card
                  className="card_category"
                  hoverable
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

                  <div className="market_button_wrapper">
                    <Button
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        height: "40px",
                      }}
                    >
                      Reklama
                    </Button>
                    <Button
                      type="primary"
                      style={{ width: "100%", height: "40px", marginTop: "10px" }}
                    >
                      Oqim yaratish
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Market;
