import React from "react";
import "./ComponentsStyle/adbanner.css";

interface Banner {
  title: string;
  image: string;
  desc: string;
}

const AdBanner = ({ title, image, desc }: Banner) => {
  return (
    <div className="container-banner">
      <div className="banner-card">
        <img src={image} alt="" />
        <div className="random-product">
          <h1 className="p-2">{title}</h1>
          <p className="p-2">{desc}</p>
          <div className="search-box  d-flex">
            <input type="search" className="custom-search m-0" placeholder="Пребарувај" />
            <i className="fa fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdBanner;
