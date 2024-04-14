"use client";
import React, { useState } from "react";
import "./Dropdown.css";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <div className="selected-option" onClick={toggleDropdown}>
        {selectedOption ? selectedOption : "Select an option"}
      </div>
      {isOpen && (
        <div className="options">
          <div className="option" onClick={() => handleOptionClick("Option 1")}>
            Option 1
          </div>
          <div className="option" onClick={() => handleOptionClick("Option 2")}>
            Option 2
          </div>
          <div className="option" onClick={() => handleOptionClick("Option 3")}>
            Option 3
          </div>
          <div className="option" onClick={() => handleOptionClick("Option 4")}>
            Option 4
          </div>
          <div className="option" onClick={() => handleOptionClick("Option 5")}>
            Option 5
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
