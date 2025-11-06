import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Correctly() {
    const navigate = useNavigate();

  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Result
          status="success"
          title={
            <h2
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                lineHeight: "1.4",
                color: "#0b0f0e",
              }}
            >
              To'lov va buyurtma muvaffaqiyatli qabul qilindi
            </h2>
          }
          subTitle={
            <p>
              Operatorlarimiz tez orada siz bilan bog’lanadi va buyurtmangiz
              haqida ma’lumot beradi.
            </p>
          }
          extra={[
            <Button onClick={() => navigate("/")} type="primary" key="console">
              Bosh sahifaga qaytish
            </Button>,
          ]}
        />
      </div>
    </section>
  );
}

export default Correctly;
