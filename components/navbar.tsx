import { useRouter } from 'next/router'
import Link from 'next/link'
import { Home, Users, Trophy, User } from 'lucide-react'

const NavItem = ({ href, icon, label }: { href: string; icon: React.ReactNode, label: string }) => {
  const router = useRouter();
  const isActive = router.pathname === href || router.pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className="relative flex flex-col items-center justify-center w-16 h-16 transition-colors active:scale-95"
    >
      <div className="flex flex-col items-center justify-center gap-y-1 md:gap-y-[2px] leading-none">
        <div className="relative flex items-center justify-center h-9 w-9">
          {/* Background circle */}
          <span
            className={`absolute w-10 h-10 bg-violet-400/40 rounded-full -z-10 transition-opacity duration-200 ${
              isActive ? 'opacity-100' : 'opacity-0'
            } active:opacity-100`}
          ></span>

          {/* Icon */}
          <span
            className={`transition-colors ${
              isActive ? 'text-violet-950' : 'text-gray-500'
            } active:text-violet-950`}
          >
            {icon}
          </span>
        </div>

        {/* Label */}
        <span
          className={`text-xs transition-colors ${
            isActive ? 'text-violet-950 font-medium' : 'text-gray-500'
          } active:text-violet-950`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Navbar = () => (
  <nav className="fixed bottom-0 w-full border-t bg-purple-100 pb-safe z-50">
    <div className="mx-auto flex h-16 max-w-md items-center justify-around px-4">
      <NavItem href="/" icon={<Home className="w-7 h-7 md:w-6 md:h-6" />} label="Hjem" />
      <NavItem href="/team" icon={<Users className="w-7 h-7 md:w-6 md:h-6" />} label="Lag" />
      <NavItem href="/leaderboard" icon={<Trophy className="w-7 h-7 md:w-6 md:h-6" />} label="Toppliste" />
      <NavItem href="/profile" icon={<User className="w-7 h-7 md:w-6 md:h-6" />} label="Profil" />
    </div>
  </nav>
);

export default Navbar;
