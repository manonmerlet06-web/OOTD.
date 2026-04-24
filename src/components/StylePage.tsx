import { motion } from "motion/react";
import { Sparkles, Heart, Share2, Plus, ArrowRight, User, Palette, Layers } from "lucide-react";
import { useWaitlist } from "../context/WaitlistContext";

const editorialLooks = [
  { id: 1, title: "Golden Hour Glow", url: "https://images.unsplash.com/photo-1529139513402-5833777c615f?auto=format&fit=crop&q=80&w=800", size: "lg" },
  { id: 2, title: "Modern Minimalism", url: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=800", size: "sm" },
  { id: 3, title: "Street Vibe", url: "https://images.unsplash.com/photo-1502033006978-cff2242cc739?auto=format&fit=crop&q=80&w=800", size: "md" },
  { id: 4, title: "Pastel Dream", url: "https://images.unsplash.com/photo-1549570652-97324981a6fd?auto=format&fit=crop&q=80&w=800", size: "md" }
];

export default function StylePage() {
  const { open } = useWaitlist();
  return (
    <div className="pt-24 min-h-screen bg-brand-black text-white">
      {/* Hero Section - Editorial Feel */}
      <section className="px-6 py-20 relative overflow-hidden">
        {/* Abstract Background Blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-pink/10 rounded-full blur-[150px] -z-10" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm font-black tracking-[0.3em] uppercase mb-6 text-brand-yellow"
            >
              The Identity Issue
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[12vw] md:text-[8vw] font-black tracking-tighter leading-[0.85] uppercase"
            >
              Style, <br />
              <span className="italic font-light text-brand-pink lowercase">your way.</span>
            </motion.h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 flex justify-end"
          >
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-[2rem] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                alt="Editorial cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[20px] border-white/5 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-bold leading-tight opacity-70">Cover Image: Identity & Expression</p>
                <p className="text-xl font-black italic">Refining the personal narrative.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outfit Creation Section */}
      <section className="px-6 py-32 bg-white text-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="bg-brand-pink/20 rounded-3xl aspect-square p-8 flex items-center justify-center transform rotate-2"
                >
                  <img src="/image/jacket.jpg" className="w-full h-full object-contain mix-blend-multiply" alt="Mix & Match" referrerPolicy="no-referrer" />
                </motion.div>
                <div className="pt-12">
                  <motion.div 
                     whileHover={{ scale: 1.05, rotate: 2 }}
                    className="bg-brand-yellow/20 rounded-3xl aspect-square p-8 flex items-center justify-center transform -rotate-3"
                  >
                    <img src="/image/sneakers.jpg" className="w-full h-full object-contain mix-blend-multiply" alt="Mix & Match" referrerPolicy="no-referrer" />
                  </motion.div>
                </div>
              </div>
              
              {/* Overlay Interactive UI */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-card p-6 rounded-[2rem] shadow-2xl space-y-4 w-64 border-brand-black/5">
                <div className="flex items-center justify-between">
                    <p className="text-xs font-black uppercase text-gray-400">Outfit Builder</p>
                    <Plus size={16} />
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-pink w-[70%]" />
                </div>
                <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                             <img src={`https://i.pravatar.cc/40?u=${i}`} alt="user" referrerPolicy="no-referrer" />
                        </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-yellow flex items-center justify-center text-[10px] font-black italic">
                        +50
                    </div>
                </div>
                <button className="w-full py-3 bg-brand-black text-white rounded-full text-xs font-black uppercase tracking-widest">
                    Create Look
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-1.5 rounded-full bg-brand-green/30 text-xs font-black tracking-widest uppercase mb-4"
              >
                Seamless Interface
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8">
                Mix your pieces into <span className="italic font-light">endless combinations.</span>
              </h2>
              <p className="text-xl text-gray-500 font-medium">
                Our intuitive outfit builder lets you drag, drop, and pair items across categories. Rediscover that jacket from 2019 by pairing it with your favorite new sneakers.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 font-black uppercase text-sm tracking-widest border-b-4 border-brand-yellow pb-1">
                    Explore Builder <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Boards */}
      <section className="px-6 py-32 bg-[#FDFCF8] text-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Current Inspirations</h2>
            <p className="text-gray-500 font-medium">Saved from your favorite creators and tailored to your closet.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {editorialLooks.map((look) => (
              <motion.div 
                key={look.id}
                whileHover={{ y: -10 }}
                className={`relative rounded-[2rem] overflow-hidden cursor-pointer group glass-card p-2 border-white/40 ${look.size === 'lg' ? 'row-span-2' : ''}`}
              >
                <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-gray-100">
                  <img src={look.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={look.title} referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1">Look #{look.id}</p>
                    <p className="text-sm font-black italic">{look.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-12 rounded-[3.5rem] bg-brand-lavender/10 border-2 border-dashed border-brand-lavender/30 flex flex-col items-center text-center">
                <Layers className="text-brand-lavender w-16 h-16 mb-6" />
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">All your inspiration, <br /> in one place.</h3>
                <p className="text-gray-500 max-w-md mb-8">Connected to your item inventory, so you always know if you can pull off a saved look.</p>
                <button 
                    onClick={open}
                    className="bg-brand-lavender text-brand-black px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3"
                >
                    Sync Inspiration <Sparkles size={16} />
                </button>
          </div>
        </div>
      </section>

      {/* Identity & Expression Section */}
      <section className="px-6 py-32 bg-brand-black text-white relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center mb-12">
                <User className="text-brand-yellow w-10 h-10" />
            </div>
            <motion.h2 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-5xl md:text-9xl font-black tracking-tighter leading-none mb-12"
            >
                Style is <span className="text-brand-pink italic">identity.</span>
            </motion.h2>
            <p className="text-xl md:text-3xl text-gray-400 max-w-4xl font-light italic leading-relaxed">
                "Your style evolves with you. OOTD doesn't just suggest trends; it helps you refine the narrative of who you are, one combination at a time."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 w-full">
                {[
                    { icon: <Palette className="text-brand-yellow" />, label: "Expression", desc: "No generic suggestions, just you." },
                    { icon: <Heart className="text-brand-pink" />, label: "Confidence", desc: "Wear what actually feels right." },
                    { icon: <Share2 className="text-brand-green" />, label: "Community", desc: "Share your identity with others." }
                ].map((item, i) => (
                    <div key={i} className="space-y-4">
                        <div className="flex justify-center">{item.icon}</div>
                        <h4 className="text-xl font-black italic">{item.label}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA section inherited from FeaturesPage or a customized one */}
      <section className="px-6 py-32 text-center bg-white text-brand-black">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase">
            Start <span className="text-brand-pink italic">styling</span>
          </h2>
          <button 
            onClick={open}
            className="bg-brand-black text-white px-12 py-6 rounded-full font-black text-lg flex items-center justify-center gap-3 mx-auto shadow-2xl hover:shadow-brand-pink/30 cursor-pointer"
          >
              Get Started with OOTD <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
