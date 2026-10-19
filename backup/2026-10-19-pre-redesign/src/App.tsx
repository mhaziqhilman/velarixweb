import React from 'react'
import { motion } from 'framer-motion'

export default function App() {
  const services = [
    {
      title: 'Digital Transformation & Automation',
      image: '/assets/services/digital-transformation.png',
      desc: `We specialize in converting traditional business workflows into digitized, automated systems that boost efficiency and consistency. Through digital transformation, we simplify manual operations, connect distributed teams, and enable decision-makers to act faster and smarter. Our approach merges process automation, system modernization, and adaptive analytics to create seamless digital ecosystems.`,
      subdesc: `- Workflow Automation\n- Business Process Optimization\n- Robotic Process Integration\n- Enterprise System Digitalization`
    },
    {
      title: 'Data Modernization',
      image: '/assets/services/data-modernization.png',
      desc: `Data Modernization is about transforming outdated data systems into powerful digital assets. Velarix redefines how organizations collect, store, and interpret information — ensuring data becomes the core of innovation. We design pipelines that empower analytics, integrate various data sources, and ensure data integrity across platforms.`,
      subdesc: `- Data Warehousing & Migration\n- Real-Time Data Pipelines\n- Data Governance & Security\n- Predictive Insights Enablement`
    },
    {
      title: 'Cloud Integration & Infrastructure',
      image: '/assets/services/cloud-integration-infrastructure.png',
      desc: `We build reliable, scalable, and secure cloud infrastructures to support continuous digital growth. Whether it’s transitioning from on-premise systems or optimizing hybrid architectures, our cloud solutions focus on flexibility, cost-efficiency, and long-term resilience.`,
      subdesc: `- Cloud Infrastructure Design\n- Hybrid & Multi-Cloud Strategy\n- DevOps & Containerization\n- Continuous Monitoring & Optimization`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A0A0A] to-[#2B0F0F] text-gray-100 antialiased">
      {/* HEADER & HERO */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/assets/logo.png" alt="Velarix Logo" className="w-18 h-10 object-contain" />
          {/* <div>
            <h1 className="text-xl font-semibold tracking-tight text-white">Velarix Technology</h1>
            <p className="text-xs font-bold text-amber-400">Digitizing the Future</p>
          </div> */}
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-amber-400 transition">About</a>
          <a href="#services" className="hover:text-amber-400 transition">Services</a>
          <a href="#projects" className="hover:text-amber-400 transition">Projects</a>
          <a href="#contact" className="bg-gradient-to-r from-[#C51111] via-[#E7462F] to-[#F49C1D] text-black px-4 py-2 rounded-md font-medium">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative h-[85vh] flex flex-col justify-center items-center text-center px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Empowering Digital Evolution
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            At Velarix Technology, we bridge innovation with digital transformation — revolutionizing conventional workflows through smart automation and modern data-driven systems.
          </p>
          <a href="#about" className="bg-gradient-to-r from-[#C51111] via-[#E7462F] to-[#F49C1D] text-black px-8 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition">Learn More</a>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h3 className="text-3xl font-semibold text-amber-400 mb-6">About Velarix Technology</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Founded in February 2025, Velarix Technology Sdn. Bhd. is a proudly Bumiputera-led digital solutions company based in Klang Valley. Our leadership team brings together a strong portfolio of experience, having worked with major clients such as PETRONAS and key government sectors.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            At Velarix, we believe in unlocking human potential through technology. Our mission is to empower organizations and individuals to embrace digitalization — transforming conventional ways of working into intelligent, data-driven, and automated systems. By riding the wave of modern innovation, we help businesses and communities elevate productivity and creativity in the era of accelerated technological advancement.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We are continuously growing and welcome passionate individuals who aspire to expand their potential in the digital domain. If you are driven to innovate, explore, and contribute to the nation’s modernization journey, Velarix Technology is the place to be.
          </p>
        </motion.div>
      </section>

      {/* SERVICES EXPANDED */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section id="services" className="mt-20">
          <h3 className="text-3xl font-semibold text-amber-400 mb-6">Our Services</h3>
          {services.map((s, i) => (
            <div key={i} className="mb-24">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-10 items-center">
                <img src={s.image} alt={s.title} className="rounded-2xl w-full h-80 object-cover border border-[#E7462F]/30 shadow-[0_0_25px_#F49C1D22]" />
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4">{s.title}</h4>
                  <p className="text-gray-300 whitespace-pre-line leading-relaxed">{s.desc}</p>
                  <h6 className="text-l font-bold text-white mt-4">Key Focus Area:</h6>
                  <p className="text-gray-300 whitespace-pre-line leading-relaxed mt-2">{s.subdesc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </section>

        {/* PROJECT TEMPLATE */}
        <section id="projects" className="mt-20">
          <h3 className="text-3xl font-semibold text-amber-400 mb-6">Our Digital Capabilities</h3>
          <p className="text-gray-400 mb-8">
            At Velarix Technology, we deliver innovative digital solutions that simplify complexity and drive smarter operations. 
            By integrating data, automation, and modern platforms, 
            we help organizations accelerate their digital transformation journey and achieve greater efficiency across their systems.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map((p) => (
              <div key={p} className="rounded-xl overflow-hidden bg-gradient-to-br from-[#1A0A0A]/80 to-black/40 border border-[#E7462F]/30 p-4">
                <img src={`/assets/projects/project-${p}.jpg`} alt={`Project ${p}`} className="rounded-md mb-4 h-48 w-full object-cover" />
                <h4 className="text-lg font-semibold text-white">Project Title {p}</h4>
                <p className="text-gray-400 text-sm mt-2">Brief description of the project, technologies used, and its impact or solution provided. Replace this text with real project data later.</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* CONTACT SECTION */}
        <section id="contact" className="mt-32 text-center">
          <h3 className="text-3xl font-semibold text-amber-400 mb-6">Get In Touch</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Have a project in mind or want to collaborate? Let’s bring your digital ideas to life. Reach out and our team will respond soon.
          </p>

          <form className="max-w-3xl mx-auto bg-gradient-to-br from-[#1A0A0A]/70 to-black/40 border border-[#E7462F]/30 rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input type="text" placeholder="Full Name" className="w-full p-3 rounded-md bg-transparent border border-[#E7462F]/40 focus:outline-none focus:border-[#F49C1D] text-white placeholder-gray-400" />
              <input type="email" placeholder="Email Address" className="w-full p-3 rounded-md bg-transparent border border-[#E7462F]/40 focus:outline-none focus:border-[#F49C1D] text-white placeholder-gray-400" />
            </div>
            <textarea placeholder="Your Message" rows={5} className="w-full p-3 rounded-md bg-transparent border border-[#E7462F]/40 focus:outline-none focus:border-[#F49C1D] text-white placeholder-gray-400 mb-6"></textarea>
            <button type="submit" className="bg-gradient-to-r from-[#C51111] via-[#E7462F] to-[#F49C1D] text-black px-8 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition">
              Send Message
            </button>
          </form>

          <div className="mt-10 text-gray-400">
            <p>Email: <a href="mailto:info@velarixtechnology.com" className="text-amber-400 hover:underline">info@velarixtechnology.com</a></p>
            <p>Based in Klang Valley, Malaysia</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E7462F]/30 mt-12 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-400">© {new Date().getFullYear()} Velarix Technology Sdn. Bhd. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-amber-400">LinkedIn</a>
            <a href="#" className="hover:text-amber-400">Twitter</a>
            <a href="#" className="hover:text-amber-400">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
