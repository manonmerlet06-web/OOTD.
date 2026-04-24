import { motion } from "motion/react";

const items = [
  { id: 1, color: "bg-brand-pink", seed: "dress", url: "/image/dress.jpg" },
  { id: 2, color: "bg-brand-yellow", seed: "sneakers", url: "/image/sneakers.jpg" },
  { id: 3, color: "bg-brand-green", seed: "jacket", url: "/image/jacket.jpg" },
  { id: 4, color: "bg-brand-lavender", seed: "bag", url: "/image/bag.jpg" },
  { id: 5, color: "bg-brand-pink", seed: "hat", url: "/image/hat.jpg" },
  { id: 6, color: "bg-brand-yellow", seed: "jeans", url: "/image/jeans.jpg" },
];

export default function VisualConcept() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4"
          >
            Your closet, <span className="italic font-light">digitized.</span>
          </motion.h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Turn your wardrobe into a visual, interactive experience. Snap, upload, and see everything you own in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-3xl overflow-hidden ${item.color} p-2 shadow-lg cursor-pointer group w-full`}
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white/50">
                <img 
                  src={item.url} 
                  alt={item.seed}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 glass-card p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs font-bold uppercase tracking-widest">{item.seed}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
