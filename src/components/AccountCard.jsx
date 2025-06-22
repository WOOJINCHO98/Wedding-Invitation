import React from "react";
import KakaotalkSvg from "../assets/kakaotalk.svg"; // SVG 임포트
import { COLORS } from "../constants"; // 상수 임포트

// Function to check if the user is on a mobile device
const isMobile = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Regular expressions to match common mobile device user agents
  if (/android/i.test(userAgent)) {
    return true;
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return true;
  }
  if (/windows phone/i.test(userAgent)) {
    return true;
  }
  return false;
};

const AccountCard = ({ title, accounts, handleCopyAccount, onShowQrCode }) => {
  const handleTransfer = (account) => {
    if (isMobile()) {
      window.open(account.link, "_blank");
    } else {
      // PC 환경일 경우 QR 코드 모달을 띄우도록 요청
      if (onShowQrCode && account.qrIndex) {
        onShowQrCode(account.qrIndex);
      } else {
        console.log("PC 환경입니다. QR 코드를 표시할 수 없습니다.");
      }
    }
  };

  return (
    <div
      className="w-full max-w-md rounded-lg px-4 py-6 mb-3"
      style={{ backgroundColor: COLORS.LIGHT_GRAY }}
    >
      <h3 className="text-base mb-4 opacity-50 whitespace-nowrap">{title}</h3>
      <div className="space-y-4">
        {accounts.map((account, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <div className="flex flex-col">
              <p className="text-base font-semibold whitespace-nowrap">
                {account.name}
              </p>
              <p className="text-xs opacity-60 whitespace-nowrap">
                {account.bank} {account.number} {account.owner}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() =>
                  handleCopyAccount(
                    account.bank + " " + account.number + " " + account.owner
                  )
                }
                className="text-white px-3 py-2 rounded-md text-xs whitespace-nowrap"
                style={{ backgroundColor: COLORS.DARK_GREEN }}
              >
                복사
              </button>
              <button
                onClick={() => handleTransfer(account)}
                className="text-white px-2 py-2 rounded-md text-xs flex items-center whitespace-nowrap"
                style={{ backgroundColor: COLORS.DARK_GREEN }}
              >
                <img
                  src={KakaotalkSvg}
                  alt="KakaoTalk Icon"
                  className="w-4 h-4 mr-1"
                />
                송금
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountCard;
