import { useState, useEffect } from 'react';

const SimpleVideoBackground = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      {/* YouTube Video Background */}
      <iframe
        src="https://www.youtube.com/embed/EAiLYEF7Xeo?autoplay=1&mute=1&loop=1&playlist=EAiLYEF7Xeo&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          filter: 'brightness(0.9)',
          opacity: videoLoaded ? 1 : 0,
          transition: 'opacity 2s ease-in-out'
        }}
        frameBorder="0"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title="ARARAKSHI Background Video"
      />

      {/* Fallback Gradient Background */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -2,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          opacity: videoLoaded ? 0 : 1,
          transition: 'opacity 2s ease-in-out'
        }}
      />
    </div>
  );
};

export default SimpleVideoBackground;
