// Menu.tsx
import React, { useState } from "react";
import DropDown from "./dropDown";

type MenuProps = {
  selectedMethod: string;
  onSelectMethod: (method: string) => void;
};

const Menu: React.FC<MenuProps> = ({ selectedMethod, onSelectMethod }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const methods = ["car", "bus", "cycling", "walking"];

  const toggleDropDown = () => setShowDropDown((prev) => !prev);

  const methodSelection = (method: string): void => {
    onSelectMethod(method);
    setShowDropDown(false);
  };

  return (
    <div className="relative inline-block text-left">
      
      <button
        type="button"
        onClick={toggleDropDown}
        className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        <span>{selectedMethod ? `Select: ${selectedMethod}` : "Select ..."}</span>
      </button>

      {showDropDown && (
        <DropDown cities={methods} citySelection={methodSelection} />
      )}
    </div>
  );
};

export default Menu;
