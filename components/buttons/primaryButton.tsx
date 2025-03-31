import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  title,
  type = "button",
  onClick,
  disabled,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex flex-col items-center justify-center w-full bg-violet-900 text-white px-4 py-2 rounded-lg transition ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      {...props}
    >
      <span className="text-lg font-semibold">{title}</span>
    </button>
  );
};

export default PrimaryButton;
