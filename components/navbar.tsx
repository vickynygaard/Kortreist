import Link from 'next/link'
import { Home, Users, Trophy, User, ArrowLeft } from 'lucide-react'

function NavItem({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="flex flex-col items-center justify-center text-gray-500 hover:text-white">
      {icon}
    </Link>
  );
}

export default function Navbar() {
  return(

      <nav className="bg-navbar fixed bottom-0 left-0 w-full h-14 p-4 flex justify-around rounded-t-lg">
        <NavItem href="/" icon={<Home size={24} className="text-icon" />} />
        <NavItem href="/team/team" icon={<Users size={24} className="text-icon" />} />
        <NavItem href="/leaderboard/leaderboard" icon={<Trophy size={24} className="text-icon" />} />
        <NavItem href="/profile/profile" icon={<User size={24} className="text-icon" />} />
      </nav>

  );
}
