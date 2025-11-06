import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { Select, Table } from "antd";
import "./statistic.css";
import AdminMenu from "../../MenuAdmin/AdminMenu";
import { EditOutlined } from "@ant-design/icons";

function Statistic() {
    const data = [
      {
        key: "1",
        oqim: "iPhone 15 Pro",
        foyda: 0,
        tashrif: 0,
        yangi: 0,
        qabulQilindi: 0,
        yetkazilmoqda: 0,
        yetkazibBerildi: 0,
        qaytibKeldi: 0,
        hold: 0,
        arxivlandi: 0,
      },
      {
        key: "2",
        oqim: "Soat",
        foyda: 0,
        tashrif: 0,
        yangi: 0,
        qabulQilindi: 0,
        yetkazilmoqda: 0,
        yetkazibBerildi: 0,
        qaytibKeldi: 0,
        hold: 0,
        arxivlandi: 0,
      },
      {
        key: "3",
        oqim: "Telefon 2",
        foyda: 0,
        tashrif: 0,
        yangi: 0,
        qabulQilindi: 0,
        yetkazilmoqda: 0,
        yetkazibBerildi: 0,
        qaytibKeldi: 0,
        hold: 0,
        arxivlandi: 0,
      },
      {
        key: "4",
        oqim: "Choper",
        foyda: 0,
        tashrif: 0,
        yangi: 0,
        qabulQilindi: 0,
        yetkazilmoqda: 0,
        yetkazibBerildi: 0,
        qaytibKeldi: 0,
        hold: 0,
        arxivlandi: 0,
      },

      {
        key: "5",
        oqim: "Choper",
        foyda: 0,
        tashrif: 0,
        yangi: 0,
        qabulQilindi: 0,
        yetkazilmoqda: 0,
        yetkazibBerildi: 0,
        qaytibKeldi: 0,
        hold: 0,
        arxivlandi: 0,
      },

      {
        key: "6",
        oqim: "Choper",
        foyda: 0,
        tashrif: 0,
        yangi: 0,
        qabulQilindi: 0,
        yetkazilmoqda: 0,
        yetkazibBerildi: 0,
        qaytibKeldi: 0,
        hold: 0,
        arxivlandi: 0,
      },

      {
        key: "7",
        oqim: "Choper",
        foyda: 0,
        tashrif: 0,
        yangi: 0,
        qabulQilindi: 0,
        yetkazilmoqda: 0,
        yetkazibBerildi: 0,
        qaytibKeldi: 0,
        hold: 0,
        arxivlandi: 0,
      },

      {
        key: "8",
        oqim: "Choper",
        foyda: 0,
        tashrif: 0,
        yangi: 0,
        qabulQilindi: 0,
        yetkazilmoqda: 0,
        yetkazibBerildi: 0,
        qaytibKeldi: 0,
        hold: 0,
        arxivlandi: 0,
      },

      {
        key: "9",
        oqim: "Choper",
        foyda: 0,
        tashrif: 0,
        yangi: 0,
        qabulQilindi: 0,
        yetkazilmoqda: 0,
        yetkazibBerildi: 0,
        qaytibKeldi: 0,
        hold: 0,
        arxivlandi: 0,
      },

      {
        key: "10",
        oqim: "Choper",
        foyda: 0,
        tashrif: 0,
        yangi: 0,
        qabulQilindi: 0,
        yetkazilmoqda: 0,
        yetkazibBerildi: 0,
        qaytibKeldi: 0,
        hold: 0,
        arxivlandi: 0,
      },
    ];

    const columns = [
      { title: "Oqim", dataIndex: "oqim", key: "oqim", width: 150 },
      { title: "Foyda", dataIndex: "foyda", key: "foyda", width: 100 },
      { title: "Tashrif", dataIndex: "tashrif", key: "tashrif", width: 100 },
      { title: "Yangi", dataIndex: "yangi", key: "yangi", width: 100 },
      {
        title: "Qabul qilindi",
        dataIndex: "qabulQilindi",
        key: "qabulQilindi",
        width: 150,
      },
      {
        title: "Yetkazilmoqda",
        dataIndex: "yetkazilmoqda",
        key: "yetkazilmoqda",
        width: 150,
      },
      {
        title: "Yetkazib berildi",
        dataIndex: "yetkazibBerildi",
        key: "yetkazibBerildi",
        width: 150,
      },
      {
        title: "Qaytib keldi",
        dataIndex: "qaytibKeldi",
        key: "qaytibKeldi",
        width: 150,
      },
      { title: "HOLD", dataIndex: "hold", key: "hold", width: 100 },
      {
        title: "Arxivlandi",
        dataIndex: "arxivlandi",
        key: "arxivlandi",
        width: 150,
      },
    ];

//   const columns = [
//     {
//       title: "Date",
//       dataIndex: "date",
//       key: "date",
//     },
//     {
//       title: "Project",
//       dataIndex: "project",
//       key: "project",
//     },
//     {
//       title: "Role",
//       dataIndex: "role",
//       key: "role",
//     },
//     {
//       title: "Activity",
//       dataIndex: "activity",
//       key: "activity",
//     },
//     {
//       title: "Hours",
//       dataIndex: "hours",
//       key: "hours",
//     },
//     {
//       title: "Comments",
//       dataIndex: "comments",
//       key: "comments",
//     },
//   ];

//   const data = [
//     {
//       key: "1",
//       date: "15 Jan",
//       project: "Project 1",
//       role: "Specialist",
//       activity: "Development",
//       hours: "8:00",
//       comments: "Prepared a presentation for CEO",
//     },
//     {
//       key: "2",
//       date: "15 Jan",
//       project: "Project 2",
//       role: "Specialist",
//       activity: "Development",
//       hours: "8:00",
//       comments: "Prepared a presentation for CEO",
//     },
//   ];

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
          <div className="statistik_select">
            <Select
              className="statistik_select"
              style={{ width: "163px", height: "44px", marginTop: "20px" }}
              defaultValue="Haftatik"
            >
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
              <Select.Option value="3">3</Select.Option>
              <Select.Option value="4">4</Select.Option>
              <Select.Option value="5">5</Select.Option>
              <Select.Option value="6">6</Select.Option>
              <Select.Option value="7">7</Select.Option>
            </Select>
          </div>
        </div>
        <div className="section_wrapper">
          <AdminMenu />
          <div className="top_wrapper">
            <div className="statistik_box">
              <h2 className="statistik_title">Statistik</h2>
              

              <Table
                className="table_time"
                columns={columns}
                dataSource={data}
                scroll={{ x: true }}
                
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistic;
