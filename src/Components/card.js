import React from "react";

const Card = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div className="card">
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
          />
        </div>
      ))}
    </div>
  );
};

export default Card;
