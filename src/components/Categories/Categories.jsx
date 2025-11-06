import React from "react";
import { useNavigate } from "react-router-dom";
import "./categories.css";
import { Empty } from 'antd';

function Categories() {
  const navigate = useNavigate();

  const kategoriyalar = [
    { nom: "Elektronika", rasm: "/phone.svg" },
    { nom: "Maishiy texnika", rasm: "/tecnic.svg" },
    { nom: "Kiyim", rasm: "/dress.svg" },
    { nom: "Poyabzallar", rasm: "/sniker.svg" },
    { nom: "Aksessuarlar", rasm: "/aerpods.svg" },
    { nom: "Kitoblar", rasm: "/book.svg" },
    { nom: "Salomatlik", rasm: "/health.svg" },
    { nom: "Uy-roʻzgʻor buyumlari", rasm: "/homes.svg" },
    { nom: "Qurilish va ta’mirlash", rasm: "/clean.svg" },
    { nom: "Avto tovarlar", rasm: "/car.svg" },
    { nom: "Bolalar tovarlari", rasm: "/bear.svg" },
    { nom: "Xobbi va ijod", rasm: "/game.svg" },
    { nom: "Sport va hordiq", rasm: "/ball.svg" },
    { nom: "Oziq ovqat mahsulotlari", rasm: "/cook.svg" },
    { nom: "Maishiy kimyoviy moddalar", rasm: "/clear.svg" },
    { nom: "Kanselyariya tovarlari", rasm: "/tovar.svg" },
    { nom: "Hayvonlar uchun tovarlar", rasm: "/baby.svg" },
    { nom: "Go'zallik va parvarishlash", rasm: "/salon.svg" },
  ];

  const handleClick = (nom) => {
    navigate(`/productid?category=${encodeURIComponent(nom)}`);
  };

  return (
    <section>
      <div className="container">
        <h3 className="categories_title">Kategoriyalar</h3>
        <div className="categories_wrapper">
          {kategoriyalar.map((item, i) => (
            <div
              key={i}
              className="categories_box"
              onClick={() => handleClick(item.nom)}
            >
              <div className="categories_box_img">
                <img src={item.rasm} alt={item.nom} draggable={false} />
              </div>
              <p className="categories_box_text">{item.nom}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
