import { useEffect, useState } from 'react';

type Dispatch<A> = (value: A) => void;

function setDevice(
  setIsMobile: Dispatch<boolean>,
  setIsTablet: Dispatch<boolean>,
  setIsDesktop: Dispatch<boolean>,
): void {
  const { width } = window.screen;

  setIsMobile(width < 768);
  setIsTablet(width >= 768 && width < 1024);
  setIsDesktop(width >= 1024);
}

const useIsWhichDevice = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setDevice(setIsMobile, setIsTablet, setIsDesktop);
  }, []);

  window.addEventListener('resize', () => {
    setDevice(setIsMobile, setIsTablet, setIsDesktop);
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useIsWhichDevice;
