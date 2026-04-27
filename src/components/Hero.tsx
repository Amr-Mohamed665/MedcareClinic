interface HeroProps {
  scrollToSection: (section: string) => void;
  heroImage: string;
}

const Hero = ({ scrollToSection, heroImage }: HeroProps) => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50 skew-x-12 translate-x-20 hidden lg:block"></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 badge-premium">
                <div className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></div>
                <span>Leading Healthcare Excellence</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Your Health, Is <br />
                <span className="gradient-text">Our Priority.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Experience world-class medical services with a touch of personalized care. 
                Our team of experts is dedicated to your well-being.
              </p>
            </div>

            <div className="flex flex-wrap gap-5">
              <button 
                onClick={() => scrollToSection('appointment')} 
                className="btn-premium group"
              >
                Book Appointment
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="btn-secondary group"
              >
                Explore Services
              </button>
            </div>

            <div className="flex items-center space-x-10 p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-2xl border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Avatar" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center text-yellow-400 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
                <p className="text-sm font-bold text-slate-700">50,000+ Happy Patients</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-60 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
            
            <div className="relative rounded-[48px] overflow-hidden shadow-2xl border-[12px] border-white max-w-lg mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <img 
                src={heroImage} 
                alt="Modern Clinic and Medical Professionals" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-2xl text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-black text-slate-900">Certified Experts</p>
                    <p className="text-sm text-slate-600">ISO 9001:2015 Accredited</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
