interface FooterProps {
  scrollToSection: (section: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-16 mb-20 text-center md:text-left">
          <div className="space-y-6 col-span-1 md:col-span-1">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="bg-teal-600 p-2 rounded-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
              </div>
              <span className="text-2xl font-black tracking-tighter">MED<span className="text-teal-400">CARE</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Pioneering the future of healthcare with innovation, technology, and compassion.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-black mb-8 text-white">Department</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">Cardiology</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">Neurology</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">Pediatrics</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">Laboratory</button></li>

            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 text-white">Company</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">About Us</button></li>
              <li><button onClick={() => scrollToSection('doctors')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">Our Doctors</button></li>
              <li><button onClick={() => scrollToSection('home')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">Career</button></li>
              <li><button onClick={() => scrollToSection('emergency')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">Contact</button></li>

            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 text-white">Support</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Emergency Info</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 font-bold">
          <p>© 2024 MEDCARE CLINIC. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
