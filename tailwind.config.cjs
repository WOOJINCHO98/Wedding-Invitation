/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind CSS가 적용될 파일들을 여기에 명시해야 합니다.
  // 이 경로를 통해 Tailwind CSS는 어떤 클래스를 스캔하고 번들링할지 결정합니다.
  content: [
    "./index.html", // HTML 파일
    "./src/**/*.{js,ts,jsx,tsx}", // src 폴더 하위의 JS, TS, JSX, TSX 파일
  ],
  theme: {
    extend: {
      // 여기에 사용자 지정 색상, 폰트, 간격 등을 추가합니다.
      colors: {
        // 기본 배경색상을 'darkGreen'이라는 이름으로 정의합니다.
        darkGreen: "#131F05",
      },
      // 폰트 패밀리 정의 (선택 사항: 만약 특정 폰트 사용을 원한다면 추가)
      fontFamily: {
        // 'Inter' 폰트를 기본 sans-serif 폰트로 정의 (Tailwind 기본 폰트에 포함)
        sans: ["Inter", "sans-serif"],
        // 'serif' 폰트 정의 (예: Georgia, Times New Roman 등)
        serif: ["Georgia", "serif"],
      },
    },
  },
  // Tailwind CSS 플러그인을 여기에 추가합니다.
  plugins: [],
};
