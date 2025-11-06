import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import MenuItem from "../../components/MenuItem/Menuitem";
import "./personal.css";
import { Select, Input } from "antd";
import { AuthContext } from "../../App";
import { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import { Empty } from 'antd';


const { Option } = Select;

function Location() {
  const { Option } = Select;
  const { user } = useContext(AuthContext); 
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
          <div className="location_left">
            <MenuItem />
          </div>

          <div className="location_right">
            <div className="profile_location_box">
              <h3 className="cart_location">Maʼlumotlarim</h3>

              {user ? (
                <div className="location_wrapper">
                  <div className="location_input">
                    <div className="place_input">
                      <div className="place_wrapper">
                        <label className="place_label">Ism</label>
                        <Input
                          style={{ height: "45px", marginTop: "10px" }}
                          value={user.name}
                          readOnly
                        />
                      </div>

                      <div className="place_wrapper">
                        <label className="place_label">Email</label>
                        <Input
                          style={{ height: "45px", marginTop: "10px" }}
                          value={user.email}
                          readOnly
                        />
                      </div>

                      <div className="place_wrapper">
                        <label className="place_label">Parol</label>
                        <Input
                          style={{ height: "45px", marginTop: "10px" }}
                          value={user.password}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Empty description="Maʼlumot topilmadi. Iltimos, tizimga kiring." />
                
              
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Location;
