interface ServicesProps {
  scrollToSection: (section: string) => void;
}

const Services = ({ scrollToSection }: ServicesProps) => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-40"></div>
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="badge-premium">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Premium Care For Everyone</h2>
            <p className="text-lg text-slate-600">We offer a wide range of specialized medical services to ensure your health is always in good hands.</p>
          </div>
          <button 
            onClick={() => scrollToSection('appointment')}
            className="text-teal-600 font-bold hover:underline"
          >
            Learn More About Services →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Cardiology', desc: 'Comprehensive heart care using modern diagnostics.', color: 'indigo', icon: 'fa-heartbeat' },
            { title: 'Neurology', desc: 'Expert neurological treatments for brain health.', color: 'purple', icon: 'fa-brain' },
            { title: 'Pediatrics', desc: 'Compassionate care for your little ones.', color: 'blue', icon: 'fa-child' },
            { title: 'Orthopedics', desc: 'Advanced bone and joint treatments.', color: 'rose', icon: 'fa-bone' },
            { title: 'Dermatology', desc: 'Specialized care for healthy, glowing skin.', color: 'emerald', icon: 'fa-hand-dots' },
            { title: 'Oncology', desc: 'Holistic cancer care and modern therapies.', color: 'amber', icon: 'fa-microscope' }
          ].map((service, i) => {
            const bgColors: {[key: string]: string} = {
              indigo: 'bg-teal-50',
              purple: 'bg-purple-50',
              blue: 'bg-cyan-50',
              rose: 'bg-rose-50',
              emerald: 'bg-emerald-50',
              amber: 'bg-amber-50'
            }
            const textColors: {[key: string]: string} = {
              indigo: 'text-teal-600',
              purple: 'text-purple-600',
              blue: 'text-blue-600',
              rose: 'text-rose-600',
              emerald: 'text-emerald-600',
              amber: 'text-amber-600'
            }

            return (
              <div key={i} className="premium-card p-10 group cursor-pointer border-transparent hover:border-teal-100 transition-all duration-1000">
                <div className={`w-16 h-16 rounded-2xl ${bgColors[service.color]} ${textColors[service.color]} flex items-center justify-center mb-8 shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all duration-1000`}>
                  <i className={`fa-solid ${service.icon} text-3xl transition-all duration-1000 group-hover:rotate-6`}></i>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-teal-600 transition-all duration-1000">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed line-clamp-2 transition-all duration-1000 group-hover:text-slate-800">{service.desc}</p>
                <div className="inline-flex items-center text-sm font-black uppercase tracking-wider text-slate-900 group-hover:text-teal-600 transition-all duration-1000">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-all duration-1000" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
