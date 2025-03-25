import { ChevronLeft } from "lucide-react";

interface ReturnButtonProps {
    icon?: React.ReactNode;
    onClick?: () => void;
  }

  const ReturnButton: React.FC<ReturnButtonProps> = ({ icon = <ChevronLeft size={24} />, onClick }) => {
    return (
        <button onClick={onClick} className="flex items-center">
          {icon}
        </button>
      );

  };

  export default ReturnButton;