export default function IntroScreen({ onEnter }) {
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
    }}>
      
      {/* overlay biar teks kebaca */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
      }} />

      {/* content */}
      <div style={{
        position: "relative",
        color: "#fff",
        maxWidth: "360px",
        width: "100%",
      }}>
        
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "42px",
          marginBottom: "10px",
          letterSpacing: "1px"
        }}>
          For Agni
        </h1>

        <p style={{
          fontSize: "14px",
          lineHeight: "1.6",
          opacity: 0.9
        }}>
          Every moment,<br />
          every memory,<br />
          every heartbeat.
        </p>

        <button
          onClick={onEnter}
          style={{
            marginTop: "24px",
            padding: "12px 34px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.7)",
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            cursor: "pointer",
            backdropFilter: "blur(6px)",
            fontWeight: "500"
          }}
        >
          Enter
        </button>
      </div>
    </div>
  );
}