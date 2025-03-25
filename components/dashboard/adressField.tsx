import { MapPin } from "lucide-react"; 
import { useEffect} from "react";

interface AddressFieldProps {
    userId: string;
    address: string;
    setAddress: (value: string) => void;
  }

  const AddressField: React.FC<AddressFieldProps> = ({ userId, address, setAddress }) => {
    
  return (
    <div className="w-full">
      <label className="block font-semibold text-lg pb-2">Hjem</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-violet-900"><MapPin size={20} /></div>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Skriv inn adresse"
            className="w-full bg-customYellow2 border-2 border-violet-900 rounded-lg pl-10 pr-3 py-2"
          />
        </div>
    </div>
  );
}

  export default AddressField;