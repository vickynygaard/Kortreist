import Image from 'next/image';
import router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const TILE_WIDTH = 800;
const MOBILE_BREAKPOINT = 768;

const Footer = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [tiles, setTiles] = useState(2);
  const router = useRouter();

  const isLoginPage = ['/login', '/onboarding'].includes(router.pathname);

  useEffect(() => {
    const updateLayout = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < MOBILE_BREAKPOINT);

      if (screenWidth >= MOBILE_BREAKPOINT) {
        const count = Math.ceil(screenWidth / TILE_WIDTH) + 1;
        setTiles(count);
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);


  const footerStyle = isLoginPage
  ? { bottom: '0' } 
  : { bottom: '3.5rem' };

  const footerStylePC = isLoginPage
  ? { bottom: '0' } 
  : { bottom: '3.5rem' };


  if (isMobile) {
    // Mobile: single centered image
    return (
      <footer 
      style={footerStyle}
      className="fixed left-0 w-full h-40 md:h-60 pointer-events-none -z-10 flex justify-center overflow-hidden">
        <div className="relative w-full h-full max-w-[600px]">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Scenery.png`}
            alt="Scenery mobile"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </footer>
    );
  }

  // Desktop: repeated & mirrored tiles
  return (
    <footer 
    style={footerStylePC}
    className="fixed left-0 w-full h-40 md:h-60 pointer-events-none -z-10 flex overflow-hidden">
     {Array.from({ length: tiles }).map((_, index) => (
      <div
        key={index}
        className={`relative h-full ${index % 2 === 1 ? "scale-x-[-1]" : ""}`}
        style={{
          width: `${TILE_WIDTH}px`,
          // Overlap picture 1 px so no gap
          marginLeft: index === 0 ? 0 : "-1px",
        }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Scenery.png`}
          alt={`Scenery ${index}`}
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>
    ))}
    </footer>
  );
};

export default Footer;
