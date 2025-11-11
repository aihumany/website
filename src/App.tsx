import { ArrowRight, Zap, Users, MessageSquare, Workflow, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/FINAL LOGO BK001' copy.png" alt="AIHUMANY" className="h-10 w-auto" />
            <span className="text-xl font-bold tracking-wider">AIHUMANY</span>
          </div>
          <a
            href="https://calendly.com/aihumany-autoamtion/15-min-discovery-call-aihumany"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105 inline-block"
          >
            BOOK A CONSULTATION
          </a>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700/20 via-black to-black"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 animate-fade-in">
            AIHUMANY
          </h1>
          <p className="text-3xl md:text-5xl font-light mb-6 text-gray-300 animate-fade-in-delay-1">
            WHERE INTELLIGENT SYSTEMS MEET HUMAN VISION.
          </p>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in-delay-2">
            WE HELP ENGINEERS, DEVELOPERS, AND FACTORIES AUTOMATE OPERATIONS, GENERATE LEADS, AND SCALE WITH AI.
          </p>
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 animate-fade-in-delay-3"
          >
            BOOK A CONSULTATION
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">OUR MISSION</h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            AIHUMANY IS AN ADVANCED AI TRANSFORMATION AGENCY THAT COMBINES CUTTING-EDGE TECHNOLOGY WITH HUMAN CREATIVITY.
            WE DESIGN INTELLIGENT SYSTEMS THAT AMPLIFY YOUR CAPABILITIES, STREAMLINE OPERATIONS, AND UNLOCK EXPONENTIAL GROWTH.
          </p>
        </div>
      </section>

      <section className="py-32 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">OUR CORE SOLUTIONS</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'AI AUTOMATIONS',
                description: 'ELIMINATE REPETITIVE TASKS AND OPTIMIZE WORKFLOWS WITH INTELLIGENT AUTOMATION SYSTEMS.'
              },
              {
                icon: Users,
                title: 'LEAD GENERATION SYSTEMS',
                description: 'AI-POWERED PIPELINES THAT IDENTIFY, QUALIFY, AND CONVERT HIGH-VALUE PROSPECTS.'
              },
              {
                icon: MessageSquare,
                title: 'AI SALES AGENTS',
                description: 'INTELLIGENT CONVERSATIONAL AGENTS THAT ENGAGE, QUALIFY, AND CLOSE DEALS 24/7.'
              },
              {
                icon: Workflow,
                title: 'WORKFLOW DESIGN',
                description: 'CUSTOM-BUILT PROCESS ARCHITECTURES THAT INTEGRATE SEAMLESSLY WITH YOUR OPERATIONS.'
              },
              {
                icon: FileText,
                title: 'AUTOMATED CONTENT CREATION',
                description: 'GENERATE COMPELLING CONTENT AT SCALE WHILE MAINTAINING BRAND VOICE AND QUALITY.'
              }
            ].map((solution, index) => (
              <div
                key={index}
                className="group p-8 bg-black/50 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:bg-black/70"
              >
                <solution.icon className="w-12 h-12 mb-6 text-white group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">WHY CHOOSE AIHUMANY</h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-gray-300 transition-colors">CUSTOM-BUILT SYSTEMS</h3>
                <p className="text-gray-400 text-lg">TAILORED SOLUTIONS DESIGNED SPECIFICALLY FOR YOUR BUSINESS NEEDS AND OBJECTIVES.</p>
              </div>
              <div className="group">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-gray-300 transition-colors">SCALABLE INFRASTRUCTURE</h3>
                <p className="text-gray-400 text-lg">FUTURE-PROOF ARCHITECTURES THAT GROW SEAMLESSLY WITH YOUR ORGANIZATION.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="group">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-gray-300 transition-colors">SEAMLESS INTEGRATION</h3>
                <p className="text-gray-400 text-lg">WORKS EFFORTLESSLY WITH YOUR EXISTING TOOLS, PLATFORMS, AND WORKFLOWS.</p>
              </div>
              <div className="group">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-gray-300 transition-colors">EXPERT SUPPORT</h3>
                <p className="text-gray-400 text-lg">DEDICATED TEAM OF AI SPECIALISTS ENSURING YOUR SUCCESS EVERY STEP OF THE WAY.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">READY TO AUTOMATE YOUR BUSINESS?</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12">
            TRANSFORM YOUR OPERATIONS WITH INTELLIGENT SYSTEMS BUILT FOR THE FUTURE.
          </p>
          <a
            href="https://calendly.com/aihumany-autoamtion/15-min-discovery-call-aihumany"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 bg-white text-black rounded-full text-xl font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
          >
            BOOK A CONSULTATION
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <footer className="py-16 px-6 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-8">
            <img src="/FINAL LOGO BK001' copy.png" alt="AIHUMANY" className="h-10 w-auto opacity-80" />
            <p className="text-gray-500 text-sm">© 2025 AIHUMANY. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
