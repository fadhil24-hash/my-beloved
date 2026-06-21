export default function Navbar({ activePage, setActivePage }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "16px",
        left: "0",
        right: "0",
        display: "flex",
        justifyContent: "center",
        zIndex: 9999,
        padding: "0 12px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "6px",
          padding: "6px",
          borderRadius: "999px",
          backdropFilter: "blur(15px)",
          background: "rgba(255,255,255,0.5)",
          border: "1px solid rgba(255,255,255,0.7)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          maxWidth: "100%",
        }}
      >
        <button
          onClick={() => setActivePage("birthday")}
          style={{
            border: "none",
            padding: "10px 16px",
            borderRadius: "999px",
            cursor: "pointer",
            fontSize: "14px",
            whiteSpace: "nowrap",
            background:
              activePage === "birthday"
                ? "#EAC7C7"
                : "transparent",
          }}
        >
          🎂 Birthday
        </button>

        <button
          onClick={() => setActivePage("anniv")}
          style={{
            border: "none",
            padding: "10px 16px",
            borderRadius: "999px",
            cursor: "pointer",
            fontSize: "14px",
            whiteSpace: "nowrap",
            background:
              activePage === "anniv"
                ? "#EAC7C7"
                : "transparent",
          }}
        >
          ❤️ Anniversary
        </button>
      </div>
    </div>
  );
}