import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import songFile from "../assets/tum-se-hi.mp3";

export default function AudioPlayer({ mood }) {
    const [muted, setMuted] = useState(false);
    const rainRef = useRef(null);
    const songRef = useRef(null);

    // Audio Sources
    const RAIN_URL = "https://assets.mixkit.co/active_storage/sfx/2496/2496-preview.mp3";
    const SONG_URL = songFile; // Imported asset

    useEffect(() => {
        if (mood === "gloomy") {
            if (songRef.current) {
                songRef.current.pause();
                songRef.current.currentTime = 0;
            }
            if (rainRef.current && !muted) {
                rainRef.current.volume = 0.5;
                rainRef.current.play().catch(e => console.log("Autoplay blocked:", e));
            }
        } else {
            // Sunshine mode
            if (rainRef.current) {
                // Fade out rain (simple version: just pause)
                rainRef.current.pause();
            }
            if (songRef.current && !muted) {
                songRef.current.volume = 0.8;
                songRef.current.play().catch(e => console.log("Autoplay blocked:", e));
            }
        }
    }, [mood, muted]);

    const toggleMute = () => {
        setMuted(!muted);
        if (!muted) {
            rainRef.current?.pause();
            songRef.current?.pause();
        } else {
            // Resuming based on current mood
            if (mood === "gloomy") rainRef.current?.play();
            else songRef.current?.play();
        }
    };

    return (
        <div className="fixed top-4 right-4 z-50">
            <button
                onClick={toggleMute}
                className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all shadow-lg"
            >
                {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>

            <audio ref={rainRef} src={RAIN_URL} loop />
            <audio ref={songRef} src={SONG_URL} loop />
        </div>
    );
}
