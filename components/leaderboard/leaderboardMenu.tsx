import { useRouter } from 'next/router'
import Link from 'next/link'

const MenuItem = ({href, title}: {href: string; title: string;}) => {
    const router = useRouter();
    const isActive = router.pathname === href;
  
    return (
      <Link href={href} className="relative flex flex-col items-center justify-center w-1/3 text-center">
        {/* Linje under aktiv meny-element*/}
        {isActive && <span className="absolute bottom-[-16px] left-1/2 w-full transform -translate-x-1/2 border-b-2 border-violet-900 z-0 transition-all duration-300"></span>} 
        
        <span className={`${isActive ? "text-violet-900" : "text-gray-700"}`}>
          {title}
        </span>
      </Link>
    );
  }
  
  const LeaderboardMenu = () => (
    <nav className="flex w-full justify-center p-4 font-medium">
        <div className="flex w-full max-w-md justify-between">
            <MenuItem href="/leaderboard" title="Solo" />
            <MenuItem href="/leaderboard/team" title="Lag" />
            <MenuItem href="/leaderboard/company" title="Bedrift" />
        </div>
    </nav>
  );

export default LeaderboardMenu;