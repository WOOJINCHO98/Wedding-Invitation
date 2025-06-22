import React, { useRef, useEffect, useState } from "react";
import { COLORS, FONT_FAMILIES } from "../../constants";

const InvitationSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const invitationLines = [
    "두 사람이 사랑과 믿음으로",
    "한 가정을 이루게 되었습니다.",
    "부디 그 시작의 자리에 함께하시어",
    "저희의 영원한 증인이 되어 주십시오.",
  ];

  return (
    <section
      ref={sectionRef}
      className="h-120 flex flex-col justify-center items-center text-white p-8 text-center scroll-snap-align-start flex-shrink-0"
      style={{ backgroundColor: COLORS.DARK_GREEN }}
    >
      <h2 className="text-2xl font-bold mb-10 whitespace-nowrap">
        저희의 결혼식에 초대합니다
      </h2>
      <p
        className="text-base leading-relaxed space-y-4 opacity-70"
        style={{ fontFamily: FONT_FAMILIES.SPOQA_LIGHT }}
      >
        {invitationLines.map((line, index) => (
          <span
            key={index}
            className={`block mb-2 whitespace-nowrap text-animation ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ animationDelay: `${index * 0.8}s` }}
          >
            {line}
          </span>
        ))}
      </p>
    </section>
  );
};

export default InvitationSection;
