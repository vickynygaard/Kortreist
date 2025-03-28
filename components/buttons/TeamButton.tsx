import React from "react";

interface TeamButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

const TeamButton: React.FC<TeamButtonProps> = ({
  onClick,
  children,
  className = "",
  disabled = false,
  variant = "primary",
}) => {
  const baseStyles =
    "py-3 px-4 w-full sm:w-auto flex-grow rounded-md font-medium flex items-center justify-center gap-2 whitespace-nowrap"; 
    // `w-full` makes button stretch on small screens, `sm:w-auto` keeps it adaptable

  const variants = {
    primary: "bg-customViolet text-white",
    secondary: "bg-customGreen text-white",
  };
  const disabledStyles = "bg-gray-400 text-gray-700 cursor-not-allowed";

  const styles = disabled ? disabledStyles : variants[variant] || variants.primary;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${styles} ${className}`}
    >
      {children}
    </button>
  );
};

export default TeamButton;
