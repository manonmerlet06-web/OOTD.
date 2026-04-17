import { motion } from "motion/react";
import { Download, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FDFCF8] py-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 pt-12">
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
