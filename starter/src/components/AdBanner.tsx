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
      <div className="card">
        <div className="random-product">
          <h1 className="p-2">
            {/* Новиот Lenovo лаптоп <br /> ги руши сите рекорди */}
            {title}
          </h1>
          <p className="p-2">
            {/* Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation */}
            {desc}
          </p>
          <input className="email" type="text" placeholder="Пребарај.." />
        </div>
      </div>
    </div>
  );
};
export default AdBanner;
