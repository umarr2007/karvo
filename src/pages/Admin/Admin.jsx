import React, { useMemo } from "react";
import Header from "../../components/Header/Header";
import "./admin.css";
import { useNavigate, NavLink } from "react-router-dom";
import AdminMenu from "../../MenuAdmin/AdminMenu";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import Footer from "../../components/Footer/Footer";

function Admin() {
  const options = useMemo(
    () => ({
      chart: { toolbar: { show: false } },
      colors: ["#82b7f8"],
      plotOptions: { bar: { borderRadius: 6, columnWidth: "50%" } },
      dataLabels: { enabled: false },
      xaxis: {
        categories: [
          "Toshkent",
          "Andijon",
          "Namangan",
          "Farg‘ona",
          "Jizzax",
          "Samarqand",
          "Buxoro",
          "Qashqadaryo",
          "Surxondaryo",
          "Xorazm",
          "Navoiy",
          "Qoraqalpog‘iston",
        ],
        labels: { rotate: -50, style: { fontSize: "12px" } },
      },
      yaxis: { title: { text: "Buyurtmalar soni" } },
      legend: { position: "top" },
      grid: { strokeDashArray: 4 },
    }),
    []
  );

  const series = useMemo(
    () => [
      {
        name: "Viloyatlar bo‘yicha buyurtmalar soni",
        data: [12, 23, 80, 45, 90, 10, 35, 50, 40, 95, 33],
      },
    ],
    []
  );
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
            <div className="service_wrapper">
              <div className="service_box">
                <h3 className="service_title">Jarayonda:</h3>
                <p className="service_price">757 000 so’m</p>
              </div>

              <div className="service_box">
                <h3 className="service_title">Balans:</h3>
                <p className="service_price">1 657 000 so’m</p>
              </div>

              <div className="service_box">
                <h3 className="service_title">To’lab berildi::</h3>
                <p className="service_price">6 500 000 so’m</p>
              </div>
            </div>
            <div className="dashboard_box">
              <div className="admin_chart_box">
                <h3 className="admin_chart_title">Dashboard </h3>
                <div style={{ marginTop: "20px" }}>
                  <Chart
                    type="pie"
                    height={400}
                    series={[40, 35, 25]}
                    options={{
                      chart: {
                        toolbar: { show: false },
                      },
                      legend: {
                        position: "top", // Yozuvlar tepada
                        horizontalAlign: "center",
                        fontSize: "14px",
                        labels: {
                          colors: "#000",
                        },
                      },
                      labels: ["Yangi", "To‘ldirilmoqda", "Tugallangan"],
                      colors: ["#ff5c8d", "#ff974d", "#ffd166"], // Pushti, to'q sariq, sariq
                      stroke: {
                        colors: ["#fff"],
                        width: 1,
                      },
                      responsive: [
                        {
                          breakpoint: 768,
                          options: {
                            legend: {
                              fontSize: "12px",
                            },
                          },
                        },
                      ],
                    }}
                  />
                </div>
              </div>
              <div style={{ marginTop: "30px" }}>
                <Chart
                  type="bar"
                  height={400}
                  series={[
                    {
                      name: "Viloyatlar bo‘yicha buyurtmalar soni",
                      data: [15, 25, 80, 45, 90, 20, 35, 50, 75, 95, 32],
                    },
                  ]}
                  options={{
                    chart: {
                      toolbar: { show: false },
                    },
                    title: {
                      text: "Viloyatlar bo‘yicha buyurtmalar soni",
                      align: "center",
                      style: {
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#333",
                      },
                    },
                    xaxis: {
                      categories: [
                        "Toshkent",
                        "Andijon",
                        "Namangan",
                        "Farg‘ona",
                        "Jizzax",
                        "Samarqand",
                        "Buxoro",
                        "Qashqadaryo",
                        "Sirdaryo",
                        "Xorazm",
                        "Navoiy",
                        "Qoraqalpog‘iston",
                      ],
                      labels: {
                        rotate: -45,
                        style: {
                          fontSize: "12px",
                          colors: "#555",
                        },
                      },
                    },
                    yaxis: {
                      min: 0,
                      max: 100,
                      tickAmount: 5,
                      labels: {
                        style: { fontSize: "12px", colors: "#555" },
                      },
                    },
                    grid: {
                      borderColor: "#eee",
                    },
                    plotOptions: {
                      bar: {
                        borderRadius: 4,
                        columnWidth: "50%",
                      },
                    },
                    fill: {
                      opacity: 0.7,
                      colors: ["#60a5fa"], // Hamma ustunlar bitta och ko‘k rangda
                    },
                    dataLabels: {
                      enabled: false,
                    },
                  }}
                />
              </div>
            </div>
            <div className="news">
              <h2 className="news_title">Yangiliklar</h2>
              <div className="news_wrapper">
                <div className="news_left">
                  <img className="news_img" src="/picture.png" alt="" />
                </div>
                <div className="news_right">
                  <h3 className="news_title">
                    Sotuvchimisiz? Unda adminlar guruhiga qoshiling!
                  </h3>
                  <p className="news_text">
                    Sotuvchimisiz? Unda adminlar uchun moljallagan telegram
                    gruppaga qoshiling va saytdagi yangiliklardan xabordor bolib
                    turing. Gruhga qoshilish birdan bir sharti bu: hisobingizda
                    50,000 som bolishi kerak kamida.
                  </p>

                  <p className="news_date">10.03.2025</p>
                </div>
              </div>
              <div className="news_wrapper">
                <div className="news_left">
                  <img className="news_img" src="/picture.png" alt="" />
                </div>
                <div className="news_right">
                  <h3 className="news_title">
                    Sotuvchimisiz? Unda adminlar guruhiga qoshiling!
                  </h3>
                  <p className="news_text">
                    Sotuvchimisiz? Unda adminlar uchun moljallagan telegram
                    gruppaga qoshiling va saytdagi yangiliklardan xabordor bolib
                    turing. Gruhga qoshilish birdan bir sharti bu: hisobingizda
                    50,000 som bolishi kerak kamida.
                  </p>

                  <p className="news_date">10.03.2025</p>
                </div>
              </div>
              <div className="pagination_wrapper">
                <Pagination pageSize={5} defaultCurrent={1} total={50} />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Admin;
