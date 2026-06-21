import { useEffect, useRef, useState } from "react";

export default function MusicPlayer({
  activePage,
  entered,
}) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!entered) return;

    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();

    audio.src =
      activePage === "birthday"
        ? "/music/birthday.mp3"
        : "/music/anniv.mp3";

    audio.load();

    audio.volume = 0.5;

    audio.play().catch((err) => {
      console.log("Audio Error:", err);
    });
  }, [activePage, entered]);

  return (
    <>
      <audio
        ref={audioRef}
        loop
      />

      <button
        onClick={() => {
          const audio = audioRef.current;

          if (!audio) return;

          audio.muted = !muted;
          setMuted(!muted);
        }}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          zIndex: 9999,
        }}
      >
        {muted ? "🔇" : "🎵"}
      </button>
    </>
  );
}