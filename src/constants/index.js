// src/constants/index.js

// 환경 변수에서 카카오 API 키 가져오기
export const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;

// 전체 웨딩 이미지 개수
export const TOTAL_WEDDING_IMAGES = 24;

// 모든 이미지 파일들을 직접 임포트합니다.
// 이제 모든 이미지는 src/assets/photos/ 폴더에 있다고 가정합니다.
import CoverImage from "../assets/photos/title_image.png";
import ParentsImage1 from "../assets/photos/parents_image1.png";
import ChildrenImage1 from "../assets/photos/children_image1.png";
import ParentsTextImage1 from "../assets/photos/parents_text_image1.png";
import ParentsImage2 from "../assets/photos/parents_image2.png";
import ChildrenImage2 from "../assets/photos/children_image2.png";
import ParentsTextImage2 from "../assets/photos/parents_text_image2.png";
import InvitationImage from "../assets/photos/invitation_image.png";
import Name1 from "../assets/photos/name1.png";
import Name2 from "../assets/photos/name2.png";

const galleryContext = import.meta.glob("../assets/photos/wedding_image*.png", {
  eager: true,
});

export const GALLERY_IMAGES = Array.from(
  { length: TOTAL_WEDDING_IMAGES },
  (_, i) => {
    const imagePath = `../assets/photos/wedding_image${i + 1}.png`; // glob 경로에 맞춤
    // Vite의 glob import는 객체 형태로 반환하며, 각 값은 기본적으로 { default: 이미지URL } 형태입니다.
    return galleryContext[imagePath]?.default;
  }
).filter(Boolean); // 유효한 이미지만 필터링

export const IMAGE_PATHS = {
  COVER: CoverImage,
  PARENTS1: ParentsImage1,
  CHILDREN1: ChildrenImage1,
  PARENTS_TEXT1: ParentsTextImage1,
  PARENTS2: ParentsImage2,
  CHILDREN2: ChildrenImage2,
  PARENTS_TEXT2: ParentsTextImage2,
  INVITATION: InvitationImage,
  NAME1: Name1,
  NAME2: Name2,
};

// 외부 링크 URL 상수
export const EXTERNAL_URLS = {
  NAVER_MAP: "https://naver.me/x7nKr8o6",
  TMAP: "https://tmap.life/6addc19d",
};

// 결혼식 정보 상수
export const WEDDING_INFO = {
  DATE: "2025. 9. 7 일요일",
  TIME: "오후 12시 30분",
  VENUE_NAME: "더 채플 앳 청담",
  VENUE_HALL: "3층 커티지홀",
  ADDRESS: "서울 강남구 선릉로 757, 더채플앳청담 커티지홀",
  LAT: 37.5222098,
  LNG: 127.038892,
};

// 스타일 상수
export const COLORS = {
  DARK_GREEN: "#1F3C28",
  PINK: "#FB87B1",
  LIGHT_GRAY: "#7878801F", // 계좌 섹션 배경색
  TRANSPARENT_BLACK: "#FFFFFF08", // 링크 복사 버튼 배경색
};

export const FONT_FAMILIES = {
  SPOQA_BOLD: "Spoqa Han Sans Neo",
  SPOQA_LIGHT: "Spoqa Han Sans Neo",
  GOTHAM_BOLD: "Gotham-Bold",
  SD_MOVE_IT: "SD Move It",
};
