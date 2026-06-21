export default function Navbar({
  activePage,
  setActivePage,
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        backdropFilter: "blur(15px)",
        background: "rgba(255,255,255,0.5)",
        border: "1px solid rgba(255,255,255,0.7)",
        padding: "8px",
        borderRadius: "999px",
        zIndex: 9999,
        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
      }}
    >
      <button
        onClick={() => setActivePage("birthday")}
        style={{
          border: "none",
          padding: "12px 20px",
          borderRadius: "999px",
          cursor: "pointer",
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
          padding: "12px 20px",
          borderRadius: "999px",
          cursor: "pointer",
          background:
            activePage === "anniv"
              ? "#EAC7C7"
              : "transparent",
        }}
      >
        ❤️ Anniversary
      </button>
    </div>
  );
}