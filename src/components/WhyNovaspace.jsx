const reasons = [
  {
    id: 1,
    title: 'Co-developed\nwith Trina Solar',
    desc: 'Backed by one of the world\'s most trusted solar innovators',
    highlighted: false,
  },
  {
    id: 2,
    title: 'Advanced\nmanufacturing facilities',
    desc: 'Built using next-gen production lines and stringent quality control',
    highlighted: true,
  },
  {
    id: 3,
    title: 'Long-term\nperformance guarantee',
    desc: '25 years of reliable solar power guaranteed',
    highlighted: false,
  },
  {
    id: 4,
    title: 'Made for Indian\nclimate & terrain',
    desc: 'Resilient in rain, wind, sun and dust. Built for India\'s toughest conditions',
    highlighted: false,
  },
  {
    id: 5,
    title: 'Sustainable &\nrecyclable materials',
    desc: 'Lower your carbon footprint with our eco-conscious panel technology',
    highlighted: false,
  },
];

const WhyNovaspace = () => {
  return (
    <section id="why-novaspace" className="bg-[#F8F9FA] py-12 md:py-20 px-4">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Mobile Header (Hidden on tablet/desktop) */}
        <div className="flex md:hidden items-center justify-center gap-3 mb-8">
          <h2 className="text-[#333333] text-2xl font-semibold font-body">Why</h2>
          <img src="/logo.png" alt="NovaSpace" className="h-6 object-contain" />
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          
          {/* Logo card (Hidden on mobile) */}
          <div className="hidden md:flex w-full max-w-[410px] h-[343px] bg-white rounded-[8px] p-10 flex-col justify-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]">
            <h2 className="text-[#333333] text-5xl md:text-6xl mb-6 font-semibold font-body">
              Why
            </h2>
            <img src="/logo.png" alt="NovaSpace" className="h-12 w-auto object-contain self-start" />
          </div>

          {/* Reason cards */}
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className={`w-full max-w-[410px] h-[187px] md:h-[343px] relative rounded-[8px] p-6 md:p-10 flex flex-col transition-all duration-300 hover:shadow-xl ${
                reason.highlighted
                  ? 'bg-[#3BAAF1] text-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)]'
                  : 'bg-white text-gray-800 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]'
              }`}
            >
              <div className="z-10 relative">
                <h3
                  className={`text-[18px] md:text-[22px] font-semibold mb-2 md:mb-3 leading-tight whitespace-pre-line font-body ${
                    reason.highlighted ? 'text-white' : 'text-[#222222]'
                  }`}
                >
                  {reason.title}
                </h3>
                <p
                  className={`text-[13px] md:text-[15px] leading-relaxed max-w-[280px] font-body ${
                    reason.highlighted ? 'text-white/90' : 'text-gray-600'
                  }`}
                >
                  {reason.desc}
                </p>
              </div>
              {/* Large background number */}
              <span
                className={`absolute bottom-3 right-5 md:bottom-4 md:right-6 text-[80px] md:text-[120px] font-medium leading-none select-none font-body ${
                  reason.highlighted ? 'text-[#6DBDF0]' : 'text-[#CDE6F5]'
                }`}
              >
                {reason.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNovaspace;
