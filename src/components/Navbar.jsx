import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'About Us', 'Why Novaspace', 'Products', 'Insights'];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-white md:bg-transparent py-3 md:py-5 shadow-md md:shadow-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-14">
          
          {/* Mobile Hamburger (Left) */}
          <div className="flex md:hidden flex-1 justify-start">
            <button
              className="focus:outline-none flex flex-col justify-center items-start gap-[5px] w-8 h-8 cursor-pointer z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={`block w-6 h-[2px] bg-gray-900 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
              <span className={`block w-5 h-[2px] bg-gray-900 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-[2px] bg-gray-900 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
            </button>
          </div>

          {/* Logo (Center on mobile, Left on desktop) */}
          <div className="flex-shrink-0 cursor-pointer flex-1 md:flex-none flex justify-center md:justify-start">
            <img src="/logo.png" alt="NovaSpace Logo" className="h-6 sm:h-8 md:h-12 object-contain" />
          </div>

          {/* Mobile Empty Right (to perfectly center the logo) */}
          <div className="flex md:hidden flex-1 justify-end"></div>

          {/* Desktop Nav - Center */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                className={`text-[15px] font-normal transition-colors duration-200 relative group flex flex-col items-center ${
                  link === 'Home' ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                <span className={link === 'Home' ? 'font-bold' : ''}>{link}</span>
                {link === 'Home' && (
                  <span className="absolute -bottom-3 w-10 h-[1px] bg-white"></span>
                )}
                {link !== 'Home' && (
                  <span className="absolute -bottom-3 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-10"></span>
                )}
              </a>
            ))}
          </div>

          {/* Right Side: Contact Us (Desktop only) */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="border border-white/70 text-white bg-transparent text-[15px] font-normal px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/95 z-40 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              className={`text-2xl font-normal hover:text-gray-300 transition-colors ${
                link === 'Home' ? 'text-white font-bold' : 'text-white/80'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="border border-white/70 text-white bg-transparent text-xl font-normal px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors mt-4 cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
