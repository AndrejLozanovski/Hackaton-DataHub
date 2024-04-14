"use client";
import React, { useState } from "react";
import { ProductCard } from "./Card";
import "./ComponentsStyle/partnersSlider.css";

const PartnersCarousel = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseLeave = () => {
    setIsHovering(false);

    setTimeout(() => {
      const slides = document.querySelectorAll(".slide");
      slides.forEach((slide) => {
        slide.classList.add("paused");
      });
    }, 100);
  };

  return (
    <div className="carousel-container p-4 bg-lightgray rounded-3">
      <h2 className="fw-bold">Партнери</h2>
      <div className="cards">
        <div className={`card-container ${isHovering ? "slide" : "slide paused"} `}>
          <div className="m-3">
            <img src="/assets/images/partneri/merkurLogo.png" alt="Market Logo" />
            <p className="mt-2">Меркур</p>
          </div>

          <div className="m-3">
            <img src="/assets/images/partneri/neptunLogo.png" alt="Market Logo" />
            <p className="mt-2">Нептун</p>
          </div>

          <div className="m-3">
            <img src="/assets/images/partneri/mebelviLogo.png" alt="Market Logo" />
            <p className="mt-2">Мебел-Ви</p>
          </div>

          <div className="m-3">
            <img src="/assets/images/partneri/tehnomarketLogo.png" alt="Market Logo" />
            <p className="mt-2">ТехноМаркет</p>
          </div>

          <div className="m-3">
            <img src="/assets/images/partneri/mrbricolageLogo.png" alt="Market Logo" />
            <p className="mt-2">Г-дин. Бриколаж</p>
          </div>

          <div className="m-3">
            <img src="/assets/images/partneri/anhochLogo.png" alt="" />
            <p className="mt-2">Анхоч</p>
          </div>
        </div>
        <div className={`card-container ${isHovering ? "slide" : "slide paused"}`}>
          <div className="m-3">
            <img src="/assets/images/partneri/merkurLogo.png" alt="Market Logo" />
            <p className="mt-2">Меркур</p>
          </div>

          <div className="m-3">
            <img src="/assets/images/partneri/neptunLogo.png" alt="Market Logo" />
            <p className="mt-2">Нептун</p>
          </div>

          <div className="m-3">
            <img src="/assets/images/partneri/mebelviLogo.png" alt="Market Logo" />
            <p className="mt-2">Мебел-Ви</p>
          </div>

          <div className="m-3">
            <img src="/assets/images/partneri/tehnomarketLogo.png" alt="Market Logo" />
            <p className="mt-2">ТехноМаркет</p>
          </div>

          <div className="m-3">
            <img src="/assets/images/partneri/mrbricolageLogo.png" alt="Market Logo" />
            <p className="mt-2">Г-дин. Бриколаж</p>
          </div>

          <div className="m-3">
            <img src="/assets/images/partneri/anhochLogo.png" alt="" />
            <p className="mt-2">Анхоч</p>
          </div>
        </div>
        <div className={`card-container ${isHovering ? "slide" : "slide paused"}`}>
          <div className="m-3">
            <img src="/assets/images/partneri/merkurLogo.png" alt="Market Logo" />
            <p className="mt-2">Меркур</p>
          </div>

          <div className="m-3">
            <img src="/assets/images/partneri/neptunLogo.png" alt="Market Logo" />
            <p className="mt-2">Нептун</p>
          </div>

          <div className="m-3">
            <img src="/assets/images/partneri/mebelviLogo.png" alt="Market Logo" />
            <p className="mt-2">Мебел-Ви</p>
          </div>

          <div className="m-3">
            <img src="/assets/images/partneri/tehnomarketLogo.png" alt="Market Logo" />
            <p className="mt-2">ТехноМаркет</p>
          </div>

          <div className="m-3">
            <img src="/assets/images/partneri/mrbricolageLogo.png" alt="Market Logo" />
            <p className="mt-2">Г-дин. Бриколаж</p>
          </div>

          <div className="m-3">
            <img src="/assets/images/partneri/anhochLogo.png" alt="" />
            <p className="mt-2">Анхоч</p>
          </div>
        </div>
      </div>
      <div
        className="right-arrow-carousel"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
        <img src="/assets/images/categoriesIcons/sliderArrowRight.png" alt="slider arrow right" />
      </div>
    </div>
  );
};

export default PartnersCarousel;
