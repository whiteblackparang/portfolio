export interface ContactLink {
  label: string;
  url: string;
  icon: "email" | "github" | "linkedin" | "tableau" | "blog";
}

export const aboutDescription =
  "데이터 속 의미를 찾아 비즈니스 언어로 번역하는 데이터 분석가";

export const contactLinks: ContactLink[] = [
  { label: "hun5639@naver.com", url: "mailto:hun5639@naver.com", icon: "email" },
  { label: "GitHub", url: "https://github.com/whiteblackparang", icon: "github" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/jonghunlee/", icon: "linkedin" },
  { label: "Tableau", url: "https://public.tableau.com/app/profile/jonghun.lee4755/vizzes", icon: "tableau" },
  { label: "Velog", url: "https://velog.io/@springtowinter/posts", icon: "blog" },
  { label: "Tistory", url: "https://springtowinter-data.tistory.com/", icon: "blog" },
  { label: "Naver Blog", url: "https://blog.naver.com/hopesdreamsforest", icon: "blog" },
];