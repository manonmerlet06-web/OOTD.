import { motion } from "motion/react";
import { Camera, Sparkles, LayoutGrid, ShoppingBag, Heart, Smartphone, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Upload your wardrobe",
    description: "Snap your clothes and build your digital closet in minutes. Our AI automatically background-removes for a clean, editorial look.",
    icon: <Camera className="w-8 h-8" />,
    color: "bg-brand-yellow",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
    reverse: false
  },
  {
    title: "Smart outfit suggestions",
    description: "Get AI-powered looks instantly. OOTD learns your style and suggests perfect combinations based on the weather, occasion, and your mood.",
    icon: <Sparkles className="w-8 h-8" />,
    color: "bg-brand-pink",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
    reverse: true
  },
  {
    title: "Inspiration hub",
    description: "Save and organize your style inspirations from around the web. Connect your favorite looks to the items you already own.",
    icon: <LayoutGrid className="w-8 h-8" />,
    color: "bg-brand-lavender",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
    reverse: false
  },
  {
    title: "Smart shopping",
    description: "Discover pieces that match your style and perfectly complement your existing wardrobe. Stop buying things that don't fit your vibe.",
    icon: <ShoppingBag className="w-8 h-8" />,
    color: "bg-brand-green",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    reverse: true
  }
];

export default function FeaturesPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#FDFCF8]">
      {/* Hero Section */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-pink/30 rounded-full blur-[100px] -z-10" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-brand-yellow/30 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-lavender/40 text-sm font-bold tracking-widest uppercase mb-6"
          >
            Capabilities
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
          >
            Everything you need <br />
            <span className="text-brand-pink">to style smarter</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 font-medium"
          >
            OOTD turns your wardrobe into a powerful styling tool. 
            Stop overthinking and start wearing what you love.
          </motion.p>
          
          <div className="relative h-[400px] md:h-[600px] flex justify-center items-center">
            <motion.div
              initial={{ rotate: -10, y: 50, opacity: 0 }}
              animate={{ rotate: -5, y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute w-[200px] h-[400px] md:w-[280px] md:h-[560px] bg-white rounded-[40px] shadow-2xl border-[8px] border-brand-black overflow-hidden z-20 left-1/2 -translate-x-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover" 
                alt="App Interface"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ rotate: 10, y: 50, opacity: 0 }}
              animate={{ rotate: 5, y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute w-[200px] h-[400px] md:w-[280px] md:h-[560px] bg-white rounded-[40px] shadow-2xl border-[8px] border-brand-black overflow-hidden z-10 left-1/2 translate-x-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1554412930-c74f6607f8c0?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover" 
                alt="App Interface"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="px-6 py-20 space-y-32">
        {features.map((feature, idx) => (
          <div key={idx} className="max-w-7xl mx-auto">
            <div className={`flex flex-col ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}>
              <motion.div
                initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-8"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6`}>
                  {feature.icon}
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                  {feature.title}
                </h2>
                <p className="text-xl text-gray-500 font-medium leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <span className="px-5 py-2 rounded-full border border-gray-200 text-sm font-bold bg-white shadow-sm">AI Enhanced</span>
                  <span className="px-5 py-2 rounded-full border border-gray-200 text-sm font-bold bg-white shadow-sm">Real-time Sync</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex-1 relative group"
              >
                <div className={`absolute inset-0 ${feature.color} rounded-[3rem] blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity`} />
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                    <div className="px-4 py-2 bg-white/90 backdrop-blur rounded-full text-xs font-black tracking-widest uppercase">
                      Preview
                    </div>
                    <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-md">
                      <Heart className="w-5 h-5 text-brand-pink" fill="currentColor" />
                    </div>
                  </div>
                </div>
                {/* Floating UI Elements over image */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 top-1/4 glass-card p-4 rounded-2xl hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center">
                      <Sparkles size={16} />
                    </div>
                    <p className="text-xs font-bold leading-tight">Match Found!</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* Highlight Section */}
      <section className="px-6 py-32 bg-brand-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-pink rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-yellow rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
          >
            Your style, <br />
            <span className="text-brand-yellow italic">powered by you</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-16">
            Everything in OOTD is tailored to your unique preferences. No generic trends, just what makes you feel your best.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { label: "Personalized", value: "100%", sub: "Tailored to you" },
              { label: "AI Suggestions", value: "Unlimited", sub: "Available 24/7" },
              { label: "Wardrobe ROI", value: "2.5x", sub: "Wear more of your closet" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur"
              >
                <div className="text-4xl md:text-6xl font-black tracking-tighter text-brand-green mb-2">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500 font-medium">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-32 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-brand-yellow rounded-[2.5rem] flex items-center justify-center shadow-xl mx-auto transform rotate-12 mb-8"
          >
            <Smartphone className="w-12 h-12" />
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter">
            Ready to <span className="text-brand-pink underline decoration-4 underline-offset-8">start styling?</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium max-w-xl mx-auto">
            Join 50,000+ fashion enthusiasts building their dream digital closet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <button className="w-full sm:w-auto bg-brand-black text-white px-12 py-6 rounded-full font-black text-lg flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl hover:shadow-brand-pink/20 cursor-pointer">
              Start styling with OOTD <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto bg-white border-2 border-brand-black text-brand-black px-12 py-6 rounded-full font-black text-lg hover:bg-gray-50 transition-colors cursor-pointer">
              Watch Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
