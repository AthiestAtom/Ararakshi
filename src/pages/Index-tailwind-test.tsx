const IndexTailwindTest = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500">
      <div className="fixed top-20 left-20 w-32 h-32 bg-yellow-400/50 rounded-full blur-3xl animate-pulse" />
      <div className="fixed top-40 right-32 w-48 h-48 bg-red-400/50 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white drop-shadow-2xl mb-8">
            TAILWIND TEST
          </h1>
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-white text-lg">
              If you can see this styled card with backdrop blur, Tailwind CSS is working!
            </p>
            <button className="mt-4 px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Test Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexTailwindTest;
