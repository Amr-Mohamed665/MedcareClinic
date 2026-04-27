interface NavbarProps {
  scrolled: boolean;
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (section: string) => void;
  setIsPortalOpen: (open: boolean) => void;
}

const Navbar = ({ scrolled, activeSection, mobileMenuOpen, setMobileMenuOpen, scrollToSection, setIsPortalOpen }: NavbarProps) => {
  return (
    <nav className={`fixed w-full top-0 z-[100] transition-all duration-500 ${
      scrolled ? 'py-3 glass-effect shadow-lg' : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => scrollToSection('services')}
          >
            <div className="bg-teal-600 p-2.5 rounded-2xl shadow-teal-200 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-slate-900' : 'text-white md:text-slate-900'}`}>
              MED<span className="text-teal-600">CARE</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {['Services', 'Doctors', 'Appointment', 'Emergency'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-teal-600 relative py-2 ${
                  scrolled ? 'text-slate-600' : 'text-slate-700'
                } ${activeSection === item.toLowerCase() ? 'text-teal-600' : ''}`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 rounded-full animate-fade-in"></span>
                )}
              </button>
            ))}

            <button 
              onClick={() => setIsPortalOpen(true)}
              className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-teal-600 transition-all shadow-md active:scale-95"
            >
              Portal
            </button>

          </div>

          <button 
            className="md:hidden text-slate-900 bg-white shadow-sm p-3 rounded-2xl" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl px-6 py-8 space-y-4 animate-fade-in-up">
          {['Services', 'Doctors', 'Appointment', 'Emergency'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`block w-full text-left py-3 text-lg font-bold transition-all ${
                activeSection === item.toLowerCase() ? 'text-teal-600 pl-4 border-l-4 border-teal-600' : 'text-slate-800'
              }`}
            >
              {item}
            </button>
          ))}

          <button 
            onClick={() => setIsPortalOpen(true)}
            className="w-full bg-teal-600 text-white py-4 rounded-2xl font-bold mt-4 shadow-lg active:scale-95"
          >
            Patient Portal
          </button>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
