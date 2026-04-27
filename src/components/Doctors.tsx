interface DoctorsProps {
  sarahImage: string;
}

const Doctors = ({ sarahImage }: DoctorsProps) => {
  return (
    <section id="doctors" className="py-24 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-left max-w-3xl mb-20 space-y-4">
          <span className="badge-premium">Our Experts</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">Meet Our <span className="text-teal-600">Specialists</span></h2>
          <p className="text-lg text-slate-600">Our doctors are world-class experts in their respective fields, committed to providing the highest standard of patient care.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: 'Dr. Sarah Johnson', specialty: 'Chief Cardiologist', img: sarahImage },
            { name: 'Dr. Michael Chen', specialty: 'Senior Neurologist', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=500&q=80' },
            { name: 'Dr. Elena Rodriguez', specialty: 'Pediatric Specialist', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&h=500&q=80' }
          ].map((doc, i) => (
            <div key={i} className="premium-card group">
              <div className="aspect-4/5 overflow-hidden">
                <img 
                  src={doc.img} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transition-all duration-1000 group-hover:pb-10">
                <h3 className="text-2xl font-black mb-1">{doc.name}</h3>
                <p className="text-teal-300 font-bold uppercase tracking-widest text-sm mb-4">{doc.specialty}</p>
                <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  {['twitter', 'linkedin', 'envelope'].map((social) => (
                    <button key={social} className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-teal-600 transition-colors">
                      <i className={`fab fa-${social} text-xs`}></i>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="btn-secondary group">
            View All Doctors
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
