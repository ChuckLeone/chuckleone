import { useEffect, useState } from 'react';

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const VideoPlayer = (props: any) => {
  const size = useWindowResize();
  return (
    <>
      <div className='video-container'>
        <video controls id='myVideo' width={size.width + 'px'}>
          <source src={props.video} type='video/mp4' />
        </video>
      </div>
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
