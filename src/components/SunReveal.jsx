import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight, ChevronLeft, Sun } from "lucide-react";
import { messages } from "../data/messages";

export default function SunReveal() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % messages.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + messages.length) % messages.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-slate-800"
        >
            {/* Sun Decoration */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-100px] right-[-100px] text-yellow-500/20 pointer-events-none"
            >
                <Sun size={400} />
            </motion.div>

            <div className="relative z-10 max-w-2xl w-full">
                <h2 className="text-center text-4xl font-bold text-white mb-12 drop-shadow-md">
                    For Progga
                </h2>

                <div className="relative glass-pane rounded-3xl p-12 min-h-[300px] flex items-center justify-center">
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 p-2 rounded-full hover:bg-white/40 transition-colors"
                    >
                        <ChevronLeft size={32} className="text-white" />
                    </button>

                    <motion.p
                        key={current}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-2xl md:text-3xl text-center font-medium text-white/90 leading-relaxed"
                    >
                        {messages[current].text}
                    </motion.p>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 p-2 rounded-full hover:bg-white/40 transition-colors"
                    >
                        <ChevronRight size={32} className="text-white" />
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-6">
                    {messages.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-2 w-2 rounded-full transition-all ${idx === current ? "bg-white w-6" : "bg-white/40"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
