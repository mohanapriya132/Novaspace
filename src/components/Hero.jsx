import React from 'react';
import heroBg from '../images/hero-bg.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full max-w-[1442px] mx-auto h-[277px] sm:h-[500px] md:h-[825px] flex flex-col items-center justify-center "
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-[807px] h-[177px] mx-auto -mt-10 md:-mt-20">
        
        <h1 className="text-white font-medium text-[26px] sm:text-[46px] md:text-[56px] lg:text-[62px] xl:text-[68px] leading-[1.2] tracking-tight mb-4">

  {/* Desktop View */}
  <span className="hidden md:block whitespace-nowrap text-[50px] text-white">
    Power Your World with{" "}<span className="italic font-medium">
      Spacesolar
    </span>
  </span>

  {/* Mobile View */}
  <span className="block md:hidden mt-28">
    Power Your World with <br />
    <span className="italic font-medium">
      NovaSpace
    </span>
  </span>

</h1>

<p className="text-white/90 text-[11px] sm:text-lg md:text-[19px] font-normal mb-8 md:mb-10 tracking-wide max-w-[280px] sm:max-w-none mx-auto leading-relaxed">

  {/* Desktop View */}
  <span className="hidden md:block">
    High-Efficiency Solar Panels | 30-Year Performance Warranty
  </span>

  {/* Mobile View */}
  <span className="block md:hidden">
    High-Efficiency Solar Panels | 25-Year <br />
    Performance Warranty
  </span>

</p>
        
        <button className="hidden md:block bg-white text-gray-900 font-semibold text-[15px] px-10 py-3.5 rounded-full hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
          Explore Our Products
        </button>
      </div>

      {/* Mobile Dot Indicator */}
      {/* <div className="absolute bottom-16 md:hidden flex items-center justify-center gap-2 z-20">
        <div className="w-2 h-2 rounded-full bg-white opacity-100"></div>
        <div className="w-2 h-2 rounded-full bg-white/40"></div>
        <div className="w-2 h-2 rounded-full bg-white/40"></div>
      </div> */}

      {/* Red/Blue Angular Separator Wrapper to prevent horizontal scroll */}
      <div className="absolute bottom-[-41px] left-0 w-full h-[82px] overflow-hidden z-20">
        <div className="absolute top-0 -left-[31px] w-[1475px] h-[82px]">
          <div 
            className="absolute top-0 right-0 h-[50%] bg-[#36A8E1]" 
            style={{ width: '82%', clipPath: 'polygon(40px 0, 100% 0, 100% 100%, 0 100%)' }}
          ></div>
          <div 
            className="absolute bottom-0 left-0 h-[50%] bg-red" 
            style={{ width: '18%', clipPath: 'polygon(0 0, 100% 0, calc(100% - 40px) 100%, 0 100%)' }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
