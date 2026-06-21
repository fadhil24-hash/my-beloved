import { useState } from "react";

const notes = [
  "I love you dede cayang",
  "Sering sering cerita mimpi sama hari hari kamu yaa hehehe",
  "Nanti kita ke tempat thailand itu barengg",
  "Semangat teruss hari ini yaaah",
  "Kaka sayang kamu banyak banyakk",
  "Jangan lupa mam banyak",
  "Kangenin kaka terus yah",
  "Kamu harus tau kalau hari spesial aku itu kalau ada kamu di dalamnya",
  "Hadiah terbaik aku Tahun ini, bisa terus sama kamu",
  "Nanti kita rayakan bareng bareng yah"
];

export default function LoveNotes() {
  const [message, setMessage] = useState("");

  const randomNote = () => {
    const random =
      notes[Math.floor(Math.random() * notes.length)];

    setMessage(random);
  };

  return (
    <>
      <button
        onClick={randomNote}
        style={{
          position: "fixed",
          bottom: "90px",
          right: "20px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          background: "#F4D6D6",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          zIndex: 9999,
        }}
      >
        💌
      </button>

      {message && (
        <div
          style={{
            position: "fixed",
            bottom: "160px",
            right: "20px",
            width: "260px",
            padding: "15px",
            borderRadius: "20px",
            background: "white",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            zIndex: 9999,
          }}
        >
          {message}
        </div>
      )}
    </>
  );
}