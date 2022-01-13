// state를 활용한 재사용할 수 있는 로직

import { useState, useEffect } from 'react';

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, []);

  return width;
}