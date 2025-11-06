import React from "react";
import Header from "../../components/Header/Header";
import AdminMenu from "../../MenuAdmin/AdminMenu";
import { Link } from "react-router-dom";
import { Button, Table } from "antd";
import "./contest.css";
import Footer from "../../components/Footer/Footer";

function Contest() {
  const dataSource = [
    { key: "1", sotuvchi: "Zara", sotilgan: 3030 },
    { key: "2", sotuvchi: "Layla", sotilgan: 5050 },
    { key: "3", sotuvchi: "Omar", sotilgan: 7070 },
    { key: "4", sotuvchi: "Amina", sotilgan: 9090 },
    { key: "5", sotuvchi: "Rami", sotilgan: 1111 },
    { key: "6", sotuvchi: "Nadia", sotilgan: 1313 },
    { key: "7", sotuvchi: "Samir", sotilgan: 1515 },
    { key: "8", sotuvchi: "Yasmin", sotilgan: 1717 },
    { key: "9", sotuvchi: "Khalid", sotilgan: 1919 },
    { key: "10", sotuvchi: "Sara", sotilgan: 2020 },
  ];
  const columns = [
    { title: "#", dataIndex: "key", key: "key" },
    { title: "Sotuvchi", dataIndex: "sotuvchi", key: "sotuvchi" },
    { title: "Sotilgan", dataIndex: "sotilgan", key: "sotilgan" },
  ];

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
          <div className="konkurs_box">
            <div className="konkurs_header">
              <h2>Konkurs</h2>
              <Button  className="btn_prize">Konkurs sovg'alari</Button>
            </div>

            <div className="konkurs_date_bar">
              <span>01/05/2025 dan</span>
              <div className="progress_bar">
                <div className="progress_fill"></div>
              </div>
              <span>30/10/2025 gacha</span>
            </div>

            <Table
              className="konkurs_table"
              dataSource={dataSource}
              columns={columns}
              pagination={{ pageSize: 10 }}
              scroll={{ x: "max-content" }}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Contest;
