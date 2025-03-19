import React from "react";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  onClick,
  disabled = false,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles = "py-3 rounded-md font-medium flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-[#1D3E75] text-white",
    secondary: "bg-[#1D8800] text-white",
  };
  const disabledStyles = "bg-gray-400 cursor-not-allowed";

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
}
