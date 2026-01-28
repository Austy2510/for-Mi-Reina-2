import { useState } from "react";
import AudioPlayer from "./components/AudioPlayer";
import RainWindow from "./components/RainWindow";
import SunReveal from "./components/SunReveal";
import { AnimatePresence } from "framer-motion";

function App() {
    const [mood, setMood] = useState("gloomy"); // 'gloomy' | 'sunshine'

    const handleReveal = () => {
        setMood("sunshine");
    };

    return (
        <div className={`relative min-h-screen w-full overflow-hidden transition-colors duration-1000 ${mood === "gloomy" ? "bg-slate-900" : "bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400"
            }`}>
            <AudioPlayer mood={mood} />

            <AnimatePresence mode="wait">
                {mood === "gloomy" ? (
                    <RainWindow key="rain" onClear={handleReveal} />
                ) : (
                    <SunReveal key="sun" />
                )}
            </AnimatePresence>

            <div className="absolute bottom-4 w-full text-center text-white/40 text-sm z-50 pointer-events-none">
                Made with ❤️ for Progga
            </div>
        </div>
    );
}

export default App;
