import { useRef, useEffect, useState } from "react";

const useInViewAnimation = (
  options = { threshold: 0.5, triggerOnce: true }
) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // 한 번 애니메이션 실행 여부 추적

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (options.triggerOnce && !hasAnimated) {
              setIsVisible(true);
              setHasAnimated(true); // 애니메이션 실행됨
              observer.unobserve(entry.target); // 한 번 실행 후 관찰 중지
            } else if (!options.triggerOnce) {
              setIsVisible(true);
            }
          } else {
            if (!options.triggerOnce) {
              setIsVisible(false); // 뷰포트 밖으로 나가면 다시 숨김 (triggerOnce가 false일 때만)
            }
          }
        });
      },
      {
        threshold: options.threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // 컴포넌트 언마운트 시 옵저버 해제
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.triggerOnce, hasAnimated]); // 의존성 배열에 hasAnimated 추가

  return [ref, isVisible];
};

export default useInViewAnimation;
