import React from 'react';

const SimpleVideoBackground = () => {
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
      <iframe
        src="https://www.youtube.com/embed/NjaqQ_YORSM?autoplay=1&mute=1&loop=1&playlist=NjaqQ_YORSM&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          filter: 'brightness(0.9)'
        }}
        frameBorder="0"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title="ARARAKSHI Background Video"
      />
    </div>
  );
};

export default SimpleVideoBackground;
