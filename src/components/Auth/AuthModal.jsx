import React, { useState } from "react";
import { Modal } from "antd";
import Login from "./Login";
import Register from "./Register";
import Buy from "../../pages/ProductDetail/Buy";

function AuthModal({ open, onClose }) {
  const [view, setView] = useState("login");

  const renderView = () => {
    switch (view) {
      case "login":
        return <Login setView={setView} onClose={onClose} />;
      case "register":
        return <Register setView={setView} />;
      case "buy":
        return <Buy setView={setView} />;
      default:
        return null;
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      maskClosable={true}
      width={450}
      centered
    >
      {renderView()}
    </Modal>
  );
}

export default AuthModal;
