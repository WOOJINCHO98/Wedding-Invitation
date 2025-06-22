import React, { useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const ImageModal = ({
  isOpen,
  onClose,
  currentIndex,
  totalImages,
  onPrev,
  onNext,
}) => {
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

  // 스와이프 핸들러 설정
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < totalImages - 1) {
        onNext();
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        onPrev();
      }
    },
    preventScrollOnSwipe: true, // 스와이프 시 스크롤 방지
    trackTouch: true,
    trackMouse: false, // 마우스 드래그는 스와이프로 인식하지 않도록
  });

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose} // 모달 외부 클릭 시 닫기
    >
      <div
        {...handlers} // useSwipeable 훅의 핸들러를 여기에 적용
        className="relative w-full h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 전파 중단
      >
        {/* 이미지 */}
        <img
          src={`./wedding_image${currentIndex + 1}.png`}
          alt={`Wedding Moment ${currentIndex + 1}`}
          className="w-[85%] max-h-[85%] object-contain mb-5" // 이미지 크기 조절
        />

        <div className="flex w-[85%] justify-between items-center">
          {/* 닫기 버튼 */}
          <button
            className="transform bg-gray-700/70 text-white rounded-full p-3 shadow-lg"
            onClick={onClose}
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
                onClick={onPrev}
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
            {currentIndex < totalImages - 1 ? (
              <button
                className="transform bg-gray-700/70 text-white rounded-full p-3 shadow-lg"
                onClick={onNext}
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
};

export default ImageModal;
