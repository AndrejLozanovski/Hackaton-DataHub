
"use client";
import React, { useState } from "react";
import "./ComponentsStyle/categories.css";
import { CategoriesCards } from "./CategoriesCards";

const categories = [
  {
    id: "1",
    name: "Обувки",
    key: "obuvki",
    icon: "/assets/images/categoriesIcons/shoes.png",
    hoverIcon: "/assets/images/categoriesIcons/shoesHover.png",
  },

  {
    id: "3",
    name: "Бела техника",
    key: "bela-tehnika",
    icon: "/assets/images/categoriesIcons/tech.png",
    hoverIcon: "/assets/images/categoriesIcons/techHover.png",
  },
  {
    id: "4",
    name: "Игри и конзоли",
    key: "igri",
    icon: "/assets/images/categoriesIcons/games.png",
    hoverIcon: "/assets/images/categoriesIcons/gamesHover.png",
  },
  {
    id: "5",
    name: "Облека",
    key: "obleka",
    icon: "/assets/images/categoriesIcons/clothes.png",
    hoverIcon: "/assets/images/categoriesIcons/clothesHover.png",
  },
  {
    id: "6",
    name: "За деца",
    key: "za_deca",
    icon: "/assets/images/categoriesIcons/kids.png",
    hoverIcon: "/assets/images/categoriesIcons/kidsHover.png",
  },
  {
    id: "7",
    name: "Фотографија",
    key: "foto",
    icon: "/assets/images/categoriesIcons/foto.png",
    hoverIcon: "/assets/images/categoriesIcons/fotoHover.png",
  },
  {
    id: "8",
    name: "Спорт",
    key: "sport",
    icon: "/assets/images/categoriesIcons/sport.png",
    hoverIcon: "/assets/images/categoriesIcons/sportHover.png",
  },
];

export const CategoriesDropdown = ({
  isOpen,
  setActiveMenu,
  activeMenu,
}: any) => {
  const [hoveredCategory, setHoveredCategory] = useState(false);

  return (
    <div className="categoriesDropdown">
      <div className={`customDropdown ${isOpen ? "show" : ""}`}>
        <div className="leftSide">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`categoryItem mb-5 ${
                activeMenu === category.key ? "active" : ""
              }`}
              onClick={() => setActiveMenu(category.key)}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <img
                src={
                  hoveredCategory === category.id
                    ? category.hoverIcon
                    : category.icon
                }
                alt={category.name}
                style={{ marginRight: "15px", width: "35px" }}
              />
              <h5 className="m-0">{category.name}</h5>
            </div>
          ))}
        </div>
        <div className="rightSide">
          {activeMenu === "obuvki" && (
            <div className="row">
              <div className="col">
                <h1 className="fw-bolder">Обувки</h1>
              </div>
            </div>
          )}
          {activeMenu === "bela-tehnika" && (
            <div className="row">
              <div className="col ">
                <h1 className="fw-bolder">Бела техника</h1>
                <CategoriesCards />
              </div>
            </div>
          )}
          {activeMenu === "igri" && (
            <div className="row">
              <div className="col ">
                <h1 className="fw-bolder">Игри и конзоли</h1>
              </div>
            </div>
          )}
          {activeMenu === "obleka" && (
            <div className="row">
              <div className="col ">
                <h1 className="fw-bolder">Облека</h1>
              </div>
            </div>
          )}
          {activeMenu === "za_deca" && (
            <div className="row">
              <div className="col ">
                <h1 className="fw-bolder">За деца</h1>
              </div>
            </div>
          )}
          {activeMenu === "foto" && (
            <div className="row">
              <div className="col ">
                <h1 className="fw-bolder">Фотографија</h1>
              </div>
            </div>
          )}
          {activeMenu === "sport" && (
            <div className="row">
              <div className="col ">
                <h1 className="fw-bolder">Спорт</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
