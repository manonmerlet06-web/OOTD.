import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Blobs */}
      <div className="blob w-[300px] h-[300px] bg-brand-pink top-[-50px] left-[-50px] rounded-full" />
      <div className="blob w-[400px] h-[400px] bg-brand-lavender bottom-[-100px] right-[-50px] rounded-full" />
      <div className="blob w-[250px] h-[250px] bg-brand-yellow top-[20%] right-[10%] rounded-full" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left z-10"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter mb-6">
            Your wardrobe. <br />
            <span className="text-brand-pink">Already styled.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-lg mx-auto lg:mx-0 mb-10 font-light">
            Upload your clothes, get instant outfit ideas, and rediscover your style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-brand-black text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer">
              Download the app <Download size={20} />
            </button>
            <button className="bg-white border-2 border-brand-black px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-brand-black hover:text-white transition-all cursor-pointer">
              Get started <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        <div className="relative h-[500px] md:h-[700px] flex items-center justify-center">
          {/* Main Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 100, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-20 w-[280px] h-[580px] bg-brand-black rounded-[3rem] border-[8px] border-brand-black shadow-2xl overflow-hidden"
          >
            <img 
              src="https://picsum.photos/seed/ootd-app/400/800" 
              alt="OOTD App Interface" 
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-6 right-6 text-white">
              <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Today's Pick</p>
              <h3 className="text-2xl font-bold">Urban Minimalist</h3>
            </div>
          </motion.div>

          {/* Floating UI Cards */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[5%] md:right-[15%] z-30 glass-card p-4 rounded-2xl w-48 rotate-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-brand-green" />
              <div>
                <p className="text-[10px] font-bold uppercase">AI Suggestion</p>
                <p className="text-xs">Match found!</p>
              </div>
            </div>
            <div className="h-24 bg-brand-lavender/30 rounded-lg overflow-hidden">
               <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-[15%] left-[5%] md:left-[10%] z-30 glass-card p-4 rounded-2xl w-52 -rotate-12"
          >
            <p className="text-xs font-bold mb-2">Wardrobe Stats</p>
            <div className="flex gap-2">
              <div className="flex-1 h-12 bg-brand-yellow rounded-md flex items-center justify-center font-bold text-lg">84</div>
              <div className="flex-1 h-12 bg-brand-pink rounded-md flex items-center justify-center font-bold text-lg">12</div>
            </div>
            <p className="text-[10px] mt-2 opacity-60">Items uploaded this week</p>
          </motion.div>

          {/* Decorative Blobs in the visual area */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
