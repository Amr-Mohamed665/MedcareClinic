import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import './App.css'
import sarahImage from './assets/dr_sarah_johnson.png'
import heroImage from './assets/hero_premium.png'

// Import components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Doctors from './components/Doctors'
import Emergency from './components/Emergency'
import Appointment from './components/Appointment'
import Footer from './components/Footer'
import Portal from './components/Portal'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isPortalOpen, setIsPortalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ['services', 'doctors', 'appointment', 'emergency']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setMobileMenuOpen(false)
  }

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    Swal.fire({
      title: 'Success!',
      text: 'Thank you for booking an appointment! We will contact you shortly to confirm.',
      icon: 'success',
      confirmButtonColor: '#0d9488',
      customClass: {
        popup: 'rounded-[32px]',
        confirmButton: 'rounded-xl px-8 py-3 font-bold'
      }
    })

    ;(e.target as HTMLFormElement).reset()
  }

  const callEmergency = () => {
    Swal.fire({
      title: 'Emergency Call',
      text: 'Are you sure you want to call 911? This should only be used in real emergencies.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#64748b',
      confirmButtonText: 'Yes, call 911',
      cancelButtonText: 'Cancel',
      customClass: {
        popup: 'rounded-[32px]',
        confirmButton: 'rounded-xl px-8 py-3 font-bold',
        cancelButton: 'rounded-xl px-8 py-3 font-bold'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'tel:911'
      }
    })
  }

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-teal-100">
      <Navbar 
        scrolled={scrolled} 
        activeSection={activeSection} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        scrollToSection={scrollToSection} 
        setIsPortalOpen={setIsPortalOpen} 
      />
      
      <main>
        <Hero scrollToSection={scrollToSection} heroImage={heroImage} />
        <Services scrollToSection={scrollToSection} />
        <Doctors sarahImage={sarahImage} />
        <Emergency callEmergency={callEmergency} scrollToSection={scrollToSection} />
        <Appointment handleAppointmentSubmit={handleAppointmentSubmit} />
      </main>

      <Footer scrollToSection={scrollToSection} />

      {isPortalOpen && <Portal setIsPortalOpen={setIsPortalOpen} />}
    </div>
  )
}

export default App
