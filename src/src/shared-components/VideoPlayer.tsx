import { useEffect, useState } from 'react';
import { Container } from '@mui/material';

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const VideoPlayer = () => {
  const size = useWindowResize();
  return (
    <>
      <Container>
        <div className='video-container'>
          <video controls id='myVideo' width={size.width + 'px'}>
            <source
              src='http://chuckleone.com/video/folding.mp4'
              type='video/mp4'
            />
          </video>
        </div>
      </Container>
    </>
  );
};

function useWindowResize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      return () => window.removeEventListener('resize', handleResize);
    }
    window.addEventListener('resize', handleResize);

    handleResize();
  }, []);
  return windowSize;
}

export default VideoPlayer;
