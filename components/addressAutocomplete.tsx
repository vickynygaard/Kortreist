import React, { useState, useEffect } from "react";
import { useUserAuth } from "./userAuth";

interface ORSFeature {
  type: string;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  properties: {
    osm_id: string | number;
    label: string;
  };
}

interface ORSGeocodeResponse {
  features: ORSFeature[];
}

interface AddressAutocompleteProps {
  // Return the "valid" address that user has selected
  selectedAddress: string;
  setSelectedAddress: (value: string) => void;
  inputBgClass?: string;
}

export default function AddressAutocomplete({
  selectedAddress,
  setSelectedAddress,
  inputBgClass = "bg-white", // default to white if not provided
}: AddressAutocompleteProps) {
  const [typedAddress, setTypedAddress] = useState(selectedAddress);
  const [suggestions, setSuggestions] = useState<ORSFeature[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { userData } = useUserAuth();

  useEffect(() => {
    setTypedAddress(selectedAddress);
  }, [selectedAddress]);

  // Debounce logic
  useEffect(() => {
    if (!typedAddress.trim()) {
      setSuggestions([]);
      return;
    }
    const debounceTimeout = setTimeout(() => {
      fetchSuggestions(typedAddress);
    }, 500);
    return () => clearTimeout(debounceTimeout);
  }, [typedAddress]);

  async function fetchSuggestions(query: string) {
    setIsLoading(true);
    try {
      if (!userData?.accessToken) return;
      const response = await fetch(
        `https://kortreistapi-h7e9d7gsb3bcgwhd.norwayeast-01.azurewebsites.net/api/geocode?address=${encodeURIComponent(
          query
        )}`,
        {
          headers: {
            Authorization: `Bearer ${userData.accessToken}`,
          },
        }
      );

      if (!response.ok) {
        console.error("Failed to fetch suggestions");
        setSuggestions([]);
        return;
      }
      const data: ORSGeocodeResponse = await response.json();
      setSuggestions(data.features || []);
    } catch (error) {
      console.error("Error fetching suggestions", error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSelect = (feature: ORSFeature) => {
    // The user has selected a valid address
    setTypedAddress(feature.properties.label);
    setSelectedAddress(feature.properties.label); 
    setSuggestions([]);
    setIsFocused(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);

      // If typedAddress is not the same as selectedAddress, revert to last valid
      if (typedAddress !== selectedAddress) {
        setTypedAddress(selectedAddress);
      }
    }, 150);
  };

  return (
    <div className="address-autocomplete relative">
      <div className="relative mb-2">
        <input
          type="text"
          value={typedAddress}
          placeholder="F.eks. Storgata 1, Oslo"
          onChange={(e) => {
            setTypedAddress(e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          className={`w-full p-3 pr-8 rounded border border-gray-300 ${inputBgClass} focus:outline-none focus:ring-2 focus:ring-customViolet`}
        />
        {typedAddress && (
          <div className="absolute right-2 top-2.5 w-6 h-6 flex items-center justify-center z-10">
            <button
              type="button"
              onClick={() => {
                setTypedAddress("");
                setSelectedAddress("");
                setSuggestions([]);
              }}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              &times;
            </button>
          </div>
        )}
      </div>

      {isFocused && !isLoading && suggestions.length > 0 && typedAddress.trim() && (
        <ul className="absolute z-10 w-full border border-gray-200 rounded shadow-md bg-white max-h-60 overflow-y-auto">
          {suggestions.map((sugg, index) => (
            <li
              key={`${sugg.properties.osm_id}-${index}`}
              onMouseDown={() => handleSelect(sugg)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {sugg.properties.label}
            </li>
          ))}
        </ul>
      )}

      {isFocused && isLoading && (
        <div className="flex items-center gap-2 mb-2">
          <svg
            className="animate-spin h-5 w-5 text-customViolet"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
          <span className="text-gray-600">Laster adresser...</span>
        </div>
      )}

      {isFocused && !isLoading && suggestions.length === 0 && typedAddress.trim() && (
        <div className="p-2 text-gray-500 border rounded">
          Ingen treff på “{typedAddress}”
        </div>
      )}
    </div>
  );
}
