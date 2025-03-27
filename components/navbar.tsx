import { useRouter } from 'next/router'
import Link from 'next/link'
import { Home, Users, Trophy, User, ArrowLeft } from 'lucide-react'

const NavItem = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  const router = useRouter();
  const isActive =
  router.pathname === href || router.pathname.startsWith(`${href}/`)

  return (
    <Link href={href} className="relative flex flex-col items-center justify-center transition-colors space-y-1">
      {/* Sirkel bak aktivt ikon i Navbar*/}
      {isActive &&   <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-violet-400/40 rounded-full -z-10"></span>}
      
      <span className={`${isActive ? "text-violet-950" : "text-gray-500"}`}>
        {icon}
      </span>
    </Link>
  );
}

const Navbar = () => (
  <nav className="fixed bottom-0 w-full border-t bg-purple-100 pb-safe z-50">
  <div className="mx-auto flex h-14 max-w-md items-center justify-around px-4">
  <NavItem href="/" icon={<Home size={24} className="text-icon" />} />
  <NavItem href="/team" icon={<Users size={24} className="text-icon" />} />
  <NavItem href="/leaderboard" icon={<Trophy size={24} className="text-icon" />} />
  <NavItem href="/profile" icon={<User size={24} className="text-icon" />} />
  </div>
</nav>
);

export default Navbar;
