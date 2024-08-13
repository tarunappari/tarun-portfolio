import { useEffect, useRef, ReactNode } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

interface ScrollProps {
  children: ReactNode;
}

const Scroll: React.FC<ScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollInstance = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      // Add other options as needed
    });

    // Cleanup function to destroy the scroll instance on component unmount
    return () => {
      scrollInstance.destroy();
    };
  }, []);

  return (
    <div style={{zIndex:'-9'}} data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default Scroll;
