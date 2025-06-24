import React from "react";
import HeartSvg from "../../assets/heart.svg";
import AccountCard from "../AccountCard.jsx";
import { COLORS, FONT_FAMILIES } from "../../constants";
import { copyToClipboard } from "../../utils";
import useInViewAnimation from "../../hooks/useInViewAnimation"; // useInViewAnimation 훅 임포트

const AccountTransferSection = ({ alertMessage, onShowQrCode }) => {
  // 각 애니메이션 그룹에 별도의 훅 적용
  const [firstGroupRef, isFirstGroupVisible] = useInViewAnimation({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [secondGroupRef, isSecondGroupVisible] = useInViewAnimation({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [accountCardsRef, isAccountCardsVisible] = useInViewAnimation({
    threshold: 0.3,
    triggerOnce: true,
  });

  // 계좌 정보 복사 핸들러 (섹션 내부에서 관리)
  const handleCopyAccount = (accountInfo) => {
    copyToClipboard(
      accountInfo,
      "계좌 정보가 복사되었습니다.",
      "계좌 정보 복사에 실패했습니다.",
      alertMessage
    );
  };

  return (
    <section
      className="w-full flex flex-col items-center p-2 scroll-snap-align-start flex-shrink-0 text-white"
      style={{ backgroundColor: COLORS.DARK_GREEN }}
    >
      {/* 첫 번째 애니메이션 그룹: SVG와 "마음 전하실 곳" */}
      <div
        ref={firstGroupRef}
        className={`flex flex-col items-center mt-22 ${
          isFirstGroupVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <img src={HeartSvg} alt="Heart Icon" className="w-3 h-3 mb-2" />
        <h2
          className="text-2xl font-bold mb-4 whitespace-nowrap"
          style={{ fontFamily: FONT_FAMILIES.SD_MOVE_IT }}
        >
          마음 전하실 곳
        </h2>
      </div>

      {/* 두 번째 애니메이션 그룹: 설명 문구 */}
      <div
        ref={secondGroupRef}
        className={`text-center text-xs leading-relaxed tracking-tight opacity-0 mb-14 ${
          isSecondGroupVisible ? "animate-fade-in-up-delay" : "opacity-0"
        }`}
        style={{ fontFamily: FONT_FAMILIES.SPOQA_LIGHT }}
      >
        <p className="block">
          직접 축하를 전하지 못하는 분들을 위해 계좌번호를 기재합니다.
        </p>
        <p className="block">너른 마음으로 양해 부탁드립니다.</p>
      </div>

      {/* 계좌 카드 애니메이션 그룹 */}
      <div
        ref={accountCardsRef}
        className={`w-full flex flex-col items-center mt-10 ${
          isAccountCardsVisible ? "animate-fade-in-up-delay-1s" : "opacity-0" // 0.5초 지연 이후 추가 0.5초 지연
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
              link: "https://qr.kakaopay.com/FFyW9Mi4u",
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
              link: "https://qr.kakaopay.com/FCw0LAdwP",
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
