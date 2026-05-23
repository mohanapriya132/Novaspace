import solarWindmillBg from '../images/solar-windmill-bg.jpg';

const TrinaPartnership = () => {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] flex flex-col justify-start overflow-hidden">
      {/* Background Image */}
      <img 
        src={solarWindmillBg} 
        alt="Solar Panels and Windmills" 
        className="absolute inset-0 w-full h-full object-cover object-[center_30%] z-0" 
      />

      {/* Text Content */}
      <div className="relative z-10 pt-8 md:pt-16 px-4 text-center max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <h2 className="text-[#2092D9] text-[28px] md:text-[42px] font-bold font-body tracking-tight">
            Trina<span className="font-light">solar</span>
          </h2>
          <h2 className="text-[#2092D9] text-[28px] md:text-[42px] italic font-semibold font-body ml-1 md:ml-3">
            Partnership
          </h2>
        </div>
        <div style={{ width: '100%', maxWidth: '781px' }}>
          <p 
            className="mx-auto"
            style={{ 
              fontFamily: "'Lato', sans-serif", 
              fontWeight: 500, 
              fontSize: '20px', 
              lineHeight: '127%', 
              color: '#494949',
              textAlign: 'center'
            }}
          >
            A strategic collaboration that boosts product credibility, technology transfer, and
            performance excellence on a global scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrinaPartnership;
