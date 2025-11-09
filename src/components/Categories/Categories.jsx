import React from "react";
import { useNavigate } from "react-router-dom";
import "./categories.css";
import { Button, Empty } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { List, Card } from "antd";
function Categories() {
  const navigate = useNavigate();


  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <section>
      <div className="container">
        <h3 className="categories_title">Kategoriyalar</h3>
        <div className="categories_wrapper">
          <div className="categories_wrapper">
            {categories.map((item, index) => (
              <Button
                // key={typeof item === "string" ? item : item.id || index}
                style={{ height: "50px", fontSize: "13px" }}
                onClick={() =>
                  navigate(
                    `/productid/${typeof item === "string" ? item : item.slug}`
                  )
                }
              >
                {typeof item === "string"
                  ? item.toUpperCase()
                  : item.name.toUpperCase()}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
