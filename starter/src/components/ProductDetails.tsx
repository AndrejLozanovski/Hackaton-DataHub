import "./ComponentsStyle/productDetails.css";
import React from "react";

const Productdetails = () => {
  return (
    <div className="product-details ">
      <div className="filters p-3">
        <a href="#">Почетна /</a>
        <a href="#"> Апарати за домаќинство /</a>
        <a href="#">Блендери /</a>
        <a href="#">Nutribullet</a>
      </div>
      <div className="container">
        <div className="all-img">
          <div>
            <img className="small-img" src="/assets/images/productpageitem/image2.png" alt="" />
          </div>
          <div className="">
            <img className="small-img" src="/assets/images/productpageitem/image3.png" alt="" />
          </div>
          <div className="">
            <img className="small-img" src="/assets/images/productpageitem/image4.png" alt="" />
          </div>
          <div className="">
            <img className="small-img" src="/assets/images/productpageitem/image5.png" alt="" />
          </div>
        </div>
        <div className="nutri-img">
          <img className="nutri" src="/assets/images/productpageitem/image1.png" alt="" />
        </div>
        <div className="description">
          <div className="title">
            <h1 className="bolder"> NUTRIBULLET PRO 900W</h1>
            <a className="rew link" href="#">
              * 0.0
            </a>
            <a className="oceni link" href="#">
              Оцени
            </a>
            <a className="sporedi link" href="#">
              Спореди
            </a>
            <a className="izvestuva link" href="#">
              Известување за цена
            </a>
          </div>
          <p className="description-text">
            Nutribullet е екстрактор на хранливи состојки кој со својот единствен систем за
            екстракција на храната, ги разградува продуктите до микро ниво и ги ослободува сите
            хранливи материи кои ги <a href=""> Види повеќе...</a>
          </p>
          <button className="p-2 m-2 btn-cat">Боја</button>
          <button className="p-2 m-2 btn-cat">Големина</button>
          <div className="row">
            <div className="squere black m-3"></div>
            <div className="squere grey m-3 "></div>
            <div className="squere red m-3"></div>
            <div className="squere blue m-3"></div>
            <div className="squere green m-3"></div>
            <div className="squere l-green m-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
