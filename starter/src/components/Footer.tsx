import React from "react";
import "./ComponentsStyle/footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-footer">
      <div className="subscription-section p-5">
        <h4 className="text-light text-center fw-bold">Претплати се на нашиот билтен</h4>
        <p className="text-light text-center p-2">
          Биди во тек со сите новости и случувања секаде и во секое време.
        </p>
        <form className="form-footer text-center">
          <div className="input">
            <input
              className="form-control rounded-5 p-2 mx-auto px-5 w-50 email"
              type="email"
              placeholder="Испрати е-пошта"
            />
          </div>
          <div className="sendEmail">
            <img
              src="/assets/images/icons/inputSend.png"
              className="sendEmail"
              alt="sendIcon"
              style={{ width: "15px" }}
            />
          </div>
        </form>
      </div>
      <div className="explanation-section row p-5 ">
        <div className="logo col-2 mx-auto mb-3">
          <img
            src="/assets/images/logo/datahubLogo.png"
            className=""
            alt="DataHub"
            style={{ width: "100px" }}
          />
        </div>
        <div className="content-section col-8 mx-auto align-self-center">
          <p className="text-light">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="link-section ">
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

      <div className="social-section ">
        <div className="social-media">
          <p>voluptategd</p>
        </div>
        <div className="medias">
          <a className="p-2" href="#">
            <i className="fa-brands fa-instagram fa-2xl"></i>
          </a>
          <a className="p-2" href="#">
            <i className="fa-brands fa-linkedin fa-2xl"></i>
          </a>
          <a className="p-2" href="#">
            <i className="fa-brands fa-facebook fa-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
