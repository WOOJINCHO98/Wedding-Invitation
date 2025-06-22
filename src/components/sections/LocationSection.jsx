import React, { Fragment } from "react";
import HeartSvg from "../../assets/heart.svg";
import KakaoNaviButton from "../KakaoNaviButton.jsx";
import KakaoMap from "../KakaoMap.jsx";
import InfoItem from "../InfoItem.jsx";
import {
  KAKAO_API_KEY,
  WEDDING_INFO,
  EXTERNAL_URLS,
  COLORS,
  FONT_FAMILIES,
} from "../../constants";
import { copyToClipboard } from "../../utils";

const LocationSection = ({ alertMessage }) => {
  const handleCopyAddress = () => {
    copyToClipboard(
      WEDDING_INFO.ADDRESS,
      "주소가 복사되었습니다.",
      "주소 복사에 실패했습니다.",
      alertMessage
    );
  };

  return (
    <section
      className="w-full max-w-md flex flex-col items-center bg-white"
      style={{ color: COLORS.DARK_GREEN }}
    >
      <img src={HeartSvg} alt="Heart Icon" className="w-3 h-3 mt-24 mb-2" />
      <p className="text-base font-medium whitespace-nowrap">
        <span className="text-black">{WEDDING_INFO.DATE} </span>
        <span style={{ color: COLORS.PINK }}>{WEDDING_INFO.TIME}</span>
      </p>
      <p
        className="text-2xl font-semibold mb-4 whitespace-nowrap"
        style={{ fontFamily: FONT_FAMILIES.SD_MOVE_IT }}
      >
        <span className="text-black">
          {WEDDING_INFO.ADDRESS.split(",")[0]},{" "}
        </span>
        <span style={{ color: COLORS.PINK }}>
          {WEDDING_INFO.VENUE_NAME.replace("더 채플 앳 청담", "더채플앳청담")}{" "}
          {WEDDING_INFO.VENUE_HALL}
        </span>
      </p>
      <button
        onClick={handleCopyAddress}
        style={{ fontFamily: FONT_FAMILIES.SPOQA_BOLD }}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg text-xs mb-12 transition duration-300 ease-in-out whitespace-nowrap"
      >
        주소 복사하기
      </button>

      <KakaoMap
        kakaoApiKey={KAKAO_API_KEY}
        lat={WEDDING_INFO.LAT}
        lng={WEDDING_INFO.LNG}
      />

      <div
        style={{ fontFamily: FONT_FAMILIES.SPOQA_BOLD }}
        className="flex justify-center space-x-2 mb-8 py-2 px-7 w-full max-w-md"
      >
        <button
          onClick={() => window.open(EXTERNAL_URLS.NAVER_MAP, "_blank")}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-3 rounded-lg text-xs transition duration-300 ease-in-out whitespace-nowrap"
        >
          네이버 지도
        </button>
        <KakaoNaviButton
          javascriptKey={KAKAO_API_KEY}
          name={WEDDING_INFO.VENUE_NAME}
          x={WEDDING_INFO.LNG}
          y={WEDDING_INFO.LAT}
          coordType="wgs84"
        />
        <button
          onClick={() => window.open(EXTERNAL_URLS.TMAP, "_blank")}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-3 rounded-lg text-xs transition duration-300 ease-in-out whitespace-nowrap"
        >
          티맵
        </button>
      </div>
      <div className="h-70 flex justify-center items-center font-inter">
        <div className="w-full max-w-md text-left space-y-3 mb-8 text-[11px] sm:text-[10px] leading-relaxed">
          <InfoItem label="주소" content={WEDDING_INFO.ADDRESS} />
          <InfoItem
            label="지하철"
            content={
              <Fragment>
                <p className="whitespace-nowrap">
                  (7호선, 분당선) 강남구청역 3-1번 출구, 좌측 도보 570m
                </p>
                <p className="whitespace-nowrap">
                  (분당선) 압구정로데오역 5번 출구, 도보 450m
                </p>
              </Fragment>
            }
          />
          <InfoItem
            label="셔틀버스"
            content="(7호선, 분당선) 강남구청역 3번 출구 앞. 10분 간격"
          />
          <InfoItem
            label="버스"
            content={
              <Fragment>
                <p className="whitespace-nowrap">
                  간선 301, 342, 472 | 지선 3011, 4312
                </p>
                <p className="whitespace-nowrap">
                  영동고교 앞 하차 후 학동사거리 방향 100m
                </p>
              </Fragment>
            }
          />
          <InfoItem
            label="주차"
            content={
              <Fragment>
                <p className="whitespace-nowrap">
                  내부 주차장 90분 | 외부주차장 150분 무료주차
                </p>
                <p className="whitespace-nowrap opacity-60">
                  교통 및 주차가 혼잡할 수 있어 가급적 대중교통을 이용 바랍니다.
                </p>
              </Fragment>
            }
          />
        </div>
      </div>
      <p className="mb-30 text-[11px] opacity-80 whitespace-nowrap">
        화환은 정중히 사양합니다. 마음만 감사히 받겠습니다.
      </p>
    </section>
  );
};

export default LocationSection;
