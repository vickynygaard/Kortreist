// DropDown.tsx
import React from 'react';

type DropDownProps = {
  cities: string[];
  citySelection: (option: string) => void;
};

const DropDown: React.FC<DropDownProps> = ({ cities, citySelection }) => {
  return (
    <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-10">
      {cities.map((option, index) => (
        <p
          key={index}
          onClick={() => citySelection(option)}
          className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-indigo-600 hover:text-white"
        >
          {option}
        </p>
      ))}
    </div>
  );
};

export default DropDown;
