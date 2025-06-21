import React, { useRef, useEffect, useState } from "react";

// Kakao Map API를 동적으로 로드하는 함수
const loadKakaoMapScript = (appKey) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false&libraries=services`;
    script.onload = () => {
      console.log("Kakao Map SDK loaded.");
      resolve();
    };
    script.onerror = () => {
      console.error("Failed to load Kakao Map SDK.");
      reject(new Error("Kakao Map SDK load failed."));
    };
    document.head.appendChild(script);
  });
};

const KakaoMap = ({ kakaoApiKey, lat, lng, level = 5 }) => {
  const mapRef = useRef(null);
  const [mapInitialized, setMapInitialized] = useState(false);

  useEffect(() => {
    const initializeMap = async () => {
      if (mapRef.current && !mapInitialized) {
        try {
          await loadKakaoMapScript(kakaoApiKey);

          window.kakao.maps.load(() => {
            if (window.kakao && window.kakao.maps) {
              console.log("Kakao Map API is ready.");
              const container = mapRef.current;
              const options = {
                center: new window.kakao.maps.LatLng(lat, lng),
                level: level,
              };
              // 지도 생성 시점을 늦춰서 렌더링 문제를 방지한다.
              setTimeout(() => {
                const map = new window.kakao.maps.Map(container, options);
                const markerPosition = new window.kakao.maps.LatLng(lat, lng);
                const marker = new window.kakao.maps.Marker({
                  position: markerPosition,
                });
                marker.setMap(map);
                console.log("Kakao Map initialized and marker added.");
              }, 1000);
              setMapInitialized(true);
            } else {
              console.warn(
                "Kakao Map API not fully loaded yet or window.kakao.maps is undefined."
              );
            }
          });
        } catch (error) {
          console.error("Error initializing Kakao Map:", error);
        }
      }
    };

    initializeMap();
  }, [kakaoApiKey, lat, lng, level, mapInitialized]);

  return (
    <div
      ref={mapRef}
      className="w-full h-64 sm:h-80 bg-gray-200 rounded-lg flex justify-center items-center text-gray-500 text-xl mb-2"
    >
      {!mapInitialized && "지도 로딩 중..."}
    </div>
  );
};

export default KakaoMap;
