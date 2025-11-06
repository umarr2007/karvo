import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./productdetail.css";
import { Select, Button, Tabs, Card } from "antd";
import { FiShoppingCart } from "react-icons/fi";
import BuyModal from "./BuyModal";
import Footer from "../../components/Footer/Footer";

function ProductDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const kategoriya = query.get("category");
  const [tanlangan, setTanlangan] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (kategoriya) setTanlangan(kategoriya);
  }, [kategoriya]);

  return (
    <section>
      <Header />
      <div className="container">
        <div className="category_text">
          <Link to={"/productid?category=Elektronika"} className="home">
            Bosh sahifa
          </Link>
          <h2 className="home">{tanlangan}</h2>
          <p className="gaming">Gaming</p>
        </div>
        <div className="product_detail_wrapper">
          <div className="productdetail_box">
            <div className="product_detail_left">
              <div className="productdetail_image">
                <img className="productdetail_img" src="/mouse.png" alt="" />
              </div>
            </div>
          </div>
          <div className="product_detail_right">
            <h2 className="product_detail_title">
              G502 X Lightspeed Wireless Gaming Mouse
            </h2>
            <p className="product_detail_price">1 325 000 so'm</p>
            <hr />
            <div className="product_detail_select">
              <h5 className="detail_select_title">Mahsulot parametrlari</h5>
              <div className="select_wrapper">
                <div className="select_label">
                  <label className="select_label_title">Turi</label>
                  <Select defaultValue="Simsiz" style={{ width: 140 }}>
                    <Select.Option value="1">1</Select.Option>
                    <Select.Option value="2">2</Select.Option>
                    <Select.Option value="3">3</Select.Option>
                    <Select.Option value="4">4</Select.Option>
                    <Select.Option value="5">5</Select.Option>
                  </Select>
                </div>
                <div className="select_label">
                  <label className="select_label_title">Turi</label>
                  <Select defaultValue="Rangi" style={{ width: 140 }}>
                    <Select.Option value="1">Oq</Select.Option>
                    <Select.Option value="2">Qora</Select.Option>
                    <Select.Option value="3">Yashil</Select.Option>
                    <Select.Option value="4">Kulrang</Select.Option>
                    <Select.Option value="5">Pushti</Select.Option>
                  </Select>
                </div>
              </div>
            </div>
            <div className="detail_button_wrapper">
              <Button
                type="primary"
                onClick={() => {
                  setOpen(true);
                }}
              >
                Bir klikda sotib olish
              </Button>
              <Button type="primary">Savatchaga qo‘shish</Button>
            </div>
          </div>
        </div>

        <Tabs
          style={{ marginTop: "60px" }}
          defaultActiveKey="1"
          items={[
            {
              key: "1",
              label: (
                <div>
                  <span style={{ fontWeight: "500" }}>Batafsil ma’lumot</span>
                </div>
              ),
              children: (
                <div>
                  <h3 className="tabs_title">
                    G502 X Lightspeed WirelessGaming Mouse
                  </h3>
                  <p className="tabs_text">
                    🔋 USB-C zaryadlash: USB-C orqali oson zaryadlash.
                    Batareyalarni almashtirish shart emas, shunchaki
                    sichqonchani qayta zaryadlang va undan foydalanishda davom
                    eting, bu esa uni yanada qulay va bardoshli <br /> qiladi.{" "}
                    <br /> <br /> 🎯 Sensor tezligi: 800-1200 -1600 DPI
                    sozlanishi sensor sezgirligi ofisdan tortib oʻyingacha
                    boʻlgan turli vazifalar uchun aniq va silliq ishlashini
                    taʼminlaydi. <br />
                    <br /> 🎛 Bluetooth ulanishi yoki chip: Bluetooth yoki simsiz
                    chip USB-C orqali qurilmalarga ulaning. Windows, MacOS,
                    Linux, Android-ni qo'llab-quvvatlaydi, asoratsiz moslikni
                    ta'minlaydi. Ushbu simsiz kompyuter sichqonchasi qulay ish
                    yoki o'yin uchun mukammal tanlovdir. Bluetooth
                    qo'llab-quvvatlashi va ovozsiz tugmalari bilan u uy va ofis
                    uchun mos keladi. Yorqin RGB yoritgichi zamonaviy taassurot
                    qo'shadi, ergonomik dizayn esa kun bo'yi qulay foydalanishni
                    ta'minlaydi. Ko'pgina qurilmalar bilan universal
                    muvofiqlikni qo'llab-quvvatlaydi
                  </p>
                </div>
              ),
            },
            {
              key: "2",
              label: (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span style={{ fontWeight: "500" }}>
                    Foydalanish qo'llanmasi
                  </span>
                </div>
              ),
              children: (
                <div>
                  <h3 className="tabs_title">
                    G504 X Lightspeed WirelessGaming Mouse
                  </h3>
                  <p className="tabs_text">
                    🔋 USB-C zaryadlash: USB-C orqali oson zaryadlash.
                    Batareyalarni almashtirish shart emas, shunchaki
                    sichqonchani qayta zaryadlang va undan foydalanishda davom
                    eting, bu esa uni yanada qulay va bardoshli <br /> qiladi.{" "}
                    <br /> <br /> 🎯 Sensor tezligi: 800-1200 -1600 DPI
                    sozlanishi sensor sezgirligi ofisdan tortib oʻyingacha
                    boʻlgan turli vazifalar uchun aniq va silliq ishlashini
                    taʼminlaydi. <br />
                    <br /> 🎛 Bluetooth ulanishi yoki chip: Bluetooth yoki simsiz
                    chip USB-C orqali qurilmalarga ulaning. Windows, MacOS,
                    Linux, Android-ni qo'llab-quvvatlaydi, asoratsiz moslikni
                    ta'minlaydi. Ushbu simsiz kompyuter sichqonchasi qulay ish
                    yoki o'yin uchun mukammal tanlovdir. Bluetooth
                    qo'llab-quvvatlashi va ovozsiz tugmalari bilan u uy va ofis
                    uchun mos keladi. Yorqin RGB yoritgichi zamonaviy taassurot
                    qo'shadi, ergonomik dizayn esa kun bo'yi qulay foydalanishni
                    ta'minlaydi. Ko'pgina qurilmalar bilan universal
                    muvofiqlikni qo'llab-quvvatlaydi
                  </p>
                </div>
              ),
            },
          ]}
        />

        <h2 className="product_title">O'xshash mahsulotlar</h2>

        <div className="product_wrapper">
          <div className="product_box">
            <Card
              hoverable
              cover={<img draggable={false} alt="example" src="/dazmol.png" />}
            >
              <div className="product_btn_wrapper">
                <button className="product_btn">
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
              cover={
                <img draggable={false} alt="example" src="/changyutkich.png" />
              }
            >
              <div className="product_btn_wrapper">
                <button className="product_btn">
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
              cover={
                <img draggable={false} alt="example" src="/kirmashina.png" />
              }
            >
              <div className="product_btn_wrapper">
                <button className="product_btn">
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
              cover={
                <img draggable={false} alt="example" src="/muzlatkich.png" />
              }
            >
              <div className="product_btn_wrapper">
                <button className="product_btn">
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
                <button className="product_btn">
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
                <button className="product_btn">
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
                <button className="product_btn">
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
                <button className="product_btn">
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
      </div>
      <BuyModal open={open} onClose={() => setOpen(false)} />
      <Footer/>
    </section>
  );
}

export default ProductDetail;
