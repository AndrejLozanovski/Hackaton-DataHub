"use client";
import React from "react";
import { useState } from "react";
import SignUpModal from "./Signin/SignIn-SignUp";
import "./ComponentsStyle/signin.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/assets/images/logo/datahubLogo.png" alt="DataHub" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="categories">
            {/* <select title="form-select" className="form-select">
              <option>Сите категории</option>
              <option>Обувки</option>
              <option>Бела техника</option>
              <option>Игри и конзоли</option>
              <option>Облека</option>
              <option>За деца</option>
              <option>Фотографија</option>
              <option>Спорт</option>
              <option>Мобилни телефони</option>
            </select> */}
          </div>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Каталози
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Најдобри зделки
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                За нас
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Мој профил
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <div className="search-bar me-2">
              <input
                className="form-control"
                type="text"
                placeholder="Пребарај..."
              />
              {/* <button className="btn btn-primary">Пребарај</button> */}
            </div>

            <div className="cta">
              <button className="btn btn-najava" onClick={handleOpenModal}>
                Најави се
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="backdrop" onClick={handleCloseModal}></div>}
      {showModal && (
        <SignUpModal showModal={showModal} onClose={handleCloseModal} />
      )}
    </header>
  );
};

export default Header;
