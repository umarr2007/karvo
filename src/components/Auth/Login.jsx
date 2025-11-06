import React, { useState, useContext } from "react";
import { Input, Button, message } from "antd";
import { AuthContext } from "../../App";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login({ setView, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const [xato, setXato] = useState("");
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const key = "login_key";
  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const mavjudUser = users.find(
      (i) => i.email === email && i.password === password
    );

    if (mavjudUser) {
      setUser(mavjudUser);
      localStorage.setItem("user", JSON.stringify(mavjudUser));

      messageApi.open({
        key,
        type: "loading",
        content: "Kirish tekshirilmoqda...",
      });

      setTimeout(() => {
        messageApi.open({
          key,
          type: "success",
          content: "Kirish muvaffaqiyatli!",
          duration: 2,
        });
      }, 1000);

      setTimeout(() => {
        onClose();
      }, 1500);
    } else {
      messageApi.open({
        type: "error",
        content: "Email yoki parol noto‘g‘ri!",
      });
    }
    if (email.trim() === "" || password.trim() === "") {
      messageApi.open({
        type: "warning",
        content: "Iltimos, barcha maydonlarni to‘ldiring!",
      });
    }
  };

  return (
    <div className="login_container">
      {contextHolder}

      <p className="welcome_title">Kirish</p>
      <form onSubmit={handleLogin}>
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
          style={{ marginTop: "24px" }}
        />
        <Button
          style={{ marginTop: "24px" }}
          type="primary"
          htmlType="submit"
          block
        >
          Kirish
        </Button>

        {xato && ( // ❗️xato bo‘lsa, ko‘rsatamiz
          <p
            style={{
              color: "red",
              fontSize: "14px",
              marginBottom: "10px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            {xato}
          </p>
        )}
      </form>

      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Hisob yo‘qmi?{" "}
        <span
          onClick={() => setView("register")}
          style={{ color: "#3f51b5", cursor: "pointer" }}
        >
          Ro‘yxatdan o‘tish
        </span>
      </p>
    </div>
  );
}

export default Login;
