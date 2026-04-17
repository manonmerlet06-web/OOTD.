import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const formUrl = "https://4b7e2a10.sibforms.com/serve/MUIFAB_xrCnLKV6aHjeEoQ4beZialYkB7nnCJ0uU97-naZlccmBiOkkRDuQtU0QIdSban7oeQFfObiAtmGzWaMI28uPP8teBN_rf4GBlb6w2FgkF72corctnPpCmzRmDWm3_Koq7NHwBzC13E45qmMPcEcrYFIukWYiCW26kmjDbjTBMvuyZBAGNUbkbrQJ1tnyO-pAYZQpVexF_DA==";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-6 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:top-8 md:bottom-8 md:w-full md:max-w-4xl bg-white rounded-[2.5rem] shadow-2xl z-[101] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="px-8 py-6 flex items-center justify-between border-b border-gray-100 bg-white shrink-0">
              <div>
                <h2 className="text-2xl font-black tracking-tighter">Join the Waitlist</h2>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Get early access to OOTD</p>
              </div>
              <button 
                onClick={onClose}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content / Iframe */}
            <div className="flex-1 w-full bg-[#FDFCF8] overflow-hidden relative">
              <iframe
                width="100%"
                height="100%"
                src={formUrl}
                frameBorder="0"
                scrolling="auto"
                allowFullScreen
                className="absolute inset-0"
                title="OOTD Waiting List Form"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
