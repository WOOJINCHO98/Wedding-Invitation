import React from "react";
import { IMAGE_PATHS, COLORS, FONT_FAMILIES } from "../../constants";
import useInViewAnimation from "../../hooks/useInViewAnimation"; // 커스텀 훅 임포트
import GroomText1 from "../../assets/groomText1.svg";
import GroomText2 from "../../assets/groomText2.svg";

const GroomSection = () => {
  const [groomInfoRef, isGroomInfoVisible] = useInViewAnimation({
    threshold: 0.5,
  }); // 훅 사용

  return (
    <section
      className="relative w-full flex flex-col items-center justify-start p-8 overflow-hidden scroll-snap-align-start flex-shrink-0"
      style={{
        background: `linear-gradient( WHITE 72.5%, ${COLORS.PINK} 98.5%)`,
      }}
    >
      <div className="w-full max-w-sm sm:max-w-md mx-auto relative h-full flex flex-col items-center">
        {/* <div
          ref={groomInfoRef} // 훅에서 받은 ref 사용
          className={`w-full text-left mb-8 mt-12 ${
            isGroomInfoVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{
            fontFamily: FONT_FAMILIES.SD_MOVE_IT,
            color: COLORS.DARK_GREEN,
          }}
        >
          <p className="whitespace-nowrap text-3xl sm:text-2xl font-medium mb-5">
            <span className="font-extrabold">염승열 이장미</span>
            <span className="font-thin">의 아들</span>
          </p>
          <p className="font-thin whitespace-nowrap text-6xl sm:text-4xl">
            기준
          </p>
        </div> */}

        <div className="relative w-full flex-grow">
          <div
            className="w-full h-38 mt-12 relative"
            style={{
              fontFamily: FONT_FAMILIES.SD_MOVE_IT,
              color: COLORS.DARK_GREEN,
            }}
          >
            <img
              src={GroomText1}
              alt="Groom Text 1"
              className="mb-3 w-46"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/200x50/cccccc/333333?text=Groom+Text+1";
              }}
            />
            <img
              src={GroomText2}
              alt="Groom Text 2"
              className="w-22"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/200x50/cccccc/333333?text=Groom+Text+2";
              }}
            />
          </div>
          <img
            src={IMAGE_PATHS.PARENTS1}
            alt="Parents Main"
            className="w-screen object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/300x400/cccccc/333333?text=Main+Image";
            }}
          />
          <div
            ref={groomInfoRef}
            className={`absolute top-34 right-0 transform translate-x-4 w-56 z-20
              ${isGroomInfoVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <img
              src={IMAGE_PATHS.PARENTS_TEXT1}
              alt="Parents Message"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/200x50/cccccc/333333?text=Handwriting+Text";
              }}
            />
          </div>
        </div>

        <img
          src={IMAGE_PATHS.CHILDREN1}
          alt="Child Image"
          className="absolute bottom-4 right-4 transform translate-y-1/3 w-24 h-auto z-30"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/100x100/cccccc/333333?text=Child";
          }}
        />
      </div>
    </section>
  );
};

export default GroomSection;
