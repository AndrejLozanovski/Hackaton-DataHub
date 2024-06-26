import { useEffect, useState } from "react";
import "../app/MyProfile/myProfile.css";

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
  markets: [];
  description: string;
  color: string;
  images: [];
}

export const NotificationCard = () => {
  const [products, setProducts] = useState<ProductsInterface[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5002/products", {
          cache: `default`,
        });
        if (response.ok) {
          const data = await response.json();
          setProducts(data.slice(0, 3));
        } else {
          console.error("Failed to fetch products:", response.status);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {products.map((product: ProductsInterface) => (
        <>
          <div className="card mb-3">
            <div className="card-body">
              <div className="container pl-0">
                <div className="row border-bottom mb-2">
                  <div className="col-4 p-0">
                    <p className="pr-2 customFont text-dark">Продукт</p>
                  </div>
                  <div className="col-3">
                    <p className="m-0 mr-3  customFont text-dark">Последно ажурирано</p>
                  </div>
                  <div className="col-3">
                    <p className="m-0 mr-3 customFont text-dark">Почетна цена</p>
                  </div>
                  <div className="col-2">
                    <p className="m-0 mr-3 customFont text-dark">Цена сега</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 d-flex align-items-end">
                    <img className="notificationImg" src={product.image} alt={product.type} />
                    <p className="m-0 fw-bold text-dark">{product.name}</p>
                  </div>

                  <div className="bottomRow">
                    <div className="col-3 px-2">
                      <p className="priceFont  text-dark">{product.price} ден.</p>
                    </div>
                    <div className="col-3 px-2">
                      <p className="priceFont text-dark">{product.price} ден.</p>
                    </div>
                    <div className="col-2 px-2">
                      <p className="priceFont text-dark">{product.price} ден.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};
