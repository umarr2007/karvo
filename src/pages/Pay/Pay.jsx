import React from "react";
import Header from "../../components/Header/Header";
import AdminMenu from "../../MenuAdmin/AdminMenu";
import { Link } from "react-router-dom";
import "./pay.css";
import { Button, Table, Pagination } from "antd";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";

function Pay() {
  const [scrollX, setScrollX] = useState(true);

  useEffect(() => {
    const updateScroll = () => {
      if (window.innerWidth <= 768) {
        setScrollX("max-content");
      } else {
        setScrollX(true);
      }
    };

    updateScroll();
    window.addEventListener("resize", updateScroll);

    return () => window.removeEventListener("resize", updateScroll);
  }, []);
  const data = [
    {
      key: "1",
      sana: "01/05/2025",
      hisobraqam: "9860 **** **** 9876",
      summa: "1 200 000 so’m",
      holat: "Jarayonda",
      xabar: "xabar",
    },
    {
      key: "2",
      sana: "12/06/2025",
      hisobraqam: "9860 **** **** 9876",
      summa: "1 295 000 so’m",
      holat: "O’tkazildi",
      xabar: "-",
    },

    {
      key: "3",
      sana: "01/05/2025",
      hisobraqam: "9860 **** **** 9876",
      summa: "1 200 000 so’m",
      holat: "O’tkazildi",
      xabar: "-",
    },

    {
      key: "4",
      sana: "12/06/2025",
      hisobraqam: "9860 **** **** 9876",
      summa: "1 295 000 so’m",
      holat: "O’tkazildi",
      xabar: "-",
    },

    {
      key: "5",
      sana: "01/05/2025",
      hisobraqam: "9860 **** **** 9876",
      summa: "1 200 000 so’m",
      holat: "O’tkazildi",
      xabar: "-",
    },

    {
      key: "6",
      sana: "12/06/2025",
      hisobraqam: "9860 **** **** 9876",
      summa: "1 295 000 so’m",
      holat: "O’tkazildi",
      xabar: "-",
    },

    {
      key: "7",
      sana: "12/06/2025",
      hisobraqam: "9860 **** **** 9876",
      summa: "1 295 000 so’m",
      holat: "O’tkazildi",
      xabar: "-",
    },

    {
      key: "8",
      sana: "12/06/2025",
      hisobraqam: "9860 **** **** 9876",
      summa: "1 295 000 so’m",
      holat: "O’tkazildi",
      xabar: "-",
    },
  ];

  const colums = [
    {
      title: "Sana",
      dataIndex: "sana",
      key: "sana",
    },
    {
      title: "Hisob raqami",
      dataIndex: "hisobraqam",
      key: "hisobraqam",
    },
    {
      title: "Summa",
      dataIndex: "summa",
      key: "summa",
    },
    {
      title: "Holat",
      dataIndex: "holat",
      key: "holat",
    },
    {
      title: "Xabar",
      dataIndex: "xabar",
      key: "xabar",
    },
  ];

  return (
    <section>
      <Header />
      <div className="container">
        <div className="statistik_wrapper">
          <div className="savat">
            <h2 className="cart_title">Shaxsiy kabinet</h2>
            <div className="cart_home">
              <Link to="/" className="home">
                Bosh sahifa
              </Link>
              <p className="gaming">Shaxsiy kabinet</p>
            </div>
          </div>
        </div>
        <div className="section_wrapper">
          <AdminMenu />
          <div className="paybox">
            <div className="paybox_text">
              <h2 className="paybox_title">To'lov tarixi</h2>
              <Button style={{ height: "38px" }} type="primary">
                Pul o'tkazish
              </Button>
            </div>
            <div className="paybox_table">
              <Table
                columns={colums}
                dataSource={data}
                // scroll={{ x: true }}
                scroll={{ x: scrollX }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Pay;
