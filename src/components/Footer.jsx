import logo from '../images/logo.png';

const Footer = () => {
  const discover = ['About NovaSpace', 'Why Choose NovaSpace', 'Our Products', 'Insights', 'CSR Initiatives', 'Careers'];
  const resources = ['FAQs', 'Technical Documents', 'Download Brochure', 'Panel Selection Guidance', 'Installation Best Practices'];
  const legal = ['Contact Us', 'Live Chat / Customer Support', 'Privacy Policy', 'Terms & Conditions'];

  const socialIcons = [
    { label: 'X', svg: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
    { label: 'FB', svg: <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
    { label: 'YT', svg: <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z"/><path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"/></svg> },
    { label: 'IG', svg: <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
    { label: 'IN', svg: <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
  ];

  return (
    <footer className="relative bg-[#36A8E1] text-white pt-16 pb-8 md:pt-20 md:pb-12 font-body z-10 overflow-hidden">
      {/* Red angled shape forming the right side boundary */}
      <div 
        className="absolute top-0 right-0 w-[60%] md:w-[50%] lg:w-[45%] h-[40px] md:h-[60px] bg-[#E3000F] z-0" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 40px 100%)' }}
      ></div>

      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Mobile Logo */}
        <div className="md:hidden mb-8">
          <img 
            src={logo} 
            alt="NovaSpace" 
            className="h-8 object-contain" 
            style={{ filter: 'invert(1) hue-rotate(180deg)' }} 
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-4 mb-12 md:mb-20">
          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full md:w-2/3">
            {/* Discover */}
            <div>
              <h4 className="font-bold text-[16px] md:text-[18px] mb-4 md:mb-6 font-body">
                Discover
              </h4>
              <ul className="space-y-3">
                {discover.map((item, index) => (
                  <li key={item}>
                    <a href="#!" className="text-white text-[13px] md:text-[14px] hover:text-white/80 transition-colors flex items-center gap-2">
                      {index === 0 && <span className="text-red-500 font-bold text-lg leading-none">›</span>}
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-[16px] md:text-[18px] mb-4 md:mb-6 font-body">
                Resources
              </h4>
              <ul className="space-y-3">
                {resources.map((item) => (
                  <li key={item}>
                    <a href="#!" className="text-white text-[13px] md:text-[14px] hover:text-white/80 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-[16px] md:text-[18px] mb-4 md:mb-6 font-body">
                Legal & Support
              </h4>
              <ul className="space-y-3">
                {legal.map((item) => (
                  <li key={item}>
                    <a href="#!" className="text-white text-[13px] md:text-[14px] hover:text-white/80 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop Logo */}
          <div className="hidden md:flex flex-col items-end justify-center w-1/3">
            <img 
              src={logo} 
              alt="NovaSpace" 
              className="h-14 object-contain text-white" 
              style={{ filter: 'invert(1) hue-rotate(180deg)' }} 
            />
          </div>
        </div>

        {/* Bottom Section - Desktop (Pill shape) */}
        <div className="hidden md:flex bg-white text-[#333333] rounded-full px-8 py-3 items-center justify-between shadow-sm">
          <div className="flex gap-3">
            {socialIcons.map((icon) => (
              <a
                key={icon.label}
                href="#!"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-[#36A8E1] transition-all duration-200"
              >
                {icon.svg}
              </a>
            ))}
          </div>
          <p className="text-[13px] font-medium text-gray-700">
            Copyright © 2025 KRG Powersolar pvt. All rights reserved.
          </p>
          {/* Empty div for flex-between balance if needed, or remove if perfectly centered. Design looks centered copyright with icons left. */}
          <div className="w-[150px]"></div>
        </div>

        {/* Bottom Section - Mobile */}
        <div className="md:hidden flex flex-col items-center border-t border-white/20 pt-6">
          <p className="text-white text-[12px] text-center mb-6 max-w-[200px]">
            Copyright © 2025 KRG Powersolar pvt. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialIcons.map((icon) => (
              <a
                key={icon.label}
                href="#!"
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#36A8E1] transition-all duration-200"
              >
                {icon.svg}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
