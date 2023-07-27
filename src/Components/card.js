import React from "react";

const Card = ({ images }) => {
  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "umar_image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div className="card" key={image.id}>
          <img src={image.urls.regular} alt={image.alt_description} />
          <button onClick={() => handleDownload(image.links.download)}>
            Download
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
