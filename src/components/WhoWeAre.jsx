const WhoWeAre = () => {
  return (
    <section id="about-us" className="bg-white pt-24 pb-0 relative overflow-hidden flex flex-col items-center">
      {/* Top content */}
      <div className="max-w-4xl mx-auto text-center px-4 w-full flex flex-col items-center">
        <h2 className="w-[288px] h-[59px] flex items-center justify-center text-[50px] font-semibold mb-8 text-[#333333] tracking-tight">
          Who <span className="text-primary italic font-semibold ml-2">We Are</span>
        </h2>
        
        <div className="text-black w-[896px] max-w-full h-auto text-[11px] sm:text-[13px] md:text-[16px] font-medium leading-[140%] mx-auto px-4 text-center">
          <span className="inline-block align-middle mr-2 -mt-1.5">
            <img src="/logo.png" alt="NovaSpace" className="h-[12px] sm:h-[16px] md:h-[22px] object-contain" />
          </span>
          is a premium solar brand by KRG Power Solar Pvt. Ltd., delivering industry-grade solar
          <br className="hidden sm:block" />
          panels for residential and commercial needs. Powered by Trina Solar's global R&D, we
          <br className="hidden sm:block" />
          combine innovation with Indian manufacturing excellence.
        </div> 
       
      </div>

      {/* Wave Image */}
      <div className="mt-14 w-[1465px] h-[290px] mx-auto overflow-hidden flex-shrink-0">
        <img
          src="/wave-bg.png"
          alt="Wave background"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default WhoWeAre;
