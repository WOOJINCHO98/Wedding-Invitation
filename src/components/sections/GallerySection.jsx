import React from "react";
import { TOTAL_WEDDING_IMAGES, COLORS, GALLERY_IMAGES } from "../../constants";

const GallerySection = ({ setCurrentImageIndex, setIsModalOpen }) => {
  return (
    <section
      className="w-full flex flex-col items-center scroll-snap-align-start flex-shrink-0"
      style={{
        backgroundImage: `linear-gradient(to bottom, #FFFFFF, ${COLORS.DARK_GREEN})`,
      }}
    >
      <div className="grid grid-cols-4 gap-0.5 w-full max-w-md">
        {GALLERY_IMAGES.map((imageSrc, index) => (
          <div
            key={index}
            className="w-full h-auto overflow-hidden cursor-pointer"
            onClick={() => {
              setCurrentImageIndex(index);
              setIsModalOpen(true);
            }}
          >
            <img
              src={imageSrc} // 임포트된 이미지 URL 사용
              alt={`Wedding Moment ${index + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/300x400/cccccc/333333?text=Image+${
                  index + 1
                }`;
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
