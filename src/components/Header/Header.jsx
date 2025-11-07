import React, { useState, useContext, useEffect } from "react";
import "./header.css";
import {
  Select,
  Input,
  Button,
  message,
  Popconfirm,
  Dropdown,
  Space,
} from "antd";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { DownOutlined } from "@ant-design/icons";
import { AuthContext } from "../../App";
import AuthModal from "../Auth/AuthModal";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import { useLocation, NavLink } from "react-router-dom";
import { List, Card } from "antd";


function Header() {
  const [messageApi, contextHolder] = message.useMessage();
  const key = "logout_key";
  const navigate = useNavigate();
  const location = useLocation();

  const isAdmin =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/market") ||
    location.pathname.startsWith("/stream") ||
    location.pathname.startsWith("/statistic") ||
    location.pathname.startsWith("/pay") ||
    location.pathname.startsWith("/request") ||
    location.pathname.startsWith("/contest") ||
    location.pathname.startsWith("/target") ||
    location.pathname.startsWith("/profile");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.role === "admin") setIsAdmin(true);
  }, []);

  const confirm = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("users");
    setUser(null);
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Tizimdan chiqdingiz!",
        duration: 2,
      });
    });
  };

  const cancel = () => {
    message.info("Bekor qilindi");
  };
  const items = [
    {
      key: "1",
      label: (
        <span
          onClick={() => navigate("/profile")}
          style={{ cursor: "pointer" }}
        >
          Profile
        </span>
      ),
      extra: "⌘P",
    },
    {
      key: "2",
      label: (
        <span onClick={() => navigate("/admin")} style={{ cursor: "pointer" }}>
          Dashboard
        </span>
      ),
      extra: "⌘D",
    },
    {
      key: "3",
      label: (
        <Popconfirm
          title="Tizimdan chiqish"
          description="Haqiqatan chiqmoqchimisiz?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Ha"
          cancelText="Yo‘q"
        >
          <span style={{ cursor: "pointer", color: "red", fontWeight: "500" }}>
            Logout
          </span>
        </Popconfirm>
      ),
      extra: "⌘L",
    },
  ];
  const { Option } = Select;
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [admin, setAdmin] = useState(null);
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const saqladim = JSON.parse(localStorage.getItem("user"));
    setUser(saqladim);

    if (saqladim) {
      setUser(saqladim);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <header>
      <div className="header_box">
        {contextHolder}

        <div className="container">
          <div className="header_wrapper">
            <div onClick={() => navigate("/")} className="header_left">
              <img className="header_logo" src="/logo.svg" alt="" />
            </div>
            <div className="header_medium">
              <Input
                className="header_input"
                placeholder="Qanday mahsulotni qidiryapsiz?"
                addonBefore={
                  <Select
                    className="header_select"
                    defaultValue="Kategoriyalar"
                  >
                    <Option value="all">Kategoriyalar</Option>
                    <Option value="kiyim">Kiyimlar</Option>
                    <Option value="poyabzal">Poyabzal</Option>
                    <Option value="oyinchoq">O'yinchoqlar</Option>
                  </Select>
                }
              />
            </div>
            <div className="header_right">
              <Select
                style={{ border: "none" }}
                className="header_language"
                placeholder="O'zbek"
              >
                <Option value="all">Russian</Option>
                <Option value="kiyim">English</Option>
              </Select>
              {![
                "/admin",
                "/market",
                "/stream",
                "/statistic",
                "/pay",
                "/request",
                "/contest",
                "/target",
              ].includes(location.pathname) && (
                <Badge className="header_badge" count={5}>
                  <FaCartShopping
                    onClick={() => navigate("/cart")}
                    className="header_cart"
                    style={{ fontSize: "20px", color: "#818b9c" }}
                  />
                </Badge>
              )}

              <div className="header_user_box">
                {user ? (
                  <>
                    {user.role === "admin" ? (
                      location.pathname.startsWith("/admin") && (
                        <Dropdown menu={{ items }}>
                          <a onClick={(e) => e.preventDefault()}>
                            <Space>
                              <p className="header_name">{user.name}</p>
                              <DownOutlined />
                            </Space>
                          </a>
                        </Dropdown>
                      )
                    ) : (
                      // Oddiy foydalanuvchi bo‘lsa — har doim ko‘rsat
                      <Dropdown menu={{ items }}>
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            <p className="header_name">{user.name}</p>
                            <DownOutlined />
                          </Space>
                        </a>
                      </Dropdown>
                    )}
                  </>
                ) : (
                  <FaUserCircle
                    onClick={() => setOpen(true)}
                    className="header_user"
                    style={{
                      fontSize: "20px",
                      color: "#818b9c",
                      cursor: "pointer",
                    }}
                  />
                )}
              </div>

              <AiOutlineMenu
                onClick={() => setMenu(!menu)}
                className="header_menu"
                style={{ fontSize: "20px", color: "#818b9c" }}
              />
            </div>
          </div>

          {menu && (
            <div className="header_menu_box">
              <div className="menu_top">
                <img src="/logo.svg" alt="logo" className="menu_logo" />
                <Button
                  onClick={() => setMenu(!menu)}
                  className="header_menu_exit"
                  type="primary"
                >
                  Chiqish
                </Button>
              </div>

              {!isAdmin && (
                <div className="menu_inputs">
                  <Input className="menu_input" placeholder="Qidiruv" />
                </div>
              )}

              <div className="menu_bottom">
                {!isAdmin && (
                  <>
                    <div className="bottom_wrapper">
                      <div className="bottom_left">
                        <img src="/home.svg" alt="" />
                      </div>
                      <div className="bottom_right">
                        <Link to={"/"} className="bottom_link">Bosh sahifa</Link>
                      </div>
                    </div>

                    <div className="bottom_wrapper">
                      <div className="bottom_left">
                        <img src="/product.svg" alt="" />
                      </div>
                      <div className="bottom_right">
                        <Link className="bottom_link">Mahsulotlar</Link>
                      </div>
                    </div>

                    <div className="bottom_wrapper">
                      <div className="bottom_left">
                        <img src="/shop.svg" alt="" />
                      </div>
                      <div className="bottom_right">
                        <Link to={"/cart"} className="bottom_link">Savat</Link>
                      </div>
                    </div>

                    <div className="bottom_wrapper">
                      <div className="bottom_left">
                        <img src="/order.svg" alt="" />
                      </div>
                      <div className="bottom_right">
                        <Link className="bottom_link">Buyurtmalarim</Link>
                      </div>
                    </div>

                    <div className="bottom_wrapper">
                      <div className="bottom_left">
                        <img src="/location.svg" alt="" />
                      </div>
                      <div className="bottom_right">
                        <Link to={"/profile"} className="bottom_link">Manzil</Link>
                      </div>
                    </div>

                    <div className="bottom_wrapper">
                      <div className="bottom_left">
                        <img src="/user.svg" alt="" />
                      </div>
                      <div className="bottom_right">
                        <Link to={"/location"} className="bottom_link">Ma’lumotlarim</Link>
                      </div>
                    </div>

                    <div className="bottom_wrapper">
                      <div className="bottom_left">
                        <img src="/key.svg" alt="" />
                      </div>
                      <div className="bottom_right">
                        <Link className="bottom_link">
                          Parolni o‘zgartirish
                        </Link>
                      </div>
                    </div>

                    <div className="bottom_wrapper">
                      <div className="bottom_left">
                        <img src="/logout.svg" alt="" />
                      </div>
                      <div className="bottom_right">
                        <Link className="bottom_link">Tizimdan chiqish</Link>
                      </div>
                    </div>
                  </>
                )}

                {isAdmin && (
                  <>
                    <NavLink
                      to="/admin"
                      className={({ isActive }) =>
                        isActive ? "sidebar_link active" : "sidebar_link"
                      }
                    >
                      <div className="bottom_wrapper">
                        <div className="bottom_left">
                          <img src="/dashboard.svg" alt="" />
                        </div>
                        <div className="bottom_right">
                          <h2 className="bottom_link">Dashboard</h2>
                        </div>
                      </div>
                    </NavLink>

                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "sidebar_link active" : "sidebar_link"
                      }
                      to={"/market"}
                    >
                      <div className="bottom_wrapper">
                        <div className="bottom_left">
                          <img src="/shop.svg" alt="" />
                        </div>
                        <div className="bottom_right">
                          <h2 className="bottom_link">Market</h2>
                        </div>
                      </div>
                    </NavLink>

                    <NavLink className="sidebar_link" to={"/stream"}>
                      <div className="bottom_wrapper">
                        <div className="bottom_left">
                          <img src="/oqim.svg" alt="" />
                        </div>
                        <div className="bottom_right">
                          <h2 className="bottom_link">Oqim</h2>
                        </div>
                      </div>
                    </NavLink>

                    <NavLink className={"sidebar_link"} to={"/statistic"}>
                      <div className="bottom_wrapper">
                        <div className="bottom_left">
                          <img src="/statistika.svg" alt="" />
                        </div>
                        <div className="bottom_right">
                          <h2 className="bottom_link">Statistika</h2>
                        </div>
                      </div>
                    </NavLink>

                    <NavLink className={"sidebar_link"} to={"/pay"}>
                      <div className="bottom_wrapper">
                        <div className="bottom_left">
                          <img src="/tolov.svg" alt="" />
                        </div>
                        <div className="bottom_right">
                          <h2 className="bottom_link">To'lovlar</h2>
                        </div>
                      </div>
                    </NavLink>

                    <NavLink className={"sidebar_link"} to={"/request"}>
                      <div className="bottom_wrapper">
                        <div className="bottom_left">
                          <img src="/sorov.svg" alt="" />
                        </div>
                        <div className="bottom_right">
                          <h2 className="bottom_link">So'rovlar</h2>
                        </div>
                      </div>
                    </NavLink>

                    <NavLink className={"sidebar_link"} to={"/contest"}>
                      <div className="bottom_wrapper">
                        <div className="bottom_left">
                          <img src="/kubok.svg" alt="" />
                        </div>
                        <div className="bottom_right">
                          <h2 className="bottom_link">Konkurs</h2>
                        </div>
                      </div>
                    </NavLink>

                    <NavLink className={"sidebar_link"} to={"/target"}>
                      <div className="bottom_wrapper">
                        <div className="bottom_left">
                          <img src="/target.svg" alt="" />
                        </div>
                        <div className="bottom_right">
                          <h2 className="bottom_link">Target uchun API</h2>
                        </div>
                      </div>
                    </NavLink>

                    <NavLink className={"sidebar_link"} to={"/profile"}>
                      <div className="bottom_wrapper">
                        <div className="bottom_left">
                          <img src="/user.svg" alt="" />
                        </div>
                        <div className="bottom_right">
                          <h2 className="bottom_link">Ma’lumotlarim</h2>
                        </div>
                      </div>
                    </NavLink>

                    <div className="bottom_wrapper">
                      <div className="bottom_left">
                        <img src="/key.svg" alt="" />
                      </div>
                      <div className="bottom_right">
                        <Link className="bottom_link">
                          Parolni o‘zgartirish
                        </Link>
                      </div>
                    </div>

                    <div className="bottom_wrapper">
                      <div className="bottom_left">
                        <img src="/logout.svg" alt="" />
                      </div>
                      <div className="bottom_right">
                        <Link className="bottom_link">Tizimdan chiqish</Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <AuthModal open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
export default Header;
