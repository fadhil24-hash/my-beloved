export default function ImageModal({
  image,
  onClose,
}) {
  if (!image) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
        padding: "20px",
      }}
    >
      <img
        src={image}
        alt=""
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "95%",
          maxHeight: "95%",
          borderRadius: "20px",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.4)",
        }}
      />

      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          fontSize: "24px",
          border: "none",
          background: "transparent",
          color: "white",
          cursor: "pointer",
        }}
      >
        ✕
      </button>
    </div>
  );
}