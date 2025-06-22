import React from "react";
import HeartSvg from "../../assets/heart.svg";
import KakaoShareButton from "../KakaoShareButton.jsx";
import { FiLink } from "react-icons/fi";
import {
  KAKAO_API_KEY,
  IMAGE_PATHS,
  COLORS,
  FONT_FAMILIES,
  WEDDING_INFO,
} from "../../constants";
import { copyToClipboard } from "../../utils"; // copyToClipboard 유틸리티 임포트
import useInViewAnimation from "../../hooks/useInViewAnimation"; // 커스텀 훅 임포트

const ThanksShareSection = ({ alertMessage }) => {
  // 훅을 사용하여 ref와 isVisible 상태를 가져옵니다.
  // 이 섹션의 50%가 보일 때 애니메이션을 트리거합니다.
  const [thanksContentRef, isThanksContentVisible] = useInViewAnimation({
    threshold: 0.5,
  });

  const handleCopyWeddingLink = () => {
    copyToClipboard(
      window.location.href,
      "청첩장 링크가 클립보드에 복사되었습니다.",
      "청첩장 링크 복사에 실패했습니다.",
      alertMessage
    );
  };

  return (
    <section
      className="w-full flex flex-col items-center p-15 scroll-snap-align-start flex-shrink-0 text-white"
      style={{ backgroundColor: COLORS.DARK_GREEN }}
    >
      {/* Heart SVG와 제목을 감싸는 div에 ref와 애니메이션 클래스 적용 */}
      <div
        ref={thanksContentRef}
        className={`flex flex-col items-center ${
          isThanksContentVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <img src={HeartSvg} alt="Heart Icon" className="w-3 h-3 mt-10 mb-2" />
        <h2
          className="text-2xl font-bold mb-15 whitespace-nowrap"
          style={{ fontFamily: FONT_FAMILIES.SPOQA_BOLD }}
        >
          행복하게 잘 살겠습니다!
        </h2>
      </div>

      <div className="w-full h-full sm:w-80 sm:h-80 bg-white relative rounded-sm overflow-hidden p-12 mb-12">
        <img
          src={IMAGE_PATHS.INVITATION}
          alt="Wedding Couple Thanks"
          className="w-full h-full object-cover filter grayscale"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/400x400/cccccc/333333?text=Thank+You";
          }}
        />
      </div>

      <div className="flex flex-col space-y-4 w-full max-w-xs mb-15">
        <KakaoShareButton
          kakaoApiKey={KAKAO_API_KEY}
          title="염기준🩵조다예 결혼합니다"
          description="9월 7일 (일) 오후 12:30 더채플앳청담 3층, 커티지홀"
          imageUrl={"https://mobile-wedding-inv.netlify.app/meta_image2x2.png"}
          webUrl={window.location.href}
          mobileWebUrl={window.location.href}
          buttonTitle="청첩장 보러가기"
          alertMessage={alertMessage}
        />
        <button
          onClick={handleCopyWeddingLink}
          className="text-white py-3 rounded-lg border border-white/20 text-base flex items-center justify-center whitespace-nowrap"
          style={{ backgroundColor: COLORS.TRANSPARENT_BLACK }}
        >
          <FiLink className="w-5 h-5 mr-2 -scale-x-100" />
          청첩장 링크 복사하기
        </button>
      </div>
    </section>
  );
};

export default ThanksShareSection;
