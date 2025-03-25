import Image from 'next/image'
import {ArrowRight} from 'lucide-react'
import { useRouter } from 'next/router'

interface ButtonProps {
    href: string;
    image: string;
    title: string;
    description: string;
  }

  const DashboardButton: React.FC<ButtonProps> = ({ href, image, title, description }) => {
    const router = useRouter();

    return (
      <button 
        onClick={() => router.push(href)} 
        className="grid grid-cols-5 grid-rows-2 h-24 w-full rounded-2xl bg-customYellow2 border-2 border-violet-900 gap-2 
                focus:ring focus:ring-violet-600"
      >
      
      {/* Grid for Ikon-Tittel-Beskrivelse */}
      <div className="col-span-4 row-span-2 grid grid-cols-3 grid-rows-4 py-2">
        <div className="row-span-4 flex items-center justify-center"><Image src={image} alt={title} width={64} height={64} /></div>
        <div className="col-span-2 row-span-2 flex items-center justify-start text-xl font-bold truncate">{title}</div>
        <div className="col-span-2 row-span-2 flex items-center justify-start text-sm text-left">{description}</div>
      </div>

      {/* Pil-ikon */}
      <div className="row-span-2 flex items-center justify-center"><ArrowRight size={24} strokeWidth={2} /></div>
    </button>

    );
  };

  export default DashboardButton;