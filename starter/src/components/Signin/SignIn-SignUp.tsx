import React, { useState } from "react";
import FacebookButton from "./FacebookButton";
import GoogleButton from "./GoogleButton";
import PasswordToggleButton from "./VisibilityButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../ComponentsStyle/signin.css";

interface SignUpModalProps {
  onClose: () => void;
  showModal: boolean;
}
const SignUpModal: React.FC<SignUpModalProps> = ({ showModal, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data:", formData);
    onClose();
  };

  const togglePasswordVisibility = (id: string) => {
    if (id === "passwordButton") {
      setShowPassword((prevState) => !prevState);
    } else if (id === "confirmPasswordButton") {
      setShowConfirmPassword((prevState) => !prevState);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isSignInMode, setIsSignInMode] = useState(false);

  const handleToggleMode = () => {
    setIsSignInMode((prevMode) => !prevMode);
    setFormData((prevData) => ({
      ...prevData,
      confirmPassword: "",
    }));
  };

  return (
    <div className={`popup ${showModal ? "show" : ""}`}>
      <div className="popup-inner">
        <div className="popup-content">
          <h2>Добредојде</h2>
          <p>
            Регистрирај се за да станеш нов член и да ги добиваш најдобрите
            понуди
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <FacebookButton />
              <GoogleButton />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <PasswordToggleButton
                id="passwordButton"
                onClick={togglePasswordVisibility}
              />
            </div>
            {!isSignInMode && (
              <div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required={!isSignInMode}
                />
                <PasswordToggleButton
                  id="confirmPasswordButton"
                  onClick={togglePasswordVisibility}
                />
              </div>
            )}
            <button type="submit">
              {isSignInMode ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <p>
            {isSignInMode
              ? "Don't have an account? "
              : "Already have an account? "}
            <button onClick={handleToggleMode}>
              {isSignInMode ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
        <div className="video-container">
          <video
            src="/assets/video/video-log-in-sign-up.mp4"
            autoPlay
            loop
          ></video>
          <FontAwesomeIcon
            className="popup-close"
            icon={faTimes}
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
