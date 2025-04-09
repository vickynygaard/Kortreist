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
        className="grid grid-cols-5 items-center w-full h-24 px-3 rounded-2xl bg-customYellow2 border-2 border-violet-900
                focus:ring focus:ring-violet-600"
      >
      
        {/*Ikon*/}
        <div className="col-span-1 flex items-center justify-center w-16 h-16">
          <Image src={image} alt={title} width={48} height={48} className="object-contain" />
        </div>

        {/*Tittel og beskrivelse */}
        <div className="col-span-3 flex flex-col justify-center text-left space-y-1">
          <span className="text-xl font-bold truncate py-0.5 rounded">
            {title}
          </span>
          <span className="text-sm py-0.5 rounded">
            {description}
          </span>
        </div>

        {/* Pil-ikon */}
        <div className="col-span-1 flex items-center justify-center h-full">
            <ArrowRight size={24} strokeWidth={2} />
        </div>
    </button>

    );
  };

  export default DashboardButton;