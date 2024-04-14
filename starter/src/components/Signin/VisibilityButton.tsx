import React from "react";

interface PasswordToggleButtonProps {
  id: string;
  onClick: (id: string) => void;
}

const PasswordToggleButton: React.FC<PasswordToggleButtonProps> = ({
  id,
  onClick,
  ...props
}) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <button
      type="button"
      className="btn btn-link password-toggle"
      onClick={handleClick}
      {...props}
    >
      Toggle
    </button>
  );
};

export default PasswordToggleButton;
