import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const FacebookButton = () => {
  const handleFacebookLogin = () => {
    // Handle Facebook login logic here
  };

  return (
    <button onClick={handleFacebookLogin} className="facebook-button">
      {/* <FontAwesomeIcon className="popup-icon" icon={faFacebook} /> */}
      Continue with Facebook
    </button>
  );
};

export default FacebookButton;
