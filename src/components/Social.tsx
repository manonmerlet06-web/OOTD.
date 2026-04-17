import { motion } from "motion/react";

export default function Social() {
  return (
    <section className="py-24 px-6 bg-brand-black text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.85]"
            >
              Your daily <br />
              OOTD, <br />
              <span className="text-brand-lavender italic">elevated.</span>
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-md mb-10 font-light">
              It's more than an app. It's your style universe. Express yourself, build your identity, and never miss a look.
            </p>
            
            <div className="flex gap-4">
               <div className="px-6 py-2 border border-white/20 rounded-full text-sm uppercase tracking-widest">#SelfExpression</div>
               <div className="px-6 py-2 border border-white/20 rounded-full text-sm uppercase tracking-widest">#DigitalCloset</div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="aspect-[3/5] rounded-[2rem] overflow-hidden bg-gray-800"
              >
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="aspect-[3/5] rounded-[2rem] overflow-hidden bg-gray-800 translate-y-12"
              >
                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-lavender/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
      
      {/* Background Text */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <p className="text-[20vw] font-black whitespace-nowrap leading-none -ml-20">OOTD OOTD OOTD OOTD</p>
        <p className="text-[20vw] font-black whitespace-nowrap leading-none -ml-40">STYLE STYLE STYLE STYLE</p>
        <p className="text-[20vw] font-black whitespace-nowrap leading-none -ml-10">CLOSET CLOSET CLOSET</p>
      </div>
    </section>
  );
}
