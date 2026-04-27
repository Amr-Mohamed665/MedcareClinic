interface EmergencyProps {
  callEmergency: () => void;
  scrollToSection: (section: string) => void;
}

const Emergency = ({ callEmergency, scrollToSection }: EmergencyProps) => {
  return (
    <section id="emergency" className="py-20">
      <div className="container">
        <div className="relative rounded-[64px] bg-slate-900 overflow-hidden px-10 py-16 md:p-20 text-center md:text-left">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-600 opacity-10 blur-3xl animate-blob"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-bold border border-red-500/30">
                <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
                24/7 EMERGENCY
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Need Help <span className="text-teal-400">Immediately?</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-lg">
                Professional medical support is just a call away. Our emergency response team is ready 24/7.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={callEmergency}
                  className="bg-red-500 hover:bg-red-600 text-white px-10 py-5 rounded-3xl font-black text-xl shadow-xl shadow-red-500/30 transition-all active:scale-95"
                >
                  Call: 911
                </button>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="bg-slate-800 hover:bg-slate-700 text-white px-10 py-5 rounded-3xl font-black text-xl transition-all border border-slate-700"
                >
                  Find Nearest ER
                </button>

              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/5 border border-white/10 rounded-[48px] p-12 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-10">
                  {[
                    { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Avg. 15min Response' },
                    { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', text: '500+ ER Beds' },
                    { icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', text: 'Expert Surgeons' },
                    { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', text: 'Free Helpline' }
                  ].map((item, i) => (
                    <div key={i} className="space-y-3">
                      <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                      </svg>
                      <p className="text-white font-bold">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
