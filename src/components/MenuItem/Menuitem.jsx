import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import "./menuitem.css";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Button } from "antd";
import { NavLink, useNavigate } from "react-router-dom";

function MenuItem() {
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      icon: <MailOutlined />,
      label: "Maʼlumotlarim",
      children: [
        {
          key: "11",
          label: (
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "menu_link active" : "menu_link"
              }
            >
              Manzil
            </NavLink>
          ),
        },
        {
          key: "12",
          label: (
            <NavLink
              to="/location"
              className={({ isActive }) =>
                isActive ? "menu_link active" : "menu_link"
              }
            >
              Maʼlumotlar
            </NavLink>
          ),
        },
      ],
    },
  ];
  const getLevelKeys = (items1) => {
    const key = {};
    const func = (items2, level = 1) => {
      items2.forEach((item) => {
        if (item.key) {
          key[item.key] = level;
        }
        if (item.children) {
          func(item.children, level + 1);
        }
      });
    };
    func(items1);
    return key;
  };
  const levelKeys = getLevelKeys(items);

  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => !stateOpenKeys.includes(key));
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <>
      <Menu
        className="menuitem_button"
        mode="inline"
        defaultSelectedKeys={["231"]}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        items={items}
      />
      <div className="sidebar">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "sidebar_link active" : "sidebar_link"
          }
        >
          <div className="sidebar_wrapper">
            <div className="sidebar_left">
              <SlLocationPin style={{ fontSize: "20px", color: "black" }} />
            </div>
            <div className="sidebar_right">
              <h2 className="sidebar_title">Manzil</h2>
            </div>
          </div>
        </NavLink>

        <NavLink
          to="/location"
          className={({ isActive }) =>
            isActive ? "sidebar_link active" : "sidebar_link"
          }
        >
          <div className="sidebar_wrapper">
            <div className="sidebar_left">
              <CiUser style={{ fontSize: "20px", color: "black" }} />
            </div>
            <div className="sidebar_right">
              <h2 className="sidebar_title">Ma'lumotlarim</h2>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default MenuItem;
