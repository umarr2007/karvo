import React from "react";
import Header from "../../components/Header/Header";
import { SlLocationPin } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import "./profile.css";
import MenuItem from "../../components/MenuItem/Menuitem";
import { Button, Select,Input } from "antd";

import { useState } from "react";
import Footer from "../../components/Footer/Footer";

function Profile() {
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
        <div className="menuitem_wrapper">
          <div className="menuitem_left">
            <MenuItem />
          </div>
          <div className="menuitem_right">
            <div className="profile_location_box">
              <h3 className="cart_location">Yetkazib berish manzili</h3>
              <div className="location_wrapper">
                <div className="location_input">
                  <div className="place_input">
                    <div className="place_wrapper">
                      <label className="place_label">Viloyat</label>
                      <Select
                        placeholder="Viloyatni tanlang"
                        style={{
                          width: "100%",
                          marginTop: "10px",
                          height: "45px",
                        }}
                      >
                        <Option value="toshkent">Toshkent</Option>
                        <Option value="samarqand">Samarqand</Option>
                        <Option value="andijon">Andijon</Option>
                        <Option value="namangan">Namangan</Option>
                        <Option value="fargona">Farg‘ona</Option>
                        <Option value="buxoro">Buxoro</Option>
                        <Option value="navoiy">Navoiy</Option>
                        <Option value="xorazm">Xorazm</Option>
                        <Option value="surxondaryo">Surxondaryo</Option>
                        <Option value="qashqadaryo">Qashqadaryo</Option>
                        <Option value="sirdaryo">Sirdaryo</Option>
                        <Option value="jizzax">Jizzax</Option>
                      </Select>
                    </div>

                    <div className="place_wrapper">
                      <label className="place_label">Tuman</label>
                      <Select
                        placeholder="Viloyatni tanlang"
                        style={{
                          width: "100%",
                          marginTop: "10px",
                          height: "45px",
                        }}
                      >
                        <Option value="toshkent">Toshkent</Option>
                        <Option value="samarqand">Samarqand</Option>
                        <Option value="andijon">Andijon</Option>
                        <Option value="namangan">Namangan</Option>
                        <Option value="fargona">Farg‘ona</Option>
                        <Option value="buxoro">Buxoro</Option>
                        <Option value="navoiy">Navoiy</Option>
                        <Option value="xorazm">Xorazm</Option>
                        <Option value="surxondaryo">Surxondaryo</Option>
                        <Option value="qashqadaryo">Qashqadaryo</Option>
                        <Option value="sirdaryo">Sirdaryo</Option>
                        <Option value="jizzax">Jizzax</Option>
                      </Select>
                    </div>

                    <div className="place_wrapper">
                      <label className="place_label">Ko'cha manzili</label>
                      <Input
                        style={{ height: "45px", marginTop: "10px" }}
                        placeholder="Ko'cha manzili"
                      />
                    </div>

                    <div className="place_wrapper">
                      <label className="place_label">Pochta indeksi</label>
                      <Input
                        style={{ height: "45px", marginTop: "10px" }}
                        placeholder="Pochta indeksi"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Profile;
