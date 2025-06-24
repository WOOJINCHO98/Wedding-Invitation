import React from "react";
import { COLORS, FONT_FAMILIES } from "../../constants";
import useInViewAnimation from "../../hooks/useInViewAnimation"; // useInViewAnimation 훅 임포트

const InvitationSection = () => {
  const [h2Ref, isH2Visible] = useInViewAnimation({
    threshold: 0.5,
  });
  const [pRef, isPVisible] = useInViewAnimation({
    threshold: 0.5,
  });

  const invitationLines = [
    "두 사람이 사랑과 믿음으로",
    "한 가정을 이루게 되었습니다.",
    "부디 그 시작의 자리에 함께하시어",
    "저희의 영원한 증인이 되어 주십시오.",
  ];

  return (
    <section
      className="h-170 flex flex-col justify-center items-center text-white p-8 text-center scroll-snap-align-start flex-shrink-0"
      style={{ backgroundColor: COLORS.DARK_GREEN }}
    >
      <h2
        ref={h2Ref}
        className={`text-2xl font-bold mb-10 whitespace-nowrap ${
          isH2Visible ? "animate-fade-in-up" : "opacity-0" // isVisible 상태에 따라 애니메이션 적용
        }`}
      >
        저희의 결혼식에 초대합니다
      </h2>
      <p
        ref={pRef}
        className={`text-base leading-relaxed space-y-4 opacity-0 ${
          isPVisible ? "animate-fade-in-up-delay" : "opacity-0" // isVisible 상태에 따라 애니메이션 적용
        }`}
        style={{ fontFamily: FONT_FAMILIES.SPOQA_LIGHT }}
      >
        {invitationLines.map((line, index) => (
          <span
            key={index}
            className="block mb-2 whitespace-nowrap tracking-tight"
          >
            {line}
          </span>
        ))}
      </p>
    </section>
  );
};

export default InvitationSection;
