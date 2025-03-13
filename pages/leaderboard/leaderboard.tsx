import Button from '@/components/buttons/primaryButton'
import User from 'lucide-react'

export default function Leaderboard() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-custom">
        {/* Header */}
        <header className="w-full max-w-xs sm:max-w-lg bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 text-center">
          <h1 className="text-lg sm:text-2xl font-bold">Ledertavle</h1>
        </header>
  
        {/* Content */}
        <main className="w-full max-w-xs sm:max-w-lg flex flex-col gap-4 mt-6">
          {/* Text */}
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center">
            Du er top 3
          </p>
        </main>
        <Button 
        
        title="Registrer reise"
        description="Samle poeng ved å reise bærekraftig til jobb."
        icon={<User size={24} />}
        onClick={() => alert('Går til profil!')}
        />
      </div>
    );
  }