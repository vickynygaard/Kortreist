import { useRouter } from 'next/router'
import Link from 'next/link'
import { Home, Users, Trophy, User, ArrowLeft } from 'lucide-react'

const NavItem = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} className="relative flex flex-col items-center justify-center transition-colors">
      {/* Sirkel bak aktivt ikon i Navbar*/}
      {isActive && <span className="absolute w-10 h-10 bg-violet-400/40 rounded-full -z-10"></span>} 
      
      <span className={`${isActive ? "text-violet-950" : "text-gray-500"}`}>
        {icon}
      </span>
    </Link>
  );
}

const Navbar = () => (
  <nav className="bg-purple-200 fixed bottom-0 left-0 w-full h-14 p-2 flex justify-around rounded-t-lg">
  <NavItem href="/" icon={<Home size={24} className="text-icon" />} />
  <NavItem href="/team" icon={<Users size={24} className="text-icon" />} />
  <NavItem href="/leaderboard" icon={<Trophy size={24} className="text-icon" />} />
  <NavItem href="/profile" icon={<User size={24} className="text-icon" />} />
</nav>
);

export default Navbar;
