// src/data/about.ts
export interface ContactLink {
  label: string;
  url: string;
  icon: "email" | "github" | "linkedin" | "tableau";
}

export const aboutDescription =
  "데이터 속에서 의미를 찾고, 분석 결과를 비즈니스 언어로 바꾸는 것을 즐깁니다. Python · SQL · R을 활용해 데이터 수집부터 ML 모델링, ETL 파이프라인, 시각화까지 end-to-end 분석을 여러 프로젝트에 걸쳐 수행했습니다.";

export const contactLinks: ContactLink[] = [
  { label: "hun5639@naver.com", url: "mailto:hun5639@naver.com", icon: "email" },
  { label: "GitHub", url: "https://github.com/whiteblackparang", icon: "github" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/jonghunlee/", icon: "linkedin" },
  { label: "Tableau", url: "https://public.tableau.com/app/profile/jonghun.lee40755/vizzes", icon: "tableau" },
];