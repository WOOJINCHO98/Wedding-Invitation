import React, { useEffect } from "react";
import { SiKakaotalk } from "react-icons/si";

// Kakao Share API를 동적으로 로드하고 초기화하는 함수
const loadKakaoShareScript = (appKey) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "//developers.kakao.com/sdk/js/kakao.js";
    script.onload = () => {
      console.log("Kakao Share SDK loaded.");
      if (window.Kakao.isInitialized()) {
        console.log("Kakao SDK already initialized.");
        resolve();
      } else {
        window.Kakao.init(appKey);
        console.log("Kakao SDK initialized for Share.");
        resolve();
      }
    };
    script.onerror = () => {
      console.error("Failed to load Kakao Share SDK.");
      reject(new Error("Kakao Share SDK load failed."));
    };
    document.head.appendChild(script);
  });
};

const KakaoShareButton = ({
  kakaoApiKey,
  title,
  description,
  imageUrl,
  webUrl,
  mobileWebUrl,
  buttonTitle,
  alertMessage,
}) => {
  useEffect(() => {
    loadKakaoShareScript(kakaoApiKey)
      .then(() => {
        console.log("Kakao Share SDK is ready for use.");
      })
      .catch((error) => {
        console.error("Failed to prepare Kakao Share:", error);
      });
  }, [kakaoApiKey]);

  const handleKakaoShare = () => {
    if (window.Kakao && window.Kakao.Share) {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: title,
          description: description,
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: mobileWebUrl,
            webUrl: webUrl,
          },
        },
        buttons: [
          {
            title: buttonTitle,
            link: {
              mobileWebUrl: mobileWebUrl,
              webUrl: webUrl,
            },
          },
        ],
      });
    } else {
      if (alertMessage) {
        alertMessage(
          "카카오톡 공유 기능을 사용할 수 없습니다. 잠시 후 다시 시도해주세요."
        );
      }
      console.error("Kakao Share SDK is not ready.");
    }
  };

  return (
    <button
      onClick={handleKakaoShare}
      className="text-white py-3 rounded-lg border-1 border-white/20 text-base flex items-center justify-center whitespace-nowrap"
      style={{ backgroundColor: "#FFFFFF08" }}
    >
      <SiKakaotalk className="w-5 h-5 mr-2" />
      카카오톡 공유하기
    </button>
  );
};

export default KakaoShareButton;
