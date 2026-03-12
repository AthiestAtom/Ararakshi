import React, { useState, useEffect } from 'react';

const VideoBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // YouTube iframe loads pretty quickly
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 -z-50">
      {/* YouTube Video Background - Simplified Direct Approach */}
      <iframe
        src="https://www.youtube.com/embed/NjaqQ_YORSM?autoplay=1&mute=1&loop=1&playlist=NjaqQ_YORSM&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1"
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          filter: 'blur(2px) brightness(0.8)',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 2s ease-in-out',
          pointerEvents: 'none',
          zIndex: -1,
          border: 'none'
        }}
        frameBorder="0"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title="ARARAKSHI Background Video"
      />

      {/* Gradient background - Always present as safety net */}
      <div 
        className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -2,
          opacity: isLoaded ? 0 : 1,
          transition: 'opacity 2s ease-in-out'
        }}
      />

      {/* Loading indicator for YouTube video */}
      {!isLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50" style={{ zIndex: 30 }}>
          <div className="text-gray-700 text-center">
            <div className="text-6xl mb-4 animate-bounce">🔬</div>
            <p className="text-xl font-bold">Loading YouTube Video...</p>
            <p className="text-sm opacity-75">Your ARARAKSHI background is starting...</p>
            <div className="mt-4 flex justify-center gap-2">
              <div className="w-2 h-2 bg-gray-700 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gray-700 rounded-full animate-pulse delay-1000"></div>
              <div className="w-2 h-2 bg-gray-700 rounded-full animate-pulse delay-2000"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
