// src/data/featured.ts
export interface FeaturedProject {
  num: string;
  title: string;
  desc: string;
  metrics: { label: string; positive?: boolean }[];
  github: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    num: "01 · 딥러닝 · 추천",
    title: "보드게임 추천 시스템 + 모델 경량화",
    desc: "PyTorch NCF로 추천 정확도를 높이고 2-bit 양자화로 모델 크기를 93% 줄인 경량화 연구 프로젝트",
    metrics: [
      { label: "RMSE ↓7.43%" },
      { label: "모델 크기 ↓93.4%", positive: true },
    ],
    github: "https://github.com/whiteblackparang/Project/tree/main/Game",
  },
  {
    num: "02 · 머신러닝 · A/B 테스트",
    title: "패션 커머스 개인화 추천 A/B 테스트",
    desc: "ALS 협업 필터링과 인기 추천을 결합한 Hybrid 모델로 Catalog Coverage를 109배 확장하고 실서비스로 배포",
    metrics: [
      { label: "Hit Rate 35.9%" },
      { label: "Coverage ×109", positive: true },
    ],
    github: "https://github.com/whiteblackparang/fashion-reco-ab-test",
  },
  {
    num: "03 · SQL + ML",
    title: "통신사 고객 이탈 분석 & ML 예측",
    desc: "SQL 탐색 분석으로 이탈 패턴을 발굴하고 SMOTE + Ensemble로 이탈 예측 모델을 구축한 end-to-end 프로젝트",
    metrics: [{ label: "AUC 0.8432" }, { label: "F1 0.5997", positive: true }],
    github: "https://github.com/whiteblackparang/SQL-Project",
  },
  {
    num: "04 · 데이터 분석 · 유통",
    title: "Project_Buldak: 글로벌 시장 수요 예측 및 소셜 분석",
    desc: "불닭볶음면의 글로벌 소셜 트렌드와 유통 데이터를 결합하여 재고 최적화 모델을 제안한 프로젝트입니다",
    metrics: [
      { label: "12-Step FE Workflow" },
      { label: "Accuracy 92%", positive: true },
    ],
    github: "https://github.com/whiteblackparang/Buldak-Global-Analysis",
  },
  {
    num: "05 · 머신러닝 · 시계열",
    title: "Mercedes-Benz: 럭셔리 세그먼트 EV 전략 분석",
    desc: "메르세데스-벤츠 고객 데이터를 시계열로 분석하여 럭셔리 전기차 시장의 이탈 방지 및 구매 패턴을 예측했습니다",
    metrics: [{ label: "Time Series" }, { label: "Recall 88%", positive: true }],
    github: "https://github.com/whiteblackparang/Mercedes-Benz-EV-Strategy",
  },
  {
    num: "06 · 데이터 분석 · 물류",
    title: "Instacart: MFC 슬로팅 및 피킹 동선 최적화",
    desc: "대용량 주문 데이터를 분석하여 물류 센터(MFC) 내 상품 배치 효율을 진단하고, 연관 규칙 기반의 최적 슬로팅 전략을 제안했습니다",
    metrics: [
      { label: "Association Rules" },
      { label: "Distance ↓60%", positive: true },
    ],
    github: "https://github.com/whiteblackparang/Instacart-MFC-Optimization",
  },
];