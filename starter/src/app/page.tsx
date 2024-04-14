"use client";

import Image from "next/image";
import styles from "./page.module.css";
import "./homepage.css";
import { useState } from "react";
import ProductCarousel from "@/components/ProductsSlider";
import AdBanner from "@/components/AdBanner";
import PartnersCarousel from "@/components/PartnersSlider";
import { WishListPopUp } from "@/components/WishlistPopUp";

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
              <p className="text-dark">Сите твои потреби на едно место</p>
              <div className="search-box d-flex">
                <input type="search" className="custom-search" placeholder="Пребарувај" />
                <i className="fa fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <div className="innerImg">
            <img src="./assets/images/herosection/herosection2.png" alt="herosection2" />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-around py-4">
        <a
          href="/ProductListing"
          className=" d-flex flex-column align-items-center text-center justify-content-center text-decoration-none"
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
            className={"favorite-Image"}
            alt="shoe icon"
          />
          <p className="m-0 mt-3 text-dark fw-bold">Обувки</p>
        </a>
        <a
          href="/ProductListing"
          className=" d-flex flex-column align-items-center text-center justify-content-center text-decoration-none"
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
            className={"favorite-Image"}
            alt="tech icon"
          />
          <p className="m-0 mt-3 text-dark fw-bold">Бела Техника</p>
        </a>
        <a
          href="/ProductListing"
          className=" d-flex flex-column align-items-center text-center justify-content-center text-decoration-none"
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
            className={"favorite-Image"}
            alt="console icon"
          />
          <p className="m-0 mt-3 text-dark fw-bold">Игри и Конзоли</p>
        </a>
        <a
          href="/ProductListing"
          className=" d-flex flex-column align-items-center text-center justify-content-center text-decoration-none"
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
            className={"favorite-Image"}
            alt="cloth icon"
          />
          <p className="m-0 mt-3 text-dark fw-bold">Облека</p>
        </a>

        <a
          href="/ProductListing"
          className=" d-flex flex-column align-items-center text-center justify-content-center text-decoration-none"
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
            className={"favorite-Image"}
            alt="bear icon"
          />
          <p className="m-0 mt-3 text-dark fw-bold">За Деца</p>
        </a>

        <a
          href="/ProductListing"
          className=" d-flex flex-column align-items-center text-center justify-content-center text-decoration-none"
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
            className={"favorite-Image"}
            alt="camera icon"
          />
          <p className="m-0 mt-3 text-dark fw-bold">Фотографија</p>
        </a>
        <a
          href="/ProductListing"
          className=" d-flex flex-column align-items-center text-center justify-content-center text-decoration-none"
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
            className={"favorite-Image"}
            alt="sport icon"
          />
          <p className="m-0 mt-3 text-dark fw-bold">Спорт</p>
        </a>
      </div>

      <ProductCarousel title={"Популарни Производи"} />

      <ProductCarousel title={"Распродажба"} />
      <AdBanner
        title={"Новиот Lenovo лаптоп ги руши сите рекорди"}
        image={"/assets/images/baneri/reklamabaner1.png"}
        desc={
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
        }
      />
      <ProductCarousel title={"Последно посетени Производи"} />
      <ProductCarousel title={"Најдобри зделки на денот"} />
      <AdBanner
        title={"Паметни телефони за паметни луѓе"}
        image={"/assets/images/baneri/reklamabaner2.png"}
        desc={
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation, Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
        }
      />
      <PartnersCarousel />
      <WishListPopUp />
    </>
  );
}
