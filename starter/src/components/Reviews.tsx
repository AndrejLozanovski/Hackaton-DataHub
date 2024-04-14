import React from "react";
import "./ComponentsStyle/reviews.css";

const Review = () => {
  return (
    <div className="container-card">
      <div className="row">
        <div className="card-header d-flex align-items-center">
          <div className="place-img col-2">
            <img className="img-fluid" src="" alt="Profile" />
          </div>
          <div className="name col-8 ">
            <h6 className="user-name">Стефан</h6>
            <div className="time-review">
              <p className="time-rewiev">сега</p>
            </div>
          </div>
          <div className="reviews col-2 text-end">
            <i className="fa-solid fa-star color-orange"></i>
            <i className="fa-solid fa-star color-orange"></i>
            <i className="fa-solid fa-star color-orange"></i>
            <i className="fa-solid fa-star color-orange"></i>
            <i className="fa-solid fa-star color-orange"></i>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="comment col-12">
          <p>
            Дали ова веќе 2 недели го добив како замена за мојата постара серија од 600. Првично
            сакав да ја купам серијата 1000, но таа е распродадена насекаде.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="card-header d-flex align-items-center">
          <div className="place-img col-2">
            <img className="img-fluid" src="" alt="Profile" />
          </div>
          <div className="name col-8 ">
            <h6 className="user-name">Фрањо</h6>
            <div className="time-review">
              <p className="time-rewiev">пред 3</p>
            </div>
          </div>
          <div className="reviews col-2 text-end">
            <i className="fa-solid fa-star color-orange"></i>
            <i className="fa-solid fa-star color-orange"></i>
            <i className="fa-solid fa-star color-orange"></i>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="comment col-12">
          <p>
            Дали ова веќе 2 недели го добив како замена за мојата постара серија од 600. Првично
            сакав да ја купам серијата 1000, но таа е распродадена насекаде.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
