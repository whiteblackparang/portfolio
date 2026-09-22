// src/data/side-projects.ts
export interface SideProject {
  title: string;
  platform: string;
  desc: string;
  highlights: string[];
  metrics: string[];
  stack: string;
  github?: string;
  kaggle?: string;
}

export const sideProjects: SideProject[] = [
  {
    title: "Smartphone Addiction Prediction",
    platform: "Kaggle · Playground Series S6E8",
    desc: "스마트폰 사용 행동 데이터 기반 스마트폰 중독 여부(addicted_label) 예측. Kaggle 합성 데이터셋(train 691,369행 / test 296,302행) 기반 분석",
    highlights: [
      "EDA → 파생변수·Target Encoding → LR Baseline → LightGBM → SHAP 해석까지 4단계 파이프라인",
      "Stratified 5-Fold 기준 LightGBM 평균 ROC-AUC 0.963 (LR baseline 0.917 대비 개선)",
      "핵심 변수: daily_screen_time_hours, social_media_hours, weekend_screen_time",
    ],
    metrics: ["ROC-AUC 0.963", "LR 대비 +0.046"],
    stack: "Python · LightGBM · SHAP · scikit-learn",
    kaggle: "https://www.kaggle.com/competitions/playground-series-s6e8/data",
  },
];