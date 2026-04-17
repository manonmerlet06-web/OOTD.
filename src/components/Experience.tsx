import { motion } from "motion/react";
import { Plus } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative">
            {/* Outfit Combination Visual */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-brand-lavender rounded-3xl overflow-hidden shadow-lg"
              >
                <img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-brand-yellow rounded-3xl overflow-hidden shadow-lg translate-y-8"
              >
                <img src="https://images.unsplash.com/photo-1584305116359-ef81daaf4fd9?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-16 h-16 bg-brand-black text-white rounded-full flex items-center justify-center shadow-2xl">
                <Plus size={32} />
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="absolute -right-8 top-1/4 glass-card p-6 rounded-3xl shadow-2xl z-30 max-w-[200px]"
            >
              <p className="text-xs font-bold text-brand-pink mb-2 uppercase tracking-widest">AI Stylist Says</p>
              <p className="text-sm font-medium italic">"The lavender knit perfectly balances these yellow wide-legs. Add a white sneaker for a fresh vibe."</p>
            </motion.div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-none"
          >
            Stop overthinking <br />
            <span className="text-brand-green">your outfits.</span>
          </motion.h2>
          <p className="text-xl text-gray-600 mb-8 font-light">
            OOTD helps you see combinations you already own — and wear them better. No more "I have nothing to wear" mornings.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-pink flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Rediscover your gems</h4>
                <p className="text-gray-500">Find that shirt you forgot you had and style it in 5 new ways.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-yellow flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Smart suggestions</h4>
                <p className="text-gray-500">AI that learns your taste and suggests outfits based on the weather and your calendar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
