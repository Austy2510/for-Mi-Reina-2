import { motion } from "framer-motion";
import { CloudRain } from "lucide-react";

export default function RainWindow({ onClear }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, duration: 2 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-white z-10"
        >
            {/* Background Rain Animation (CSS based simple rain) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="rain-layer" />
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="z-20 text-center space-y-8 p-6"
            >
                <div className="flex justify-center mb-6">
                    <CloudRain size={64} className="text-slate-400 animate-pulse" />
                </div>

                <h1 className="text-3xl md:text-5xl font-light tracking-wide text-slate-300 font-serif">
                    "Kicchu bhalo lagtese na...?"
                </h1>

                <p className="text-slate-500 text-lg">
                    It's okay to feel gray sometimes.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClear}
                    className="mt-12 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/10 text-xl tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] group"
                >
                    <span className="group-hover:text-glow">Let the sun in</span>
                </motion.button>
            </motion.div>
        </motion.div>
    );
}
