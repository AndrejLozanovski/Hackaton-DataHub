"use client";
import { useEffect, useRef, useState } from "react";
import "./myProfile.css";
import { NotificationCard } from "@/components/NotificationCard";
import "../../components/ComponentsStyle/card.css";

interface ProductsInterface {
  id: string;
  name: string;
  type: string;
  price: number;
  brand: string;
  discount: string;
  rating: number;
  image: string;
  stock: number;
  markets: string[];
  description: string;
  color: string;
  images: string[];
}

export default function MyProfile() {
  const [profileImage, setProfileImage] = useState(
    "/assets/images/profileImage/Unknown_person.png"
  );
  const [activeMenu, setActiveMenu] = useState<string>("favorites");
  const [storedProducts, setStoredProducts] = useState<ProductsInterface[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load the profile image from local storage when the component mounts
  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setProfileImage(reader.result);
          localStorage.setItem("profileImage", reader.result); // Save the image to local storage
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelectPopup = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useEffect(() => {
    const storedProductData = JSON.parse(
      localStorage.getItem("favoriteProduct") || "[]"
    );
    console.log("Loaded products:", storedProductData);
    setStoredProducts(storedProductData);
  }, []);

  const toggleFavorite = (product: ProductsInterface) => {
    let updatedFavorites;
    const isFavorite = storedProducts.some((p) => p.id === product.id);

    if (isFavorite) {
      updatedFavorites = storedProducts.filter((p) => p.id !== product.id);
    } else {
      updatedFavorites = [...storedProducts, product];
    }

    setStoredProducts(updatedFavorites);
    localStorage.setItem("favoriteProduct", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="mt-5 pt-2">
      <nav>
        <h3 className="text-center">Мој профил</h3>
        <ul className="nav-list">
          <div className="profileIcon" onClick={triggerFileSelectPopup}>
            <img
              src={profileImage}
              alt="Profile icon"
              style={{ cursor: "pointer" }}
            />
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleImageChange}
            />
          </div>
          <li
            className={activeMenu === "favorites" ? "active" : ""}
            onClick={() => setActiveMenu("favorites")}
          >
            <i className="profileIcons fa-solid fa-heart"></i>
            Омилено
          </li>
          <li
            className={activeMenu === "notifications" ? "active" : ""}
            onClick={() => setActiveMenu("notifications")}
          >
            <i className="profileIcons fa-solid fa-bell"></i>
            Известување на цена
          </li>
          <li
            className={activeMenu === "settings" ? "active" : ""}
            onClick={() => setActiveMenu("settings")}
          >
            <i className="profileIcons fa-solid fa-gear"></i>
            Поставувања
          </li>
          <li
            className={activeMenu === "logout" ? "active" : ""}
            onClick={() => setActiveMenu("logout")}
          >
            <i className="profileIcons fa-solid fa-right-from-bracket"></i>
            Одјави се
          </li>
        </ul>
      </nav>
      <div className="rightContent">
        {activeMenu === "favorites" && (
          <>
            <h1>Омилено</h1>
            <h4>Зачувани продукти</h4>
            <div className="row">
              {storedProducts.map((el: ProductsInterface) => (
                <div className="col-2 me-2">
                  <div className="product-card " key={el.id}>
                    <div
                      className="card rounded-4 shadow mt-4 "
                      style={{ width: "270px" }}
                    >
                      <div className="notification-favorite-icons d-flex align-items-center justify-content-between p-3">
                        <img
                          src="/assets/images/icons/notification.png"
                          style={{ width: "35px", cursor: "pointer" }}
                          alt="notification icon"
                        />
                        <i
                          className={
                            storedProducts
                              ? "fa-solid fa-heart fa-xl color-orange favorite"
                              : "fa-regular fa-heart fa-xl favorite"
                          }
                          onClick={() => toggleFavorite(el)}
                          style={{ cursor: "pointer" }}
                        ></i>
                      </div>

                      <div className="image-discount rounded-4 mx-2">
                        <img
                          src={el.image}
                          className="card-img-top image"
                          alt="product image"
                          style={{ width: "100%", height: "auto" }}
                        />
                        <span className="discount rounded-circle bg-discount">
                          10%
                        </span>
                      </div>

                      <div className="card-body">
                        <p className="card-title fw-bold m-0">{el.name}</p>
                        <span className="regular-price ">0000 ден.</span>
                        <div className="price-rating d-flex justify-content-between ">
                          <p className="card-text fw-bold text-orange m-0 mb-2">
                            {el.price} ден.
                          </p>
                          <p>
                            <i className="fa-solid fa-star color-orange me-1"></i>
                            {el.rating}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {activeMenu === "notifications" && (
          <>
            <h1 className="fw-bolder">Известување за цени</h1>
            <h4>Продукти</h4>
            <br />
            <NotificationCard />
          </>
        )}
        {activeMenu === "settings" && (
          <>
            <h1 className="fw-bolder">Поставувања</h1>
          </>
        )}
        {activeMenu === "logout" && <h1 className="fw-bolder">Одјави се</h1>}
      </div>
    </div>
  );
}
