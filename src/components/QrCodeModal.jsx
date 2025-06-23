import React from "react";
import { COLORS } from "../constants";

const QrCodeModal = ({ onClose, qrCodeImageSrc }) => {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg p-6 shadow-xl max-w-sm w-full transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold rounded-full w-8 h-8 flex items-center justify-center"
          aria-label="Close"
        >
          &times;
        </button>
        <h3
          className="text-center text-xl font-semibold mb-4"
          style={{ color: COLORS.DARK_GREEN }}
        >
          QR 코드로 송금하기
        </h3>
        {qrCodeImageSrc ? (
          <div className="flex justify-center items-center">
            <img
              src={qrCodeImageSrc}
              alt="QR Code for Transfer"
              className="w-48 sm:w-64 rounded-md shadow-md"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/200x200/cccccc/333333?text=QR+Code+Not+Found";
              }}
            />
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-4">
            QR 코드를 불러오는 중입니다...
          </p>
        )}
        <p className="text-center text-sm text-gray-500 mt-4">
          모바일 기기에서 QR 코드를 스캔하여 송금할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default QrCodeModal;
