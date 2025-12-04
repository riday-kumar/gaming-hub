import { useState } from "react";
import ReactPlayer from "react-player";

export default function JoinCommunity() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full h-[400px]">
      {/* Background Image */}
      <img
        src="/banner.jpg"
        className="w-full h-full object-cover rounded-xl"
        alt="banner"
      />

      {/* Play Icon */}
      <button
        onClick={() => setOpen(true)}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="bg-white/20 backdrop-blur-md p-6 rounded-full shadow-lg hover:scale-110 transition">
          ▶
        </div>
      </button>

      {/* Video Popup */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-black p-4 rounded-xl relative">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              ✕
            </button>

            {/* YouTube Video */}
            <ReactPlayer
              url="https://youtu.be/bTCP1UErhRM?si=p7WlOwQJpmk-BPVv"
              playing={open}
              controls
            />
          </div>
        </div>
      )}
    </div>
  );
}
