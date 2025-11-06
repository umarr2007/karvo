import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import AdminMenu from "../../MenuAdmin/AdminMenu";
import "./stream.css";
import { Button, Checkbox, Pagination, Modal, Input } from "antd";
import { GoFileSymlinkFile } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { CloseOutlined } from "@ant-design/icons"; // ❗ X belgisi uchun
import { Upload } from "antd";

import { useState } from "react";
import Footer from "../../components/Footer/Footer";

function Stream() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      <Header />
      <div className="container">
        <div className="savat">
          <h2 className="cart_title">Shaxsiy kabinet</h2>
          <div className="cart_home">
            <Link to="/" className="home">
              Bosh sahifa
            </Link>
            <p className="gaming">Shaxsiy kabinet</p>
          </div>
        </div>
        <div className="section_wrapper">
          <AdminMenu />
          <div className="section_top_wrapper">
            <div className="streambox">
              <h2 className="streambox_title">Mening havolalarim</h2>
              <div className="stream_wrapper">
                <div className="stream_left">
                  <div className="stream_img">
                    <img src="/qora.png" alt="" />
                  </div>
                </div>
                <div className="strem_right">
                  <div className="stream_right_text">
                    <h3 className="stream_title">
                      G535 Lightspeed Wireless <br /> Gaming Headset
                    </h3>
                    <div className="stream_icons">
                      <GoFileSymlinkFile
                        onClick={showModal}
                        style={{ fontSize: "20px", cursor: "pointer" }}
                        className="stream_icon"
                      />
                      <MdDelete
                        style={{
                          fontSize: "20px",
                          color: "red",
                          cursor: "pointer",
                        }}
                        className="stream_icon"
                      />
                    </div>
                  </div>
                  <div className="stream_result">
                    <h3 className="stream_text">Foyda</h3>
                    <p className="stream_price">1 325 000 so'm</p>
                  </div>
                  <div className="checkbox_wrapper">
                    <Checkbox style={{ width: "24px", height: "24px" }} />
                    <p className="checkbox_text">
                      Sorovlarni hududsiz qabul qilish
                    </p>
                  </div>

                  <div className="checkbox_wrapper">
                    <Checkbox style={{ width: "24px", height: "24px" }} />
                    <p className="checkbox_text">Operatorsiz qabul qilish </p>
                  </div>
                </div>
              </div>

              <div className="stream_wrapper">
                <div className="stream_left">
                  <div className="stream_img">
                    <img src="/qora.png" alt="" />
                  </div>
                </div>
                <div className="strem_right">
                  <div className="stream_right_text">
                    <h3 className="stream_title">
                      G535 Lightspeed Wireless <br /> Gaming Headset
                    </h3>
                    <div className="stream_icons">
                      <GoFileSymlinkFile
                        onClick={showModal}
                        style={{ fontSize: "20px", cursor: "pointer" }}
                        className="stream_icon"
                      />
                      <MdDelete
                        style={{
                          fontSize: "20px",
                          color: "red",
                          cursor: "pointer",
                        }}
                        className="stream_icon"
                      />
                    </div>
                  </div>
                  <div className="stream_result">
                    <h3 className="stream_text">Foyda</h3>
                    <p className="stream_price">1 325 000 so'm</p>
                  </div>
                  <div className="checkbox_wrapper">
                    <Checkbox style={{ width: "24px", height: "24px" }} />
                    <p className="checkbox_text">
                      Sorovlarni hududsiz qabul qilish
                    </p>
                  </div>

                  <div className="checkbox_wrapper">
                    <Checkbox style={{ width: "24px", height: "24px" }} />
                    <p className="checkbox_text">Operatorsiz qabul qilish </p>
                  </div>
                </div>
              </div>

              <div className="stream_wrapper">
                <div className="stream_left">
                  <div className="stream_img">
                    <img src="/qora.png" alt="" />
                  </div>
                </div>
                <div className="strem_right">
                  <div className="stream_right_text">
                    <h3 className="stream_title">
                      G535 Lightspeed Wireless <br /> Gaming Headset
                    </h3>
                    <div className="stream_icons">
                      <GoFileSymlinkFile
                        onClick={showModal}
                        style={{ fontSize: "20px", cursor: "pointer" }}
                        className="stream_icon"
                      />
                      <MdDelete
                        style={{
                          fontSize: "20px",
                          color: "red",
                          cursor: "pointer",
                        }}
                        className="stream_icon"
                      />
                    </div>
                  </div>
                  <div className="stream_result">
                    <h3 className="stream_text">Foyda</h3>
                    <p className="stream_price">1 325 000 so'm</p>
                  </div>
                  <div className="checkbox_wrapper">
                    <Checkbox style={{ width: "24px", height: "24px" }} />
                    <p className="checkbox_text">
                      Sorovlarni hududsiz qabul qilish
                    </p>
                  </div>

                  <div className="checkbox_wrapper">
                    <Checkbox style={{ width: "24px", height: "24px" }} />
                    <p className="checkbox_text">Operatorsiz qabul qilish </p>
                  </div>
                </div>
              </div>

              <div className="stream_wrapper">
                <div className="stream_left">
                  <div className="stream_img">
                    <img src="/qora.png" alt="" />
                  </div>
                </div>
                <div className="strem_right">
                  <div className="stream_right_text">
                    <h3 className="stream_title">
                      G535 Lightspeed Wireless <br /> Gaming Headset
                    </h3>
                    <div className="stream_icons">
                      <GoFileSymlinkFile
                        onClick={showModal}
                        style={{ fontSize: "20px", cursor: "pointer" }}
                        className="stream_icon"
                      />
                      <MdDelete
                        style={{
                          fontSize: "20px",
                          color: "red",
                          cursor: "pointer",
                        }}
                        className="stream_icon"
                      />
                    </div>
                  </div>
                  <div className="stream_result">
                    <h3 className="stream_text">Foyda</h3>
                    <p className="stream_price">1 325 000 so'm</p>
                  </div>
                  <div className="checkbox_wrapper">
                    <Checkbox style={{ width: "24px", height: "24px" }} />
                    <p className="checkbox_text">
                      Sorovlarni hududsiz qabul qilish
                    </p>
                  </div>

                  <div className="checkbox_wrapper">
                    <Checkbox style={{ width: "24px", height: "24px" }} />
                    <p className="checkbox_text">Operatorsiz qabul qilish </p>
                  </div>
                </div>
              </div>
              <div className="pagination_stream">
                <Pagination defaultCurrent={1} total={40} />
              </div>
            </div>
          </div>
        </div>
        <Modal
          title={
            <span className="modal_title">
              Targetdan tushgan leadlarni import qilish
            </span>
          }
          closable={{ "aria-label": "Custom Close Button" }}
          open={isModalOpen}
          footer={null}
          onCancel={handleCancel}
          centered
          width={683}
          closeIcon={
            <CloseOutlined style={{ fontSize: "20px", color: "gray" }} /> // ✅ kattalashtirilgan X
          }
        >
          <p className="modal_text">Facebookdan olingan .csv faylni yuklang </p>
          <div className="modalbox">
            <div className="file_wrapper">
              <Upload showUploadList={false}>
                <div className="file_image">
                  <img className="file_img" src="/file.svg" alt="" />
                </div>
                <span className="modal_file">CSV faylni tanlang </span>
              </Upload>{" "}
            </div>
          </div>
          <Button style={{ width: "100%" , marginTop: "20px" }} type="primary">Jo'natish</Button>
        </Modal>
      </div>
      <Footer />
    </section>
  );
}

export default Stream;
