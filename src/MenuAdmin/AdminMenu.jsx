import React from "react";
import "./adminmenu.css";
import { Link, NavLink } from "react-router-dom";

function AdminMenu() {
  return (
    <section>
      <div className="adminbox">
        <NavLink to={"/admin"}
          className={({ isActive }) =>
            isActive ? "adminbox_link active" : "adminbox_link"
          }
        >
          <div className="adminbox_wrapper">
            <div className="adminbox_left">
              <img className="adminbox_img" src="/dashboard.svg" alt="" />
            </div>
            <div className="adminbox_right">
              <h2 className="adminbox_title">Dashboard</h2>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/market"}
          className={({ isActive }) =>
            isActive ? "adminbox_link active" : "adminbox_link"
          }
        >
          <div className="adminbox_wrapper">
            <div className="adminbox_left">
              <img className="adminbox_img" src="/shop.svg" alt="" />
            </div>
            <div className="adminbox_right">
              <h2 className="adminbox_title">Market</h2>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/stream"}
          className={({ isActive }) =>
            isActive ? "adminbox_link active" : "adminbox_link"
          }
        >
          <div className="adminbox_wrapper">
            <div className="adminbox_left">
              <img className="adminbox_img" src="/oqim.svg" alt="" />
            </div>
            <div className="adminbox_right">
              <h2 className="adminbox_title">Oqim</h2>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/statistic"}
          className={({ isActive }) =>
            isActive ? "adminbox_link active" : "adminbox_link"
          }
        >
          <div className="adminbox_wrapper">
            <div className="adminbox_left">
              <img className="adminbox_img" src="/statistika.svg" alt="" />
            </div>
            <div className="adminbox_right">
              <h2 className="adminbox_title">Statistika</h2>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/pay"}
          className={({ isActive }) =>
            isActive ? "adminbox_link active" : "adminbox_link"
          }
        >
          <div className="adminbox_wrapper">
            <div className="adminbox_left">
              <img className="adminbox_img" src="/tolov.svg" alt="" />
            </div>
            <div className="adminbox_right">
              <h2 className="adminbox_title">To'lovlar</h2>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/request"}
          className={({ isActive }) =>
            isActive ? "adminbox_link active" : "adminbox_link"
          }
        >
          <div className="adminbox_wrapper">
            <div className="adminbox_left">
              <img className="adminbox_img" src="/sorov.svg" alt="" />
            </div>
            <div className="adminbox_right">
              <h2 className="adminbox_title">So’rovlar</h2>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/contest"}
          className={({ isActive }) =>
            isActive ? "adminbox_link active" : "adminbox_link"
          }
        >
          <div className="adminbox_wrapper">
            <div className="adminbox_left">
              <img className="adminbox_img" src="/kubok.svg" alt="" />
            </div>
            <div className="adminbox_right">
              <h2 className="adminbox_title">Konkurs</h2>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/target"}
          className={({ isActive }) =>
            isActive ? "adminbox_link active" : "adminbox_link"
          }
        >
          <div className="adminbox_wrapper">
            <div className="adminbox_left">
              <img className="adminbox_img" src="/target.svg" alt="" />
            </div>
            <div className="adminbox_right">
              <h2 className="adminbox_title">Target uchu API</h2>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/profile"}
          className={({ isActive }) =>
            isActive ? "adminbox_link active" : "adminbox_link"
          }
        >
          <div className="adminbox_wrapper">
            <div className="adminbox_left">
              <img className="adminbox_img" src="/user.svg" alt="" />
            </div>
            <div className="adminbox_right">
              <h2 className="adminbox_title">Ma’lumotlarim</h2>
            </div>
          </div>
        </NavLink>

       
      </div>
    </section>
  );
}

export default AdminMenu;
