import { motion } from "motion/react";
import { Search, Filter, Hash, TrendingUp, Archive, Plus, ArrowRight } from "lucide-react";
import { useWaitlist } from "../context/WaitlistContext";

const categories = ["All", "Tops", "Bottoms", "Outerwear", "Shoes", "Accessories"];

const closetItems = [
  { id: 1, name: "Silk Slip Dress", category: "Dresses", url: "/image/dress.jpg", color: "bg-brand-pink" },
  { id: 2, name: "Air Force 1", category: "Shoes", url: "/image/sneakers.jpg", color: "bg-brand-yellow" },
  { id: 3, name: "Vintage Leather", category: "Outerwear", url: "/image/jacket.jpg", color: "bg-brand-green" },
  { id: 4, name: "Shoulder Bag", category: "Accessories", url: "/image/bag.jpg", color: "bg-brand-lavender" },
  { id: 5, name: "Beret Hat", category: "Accessories", url: "/image/hat.jpg", color: "bg-brand-pink" },
  { id: 6, name: "Straight Jeans", category: "Bottoms", url: "/image/jeans.jpg", color: "bg-brand-yellow" },
  { id: 7, name: "Floral Skirt", category: "Bottoms", url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800", color: "bg-brand-lavender" },
  { id: 8, name: "Knit Sweater", category: "Tops", url: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800", color: "bg-brand-green" },
];

export default function ClosetPage() {
  const { open } = useWaitlist();
  return (
    <div className="pt-24 min-h-screen bg-[#FDFCF8]">
      {/* Hero Section */}
      <section className="px-6 py-16 text-center overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-yellow/20 rounded-full blur-[120px] -z-10 animate-pulse" />
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-9xl font-black tracking-tighter mb-6"
        >
          Your wardrobe, <br />
          <span className="italic font-light text-brand-pink">all in one place</span>
        </motion.h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
          Upload, organize, and rediscover every piece you own. Turn your closet into a visual playground.
        </p>

        {/* Floating elements visual - Centered and grouped */}
        <div className="mt-16 relative flex justify-center items-center h-64 -space-x-8 px-4">
            {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                        opacity: 1,
                        y: [0, -15, 0],
                        rotate: [i * 5 - 10, i * 5 - 5, i * 5 - 10]
                    }}
                    transition={{ 
                        opacity: { delay: i * 0.1 },
                        y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-white shadow-2xl p-2 border border-white shrink-0 first:rotate-[-15deg] last:rotate-[15deg] hover:z-50 hover:scale-110 transition-transform cursor-pointer"
                    style={{ zIndex: i + 10 }}
                >
                    <div className="w-full h-full rounded-2xl bg-gray-50 overflow-hidden">
                        <img 
                            src={closetItems[i % closetItems.length].url} 
                            className="w-full h-full object-cover" 
                            alt="Closet item"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                </motion.div>
            ))}
        </div>
      </section>

      {/* Main Closet Interface */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
            <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
              {categories.map((cat, i) => (
                <button 
                  key={i}
                  className={`px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest whitespace-nowrap transition-all ${i === 0 ? 'bg-brand-black text-white' : 'bg-white border border-gray-200 hover:border-brand-pink'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search item..." 
                  className="w-full bg-white border border-gray-200 rounded-full py-3 pl-12 pr-6 text-sm font-medium focus:ring-2 focus:ring-brand-pink outline-none"
                />
              </div>
              <button className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                <Filter size={20} />
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-8 space-y-8">
            {closetItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layoutId={`item-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`relative group rounded-[2.5rem] p-3 overflow-hidden ${item.color} shadow-sm cursor-grab active:cursor-grabbing`}
              >
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-white/60 relative">
                  <img 
                    src={item.url} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-sm">{item.name}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-black/50">{item.category}</p>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-brand-black/20" />
                    <div className="w-2 h-2 rounded-full bg-brand-black/20" />
                  </div>
                </div>
                
                {/* Drag handle suggestion */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-full text-[10px] font-black tracking-tighter uppercase border border-white/50 shadow-xl">
                        Drag to combine
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Features & Insights */}
      <section className="px-6 py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-5xl md:text-7xl font-black tracking-tighter"
                >
                  Smarter than your <br />
                  <span className="text-brand-pink italic">physical rack.</span>
                </motion.h2>
                <p className="text-xl text-gray-500 font-medium">
                  Use advanced tagging and filters to find exactly what you need. OOTD learns which pieces you wear most and which ones need more love.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Hash size={24} />, title: "Auto-Tagging", desc: "AI identifies fabric, style, and color automatically." },
                  { icon: <TrendingUp size={24} />, title: "Smart Insights", desc: "Discover which items are your real 'Most Worn'." },
                  { icon: <Filter size={24} />, title: "Season Sorting", desc: "Instantly filter for Summer, Winter, or anything else." },
                  { icon: <Archive size={24} />, title: "Arching", desc: "Keep track of items you've sold or given away." }
                ].map((feat, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="p-6 rounded-3xl bg-[#FDFCF8] border border-gray-100 flex gap-4"
                  >
                    <div className="text-brand-pink shrink-0">{feat.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{feat.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                className="bg-brand-lavender rounded-[4rem] p-12 relative z-10 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8">
                  <TrendingUp className="text-white w-12 h-12" />
                </div>
                <h3 className="text-white text-4xl font-black tracking-tighter mb-8 pr-12">Wardrobe Stats</h3>
                
                <div className="space-y-6">
                  <div className="glass-card p-6 rounded-3xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white overflow-hidden">
                        <img src="/image/jacket.jpg" className="w-full h-full object-cover" alt="Item" />
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase text-brand-black/40">Most Worn</p>
                        <p className="font-bold text-sm">Vintage Leather</p>
                      </div>
                    </div>
                    <div className="text-xl font-black">24<span className="text-[10px] ml-1 opacity-50 uppercase">times</span></div>
                  </div>

                  <div className="glass-card p-6 rounded-3xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white overflow-hidden">
                        <img src="/image/hat.jpg" className="w-full h-full object-cover" alt="Item" />
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase text-brand-black/40">Least Worn</p>
                        <p className="font-bold text-sm">Beret Hat</p>
                      </div>
                    </div>
                    <div className="text-xl font-black">2<span className="text-[10px] ml-1 opacity-50 uppercase">times</span></div>
                  </div>
                </div>
                
                <motion.div 
                  className="mt-12 p-6 rounded-3xl bg-white/20 border border-white/30 backdrop-blur-sm text-center"
                >
                  <p className="text-xs font-bold text-white uppercase tracking-widest mb-2">Pro Styling Tip</p>
                  <p className="text-white/90 text-sm font-medium">Try matching your "Least Worn" item with your "Air Force 1" for a fresh vibe.</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8">
            Ready to <span className="text-brand-pink underline decoration-4 underline-offset-8 italic font-light">digitize?</span>
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={open}
            className="bg-brand-black text-white px-12 py-6 rounded-full font-black text-lg flex items-center justify-center gap-3 mx-auto shadow-2xl hover:shadow-brand-pink/30 cursor-pointer"
          >
            Start building your closet <ArrowRight size={20} />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
