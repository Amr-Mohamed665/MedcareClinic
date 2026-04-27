interface AppointmentProps {
  handleAppointmentSubmit: (e: React.FormEvent) => void;
}

const Appointment = ({ handleAppointmentSubmit }: AppointmentProps) => {
  return (
    <section id="appointment" className="py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="badge-premium">Appointment</span>
              <h2 className="text-5xl font-black text-slate-900 leading-tight">
                Book Your Visit <br />
                <span className="text-teal-600">In Seconds.</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Skip the queue. Book your medical consultation online and get instant confirmation.
              </p>
            </div>

            <div className="space-y-6">
              {[
                'Choose your preferred department',
                'Select a date and time that fits you',
                'Receive a confirmation SMS/Email'
              ].map((step, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <p className="text-lg font-bold text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-10 md:p-16 rounded-[48px] border border-slate-100 shadow-2xl">
            <form onSubmit={handleAppointmentSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 ">
                  <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">Name</label>
                  <input required className="w-full bg-white border-transparent focus:border-teal-600 focus:ring-0 p-4 rounded-2xl shadow-sm transition-all" placeholder="Jane Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">Email</label>
                  <input required className="w-full bg-white border-transparent focus:border-teal-600 focus:ring-0 p-4 rounded-2xl shadow-sm transition-all" placeholder="jane@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">Department</label>
                <select required className="w-full bg-white border-transparent focus:border-teal-600 focus:ring-0 p-4 rounded-2xl shadow-sm transition-all">
                  <option value="">Select Specialty</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="general">General Checkup</option>
                </select>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">Date</label>
                  <input required className="w-full bg-white border-transparent focus:border-teal-600 focus:ring-0 p-4 rounded-2xl shadow-sm transition-all" type="date" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">Time</label>
                  <select required className="w-full bg-white border-transparent focus:border-teal-600 focus:ring-0 p-4 rounded-2xl shadow-sm transition-all">
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full bg-teal-600 hover:bg-slate-900 text-white py-5 rounded-4xl font-black text-lg transition-all shadow-xl active:scale-95">
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
