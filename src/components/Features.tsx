import { motion } from "motion/react";
import { Camera, Sparkles, Heart, ShoppingBag } from "lucide-react";
import { useWaitlist } from "../context/WaitlistContext";

const features = [
  {
    title: "Upload",
    desc: "Snap your clothes. Build your digital closet.",
    icon: <Camera size={32} />,
    color: "bg-brand-yellow",
    delay: 0
  },
  {
    title: "Style",
    desc: "Get AI-powered outfit suggestions instantly.",
    icon: <Sparkles size={32} />,
    color: "bg-brand-pink",
    delay: 0.1
  },
  {
    title: "Inspire",
    desc: "Save looks and build your style universe.",
    icon: <Heart size={32} />,
    color: "bg-brand-lavender",
    delay: 0.2
  },
  {
    title: "Shop",
    desc: "Discover pieces that match your wardrobe.",
    icon: <ShoppingBag size={32} />,
    color: "bg-brand-green",
    delay: 0.3
  }
];

export default function Features() {
  const { open } = useWaitlist();
  return (
    <section className="py-24 px-6 bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: f.delay }}
            whileHover={{ scale: 1.02 }}
            onClick={open}
            className={`${f.color} p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-between min-h-[320px] relative overflow-hidden group cursor-pointer`}
          >
            <div className="z-10">
              <div className="bg-white/90 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {f.icon}
              </div>
              <h3 className="text-3xl font-extrabold mb-2">{f.title}</h3>
              <p className="text-brand-black/70 font-medium leading-tight">{f.desc}</p>
            </div>
            
            {/* Decorative Mini UI */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            
            <div className="mt-8 flex justify-end z-10">
              <div className="w-12 h-12 rounded-full bg-brand-black text-white flex items-center justify-center group-hover:translate-x-2 transition-transform">
                <Sparkles size={18} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
