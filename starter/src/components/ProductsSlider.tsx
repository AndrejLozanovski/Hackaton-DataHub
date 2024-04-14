"use client";
import React, { useState } from "react";
import { ProductCard } from "./Card";
import "./ComponentsStyle/productsslider.css";

interface CarouselProps {
  title: string;
}

const ProductCarousel: React.FC<CarouselProps> = ({ title }) => {
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
    <div className="carousel-container  p-4 bg-lightgray rounded-3">
      <div className="title-and-link d-flex align-items-center justify-content-between">
        <div className="title">
          <h2 className="fw-bold">{title}</h2>
        </div>

        <div className="vidi-povekje ">
          <a href="/ProductListing" className="text-decoration-none text-body">
            Види повеќе
            <i className="ms-3 fa-solid fa-angle-right fa-sm"></i>
          </a>
        </div>
      </div>

      <div className="cards ">
        <div className={`card-container ${isHovering ? "slide" : "slide paused"} me-3`}>
          <ProductCard />
        </div>
        <div className={`card-container ${isHovering ? "slide" : "slide paused"} `}>
          <ProductCard />
        </div>
      </div>
      <div
        className="right-arrow-carousel"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
        <img src="/assets/images/categoriesIcons/sliderArrowRight.png" alt="" />
      </div>
    </div>
  );
};

export default ProductCarousel;
