import Countdown from "../components/Countdown";
import Gallery from "../components/Gallery";
const annivPhotos = Array.from(
  { length: 44 },
  (_, i) =>
    `/anniv/${String(i + 1).padStart(3, "0")}.jpeg`
);
export default function AnniversaryPage() {
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
        color: "#C08497"
      }}>
        ❤️
      </h2>

      <Countdown targetDate="2026-10-27" />

      <h3>For Us...</h3>

      <p style={{ maxWidth: "300px" }}>
        A countdown to another chapter of our story.
      </p>
   <img
  src="/anniv-cover.jpeg"
  alt="Us"
  style={{
    width: "90%",
    maxWidth: "600px",
    borderRadius: "30px",
    marginTop: "40px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
     objectFit: "cover"
  }}
/>
<Gallery photos={annivPhotos} />
    </div>
  );
}