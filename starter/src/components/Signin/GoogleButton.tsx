// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const GoogleButton = () => {
  const handleGoogleLogin = () => {
    // Handle Google login logic here
  };

  return (
    <button onClick={handleGoogleLogin} className="google-button">
      {/* <FontAwesomeIcon className="popup-icon" icon={faGoogle} /> */}
      Continue with Google
    </button>
  );
};

export default GoogleButton;
