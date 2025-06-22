import React, { useRef, useEffect, useState } from "react";
import HeartSvg from "../../assets/heart.svg";
import AccountCard from "../AccountCard.jsx";
import { COLORS, FONT_FAMILIES } from "../../constants";
import { copyToClipboard } from "../../utils"; // copyToClipboard 유틸리티 임포트

// onShowQrCode prop을 추가
const AccountTransferSection = ({ alertMessage, onShowQrCode }) => {
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
        threshold: 0.3,
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

  // 계좌 정보 복사 핸들러 (섹션 내부에서 관리)
  const handleCopyAccount = (accountInfo) => {
    copyToClipboard(
      accountInfo,
      "계좌 정보가 복사되었습니다.",
      "계좌 정보 복사에 실패했습니다.",
      alertMessage
    );
  };

  const animatedElements = [
    {
      type: "img",
      className: "w-3 h-3 mt-16 mb-2",
      src: HeartSvg,
      alt: "Heart Icon",
    },
    {
      type: "h2",
      text: "마음 전하실 곳",
      className: "text-3xl font-bold mb-4 whitespace-nowrap",
      style: { fontFamily: FONT_FAMILIES.SPOQA_BOLD },
    },
    {
      type: "span",
      text: "직접 축하를 전하지 못하는 분들을 위해 계좌번호를 기재합니다.",
      className: "block",
    },
    {
      type: "span",
      text: "너른 마음으로 양해 부탁드립니다.",
      className: "block",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-center p-2 scroll-snap-align-start flex-shrink-0 text-white"
      style={{ backgroundColor: COLORS.DARK_GREEN }}
    >
      {animatedElements.map((item, index) => {
        const animationDelay = `${index * 0.3}s`;
        const commonClasses = `text-animation ${isVisible ? "is-visible" : ""}`;

        if (item.type === "img") {
          return (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className={`${item.className} ${commonClasses}`}
              style={{ animationDelay }}
            />
          );
        } else if (item.type === "h2") {
          return (
            <h2
              key={index}
              className={`${item.className} ${commonClasses}`}
              style={{ ...item.style, animationDelay }}
            >
              {item.text}
            </h2>
          );
        } else if (item.type === "span") {
          return (
            <p
              key={index}
              className="text-center text-xs leading-relaxed opacity-80 mb-0"
              style={{ fontFamily: FONT_FAMILIES.SPOQA_LIGHT }}
            >
              <span
                className={`${item.className} ${commonClasses}`}
                style={{ animationDelay }}
              >
                {item.text}
              </span>
            </p>
          );
        }
        return null;
      })}

      <div
        className={`w-full flex flex-col items-center mt-10 text-animation ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <AccountCard
          title="신랑측"
          accounts={[
            {
              name: "염승열, 이장미",
              bank: "농협은행",
              number: "302 1407947491",
              owner: "염승열",
              link: "https://qr.kakaopay.com/Ej9LyiG7a",
              qrIndex: 1,
            },
            {
              name: "염기준",
              bank: "케이뱅크",
              number: "100100681440",
              owner: "염기준",
              link: "https://qr.kakaopay.com/Ej7puNagp",
              qrIndex: 2,
            },
          ]}
          handleCopyAccount={handleCopyAccount}
          onShowQrCode={onShowQrCode}
        />

        <AccountCard
          title="신부측"
          accounts={[
            {
              name: "조영욱, 김승원",
              bank: "우리은행",
              number: "54903186202101",
              owner: "조영욱",
              link: "https://qr.kakaopay.com/Ej9LyiG7a",
              qrIndex: 3,
            },
            {
              name: "조다예",
              bank: "국민은행",
              number: "065902 04 266324",
              owner: "조다예",
              link: "https://qr.kakaopay.com/Ej9LyiG7a",
              qrIndex: 4,
            },
          ]}
          handleCopyAccount={handleCopyAccount}
          onShowQrCode={onShowQrCode}
        />
      </div>
    </section>
  );
};

export default AccountTransferSection;
