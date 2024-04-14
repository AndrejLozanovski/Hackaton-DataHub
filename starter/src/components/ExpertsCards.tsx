import Link from "next/link";
import React from "react";
import "./ComponentsStyle/expertscards.css";

const ExpertsCards = () => {
  return (
    <div className="container-all">
      <div className="container">
        <div className="title-section">
          <h3 className="title p-5">Експертите велат...</h3>
        </div>
        <div className="more-product">
          <p className="more ">poveke</p>
        </div>
      </div>

      <div className="container-card-m">
        <div className="row">
          <Link href={"#"} style={{ textDecoration: "none" }}>
            <div className="col-4">
              <div className="card">
                <img src="" alt="blender" />
                <div className="card-body">
                  <h5 className="card-title">Нешто за бледнерот</h5>
                  <p className="card-text">
                    Секој корисник и секое семејство има различни потреби. Ние имаме неколку видови
                    на бленд...<span className="more">Види повеќе...</span>
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"#"} style={{ textDecoration: "none" }}>
            <div className="col-4">
              <div className="card">
                <img src="" alt="blender" />
                <div className="card-body">
                  <h5 className="card-title">Нешто за бледнерот</h5>
                  <p className="card-text">
                    Секој корисник и секое семејство има различни потреби. Ние имаме неколку видови
                    на блен...<span className="more">Види повеќе...</span>
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"#"} style={{ textDecoration: "none" }}>
            <div className="col-4">
              <div className="card">
                <img src="" alt="blender" />
                <div className="card-body">
                  <h5 className="card-title">Нешто за бледнерот</h5>
                  <p className="card-text">
                    Секој корисник и секое семејство има различни потреби. Ние имаме неколку видови
                    на блен...<span className="more">Види повеќе...</span>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ExpertsCards;
