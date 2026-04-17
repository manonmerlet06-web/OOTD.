import { motion } from "motion/react";
import { Download, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FDFCF8] pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand-black text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden mb-24">
           {/* Blobs */}
           <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl" />
           <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-brand-green/20 rounded-full blur-3xl" />

           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 relative z-10"
           >
             Ready to rethink <br /> your wardrobe?
           </motion.h2>
           
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-white text-brand-black px-12 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 mx-auto relative z-10 shadow-2xl"
           >
             Download OOTD <Download size={24} />
           </motion.button>
        </div>

        <div className="grid md:grid-cols-4 gap-12 border-t border-gray-200 pt-12">
          <div className="col-span-2">
            <h3 className="text-4xl font-black mb-4">OOTD.</h3>
            <p className="text-gray-500 max-w-xs">
              The smart digital wardrobe for the next generation of style icons.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-400">Company</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-brand-pink transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-400">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-black hover:text-white transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-black hover:text-white transition-all"><Twitter size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-black hover:text-white transition-all"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-24 text-center text-xs text-gray-400 uppercase tracking-widest">
          © 2026 OOTD Fashion Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
