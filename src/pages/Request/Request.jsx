import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import AdminMenu from "../../MenuAdmin/AdminMenu";
import { Table, Tag } from "antd";

import "./request.css";
import Footer from "../../components/Footer/Footer";
function Request() {
  const dataSource = [
    {
      key: "1",
      operator: "Ali",
      mahsulot: "iPhone 13 pro",
      oqim: "https://karvon.uz/...",
      buyurtmachi: { name: "Hasan", phone: "+998 99 842 77 77" },
      viloyat: "Toshkent",
      holat: "Jarayonda",
    },
    {
      key: "2",
      operator: "Fatima",
      mahsulot: "AirPods 3",
      oqim: "https://karvon.uz/...",
      buyurtmachi: { name: "Tohir", phone: "+998 99 842 77 77" },
      viloyat: "Andijon",
      holat: "Javob berildi",
    },

    {
      key: "3",
      operator: "Ali",
      mahsulot: "iPhone 13 pro",
      oqim: "https://karvon.uz/...",
      buyurtmachi: { name: "Hasan", phone: "+998 99 842 77 77" },
      viloyat: "Toshkent",
      holat: "Jarayonda",
    },

    {
      key: "4",
      operator: "Fatima",
      mahsulot: "AirPods 3",
      oqim: "https://karvon.uz/...",
      buyurtmachi: { name: "Tohir", phone: "+998 99 842 77 77" },
      viloyat: "Andijon",
      holat: "Javob berildi",
    },

    {
      key: "5",
      operator: "Ali",
      mahsulot: "iPhone 13 pro",
      oqim: "https://karvon.uz/...",
      buyurtmachi: { name: "Hasan", phone: "+998 99 842 77 77" },
      viloyat: "Toshkent",
      holat: "Jarayonda",
    },

    {
      key: "6",
      operator: "Fatima",
      mahsulot: "AirPods 3",
      oqim: "https://karvon.uz/...",
      buyurtmachi: { name: "Tohir", phone: "+998 99 842 77 77" },
      viloyat: "Andijon",
      holat: "Javob berildi",
    },

    {
      key: "7",
      operator: "Ali",
      mahsulot: "iPhone 13 pro",
      oqim: "https://karvon.uz/...",
      buyurtmachi: { name: "Hasan", phone: "+998 99 842 77 77" },
      viloyat: "Toshkent",
      holat: "Jarayonda",
    },

    {
      key: "8",
      operator: "Fatima",
      mahsulot: "AirPods 3",
      oqim: "https://karvon.uz/...",
      buyurtmachi: { name: "Tohir", phone: "+998 99 842 77 77" },
      viloyat: "Andijon",
      holat: "Javob berildi",
    },

    {
      key: "9",
      operator: "Ali",
      mahsulot: "iPhone 13 pro",
      oqim: "https://karvon.uz/...",
      buyurtmachi: { name: "Hasan", phone: "+998 99 842 77 77" },
      viloyat: "Toshkent",
      holat: "Jarayonda",
    },

    {
      key: "10",
      operator: "Fatima",
      mahsulot: "AirPods 3",
      oqim: "https://karvon.uz/...",
      buyurtmachi: { name: "Tohir", phone: "+998 99 842 77 77" },
      viloyat: "Andijon",
      holat: "Javob berildi",
    },

  ];

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      width: 60,
      render: (key) => key.padStart(2, "0"),
    },
    {
      title: "Operator",
      dataIndex: "operator",
    },
    {
      title: "Mahsulot",
      dataIndex: "mahsulot",
    },
    {
      title: "Oqim",
      dataIndex: "oqim",
      render: (url) => (
        <a href={url} target="_blank" rel="noreferrer">
          {url.slice(0, 20)}...
        </a>
      ),
    },
    {
      title: "Buyurtmachi",
      dataIndex: "buyurtmachi",
      render: (obj) => (
        <div>
          <div>{obj.name}</div>
          <span style={{ color: "#8E9BAE" }}>{obj.phone}</span>
        </div>
      ),
    },
    {
      title: "Viloyat",
      dataIndex: "viloyat",
    },
    {
      title: "Holat",
      dataIndex: "holat",
      render: (text) =>
        text === "Jarayonda" ? (
          <Tag color="orange">{text}</Tag>
        ) : (
          <Tag color="blue">{text}</Tag>
        ),
    },
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
          <div className="table_box">
            <h2 className="table_title">So'rovlar</h2>
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={{ pageSize: 10 }}
              scroll={{ x: "max-content" }}
            />
          </div>{" "}
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Request;
