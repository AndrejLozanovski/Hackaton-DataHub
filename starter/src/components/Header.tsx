"use client";
import React from "react";
import { useState } from "react";
import SignUpModal from "./Signin/SignIn-SignUp";
import "./ComponentsStyle/signin.css";
import { CategoriesDropdown } from "./Categories";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("obuvki");

  const toggleDropdown = () => setIsOpen(!isOpen);

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
          <p className="toggle-button" onClick={toggleDropdown}>
            Сите категории
          </p>

          <CategoriesDropdown
            isOpen={isOpen}
            setActiveMenu={setActiveMenu}
            activeMenu={activeMenu}
          />
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
