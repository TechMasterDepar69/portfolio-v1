import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Depar.Dev
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
            Depar. <br />
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
      {/* Reduced vertical padding (py-16) */}
      <section id="projects" className="py-16 px-6 max-w-5xl mx-auto animate-fade-in-delay">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
          <span className="text-blue-400 mr-2">01.</span> Some Things I've Built
        </h2>

        <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-900/20 transition duration-300 border border-gray-700 hover:-translate-y-2">
          <div className="md:flex">
            {/* Left: Image Container */}
            {/* FIX: Added h-64 md:h-auto md:max-h-96 to limit height */}
            <div className="md:w-1/2 relative overflow-hidden h-64 md:h-auto md:max-h-96">
              <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition duration-500 z-10"></div>

              {/* FIX: Added 'object-top' to focus on the charts at the top of your screenshot */}
              <img
                src="/project1.jpeg"
                alt="Career Tracker Dashboard"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition duration-700 ease-in-out"
              />
            </div>

            {/* Right: Content */}
            <div className="p-8 md:w-1/2 flex flex-col justify-center relative z-20">
              <h3 className="text-blue-400 font-bold text-sm mb-2 tracking-wide">Featured Project</h3>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition">Career Analytics Dashboard</h4>

              <div className="bg-gray-900 p-4 rounded-lg text-gray-300 text-sm mb-6 leading-relaxed shadow-inner border border-gray-700">
                A full-stack application to track job applications and visualize success rates.
                Features a custom CRUD API, MongoDB database, and a real-time analytics dashboard with Chart.js.
              </div>

              <ul className="flex flex-wrap gap-4 text-xs font-mono text-gray-400 mb-8">
                <li className="bg-gray-900 px-2 py-1 rounded text-blue-300">MongoDB</li>
                <li className="bg-gray-900 px-2 py-1 rounded text-blue-300">Express</li>
                <li className="bg-gray-900 px-2 py-1 rounded text-blue-300">React</li>
                <li className="bg-gray-900 px-2 py-1 rounded text-blue-300">Node.js</li>
                <li className="bg-gray-900 px-2 py-1 rounded text-blue-300">Chart.js</li>
              </ul>

              <div className="flex space-x-6">
                <a href="https://github.com/TechMasterDepar69/career-tracker-v1" target="_blank" className="text-white hover:text-blue-400 transition flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <span>Code</span>
                </a>
                <a href="https://career-tracker-portfolio.onrender.com" target="_blank" className="text-white hover:text-blue-400 transition flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  <span>Live Demo</span>
                </a>
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