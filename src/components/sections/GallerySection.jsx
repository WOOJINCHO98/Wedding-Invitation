// src/components/sections/GallerySection.jsx

import React from "react";
import { TOTAL_WEDDING_IMAGES, COLORS } from "../../constants";

const GallerySection = ({ setCurrentImageIndex, setIsModalOpen }) => {
  return (
    <section
      className="w-full flex flex-col items-center scroll-snap-align-start flex-shrink-0"
      style={{
        backgroundImage: `linear-gradient(to bottom, #FFFFFF, ${COLORS.DARK_GREEN})`,
      }}
    >
      <div className="grid grid-cols-4 gap-0.5 w-full max-w-md">
        {[...Array(TOTAL_WEDDING_IMAGES)].map((_, index) => (
          <div
            key={index}
            className="w-full h-auto overflow-hidden cursor-pointer"
            onClick={() => {
              setCurrentImageIndex(index);
              setIsModalOpen(true);
            }}
          >
            <img
              src={`./wedding_image${index + 1}.jpg`}
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
