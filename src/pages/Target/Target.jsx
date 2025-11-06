import React from "react";
import "./target.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import AdminMenu from "../../MenuAdmin/AdminMenu";
import { Button } from "antd";
import Footer from "../../components/Footer/Footer";
function Target() {
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
          <div className="targetbox">
            <div className="target_button">
              <Button style={{ backgroundColor: "#e4e9ee", height: "40px" }}>
                Telegram bilan bog’lanish
              </Button>
              <Button style={{ backgroundColor: "#e4e9ee", height: "40px" }}>
                Facebook bilan bog’lanish
              </Button>
            </div>
            <h3 className="target_title">Targetologlar uchun API</h3>

            <h4 className="target_text">Bu qanday imkoniyatlarni beradi?</h4>
            <p className="target_info">
              Targetdan kelgan buyurtmalarni eskirib qolmasidan 100k.uz saytiga
              avtomatik yuborishingiz mumkin. Buyurtmalarni to'plab qo'lda
              kiritish foydani kamaytiradi va har xil xatoliklarga olib kelishi
              mumkin. Buyurtmalarni qabul qilishga o'zingizga sayt ochishingiz
              mumkin. Bunda ham buyurtmachilarni ism familiyasini yozib olib,
              keyin qo'lda kiritmasdan bizga buyurtma berishi bilanoq
              saytingizni o'zi yuboradigan qilishingiz mumkin. <br /> Boshqa
              saytlarda maxsulot yo'q, lekin bizda bor bo'lsa, u sayt
              buyurtmalarni bizga yuborishi mumkin. Traffback haqida yozishgan
              edi (sotuvchi.com g’oyasi) Va boshqa imkoniyatlar. API faqat
              yuqorida aytilgan holatlar bilan cheklanib qolmay, turli
              holatlarda qo'llanilishi mumkin <br /> Agar siz biz bergan
              oqimlarni telegramda reklama qilsangiz, yuqori ehtimol bilan sizga
              API kerak emas Agar siz dasturchi bo'lsangiz, dasturlash tillarida
              http so'rov yuborish kutubxonalaridan foydalanishingiz mumkin.
              Agar siz targetdan kelgan buyurtmalarni bizga yubormoqchi
              bo'lsangiz, albato.ru, make.com, ifttt.com va boshqa platformalar
              orqali yuborishingiz mumkin. Bunga dasturlashni bilish kerak emas.
            </p>

            <h3 className="target_title">Target uchun API</h3>
            <p className="target_info">
              Ushbu API method yordamida siz buyurtmalarni 100k.uz sayitiga
              avtomatik yuborishni yo‘lga qo‘yishingiz mumkin bo‘ladi <br /> Api
              orqali buyurtmalar POST: https://api.100k.uz/api/shop adresiga
              so'rov ko'rinishida yuborilishi kerak.
            </p>

            <div className="parametr_target">
              <h4 className="target_text">Headers</h4>
              <div className="headers_border">
                <Button style={{ height: "50px" }}>Content-Type</Button>
                <p className="headers_text">Example: application/json</p>
              </div>

              <div className="headers_border">
                <Button style={{ height: "50px" }}>Content-Type</Button>
                <p className="headers_text">Example: application/json</p>
              </div>
            </div>

            <div className="parametr_target">
              <h4 className="target_text">Body parameters</h4>
              <div className="headers_border">
                <Button style={{ height: "50px" }}>client_full_name</Button>
                <p className="headers_text">
                  Mijozning Ismi yoki F.I.O Namuna: Sherzod
                </p>
              </div>

              <div className="headers_border">
                <Button style={{ height: "50px" }}>customer_phone</Button>
                <p className="headers_text">
                  Mijozning telefon raqami Namuna: +998901234567{" "}
                </p>
              </div>

              <div className="headers_border">
                <Button style={{ height: "50px" }}>customer_phone</Button>
                <p className="headers_text">
                  Mijozning Ismi yoki F.I.O Namuna: Sherzod
                </p>
              </div>

              <div className="headers_border">
                <Button style={{ height: "50px" }}>customer_phone</Button>
                <p className="headers_text">
                  Mijozning Ismi yoki F.I.O Namuna: Sherzod
                </p>
              </div>

              <div className="headers_border">
                <Button style={{ height: "50px" }}>customer_phone</Button>
                <p className="headers_text">
                  Mijozning Ismi yoki F.I.O Namuna: Sherzod
                </p>
              </div>

              <div className="headers_border">
                <Button style={{ height: "50px" }}>customer_phone</Button>
                <p className="headers_text">
                  Mijozning Ismi yoki F.I.O Namuna: Sherzod
                </p>
              </div>

              <div className="headers_border">
                <Button style={{ height: "50px" }}>customer_phone</Button>
                <p className="headers_text">
                  Mijozning Ismi yoki F.I.O Namuna: Sherzod
                </p>
              </div>

              <div className="headers_border">
                <Button style={{ height: "50px" }}>customer_phone</Button>
                <p className="headers_text">
                  Mijozning Ismi yoki F.I.O Namuna: Sherzod
                </p>
              </div>

              <div className="headers_border">
                <Button style={{ height: "50px" }}>customer_phone</Button>
                <p className="headers_text">
                  Mijozning Ismi yoki F.I.O Namuna: Sherzod
                </p>
              </div>

              <div className="headers_border">
                <Button style={{ height: "50px" }}>customer_phone</Button>
                <p className="headers_text">
                  Mijozning Ismi yoki F.I.O Namuna: Sherzod
                </p>
              </div>

              <div className="headers_border">
                <Button style={{ height: "50px" }}>customer_phone</Button>
                <p className="headers_text">
                  Mijozning Ismi yoki F.I.O Namuna: Sherzod
                </p>
              </div>

              <div className="headers_border">
                <Button style={{ height: "50px" }}>customer_phone</Button>
                <p className="headers_text">
                  Mijozning Ismi yoki F.I.O Namuna: Sherzod
                </p>
              </div>

              <div className="headers_border">
                <Button style={{ height: "50px" }}>customer_phone</Button>
                <p className="headers_text">
                  Mijozning Ismi yoki F.I.O Namuna: Sherzod
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Target;
