"use client";
import { useEffect, useRef, useState } from "react";
import "./ComponentsStyle/wishlist.css";
import Link from "next/link";
import { ProductCard } from "./Card";

interface Product {
  id: string;
  name: string;
  type: string;
  price: number;
  brand: string;
  discount: string;
  rating: number;
  image: string;
  stock: number;
  markets: [];
  description: string;
  color: string;
  images: [];
}

export const WishListPopUp = () => {
  const [showModal, setShowModal] = useState(false);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [invertedIcons, setInvertedIcons] = useState<{ [key: string]: boolean }>({});
  const [isFavoriteHovered, setIsFavoriteHovered] = useState(false);
  const [isNotificationHovered, setIsNotificationHovered] = useState(false);
  const [isLastSeenHovered, setIsLastSeenHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>("favorite");

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
      }
      console.log("click");
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const favoriteProductData = JSON.parse(localStorage.getItem("favoriteProduct") || "[]");
    setFavorites(favoriteProductData);
  }, [favorites]);

  const toggleModal = () => {
    setShowModal(!showModal);
    setActiveMenu("favorites");
  };

  const toggleFavorite = (product: Product) => {
    const isFavorite = favorites.some((fav) => fav.id === product.id);

    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== product.id);
      setFavorites(updatedFavorites);
      localStorage.setItem("favoriteProduct", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favorites, product];
      setFavorites(updatedFavorites);
      localStorage.setItem("favoriteProduct", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <>
      <div className="d-flex justify-content-end me-3">
        <button
          onClick={toggleModal}
          className="btn fw-bold bg-white shadow d-flex justify-content-between px-4 mb-5   align-items-center"
          style={{ width: "300px" }}
        >
          Омилено
          <i className="fa-solid fa-chevron-up "></i>
        </button>
      </div>

      {showModal && (
        <div className="modal" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content rounded-4" ref={modalRef} style={{ overflowY: "auto" }}>
              <div className="modal-body bg-lightgray p-5">
                {activeMenu === "favorites" && (
                  <>
                    <h2 className="fw-bold">Омилено</h2>
                    <div className="row pb-4">
                      {favorites.map((el: Product, index: number) => (
                        <div className="col-2 me-4" key={index}>
                          <div className="product-card ">
                            <div className="card rounded-4 shadow mt-4" style={{ width: "200px" }}>
                              <div className="notification-favorite-icons d-flex align-items-center justify-content-between p-3">
                                <img
                                  src="/assets/images/icons/notification.png"
                                  style={{
                                    width: "35px",
                                    cursor: "pointer",
                                  }}
                                  alt="notification icon"
                                />

                                <i
                                  className={"fa-solid fa-heart fa-xl color-orange favorite"}
                                  onClick={() => toggleFavorite(el)}
                                  style={{ cursor: "pointer" }}
                                ></i>
                              </div>

                              <Link href={`#`} className="text-dark text-decoration-none">
                                <div className="image-discount rounded-4 mx-2">
                                  <img
                                    src={el.image}
                                    className="card-img-top image"
                                    alt="product image"
                                    style={{ width: "100%", height: "auto" }}
                                  />
                                  <span className="discount rounded-circle bg-discount">10%</span>
                                </div>

                                <div className="card-body">
                                  <p className="card-title fw-bold m-0">{el.name}</p>
                                  <span className="regular-price text-dark">0000 ден.</span>
                                  <div className="price-rating d-flex justify-content-between text-dark ">
                                    <p className="card-text fw-bold text-orange text-dark m-0 mb-2">
                                      {el.price} ден.
                                    </p>
                                    <p className="text-dark">
                                      <i className="fa-solid fa-star color-orange me-1"></i>
                                      {el.rating}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {activeMenu === "notification" && (
                  <>
                    <h2 className="fw-bold mb-3">Известување за цени</h2>
                    <div className="notification py-4 bg-white shadow rounded-4 ">
                      <div className="close d-flex justify-content-end me-3">
                        <i className="fas fa-times fa-2xl"></i>
                      </div>
                      <div className="d-flex">
                        <div className="notification-image mx-3">
                          <img src="/assets/images/productpageItem/image1.png" alt="" />
                        </div>
                        <div className="notification-content d-flex flex-column justify-content-between pt-4">
                          <div className="notification-desc">
                            <p className="m-0 text-uppercase fw-bold text-dark">
                              Nutribullet pro990
                            </p>
                            <small className="m-0">Екстракторна хранливи состојки</small>
                            <div className="rating">
                              <i className="fa-solid fa-star  color-orange me-1"></i>
                              <small>0.0</small>
                            </div>
                          </div>
                          <div className="price mb-3">
                            <p className="fw-bold text-dark">0000 ден.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="navigation w-50 mx-auto rounded-4 d-flex justify-content-around py-4">
                      <div className="favorite d-flex flex-column align-items-center text-center justify-content-center">
                        <p className="m-0 mb-3 text-dark">Lorem ipsum dolor</p>
                        <p className="fw-bold text-dark">0000 ден.</p>
                      </div>
                      <div className="notification d-flex flex-column align-items-center text-center justify-content-center">
                        <p className="m-0 mb-3 text-dark">Lorem ipsum dolor</p>
                        <p className="fw-bold text-dark">0000 ден.</p>
                      </div>
                      <div className="last-seen d-flex flex-column align-items-center text-center justify-content-center">
                        <p className="m-0 mb-3 text-dark">Lorem ipsum dolor</p>
                        <p className="fw-bold text-dark">0000 ден.</p>
                      </div>
                    </div>
                  </>
                )}
                {activeMenu === "lastSeen" && (
                  <>
                    <h2 className="fw-bold ">Последно посетени производи</h2>
                    <div className="row pb-4">
                      {favorites.map((el: Product, index: number) => (
                        <div className="col-2 me-4" key={index}>
                          <div className="product-card ">
                            <div className="card rounded-4 shadow mt-4" style={{ width: "200px" }}>
                              <div className="notification-favorite-icons d-flex align-items-center justify-content-between p-3">
                                <img
                                  src="/assets/images/icons/notification.png"
                                  style={{
                                    width: "35px",
                                    cursor: "pointer",
                                  }}
                                  alt="notification icon"
                                />

                                <i
                                  className={"fa-solid fa-heart fa-xl color-orange favorite"}
                                  onClick={() => toggleFavorite(el)}
                                  style={{ cursor: "pointer" }}
                                ></i>
                              </div>

                              <Link href={`#`} className="text-dark text-decoration-none">
                                <div className="image-discount rounded-4 mx-2">
                                  <img
                                    src={el.image}
                                    className="card-img-top image"
                                    alt="product image"
                                    style={{ width: "100%", height: "auto" }}
                                  />
                                  <span className="discount rounded-circle bg-discount">10%</span>
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
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="modalFooter border-0  bg-lightgray p-5 pb-5">
                <div className="navigation bg-white shadow rounded-4 d-flex justify-content-around py-4">
                  <div
                    className="favorite d-flex flex-column align-items-center text-center justify-content-center"
                    onMouseEnter={() => setIsFavoriteHovered(true)}
                    onMouseLeave={() => setIsFavoriteHovered(false)}
                    onClick={() => setActiveMenu("favorites")}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={
                        isFavoriteHovered
                          ? "/assets/images/categoriesIcons/FavoriteHover.png"
                          : "/assets/images/categoriesIcons/Favorite.png"
                      }
                      className={"favoriteImage"}
                      style={{ width: "45px" }}
                      alt=""
                    />
                    <p className="m-0 mt-3 fw-bold text-dark">Омилено</p>
                  </div>
                  <div
                    className="notification d-flex flex-column align-items-center text-center justify-content-center"
                    onMouseEnter={() => setIsNotificationHovered(true)}
                    onMouseLeave={() => setIsNotificationHovered(false)}
                    onClick={() => setActiveMenu("notification")}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={
                        isNotificationHovered
                          ? "/assets/images/categoriesIcons/notificationHover.png"
                          : "/assets/images/categoriesIcons/notification.png"
                      }
                      style={{ width: "45px" }}
                      alt=""
                    />
                    <p className="m-0 mt-3 fw-bold text-dark">Известувања за цени</p>
                  </div>
                  <div
                    className="last-seen d-flex flex-column align-items-center text-center justify-content-center"
                    onMouseEnter={() => setIsLastSeenHovered(true)}
                    onMouseLeave={() => setIsLastSeenHovered(false)}
                    onClick={() => setActiveMenu("lastSeen")}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={
                        isLastSeenHovered
                          ? "/assets/images/categoriesIcons/lastSeenHover.png"
                          : "/assets/images/categoriesIcons/lastSeen.png"
                      }
                      style={{ width: "45px" }}
                      alt=""
                    />
                    <p className="m-0 mt-3 fw-bold text-dark">Последно видено</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
