"use client";

import Image from "next/image";
import styles from "./page.module.css";
import "./homepage.css";
import { useState } from "react";

export default function Home() {
  const [isShoes, setIsShoes] = useState(false);
  const [isTech, setIsTech] = useState(false);
  const [isGames, setIsGames] = useState(false);
  const [isClothes, setIsClothes] = useState(false);
  const [isKids, setIsKids] = useState(false);
  const [isCamera, setIsCamera] = useState(false);
  const [isSport, setIsSport] = useState(false);

  return (
    <>
      <div className=" m-4">
        <div className="bannerImage">
          <div className="container">
            <div className="inner">
              <h1 className="fw-bold ">Datahub</h1>
              <p>Сите твои потреби на едно место</p>
              <div className="search-box d-flex">
                <input
                  type="search"
                  className="custom-search"
                  placeholder="Пребарувај"
                />
                <i className="fa fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <div className="innerImg">
            <img
              src="./assets/images/herosection/herosection2.png"
              alt="herosection2"
            />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-around py-4">
        <div
          className="favorite d-flex flex-column align-items-center text-center justify-content-center"
          onMouseEnter={() => setIsShoes(true)}
          onMouseLeave={() => setIsShoes(false)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={
              isShoes
                ? "/assets/images/categoriesIcons/shoesHover.png"
                : "/assets/images/categoriesIcons/shoes.png"
            }
            className={"favoriteImage"}
            alt="shoe icon"
          />
          <p className="m-0 mt-3 ">Обувки</p>
        </div>
        <div
          className="favorite d-flex flex-column align-items-center text-center justify-content-center"
          onMouseEnter={() => setIsTech(true)}
          onMouseLeave={() => setIsTech(false)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={
              isTech
                ? "/assets/images/categoriesIcons/techHover.png"
                : "/assets/images/categoriesIcons/tech.png"
            }
            className={"favoriteImage"}
            alt="tech icon"
          />
          <p className="m-0 mt-3 ">Бела Техника</p>
        </div>
        <div
          className="favorite d-flex flex-column align-items-center text-center justify-content-center"
          onMouseEnter={() => setIsGames(true)}
          onMouseLeave={() => setIsGames(false)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={
              isGames
                ? "/assets/images/categoriesIcons/gamesHover.png"
                : "/assets/images/categoriesIcons/games.png"
            }
            className={"favoriteImage"}
            alt="console icon"
          />
          <p className="m-0 mt-3 ">Игри и Конзоли</p>
        </div>
        <div
          className="favorite d-flex flex-column align-items-center text-center justify-content-center"
          onMouseEnter={() => setIsClothes(true)}
          onMouseLeave={() => setIsClothes(false)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={
              isClothes
                ? "/assets/images/categoriesIcons/clothesHover.png"
                : "/assets/images/categoriesIcons/clothes.png"
            }
            className={"favoriteImage"}
            alt="cloth icon"
          />
          <p className="m-0 mt-3 ">Облека</p>
        </div>

        <div
          className="favorite d-flex flex-column align-items-center text-center justify-content-center"
          onMouseEnter={() => setIsKids(true)}
          onMouseLeave={() => setIsKids(false)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={
              isKids
                ? "/assets/images/categoriesIcons/kidsHover.png"
                : "/assets/images/categoriesIcons/kids.png"
            }
            className={"favoriteImage"}
            alt="bear icon"
          />
          <p className="m-0 mt-3 ">За Деца</p>
        </div>

        <div
          className="favorite d-flex flex-column align-items-center text-center justify-content-center"
          onMouseEnter={() => setIsCamera(true)}
          onMouseLeave={() => setIsCamera(false)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={
              isCamera
                ? "/assets/images/categoriesIcons/fotoHover.png"
                : "/assets/images/categoriesIcons/foto.png"
            }
            className={"favoriteImage"}
            alt="camera icon"
          />
          <p className="m-0 mt-3 ">Фотографија</p>
        </div>
        <div
          className="favorite d-flex flex-column align-items-center text-center justify-content-center"
          onMouseEnter={() => setIsSport(true)}
          onMouseLeave={() => setIsSport(false)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={
              isSport
                ? "/assets/images/categoriesIcons/sportHover.png"
                : "/assets/images/categoriesIcons/sport.png"
            }
            className={"favoriteImage"}
            alt="sport icon"
          />
          <p className="m-0 mt-3 ">Спорт</p>
        </div>
      </div>
    </>
  );
}
