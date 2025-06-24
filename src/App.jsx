import React, { useState, useEffect } from "react";
import "./index.css";

// 커스텀 훅 임포트
import useAlert from "./hooks/useAlert.js";

// 섹션 컴포넌트 임포트
import CoverSection from "./components/sections/CoverSection.jsx";
import InvitationSection from "./components/sections/InvitationSection.jsx";
import GroomSection from "./components/sections/GroomSection.jsx";
import BrideSection from "./components/sections/BrideSection.jsx";
import LocationSection from "./components/sections/LocationSection.jsx";
import GallerySection from "./components/sections/GallerySection.jsx";
import AccountTransferSection from "./components/sections/AccountTransferSection.jsx";
import ThanksShareSection from "./components/sections/ThanksShareSection.jsx";

// 모달 컴포넌트 임포트 (갤러리 섹션에서 상태 관리)
import ImageModal from "./components/ImageModal.jsx";
// 새로운 QR 코드 모달 컴포넌트 임포트
import QrCodeModal from "./components/QrCodeModal.jsx";

// 상수 임포트
import { TOTAL_WEDDING_IMAGES, COLORS } from "./constants";

function App() {
  const { alertMsg, showAlert, alertMessage } = useAlert();

  // 갤러리 및 모달 관련 상태
  const [isImageModalOpen, setIsImageModalOpen] = useState(false); // Renamed for clarity
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // QR 코드 모달 관련 상태
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [currentQrImageSrc, setCurrentQrImageSrc] = useState("");

  // QR 코드 모달을 열고 이미지 경로를 설정하는 함수
  const handleShowQrCode = (qrIndex) => {
    // qr1.png ~ qr4.png 에 매핑
    const qrPath = `./qr${qrIndex}.png`;
    setCurrentQrImageSrc(qrPath);
    setIsQrModalOpen(true);
  };

  // 우클릭 방지
  useEffect(() => {
    document.oncontextmenu = function () {
      return false;
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-800 p-0 sm:p-4 font-inter">
      <div
        className="relative w-full max-w-md shadow-xl h-screen md:h-[100vh] overflow-y-auto scroll-snap-y-container hide-scrollbar"
        style={{ backgroundColor: COLORS.DARK_GREEN }}
      >
        {showAlert && (
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white px-6 py-3 rounded-lg shadow-xl z-50 transition-opacity duration-300">
            {alertMsg}
          </div>
        )}

        <CoverSection />
        <InvitationSection />
        <GroomSection />
        <BrideSection />
        <LocationSection alertMessage={alertMessage} />
        <GallerySection
          setCurrentImageIndex={setCurrentImageIndex}
          setIsModalOpen={setIsImageModalOpen}
        />
        <AccountTransferSection
          alertMessage={alertMessage}
          onShowQrCode={handleShowQrCode}
        />
        <ThanksShareSection alertMessage={alertMessage} />

        {isImageModalOpen && (
          <ImageModal
            isOpen={isImageModalOpen}
            onClose={() => setIsImageModalOpen(false)}
            currentIndex={currentImageIndex}
            totalImages={TOTAL_WEDDING_IMAGES}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        )}

        {isQrModalOpen && (
          <QrCodeModal
            isOpen={isQrModalOpen}
            onClose={() => setIsQrModalOpen(false)}
            qrCodeImageSrc={currentQrImageSrc}
          />
        )}
      </div>
    </div>
  );
}

export default App;
