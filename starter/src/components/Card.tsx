"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./ComponentsStyle/card.css";

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

export const ProductCard = () => {
  const [product, setProduct] = useState([]);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [notificationForPrice, setNotificationForPrice] = useState<Product[]>([]);
  const [invertedIcons, setInvertedIcons] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const favoriteProduct = JSON.parse(localStorage.getItem("favoriteProduct") || "[]");
    setFavorites(favoriteProduct);
  }, []);

  useEffect(() => {
    const notificationProduct = JSON.parse(localStorage.getItem("notificationProduct") || "[]");
    setNotificationForPrice(notificationProduct);
  }, []);

  useEffect(() => {
    const invertedIconsData = JSON.parse(localStorage.getItem("invertedIcons") || "{}");
    setInvertedIcons(invertedIconsData);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5002/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleFavorite = (product: Product) => {
    const updatedFavorites = favorites.some((fav) => fav.id === product.id)
      ? favorites.filter((fav) => fav.id !== product.id)
      : [...favorites, product];

    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteProduct", JSON.stringify(updatedFavorites));
  };

  const toggleNotification = (product: Product) => {
    const productId = product.id;
    const isInverted = invertedIcons[productId] || false;
    const updatedInvertedIcons = { ...invertedIcons, [productId]: !isInverted };

    setInvertedIcons(updatedInvertedIcons);

    const updatedNotifications = notificationForPrice.some(
      (notification) => notification.id === product.id
    )
      ? notificationForPrice.filter((notification) => notification.id !== product.id)
      : [...notificationForPrice, product];

    setNotificationForPrice(updatedNotifications);

    localStorage.setItem("invertedIcons", JSON.stringify(updatedInvertedIcons));

    localStorage.setItem("notificationProduct", JSON.stringify(updatedNotifications));
  };

  function products() {
    return product.map((el: Product, key: number) => {
      const isFavorite = favorites.some((fav) => fav.id === el.id);

      return (
        <div className="product-card" key={key}>
          <div className="card rounded-4 shadow mt-4" style={{ width: "270px" }}>
            <div className="notification-favorite-icons d-flex align-items-center justify-content-between p-3">
              <img
                src="/assets/images/icons/notification.png"
                style={{
                  width: "35px",
                  cursor: "pointer",
                  filter: invertedIcons[el.id] ? "invert(20%)" : "none",
                }}
                alt="notification icon"
                onClick={() => toggleNotification(el)}
              />
              <i
                className={
                  isFavorite
                    ? "fa-solid fa-heart fa-xl color-orange favorite"
                    : "fa-regular fa-heart fa-xl favorite"
                }
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
                  <p className="card-text fw-bold text-orange m-0 mb-2">{el.price} ден.</p>
                  <p>
                    <i className="fa-solid fa-star color-orange me-1"></i>
                    {el.rating}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      );
    });
  }

  return <>{products()}</>;
};
