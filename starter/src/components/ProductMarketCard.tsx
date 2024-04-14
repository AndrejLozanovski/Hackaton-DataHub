import Link from "next/link";
import "./ComponentsStyle/productMarcetCard.css";
import ProductAd from "./ProductAd";
export default function ProductMarketCard() {
  return (
    <div className="container-fluid ">
      <div className="row bg-lightgray border-radius">
        <div className="col-12 col-md-9 pt-3 ">
          <div className="content ">
            <p className="para text-dark">Цени</p>
            <p className="para text-dark">Прегледи</p>
            <p className="para text-dark">Статистики</p>
            <p className="para d-none d-md-inline-block text-dark">Информации за продуктот</p>
            <p className="para d-inline-block d-md-none text-dark">Информации</p>
          </div>
        </div>
        <div className="row py-2 wrapper">
          <div className="col-12 col-md-9 py-1">{<ProductAd />}</div>
          <Link href={"#"} className="col-12 col-md-9 py-2 text-decoration-none">
            <div className="content-card border border-radius shadow">
              <div className="row px-5">
                <div className="col-9 col-md-6 px-3 py-3">
                  <div>
                    <img
                      src="../../assets/images/partneri/merkurLogo.png"
                      alt=""
                      className="img-fluid logoImg"
                    />
                  </div>
                  <p className="d-none d-md-block text-info mt-2">NutriBullet Pro 900</p>
                  <span className="linkmarkets d-block d-md-none">
                    https://wwww.merkur.mk/BLENDERI/NUTRIBULLET-PRO-900W
                  </span>
                </div>
                <div className="d-none d-md-flex col-md-3  px-3 py-3 d-flex">
                  <span className="text-small align-self-center small mb-1">
                    Бесплатна достава. 2-3 дена
                  </span>
                </div>
                <div className="col-3 px-3 py-2 d-flex">
                  <span className="span-price align-self-center">
                    0000.00 ден. <img src="../../assets/images/icons/Vector.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"#"} className="col-12 col-md-9 py-2 text-decoration-none">
            <div className="content-card border border-radius shadow">
              <div className="row px-5">
                <div className="col-md-6 col-9 px-3 py-3">
                  <div>
                    <img
                      src="../../assets/images/partneri/anhochLogo.png"
                      alt=""
                      className="img-fluid logoImg"
                    />
                  </div>
                  <p className="d-none d-md-block text-info mt-2">NutriBullet Pro 900</p>
                  <span className="linkmarkets d-block d-md-none">
                    https://wwww.anhoch.mk/BLENDERI/NUTRIBULLET-PRO-900W
                  </span>
                </div>
                <div className="d-none d-md-flex col-md-3 px-3 py-3 d-flex">
                  <span className="text-small align-self-center small mb-1">
                    Бесплатна достава. 2-3 дена
                  </span>
                </div>
                <div className="col-md-3 col-3  px-3 py-2 d-flex">
                  <span className="span-price align-self-center">
                    0000.00 ден. <img src="../../assets/images/icons/Vector.png" alt="vectorimg" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"#"} className="col-12 col-md-9 py-2 text-decoration-none">
            <div className="content-card border border-radius shadow">
              <div className="row px-5">
                <div className=" col-9 col-md-6 px-3 py-3">
                  <div>
                    <img
                      src="../../assets/images/partneri/neptunLogo.png"
                      alt=""
                      className="img-fluid logoImg"
                    />
                  </div>
                  <p className="d-none d-md-block text-info mt-2">NutriBullet Pro 900</p>
                  <span className="linkmarkets d-block d-md-none">
                    https://wwww.neptun.mk/BLENDERI/NUTRIBULLET-PRO-900W
                  </span>
                </div>
                <div className="d-none d-md-flex col-md-3 px-3 py-3 d-flex">
                  <span className="text-small align-self-center small mb-1">
                    Бесплатна достава. 2-3 дена
                  </span>
                </div>
                <div className="col-3 px-3 py-2 d-flex">
                  <span className="span-price align-self-center">
                    0000.00 ден. <img src="../../assets/images/icons/Vector.png" alt="vectorimg" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"#"} className="col-12 col-md-9 py-2 text-decoration-none">
            <div className="content-card border border-radius shadow">
              <div className="row px-5">
                <div className="col-9 col-md-6 px-3 py-3">
                  <div>
                    <img
                      src="../../assets/images/partneri/tehnomarketLogo.png"
                      alt=""
                      className="img-fluid logoImg"
                    />
                  </div>
                  <p className="d-none d-md-block text-info mt-2">NutriBullet Pro 900</p>
                  <span className="linkmarkets d-block d-md-none">
                    https://wwww.technomarket.mk/BLENDERI/NUTRIBULLET-PRO-900W
                  </span>
                </div>
                <div className="d-none d-md-flex col-md-3 px-3 py-3 d-flex">
                  <span className="text-small align-self-center small mb-1">
                    Бесплатна достава. 2-3 дена
                  </span>
                </div>
                <div className="col-3 px-3 py-2 d-flex">
                  <span className="span-price align-self-center">
                    0000.00 ден. <img src="../../assets/images/icons/Vector.png" alt="vectorimg" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <div className="d-none d-md-block col-md-9 py-2">
            <div className="img-content content-card"></div>
          </div>
          <Link href={"#"} className="col-12 col-md-9 py-2 text-decoration-none">
            <div className="content-card border border-radius shadow">
              <div className="row px-5">
                <div className="col-9 col-md-6 px-3 py-3">
                  <div>
                    <img
                      src="../../assets/images/partneri/neptunLogo.png"
                      alt=""
                      className="img-fluid logoImg"
                    />
                  </div>
                  <p className="d-none d-md-block text-info mt-2">NutriBullet Pro 900</p>
                  <span className="linkmarkets d-block d-md-none">
                    https://wwww.neptun.mk/BLENDERI/NUTRIBULLET-PRO-900W
                  </span>
                </div>
                <div className="d-none d-md-flex col-md-3 px-3 py-3 d-flex">
                  <span className="text-small align-self-center small mb-1">
                    Бесплатна достава. 2-3 дена
                  </span>
                </div>
                <div className="col-3 px-3 py-2 d-flex">
                  <span className="span-price align-self-center">
                    0000.00 ден. <img src="../../assets/images/icons/Vector.png" alt="vectorimg" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
