import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-footer">
      <div className="subscription-section">
        <h4 className="text-light text-center">Претплати се на нашиот билтен</h4>
        <p className="text-light text-center">
          Биди во тек со сите новости и случувања секаде и во секое време.
        </p>

        <form className="form-footer text-center">
          <div className="input">
            <input className="email" type="email" placeholder="Испрати е-пошта" />
            <button className="submit" type="submit">
              -
            </button>
          </div>
        </form>
      </div>
      <div className="explanation-section">
        <div className="row">
          <div className="col-4 text-center position-center">
            <img src="/assets/images/logo/datahubLogo.png" alt="DataHub" className="text-light " />
          </div>
          <div className="col-8">
            <p className="text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
              consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="link-section">
        <div className="row text-light">
          <div className="col-3">
            <ul>
              <p>Ut enim ad minim veniam</p>
              <li className="link">
                <a href="#">enimadm</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <p>Utenim adminim </p>
              <li className="link">
                <a href="#">reprehenderit</a>
              </li>
              <li className="link">
                <a href="#">voluptate</a>
              </li>
              <li className="link">
                <a href="#">exercitation</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <p>Teni ma dminim </p>
              <li className="link">
                <a href="#">reprehendeasfrit</a>
              </li>
              <li className="link">
                <a href="#">voluptatgdsse</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <p>Enimadmi nim </p>
              <li className="link">
                <a href="#">reprehender</a>
              </li>
              <li className="link">
                <a href="#">voluptate</a>
              </li>
              <li className="link">
                <a href="#">exercitation</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="social-section container">
        <div className="social-media">
          <p>voluptategd</p>
        </div>
        <div className="medias">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
