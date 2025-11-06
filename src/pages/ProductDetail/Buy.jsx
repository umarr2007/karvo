import React from "react";
import { Input, Button, Select, Form, message } from "antd";
import "./buy.css";

function Buy({ setBuyModal }) {
  const [form] = Form.useForm();

  const times = () => {
    form
      .validateFields()
      .then(() => {
        setTimeout(() => setBuyModal("order"), 1000);
      })
      .catch(() => {
        message.error("Iltimos, barcha maydonlarni to‘ldiring!");
      });
  };

  return (
    <section>
      <h2>Buyurtma berish</h2>
      <div className="buy_wrapper">
        <Form form={form} layout="vertical">
          <Form.Item
            name="ism"
            rules={[{ required: true, message: "Ismingizni kiriting!" }]}
          >
            <Input placeholder="Ismingiz" />
          </Form.Item>

          <Form.Item
            name="telefon"
            rules={[
              { required: true, message: "Telefon raqamingizni kiriting!" },
            ]}
          >
            <Input placeholder="Telefon raqamingiz" />
          </Form.Item>

          <Form.Item
            name="hudud"
            rules={[{ required: true, message: "Hududni tanlang!" }]}
          >
            <Select placeholder="Hududni tanlang">
              <Select.Option value="Toshkent">Toshkent</Select.Option>
              <Select.Option value="Andijon">Andijon</Select.Option>
              <Select.Option value="Farg'ona">Farg'ona</Select.Option>
              <Select.Option value="Namangan">Namangan</Select.Option>
              <Select.Option value="Sirdaryo">Sirdaryo</Select.Option>
              <Select.Option value="Jizzax">Jizzax</Select.Option>
              <Select.Option value="Qashqadaryo">Qashqadaryo</Select.Option>
              <Select.Option value="Samarqand">Samarqand</Select.Option>
              <Select.Option value="Surxondaryo">Surxondaryo</Select.Option>
              <Select.Option value="Navoiy">Navoiy</Select.Option>
              <Select.Option value="Buxoro">Buxoro</Select.Option>
              <Select.Option value="Qoraqalpoq">Qoraqalpoq</Select.Option>
              
            </Select>
          </Form.Item>

          <Button type="primary" onClick={times}>
            Buyurtma berish
          </Button>
        </Form>
      </div>
    </section>
  );
}

export default Buy;
