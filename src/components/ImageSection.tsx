import React from "react";

interface ImageSectionProps {
  imageSrc: string;
  altText: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({ imageSrc, altText }) => {
  return (
    <div className="image-section">
      <img src={imageSrc} alt={altText} className="responsive-image" />
    </div>
  );
};

export default ImageSection;
