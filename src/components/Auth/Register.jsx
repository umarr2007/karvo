import React, { useState } from "react";
import { Input, Button, message } from "antd";
import "./login.css";

function Register({ setView }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [xato, setXato] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Yuklanmoqda...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Ro‘yxatdan o‘tish muvaffaqiyatli!",
        duration: 2,
      });
    }, 1000);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setXato("");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const mavjud = users.find((i) => i.email === email);

    if (mavjud) {
      messageApi.open({
        type: "error",
        content: "Bu email allaqachon mavjud!",
      });
      return;
    }

    const yangiUser = { name, email, password };
    users.push(yangiUser);
    localStorage.setItem("users", JSON.stringify(users));

    if (!name || !email || !password) {
      messageApi.open({
        type: "warning",
        content: "Iltimos, barcha maydonlarni to‘ldiring!",
      });
      return;
    }
    openMessage();
    setTimeout(() => setView("login"), 1500);
  };

  return (
    <div className="login_container">
      {contextHolder}
      <p className="welcome_title">Ro‘yxatdan o‘tish</p>
      <form onSubmit={handleRegister}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ismingiz"
          style={{ marginBottom: "10px" }}
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email manzilingiz"
          style={{ marginBottom: "10px" }}
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Parolingiz"
          type="password"
          style={{ marginBottom: "10px" }}
        />

        <Button type="primary" htmlType="submit" block>
          Ro‘yxatdan o‘tish
        </Button>

        {xato && (
          <p style={{ color: "red", marginTop: "10px", textAlign: "center" }}>
            {xato}
          </p>
        )}
      </form>

      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Allaqachon hisob bormi?
        <span
          onClick={() => setView("login")}
          style={{ color: "#3f51b5", cursor: "pointer" }}
        >
          Kirish
        </span>
      </p>
    </div>
  );
}

export default Register;
