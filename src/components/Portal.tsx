import Swal from 'sweetalert2';

interface PortalProps {
  setIsPortalOpen: (open: boolean) => void;
}

const Portal = ({ setIsPortalOpen }: PortalProps) => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 animate-fade-in">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setIsPortalOpen(false)}></div>
      <div className="relative bg-white w-full max-w-md rounded-[48px] p-10 shadow-2xl border border-white/20 animate-fade-in-up">
        <button 
          onClick={() => setIsPortalOpen(false)}
          className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex p-4 rounded-3xl bg-teal-50 text-teal-600 mb-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-slate-900">Patient Portal</h2>
          <p className="text-slate-600">Enter your credentials to access your medical records.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => { 
          e.preventDefault(); 
          Swal.fire({
            title: 'Login Simulated',
            text: 'In a real app, this would connect to your backend securely.',
            icon: 'info',
            confirmButtonColor: '#0d9488',
            customClass: {
              popup: 'rounded-[32px]',
              confirmButton: 'rounded-xl px-8 py-3 font-bold'
            }
          });
          setIsPortalOpen(false); 
        }}>

          <div className="space-y-2">
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">Email Address</label>
            <input required className="w-full bg-slate-50 border-transparent focus:border-teal-600 focus:ring-0 p-4 rounded-2xl shadow-sm transition-all" placeholder="name@example.com" type="email" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center pr-1">
              <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">Password</label>
              <button type="button" className="text-xs font-bold text-teal-600 hover:underline">Forgot?</button>
            </div>
            <input required className="w-full bg-slate-50 border-transparent focus:border-teal-600 focus:ring-0 p-4 rounded-2xl shadow-sm transition-all" placeholder="••••••••" type="password" />
          </div>
          <button type="submit" className="w-full btn-premium py-5 text-lg">
            Sign In
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-500 font-bold">New patient? <button className="text-teal-600 hover:underline">Create an account</button></p>
        </div>
      </div>
    </div>
  );
};

export default Portal;
