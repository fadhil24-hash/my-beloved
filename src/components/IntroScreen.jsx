import { useEffect, useState } from "react";

export default function IntroScreen({ onEnter }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "20px",
      position: "relative",
      backgroundImage: "url('/sea.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      overflow: "hidden"
    }}>

      {/* overlay sunset layer */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.65))",
      }} />

      {/* content */}
      <div style={{
        position: "relative",
        color: "#fff",
        maxWidth: "380px",
        width: "100%",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0px)" : "translateY(12px)",
        transition: "all 1s ease"
      }}>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "44px",
          marginBottom: "12px",
          letterSpacing: "1px",
          fontWeight: "500"
        }}>
          For Agni
        </h1>

        <p style={{
          fontSize: "14px",
          lineHeight: "1.8",
          opacity: 0.9,
          marginBottom: "10px"
        }}>
          Every moment,<br />
          every memory,<br />
          every heartbeat.
        </p>

        <p style={{
          fontSize: "12px",
          opacity: 0.6,
          letterSpacing: "1px"
        }}>
          like a sunset over the sea 🌊
        </p>

        <button
          onClick={onEnter}
          style={{
            marginTop: "26px",
            padding: "12px 36px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.4)",
            background: "rgba(255,255,255,0.12)",
            color: "#fff",
            cursor: "pointer",
            backdropFilter: "blur(8px)",
            fontWeight: "500",
            letterSpacing: "1px",
            transition: "all 0.3s ease"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.background = "rgba(255,255,255,0.2)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.background = "rgba(255,255,255,0.12)";
          }}
        >
          Enter
        </button>

      </div>
    </div>
  );
}