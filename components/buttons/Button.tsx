interface ButtonProps {
  onClick?: () => void;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, icon, title, description, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center border-2 border-violet-900 text-violet-900 px-3 py-2 rounded-md transition ${className}`}
    >
      {icon && <div className="mb-2">{icon}</div>}
      <span className="text-lg font-semibold">{title}</span>
      {description && <p className="text-sm opacity-80">{description}</p>}
    
    </button>
  );
};

export default Button;