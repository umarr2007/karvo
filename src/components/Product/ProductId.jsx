import React, { useEffect, useState } from "react";
import { List, Card, Checkbox } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./productid.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Product from "./Product";
import Footer from "../Footer/Footer";

export default function ProductId() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    if (category) {
      axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => setProducts(res.data.products))
        .catch((err) => console.log(err));
    }
  }, [category]);

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
            <div className="selected_category">
              <Checkbox checked={checked} />{" "}
              {category ? category.toUpperCase() : ""}
            </div>
          </div>
        </div>

        <div className="productid_wrapper">
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, justify: "center" }}
            dataSource={products}
            renderItem={(product) => (
              <List.Item key={product.id}>
                <Card
                  hoverable
                  title={product.title}
                  onClick={() => navigate(`/detail/${product.id}`)} // shu product id bilan detail page
                  cover={
                    <img
                      alt={product.title}
                      src={product.thumbnail}
                      className="product_img"
                    />
                  }
                >
                  <p>Price: ${product.price}</p>
                </Card>
              </List.Item>
            )}
          />
        </div>
        <Product/>
      </div>
      <Footer/>
    </section>
  );
}
