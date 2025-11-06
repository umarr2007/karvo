import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";

function Order({ setBuyModal }) {
  return (
    <div>
      <Result
        status="success"
        title={
          <h2 style={{ fontSize: "18px", fontWeight: "bold",lineHeight: "1.4",color: "#0b0f0e" }}>
            Buyurtma muvaffaqiyatli qabul qilindi!{" "}
          </h2>
        }
        subTitle="Adminlarimiz 24 soat ichida siz bilan bog’lanishadi."
        extra={[
          <Button
            style={{ width: "100%" }}
            onClick={() => setBuyModal("buy")}
            type="primary"
          >
            Bosh sahifaga qaytish{" "}
          </Button>,
        ]}
      />
    </div>
  );
}

export default Order;
