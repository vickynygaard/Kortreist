import Image from 'next/image'
import Link from 'next/link';

interface ProfileProps {
    profilePic: string;
    name: string;
    points: string;
  }

  const DashboardHeader: React.FC<ProfileProps> = ({ profilePic, name, points }) => {

    return (
        <div className="grid grid-rows-5 w-full gap-2">
    
    {/*Grid for ikon og navn-melding */}
    <div className="row-span-3 grid grid-cols-5 gap-2">
        <div className="flex items-center justify-center h-full">
            <div className="w-16 h-16 rounded-full border-2 border-customViolet overflow-hidden">
            <Link href="/profile">
            <Image 
                    src={profilePic} 
                    alt="Profilbilde" 
                    width={64} 
                    height={64} 
                    style={{ objectFit: 'cover' }} 
                /></Link>
            </div>
        </div>
        <div className="col-span-4 flex items-center justify-start text-2xl font-semibold">Hei, <br/>{name}!</div>
    </div>
    
    {/*Poeng-melding*/}
    <div className="row-span-2 flex items-center justify-start text-lg">
        <p>Du har samlet inn <strong>{points} poeng</strong> <br/>Stå på!</p>
      </div>
  </div>
    );
  };

  export default DashboardHeader;