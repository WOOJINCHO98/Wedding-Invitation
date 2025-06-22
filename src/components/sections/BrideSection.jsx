import React from "react";
import { IMAGE_PATHS, COLORS, FONT_FAMILIES } from "../../constants";
import useInViewAnimation from "../../hooks/useInViewAnimation"; // 커스텀 훅 임포트
import BrideText1 from "../../assets/brideText1.svg";
import BrideText2 from "../../assets/brideText2.svg";

const BrideSection = () => {
  // 훅을 사용하여 ref와 isVisible 상태를 가져옵니다.
  // 이 텍스트 블록이 화면에 나타날 때 애니메이션을 트리거합니다.
  const [brideInfoRef, isBrideInfoVisible] = useInViewAnimation({
    threshold: 0.5, // 텍스트의 50%가 보일 때 애니메이션 실행
  });

  return (
    <section
      className="relative h-210 w-full overflow-hidden scroll-snap-align-start flex-shrink-0"
      style={{ backgroundColor: COLORS.DARK_GREEN }}
    >
      <img
        src={IMAGE_PATHS.PARENTS2}
        alt="Parents Main"
        className="absolute bottom-0 size-142 object-cover z-0"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/1080x1920/cccccc/333333?text=Main+Image";
        }}
      />

      <div className="absolute inset-0 z-20 px-8 py-15 flex flex-col">
        {/* 텍스트를 감싸는 div에 ref와 애니메이션 클래스를 적용합니다. */}
        {/* <div
          ref={brideInfoRef} // 훅에서 받은 ref를 연결합니다.
          className={`w-full text-right pt-12 ${
            isBrideInfoVisible ? "animate-fade-in-up" : "opacity-0" // isBrideInfoVisible 상태에 따라 클래스 적용
          }`}
          style={{ fontFamily: FONT_FAMILIES.SD_MOVE_IT, color: COLORS.PINK }}
        >
          <p className="whitespace-nowrap text-3xl sm:text-2xl font-medium mb-5">
            <span className="font-extrabold">조영욱 김승원</span>
            <span className="font-thin">의 딸</span>
          </p>
          <p className="font-thin whitespace-nowrap text-6xl sm:text-4xl">
            다예
          </p>
        </div> */}
        <div
          ref={brideInfoRef}
          className={`${
            isBrideInfoVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ fontFamily: FONT_FAMILIES.SD_MOVE_IT, color: COLORS.PINK }}
        >
          <img
            src={BrideText1}
            alt="Bride Text 1"
            className="absolute right-0 top-12 w-42"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/400x100/cccccc/333333?text=Bride+Text+1";
            }}
          />
          <img
            src={BrideText2}
            alt="Bride Text 2"
            className="absolute right-0 top-24 w-28"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/400x100/cccccc/333333?text=Bride+Text+2";
            }}
          />
        </div>

        <img
          src={IMAGE_PATHS.PARENTS_TEXT2}
          alt="Parents Message"
          className="absolute bottom-5 right-4 w-48 z-20"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/200x50/cccccc/333333?text=Handwriting+Text";
          }}
        />
        <img
          src={IMAGE_PATHS.CHILDREN2}
          alt="Child Image"
          className="absolute bottom-132 left-0 w-38 h-auto z-30"
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

export default BrideSection;
