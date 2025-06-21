// src/components/InfoItem.jsx

import React from "react";
import { FONT_FAMILIES } from "../constants"; // 상수 임포트

const InfoItem = ({ label, content }) => (
  <div className="flex">
    <p
      style={{ fontFamily: FONT_FAMILIES.SPOQA_BOLD }}
      className="whitespace-nowrap w-13 flex-shrink-0 opacity-70"
    >
      {label}
    </p>
    <div className="leading-relaxed">{content}</div>
  </div>
);

export default InfoItem;
