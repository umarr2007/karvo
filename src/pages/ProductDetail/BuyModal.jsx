import React from "react";
import { useState } from "react";
import Buy from "./Buy";
import { Button, Modal } from "antd";
import Order from "./Order";

function BuyModal({ open, onClose }) {
  const [buymodal, setBuyModal] = useState("buy");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const buyrender = () => {
    switch (buymodal) {
      case "buy":
        return <Buy setBuyModal={setBuyModal} />;
      case "order":
        return <Order setBuyModal={setBuyModal} />;
      default:
        return null;
    }
  };
  return (
    <div>
      <Modal
        open={open}
        onCancel={onClose}
        footer={null}
        maskClosable={true}
        width={450}
        centered
      >
        {buyrender()}
      </Modal>
    </div>
  );
}

export default BuyModal;
