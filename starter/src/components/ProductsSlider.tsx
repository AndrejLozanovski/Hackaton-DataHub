"use client";
import React, { useState } from "react";
import { ProductCard } from "./Card";
import "./ComponentsStyle/productsslider.css"; // Import CSS for styling

const Carousel = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Add a slight delay to apply the "paused" class after the animation stops
    setTimeout(() => {
      const slides = document.querySelectorAll(".slide");
      slides.forEach((slide) => {
        slide.classList.add("paused");
      });
    }, 100);
  };

  return (
    <div className="carousel-container">
      <div className="cards">
        <div
          className={`card-container ${isHovering ? "slide" : "slide paused"}`}
        >
          <ProductCard />
        </div>
        <div
          className={`card-container ${isHovering ? "slide" : "slide paused"}`}
        >
          <ProductCard />
        </div>
      </div>
      <div
        className="right-arrow-carousel"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="/assets/images/icons/notification.png
        "
          alt=""
        />
      </div>
    </div>
  );
};

export default Carousel;
