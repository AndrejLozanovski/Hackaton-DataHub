"use client";
import { useState } from "react";
import "./myProfile.css";

export default function MyProfile() {
  const [activeMenu, setActiveMenu] = useState<string>("favorites");

  return (
    <div className="mt-5 pt-2">
      <nav>
        <h3 className="text-center">Мој профил</h3>
        <ul className="nav-list">
          <div className="profileIcon ">
            <img
              src="/assets/images/profileImage/Unknown_person.png"
              alt="Profile icon"
            />
          </div>
          <li
            className={activeMenu === "favorites" ? "active" : ""}
            onClick={() => setActiveMenu("favorites")}
          >
            <i className="fa-solid fa-heart"></i>
            Омилено
          </li>
          <li
            className={activeMenu === "notifications" ? "active" : ""}
            onClick={() => setActiveMenu("notifications")}
          >
            <i className="fa-solid fa-bell"></i>
            Известување на цена
          </li>
          <li
            className={activeMenu === "settings" ? "active" : ""}
            onClick={() => setActiveMenu("settings")}
          >
            <i className="fa-solid fa-gear"></i>
            Поставувања
          </li>
          <li
            className={activeMenu === "logout" ? "active" : ""}
            onClick={() => setActiveMenu("logout")}
          >
            <i className="fa-solid fa-right-from-bracket"></i>
            Одјави се
          </li>
        </ul>
      </nav>
      <div className="rightContent">
        {activeMenu === "favorites" && (
          <div>Display Favorites Content Here</div>
        )}
        {activeMenu === "notifications" && (
          <div>Notifications Settings Here</div>
        )}
        {activeMenu === "settings" && <div>Profile Settings Here</div>}
        {activeMenu === "logout" && <div>You are now logged out.</div>}
      </div>
    </div>
  );
}
