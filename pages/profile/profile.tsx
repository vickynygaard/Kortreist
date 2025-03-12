export default function Profile() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-custom">
        {/* Header */}
        <header className="w-full max-w-xs sm:max-w-lg bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 text-center">
          <h1 className="text-lg sm:text-2xl font-bold">Navn</h1>
        </header>
  
        {/* Content */}
        <main className="w-full max-w-xs sm:max-w-lg flex flex-col gap-4 mt-6">
          {/* Text */}
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center">
            Du har 100 poeng!
          </p>
        </main>
      </div>
    );
  }