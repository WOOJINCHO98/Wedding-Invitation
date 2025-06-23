import React, { useEffect, memo, useRef } from "react";
import { TOTAL_WEDDING_IMAGES } from "../constants"; // 상수 임포트

const SWIPE_THRESHOLD = 50; // 스와이프 인식을 위한 최소 이동 거리 (px)

const ImageModal = memo(
  ({ isOpen, onClose, currentIndex, setCurrentImageIndex }) => {
    const touchStartX = useRef(0);

    // 모달이 열릴 때 body 스크롤을 막는 useEffect
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden"; // 모달이 열리면 스크롤을 숨김
      } else {
        document.body.style.overflow = "unset"; // 모달이 닫히면 스크롤을 다시 활성화
      }
      // 컴포넌트 언마운트 시 또는 모달이 닫힐 때 스크롤 복구
      return () => {
        document.body.style.overflow = "unset";
      };
    }, [isOpen]);

    // 이전 이미지로 이동
    const handlePrev = () => {
      if (currentIndex > 0) {
        setCurrentImageIndex(currentIndex - 1);
      }
    };

    // 다음 이미지로 이동
    const handleNext = () => {
      if (currentIndex < TOTAL_WEDDING_IMAGES - 1) {
        setCurrentImageIndex(currentIndex + 1);
      }
    };

    // 터치 시작 이벤트 핸들러
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    // 터치 종료 이벤트 핸들러 (스와이프 처리)
    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX;

      if (diff > SWIPE_THRESHOLD) {
        // 왼쪽으로 스와이프 (다음 이미지)
        handleNext();
      } else if (diff < -SWIPE_THRESHOLD) {
        // 오른쪽으로 스와이프 (이전 이미지)
        handlePrev();
      }
    };

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        onClick={onClose} // 모달 외부 클릭 시 닫기
      >
        <div
          className="relative w-full h-full flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 전파 중단
          onTouchStart={handleTouchStart} // 스와이프 시작
          onTouchEnd={handleTouchEnd} // 스와이프 종료
        >
          {/* 이미지 */}
          <div className="w-[85%] max-h-[85%] flex items-center justify-center mb-5">
            <img
              src={`/wedding_image${currentIndex + 1}.png`} // public 폴더의 이미지 경로
              alt={`결혼 이미지 ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain" // 이미지 크기 조절
            />
          </div>

          <div className="flex w-[85%] justify-between items-center px-4">
            {" "}
            {/* 버튼과 닫기 버튼 사이의 간격을 조절하기 위해 padding 추가 */}
            {/* 닫기 버튼 */}
            <button
              className="transform bg-gray-700/70 text-white rounded-full p-3 shadow-lg"
              onClick={onClose}
              aria-label="모달 닫기"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex items-center space-x-4">
              {/* 이전 버튼 */}
              {currentIndex > 0 ? (
                <button
                  className="transform bg-gray-700/70 text-white rounded-full p-3 shadow-lg"
                  onClick={handlePrev}
                  aria-label="이전 이미지"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              ) : (
                <div className="w-12 h-12" /> // 빈 공간 유지
              )}

              {/* 다음 버튼 */}
              {currentIndex < TOTAL_WEDDING_IMAGES - 1 ? (
                <button
                  className="transform bg-gray-700/70 text-white rounded-full p-3 shadow-lg"
                  onClick={handleNext}
                  aria-label="다음 이미지"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ) : (
                <div className="w-12 h-12" /> // 빈 공간 유지
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ImageModal;
