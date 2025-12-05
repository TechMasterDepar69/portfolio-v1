import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Edward.Dev
          </h1>
          <div className="space-x-6 text-sm font-medium">
            <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
            <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
            <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      {/* Reduced padding (pt-32 instead of pt-40) and removed min-h-screen to fix "too much space" */}
      <section className="pt-32 pb-40 px-6 max-w-5xl mx-auto flex flex-col items-start justify-center">
        <div className="animate-fade-in">
          <span className="text-blue-400 font-medium mb-4 tracking-widest uppercase text-sm">Hi, my name is</span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Depar Min Htet. <br />
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              I build data tools.
            </span>
          </h1>

          <p className="max-w-xl text-gray-400 text-lg mb-8 leading-relaxed">
            I am a Full Stack Developer and Data Analyst based in Thailand.
            I bridge the gap between building software (Node.js/React) and analyzing the data it creates (SQL/Power BI).
          </p>

          <a href="#projects" className="px-8 py-4 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1">
            Check out my work
          </a>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-16 px-6 max-w-5xl mx-auto animate-fade-in-delay">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
          <span className="text-blue-400 mr-2">01.</span> Some Things I've Built
        </h2>

        {/* --- PROJECT 1: STUDENT CRM (The Full Stack Flagship) --- */}
        <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-900/20 transition duration-300 border border-gray-700 hover:-translate-y-2 mb-12">
          <div className="md:flex items-stretch">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition duration-500 z-10"></div>
              <img src="/project1.jpeg" alt="Student CRM" className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-105 transition duration-700 ease-in-out" />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center relative z-20">
              <h3 className="text-blue-400 font-bold text-sm mb-2 tracking-wide">Featured Project</h3>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition">Student Tuition CRM</h4>
              <div className="bg-gray-900 p-4 rounded-lg text-gray-300 text-sm mb-6 leading-relaxed shadow-inner border border-gray-700">
                <p>A secure SaaS platform for private educators to track enrollment and revenue.</p>
                <ul className="list-disc list-inside mt-2 text-gray-400">
                  <li><strong>Security:</strong> Full Authentication system (Login/Register) using JWT & Bcrypt.</li>
                  <li><strong>Database:</strong> MongoDB schema design for complex student relationships.</li>
                  <li><strong>Business Logic:</strong> Automated calculation of monthly income.</li>
                </ul>
              </div>
              <ul className="flex flex-wrap gap-4 text-xs font-mono text-gray-400 mb-8">
                <li className="text-blue-300">MongoDB</li>
                <li className="text-blue-300">Express</li>
                <li className="text-blue-300">React</li>
                <li className="text-blue-300">Node.js</li>
                <li className="text-blue-300">JWT Auth</li>
              </ul>
              <div className="flex space-x-6">
                <a href="https://github.com/TechMasterDepar69/client-crm" target="_blank" className="text-white hover:text-blue-400 transition flex items-center gap-2"><span>📂 Code</span></a>
                <a href="https://client-crm-demo.onrender.com" target="_blank" className="text-white hover:text-blue-400 transition flex items-center gap-2"><span>🚀 Demo</span></a>
              </div>
            </div>
          </div>
        </div>

        {/* --- PROJECT 2: CRYPTO TRACKER (The API Integration) --- */}
        <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-900/20 transition duration-300 border border-gray-700 hover:-translate-y-2 mb-12">
          <div className="md:flex items-stretch">
            <div className="p-8 md:w-1/2 flex flex-col justify-center relative z-20 md:order-2"> {/* Content First on Mobile, Right on Desktop */}
              <h3 className="text-blue-400 font-bold text-sm mb-2 tracking-wide">Live Data Integration</h3>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition">Real-Time Crypto Analytics</h4>
              <div className="bg-gray-900 p-4 rounded-lg text-gray-300 text-sm mb-6 leading-relaxed shadow-inner border border-gray-700">
                <p>A high-performance financial dashboard tracking live market data.</p>
                <ul className="list-disc list-inside mt-2 text-gray-400">
                  <li><strong>API Integration:</strong> Fetches live pricing via Axios from CoinGecko.</li>
                  <li><strong>Visualization:</strong> Dynamic 7-day trendlines using Chart.js.</li>
                  <li><strong>UX:</strong> Dark mode interface with real-time green/red indicators.</li>
                </ul>
              </div>
              <ul className="flex flex-wrap gap-4 text-xs font-mono text-gray-400 mb-8">
                <li className="text-blue-300">React</li>
                <li className="text-blue-300">Vite</li>
                <li className="text-blue-300">Tailwind CSS</li>
                <li className="text-blue-300">Chart.js</li>
                <li className="text-blue-300">Rest API</li>
              </ul>
              <div className="flex space-x-6">
                <a href="https://github.com/TechMasterDepar69/crypto-tracker" target="_blank" className="text-white hover:text-blue-400 transition flex items-center gap-2"><span>📂 Code</span></a>
                <a href="https://crypto-tracker-a627.onrender.com" target="_blank" className="text-white hover:text-blue-400 transition flex items-center gap-2"><span>🚀 Demo</span></a>
              </div>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto md:order-1">
              <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition duration-500 z-10"></div>
              <img src="/project2.jpeg" alt="Crypto Tracker" className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-105 transition duration-700 ease-in-out" />
            </div>
          </div>
        </div>

        {/* --- PROJECT 3: PYTHON ANALYTICS (The Data Science) --- */}
        <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-900/20 transition duration-300 border border-gray-700 hover:-translate-y-2">
          <div className="md:flex items-stretch">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition duration-500 z-10"></div>
              <img src="/project3.jpeg" alt="Python Analytics" className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-105 transition duration-700 ease-in-out" />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center relative z-20">
              <h3 className="text-blue-400 font-bold text-sm mb-2 tracking-wide">Data Science</h3>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition">Tuition Revenue Forecaster</h4>
              <div className="bg-gray-900 p-4 rounded-lg text-gray-300 text-sm mb-6 leading-relaxed shadow-inner border border-gray-700">
                <p>An interactive predictive analytics tool for business forecasting.</p>
                <ul className="list-disc list-inside mt-2 text-gray-400">
                  <li><strong>Python Logic:</strong> Built entirely in Python using Streamlit & Pandas.</li>
                  <li><strong>Predictive Models:</strong> "What-If" sliders to simulate future revenue.</li>
                  <li><strong>Data Processing:</strong> Aggregates raw CSV data into actionable KPIs.</li>
                </ul>
              </div>
              <ul className="flex flex-wrap gap-4 text-xs font-mono text-gray-400 mb-8">
                <li className="text-blue-300">Python 3</li>
                <li className="text-blue-300">Streamlit</li>
                <li className="text-blue-300">Pandas</li>
                <li className="text-blue-300">Data Visualization</li>
              </ul>
              <div className="flex space-x-6">
                <a href="https://github.com/TechMasterDepar69/tuition-analytics-python" target="_blank" className="text-white hover:text-blue-400 transition flex items-center gap-2"><span>📂 Code</span></a>
                <a href="https://tuition-analytics.onrender.com" target="_blank" className="text-white hover:text-blue-400 transition flex items-center gap-2"><span>🚀 Demo</span></a>
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          <span className="text-blue-400 mr-2">02.</span> About Me
        </h2>
        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-blue-500/30 transition duration-300">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I am currently a student at the <span className="text-blue-400 font-bold">Singapore Institute of Management</span> with a background in IT and Big Data.
            I realized that just "knowing" code wasn't enough—I wanted to build systems that solve real problems.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            My goal is to work as a <span className="text-blue-400 font-bold">Data Analyst</span> or Dashboard Developer.
            When I'm not coding, I'm analyzing datasets with SQL or building visualizations in Power BI.
          </p>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-blue-400 font-medium mb-4 tracking-wide">03. What's Next?</h2>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg">
          I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:your.email@gmail.com" className="px-8 py-4 border border-blue-600 text-blue-400 rounded-md font-bold hover:bg-blue-600 hover:text-white transition duration-300">
          Say Hello 👋
        </a>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-6 text-center text-gray-500 text-sm bg-gray-900 border-t border-gray-800">
        <p>Built with React & Tailwind CSS by Depar.</p>
      </footer>

    </div>
  )
}

export default App