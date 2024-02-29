import React from 'react';

const MainVideoContainer = () => {
  return (
    <div className='w-full absolute'>
      <iframe
        className='w-full aspect-video'
        title='youtube'
        src="https://www.youtube.com/embed/W0CGtwl3D4A?autoplay=1&mute=1&controls=0&autohide=1&loop=1&playlist=W0CGtwl3D4A"
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
};

export default MainVideoContainer;
