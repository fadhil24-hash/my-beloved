import { useState } from "react";
import ImageModal from "./ImageModal";

export default function Gallery({ photos }) {
  const [selectedImage, setSelectedImage] =
    useState(null);

  const isMobile =
    window.innerWidth < 768;

  return (
    <>
      <div
        style={{
          columnCount: isMobile ? 2 : 3,
          columnGap: "15px",
          padding: "20px",
        }}
      >
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            loading="lazy"
            alt=""
            onClick={() =>
              setSelectedImage(photo)
            }
            style={{
              width: "100%",
              marginBottom: "15px",
              borderRadius: "20px",
              display: "block",
              breakInside: "avoid",
              cursor: "pointer",
              transition: "0.3s",
              boxShadow:
                "0 8px 25px rgba(0,0,0,0.08)",
            }}
          />
        ))}
      </div>

      <ImageModal
        image={selectedImage}
        onClose={() =>
          setSelectedImage(null)
        }
      />
    </>
  );
}