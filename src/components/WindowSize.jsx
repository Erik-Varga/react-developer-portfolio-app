import { useState, useEffect } from 'react';

var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0]

export function WindowSize() {
    const { height, width } = useWindowDimensions();
    function getWindowDimensions() {
        const width = window.innerWidth
        const height = window.innerHeight
        return {
            width,
            height
        };
    }
    
    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
    
        return windowDimensions;
    }

  return (
    <div className='flex justify-center items-center text-white text-[12px] bg-[#0a192f]'>
        {width} x {height}
    </div>
  )
}
