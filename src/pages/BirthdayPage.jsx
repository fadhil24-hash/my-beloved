import Countdown from "../components/Countdown";
import Gallery from "../components/Gallery";

const birthdayPhotos = Array.from(
  { length: 158 },
  (_, i) =>
    `/birthday/${String(i + 1).padStart(3, "0")}.jpg`
);
export default function BirthdayPage() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "20px"
    }}>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "40px",
        color: "#D4AF37"
      }}>
        🎂
      </h2>

      <Countdown targetDate="2026-08-27" />

      <h3>For You...</h3>

      <p style={{ maxWidth: "300px" }}>
        A little countdown to the day the world became brighter.
      </p>
      <img
  src="/birthday-cover.jpg"
  alt="Agni"
  style={{
    width: "90%",
    maxWidth: "600px",
    borderRadius: "30px",
    marginTop: "40px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
     objectFit: "cover"
  }}
/>
<Gallery photos={birthdayPhotos} />
    </div>
  );
}