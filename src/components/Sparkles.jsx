export default function Sparkles() {
  const sparkles = Array.from(
    { length: 20 },
    (_, i) => i
  );

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {sparkles.map((sparkle) => (
        <span
          key={sparkle}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${
              5 + Math.random() * 8
            }s infinite ease-in-out`,
            fontSize: `${
              10 + Math.random() * 12
            }px`,
            color: "#D4AF37",
            opacity: 0.4,
          }}
        >
          ✦ ✧ ⋆
        </span>
      ))}
    </div>
  );
}