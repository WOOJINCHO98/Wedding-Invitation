import React, { useEffect } from "react";

const KakaoNaviButton = ({
  javascriptKey,
  name,
  x,
  y,
  coordType = "wgs84",
}) => {
  useEffect(() => {
    // 카카오 SDK 로드
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.5/kakao.min.js";
    script.integrity =
      "sha384-dok87au0gKqJdxs7msEdBPNnKSRT+/mhTVzq+qOhcL464zXwvcrpjeWvyj1kCdq6";
    script.crossOrigin = "anonymous";
    script.async = true;

    script.onload = () => {
      // SDK 로드 후 Kakao 객체가 전역에 사용 가능할 때 초기화
      if (window.Kakao) {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(javascriptKey);
          console.log("Kakao SDK initialized successfully.");
        }
      }
    };
    document.head.appendChild(script);

    return () => {
      // 컴포넌트 언마운트 시 스크립트 제거
      document.head.removeChild(script);
    };
  }, [javascriptKey]);

  const startNavigation = () => {
    if (window.Kakao && window.Kakao.Navi) {
      window.Kakao.Navi.start({
        name: name,
        x: x,
        y: y,
        coordType: coordType,
      });
    } else {
      console.warn(
        "카카오 내비 SDK가 로드되지 않았거나 초기화되지 않았습니다."
      );
    }
  };

  return (
    <>
      <button
        // onClick={startNavigation()}
        onClick={() => {
          startNavigation();
          console.log("카카오 내비게이션 시작");
        }}
        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-3 rounded-lg text-base text-xs transition duration-300 ease-in-out whitespace-nowrap"
      >
        카카오 내비
      </button>
    </>
  );
};

export default KakaoNaviButton;
