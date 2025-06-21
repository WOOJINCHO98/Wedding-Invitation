import React from "react";
import Name1 from "../../assets/name1.svg";
import Name2 from "../../assets/name2.svg";
import {
  IMAGE_PATHS,
  COLORS,
  FONT_FAMILIES,
  WEDDING_INFO,
} from "../../constants";
import useInViewAnimation from "../../hooks/useInViewAnimation"; // 커스텀 훅 임포트

const CoverSection = () => {
  const [weddingInfoRef, isWeddingInfoVisible] = useInViewAnimation({
    threshold: 0.5,
  }); // 훅 사용

  return (
    <section className="relative w-full h-210 text-white overflow-hidden scroll-snap-align-start flex-shrink-0">
      <img
        src={IMAGE_PATHS.COVER}
        alt="Wedding Couple"
        className="absolute inset-0 w-full h-full object-cover z-0"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/1080x1920/667eea/ffffff?text=Image+Not+Found";
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 z-10"
        style={{
          backgroundImage: `linear-gradient(to top, ${COLORS.DARK_GREEN}, rgba(19, 31, 5, 0.6), transparent)`,
        }}
      ></div>
      <div className="absolute inset-0 z-20 flex flex-col justify-between py-10 px-8">
        <div className="w-full text-center">
          <p
            className="flex justify-between items-center text-base font-serif uppercase opacity-90 whitespace-nowrap"
            style={{ fontFamily: FONT_FAMILIES.GOTHAM_BOLD }}
          >
            <span>SAVE</span>
            <span>THE</span>
            <span>DATE</span>
          </p>
        </div>
        <div className="flex-grow flex flex-col items-center text-center">
          <img
            src={Name1}
            alt="Gijun"
            className="absolute left-14 top-25 w-28"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/150x50/cccccc/333333?text=Gijun";
            }}
          />
          <img
            src={Name2}
            alt="Daye"
            className="absolute right-14 top-52 w-28"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/150x50/cccccc/333333?text=Daye";
            }}
          />
        </div>
        <div
          ref={weddingInfoRef} // 훅에서 받은 ref 사용
          className={`w-full text-center ${
            isWeddingInfoVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-lg sm:text-xl font-medium mb-1 whitespace-nowrap">
            <span className="text-white">{WEDDING_INFO.DATE} </span>
            <span style={{ color: COLORS.PINK }}>{WEDDING_INFO.TIME}</span>
          </p>
          <p className="text-base sm:text-lg opacity-90 whitespace-nowrap">
            <span className="text-white">{WEDDING_INFO.VENUE_NAME} </span>
            <span style={{ color: COLORS.PINK }}>
              {WEDDING_INFO.VENUE_HALL}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoverSection;
