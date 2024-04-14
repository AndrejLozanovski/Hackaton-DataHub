"use client";
import React, { useState } from "react";
import { ProductCard } from "./Card";
import "./ComponentsStyle/partnersSlider.css";

const CatalogueCarousel = () => {
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
      <div className="cards">
        <div className={`card-container ${isHovering ? "slide" : "slide paused"} `}>
          <div className="m-3">
            <img src="/assets/images/katalozi/neptunKatalog.png" alt="Market Logo" />
          </div>

          <div className="m-3">
            <img src="/assets/images/katalozi/tehnomarketKatalog.png" alt="Market Logo" />
          </div>

          <div className="m-3">
            <img src="/assets/images/katalozi/setecKatalog.png" alt="Market Logo" />
          </div>

          <div className="m-3">
            <img src="/assets/images/katalozi/mebelviKatalog.png" alt="Market Logo" />
          </div>

          <div className="m-3">
            <img src="/assets/images/katalozi/anhochKatalog.png" alt="" />
          </div>
        </div>
        <div className={`card-container ${isHovering ? "slide" : "slide paused"}`}>
          <div className="m-3">
            <img src="/assets/images/katalozi/neptunKatalog.png" alt="Market Logo" />
          </div>

          <div className="m-3">
            <img src="/assets/images/katalozi/tehnomarketKatalog.png" alt="Market Logo" />
          </div>

          <div className="m-3">
            <img src="/assets/images/katalozi/setecKatalog.png" alt="Market Logo" />
          </div>

          <div className="m-3">
            <img src="/assets/images/katalozi/mebelviKatalog.png" alt="Market Logo" />
          </div>

          <div className="m-3">
            <img src="/assets/images/katalozi/anhochKatalog.png" alt="" />
          </div>
        </div>
        <div className={`card-container ${isHovering ? "slide" : "slide paused"}`}>
          <div className="m-3">
            <img src="/assets/images/katalozi/neptunKatalog.png" alt="Market Logo" />
          </div>

          <div className="m-3">
            <img src="/assets/images/katalozi/tehnomarketKatalog.png" alt="Market Logo" />
          </div>

          <div className="m-3">
            <img src="/assets/images/katalozi/setecKatalog.png" alt="Market Logo" />
          </div>

          <div className="m-3">
            <img src="/assets/images/katalozi/mebelviKatalog.png" alt="Market Logo" />
          </div>

          <div className="m-3">
            <img src="/assets/images/katalozi/anhochKatalog.png" alt="" />
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

export default CatalogueCarousel;
