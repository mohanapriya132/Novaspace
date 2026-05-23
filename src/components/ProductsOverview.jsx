import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Mono PERC Panels',
    image: '/mono-perc.png',
  },
  {
    id: 2,
    name: 'Bifacial Modules',
    image: '/bifacial.png',
  },
];

const ProductsOverview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="products" className="bg-[#36A8E1] pt-12 md:pt-20 pb-12 px-4 relative z-10">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between mb-8 md:mb-12 gap-3 md:gap-8">
          <div className="flex items-center justify-center md:justify-start gap-4 w-full md:w-auto">
            {/* Vertical Line - Desktop Only */}
            <div className="hidden md:block w-[3px] h-[50px] bg-white"></div>
            <h2 className="text-[26px] md:text-[50px] font-semibold text-white tracking-wide text-center md:text-left">
              Products <span className="italic">Overview</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-center md:items-end w-full md:w-auto">
            {/* Desktop Navigation Arrows */}
            <div className="hidden md:flex gap-6 mb-3 mr-2">
              <button className="text-white hover:opacity-70 transition-opacity cursor-pointer">
                <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 6L1 6M1 6L6 1M1 6L6 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="text-white hover:opacity-70 transition-opacity cursor-pointer">
                <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6H39M39 6L34 1M39 6L34 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            {/* Description Text */}
            <p className="text-white text-[14px] md:text-[15px] max-w-[340px] leading-relaxed text-center md:text-right">
              From homes to industries, NovaSpace offers a wide range of solar panels.
            </p>
          </div>
        </div>

        {/* Product Cards Container (Grid on desktop, flex-row scroll/snap on mobile) */}
        <div className="flex md:grid md:grid-cols-2 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 pb-2 md:pb-0 mb-6 md:mb-10 no-scrollbar">
          {products.map((product) => (
            <div
              key={product.id}
              // 
              className="bg-white rounded-sm md:rounded-xl py-5 px-5 md:py-8 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer w-full flex-shrink-0 snap-center min-h-[220px] md:min-h-0"
            >
              <h3 className="text-[#333333] font-medium md:font-semibold text-[15px] md:text-[26px] leading-tight mb-4 md:mb-0 md:w-[160px]">
                {product.name}
              </h3>
              <div className="flex-shrink-0 w-full md:w-48 h-[170px] md:h-32 flex items-center justify-center mt-2 md:mt-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-[85%] max-h-full md:max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-4 pb-4">
          <button className="text-white/80 hover:text-white transition-colors cursor-pointer">
            <svg width="24" height="10" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 6L1 6M1 6L6 1M1 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="text-white/80 hover:text-white transition-colors cursor-pointer">
            <svg width="24" height="10" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6H39M39 6L34 1M39 6L34 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Dots */}
        <div className="hidden md:flex items-center justify-center gap-3 mt-4">
          {[0, 1].map((i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="flex items-center justify-center focus:outline-none cursor-pointer"
            >
              {activeIndex === i ? (
                <div className="w-[18px] h-[18px] rounded-full border border-white flex items-center justify-center">
                  <div className="w-[8px] h-[8px] rounded-full bg-white"></div>
                </div>
              ) : (
                <div className="w-[8px] h-[8px] rounded-full bg-white/70 hover:bg-white transition-colors"></div>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Hide scrollbar styles inline for convenience */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default ProductsOverview;
