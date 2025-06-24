// 환경 변수에서 카카오 API 키 가져오기
export const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;

// 전체 웨딩 이미지 개수
export const TOTAL_WEDDING_IMAGES = 24;

// 이미지 경로 상수
export const IMAGE_PATHS = {
  // 모든 이미지 경로를 src/assets/photos/ 폴더 기준으로 변경
  COVER: "/src/assets/photos/title_image.png",
  PARENTS1: "/src/assets/photos/parents_image1.png",
  CHILDREN1: "/src/assets/photos/children_image1.png",
  PARENTS_TEXT1: "/src/assets/photos/parents_text_image1.png",
  PARENTS2: "/src/assets/photos/parents_image2.png",
  CHILDREN2: "/src/assets/photos/children_image2.png",
  PARENTS_TEXT2: "/src/assets/photos/parents_text_image2.png",
  INVITATION: "/src/assets/photos/invitation_image.png",
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
  SPOQA_BOLD: "SpoqaHanSansNeo-Bold",
  SPOQA_LIGHT: "SpoqaHanSansNeo-Light",
  GOTHAM_BOLD: "Gotham-Bold",
  SD_MOVE_IT: "SD Move It",
};
