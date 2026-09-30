export type ProjectCategory =
  | "ml"
  | "dl"
  | "nlp"
  | "ts"
  | "product"
  | "sql";

export type Role = "da" | "ds" | "pm" | "mle";

export const roles: Role[] = ["da", "ds", "pm", "mle"];

export const roleLabels: Record<Role, string> = {
  da: "Data Analyst",
  ds: "Data Scientist",
  pm: "기획자",
  mle: "ML Engineer",
};

export interface Project {
  title: string;
  category: ProjectCategory;
  sub: string;
  desc: string;
  highlights: string[];
  metrics: string[];
  stack: string;
  github: string;
  roles?: Role[];
}

export const categoryLabels: Record<ProjectCategory, string> = {
  ml: "ML",
  dl: "DL",
  nlp: "NLP",
  ts: "TS",
  product: "PRODUCT",
  sql: "SQL",
};

export const categoryColors: Record<ProjectCategory, string> = {
  ml: "#6382ff",
  dl: "#a78bfa",
  nlp: "#34d399",
  ts: "#38bdf8",
  product: "#f472b6",
  sql: "#fbbf24",
};

const defaultRolesByCategory: Record<ProjectCategory, Role[]> = {
  ml: ["ds"],
  dl: ["ds", "mle"],
  nlp: ["ds"],
  ts: ["ds"],
  product: ["pm", "da"],
  sql: ["da"],
};

export function getRoles(p: Project): Role[] {
  return p.roles ?? defaultRolesByCategory[p.category];
}

export const projects: Project[] = [
 {
    title: "광고 클릭 예측",
    category: "ml",
    sub: "이진 분류 · 1,000건",
    desc: "사용자 행동 데이터 기반 광고 클릭 여부 예측 모델 개발",
    highlights: [
      "7개 모델 비교 → Random Forest 최종 선정",
      "9개 파생변수, GridSearchCV 540개 조합 탐색",
      "40세+ & 저체류시간 고객 CTR 98.4% 세그먼트 발굴",
    ],
    metrics: ["Accuracy 96.5%", "AUC 0.993"],
    stack: "Python · scikit-learn · pandas",
    github: "https://github.com/whiteblackparang/Project/tree/main/Ad",
  },

  {
    title: "이커머스 고객 이탈 예측",
    category: "ml",
    sub: "이진 분류 · SQL 리스크 플래그",
    desc: "SQL 집계로 리스크 플래그 파생변수 생성 후 ML 이탈 예측 모델 개발",
    highlights: [
      "SQL로 is_inactive, has_complaint, is_new 등 파생변수 생성",
      "LR vs Random Forest → RF 최종 선정",
      "Low / Medium / High Risk 3단계 세분화",
    ],
    metrics: ["AUC 0.958"],
    stack: "Python · scikit-learn · SQL",
    github:
      "https://github.com/whiteblackparang/Project2/tree/main/churn-prediction",
  },

  {
    title: "물류 배송 지연 예측",
    category: "ml",
    sub: "이진 분류 · 스마트 물류 데이터",
    desc: "스마트 물류 데이터 기반 배송 지연 여부 예측 이진 분류 모델 개발",
    highlights: [
      "LR / RF / XGBoost 비교 → XGBoost 최종 선정",
      "Traffic_Status 핵심 변수 (중요도 57.2%)",
    ],
    metrics: ["AUC 0.810"],
    stack: "Python · scikit-learn · XGBoost",
    github:
      "https://github.com/whiteblackparang/Project/tree/main/Supply_Chain",
  },

  {
    title: "전국 음식점 소비 트렌드",
    category: "ml",
    sub: "RFM + K-Means · 326,826건",
    desc: "공공데이터 기반 전국 음식점 소비 트렌드 분석 및 지역 유형화",
    highlights: [
      "포화형 소도시 vs 성장형 대도시 2개 클러스터 도출",
      "LTV 추정 및 투자 우선순위 (경기도 화성시 1위)",
    ],
    metrics: ["Silhouette 0.595"],
    stack: "Python · scikit-learn · pandas",
    github:
      "https://github.com/whiteblackparang/Project/tree/main/Restaurant%20Consumption%20Trends%20Analysis",
  },

  {
    title: "이커머스 SKU 수익성 최적화",
    category: "ml",
    sub: "K-Means · 148,012건 · 인도 Amazon",
    desc: "Amazon·국제 판매 데이터 분석으로 SKU 수준 수익성 전략 도출",
    highlights: [
      "상위 3% SKU(211개)가 29% 매출 창출",
      "K-Means SKU 세분화 (Silhouette 0.7624)",
    ],
    metrics: ["Silhouette 0.7624"],
    stack: "Python · scikit-learn · pandas",
    github:
      "https://github.com/whiteblackparang/Project/tree/main/eCommerce",
  },

  {
    title: "크로스 플랫폼 음악 성과 분석",
    category: "ml",
    sub: "Spotify × YouTube · 20,000+ 트랙 · MLflow",
    desc: "Spotify와 YouTube 통합 분석으로 히트곡 예측 모델 및 전략 수립",
    highlights: [
      "스트림 수 예측 R² 0.847, 히트곡 분류 Accuracy 92.3%",
      "공식 MV ROI: 평균 스트림 +43.7%",
      "MLflow 기반 실험 관리 시스템 구축",
    ],
    metrics: ["R² 0.847", "Accuracy 92.3%"],
    stack: "Python · scikit-learn · MLflow · Streamlit",
    github: "https://github.com/whiteblackparang/SpotifyYoutubeML",
  },

  {
    title: "패션 커머스 개인화 추천 A/B 테스트",
    category: "ml",
    sub: "ALS + Hybrid · H&M · FastAPI + React 배포",
    desc: "H&M 데이터셋 기반 개인화 추천 모델 A/B 실험",
    highlights: [
      "Hybrid α=0.1 채택: Hit Rate 동등 + Catalog Coverage 109배",
      "FastAPI 백엔드 + React 프론트 실서비스 배포",
    ],
    metrics: ["Hit Rate 35.9%", "Coverage ×109"],
    stack: "Python · implicit(ALS) · FastAPI · React",
    github:
      "https://github.com/whiteblackparang/fashion-reco-ab-test",
  },

  {
    title: "보드게임 추천 시스템 + 모델 경량화",
    category: "dl",
    sub: "NCF · 1,894만 평점 레코드",
    desc: "딥러닝 추천 시스템 구축 및 2-bit 양자화 모델 경량화 연구",
    highlights: [
      "PyTorch NCF RMSE 7.43% 개선 (1.1960 → 1.1071)",
      "2-bit 양자화 모델 크기 93.4% 감소 (25.97MB → 1.72MB)",
    ],
    metrics: ["RMSE ↓7.43%", "모델 ↓93.4%"],
    stack: "Python · PyTorch · scikit-learn",
    github: "https://github.com/whiteblackparang/Project/tree/main/Game",
  },

  {
    title: "패션 이미지 추천 시스템",
    category: "dl",
    sub: "ResNet50 · TF vs PyTorch · 861장",
    desc: "ResNet50 기반 패션 이미지 임베딩 추천 시스템 및 프레임워크 비교",
    highlights: [
      "2,048차원 임베딩, TF가 PyTorch 대비 48% 빠름",
      "동일 아키텍처라도 프레임워크별 완전히 다른 특성 공간 확인",
    ],
    metrics: ["TF 48% 빠름"],
    stack: "Python · TensorFlow · PyTorch · Streamlit",
    github:
      "https://github.com/whiteblackparang/Project/tree/main/fashion-recommendation",
  },

  {
    title: "Netflix 콘텐츠 분석 & 추천",
    category: "nlp",
    sub: "TF-IDF + NetworkX · 8,807개",
    desc: "Netflix 콘텐츠 트렌드 분석 및 TF-IDF 기반 추천 시스템 + 협업 네트워크",
    highlights: [
      "배우-감독 협업 네트워크 Degree/Betweenness Centrality 분석",
      "TF-IDF + 코사인 유사도, 동일 장르 매칭 80%+",
    ],
    metrics: ["장르 매칭 80%+"],
    stack: "Python · scikit-learn · NetworkX",
    github: "https://github.com/whiteblackparang/Project/tree/main/Netflix",
  },

  {
    title: "한국 영화 리뷰 감성 분류",
    category: "nlp",
    sub: "TF-IDF + Logistic Regression",
    desc: "한국 영화 리뷰 텍스트 기반 긍정/부정 감성 분류 Baseline 모델",
    highlights: [
      "TF-IDF + LR → Validation Accuracy 0.84",
      "Tableau 연계 CSV 출력",
    ],
    metrics: ["Accuracy 0.84"],
    stack: "Python · scikit-learn · NLP",
    github:
      "https://github.com/whiteblackparang/Project/tree/main/korean-movie-sentiment-analysis",
  },

  {
    title: "Reddit 게시글 참여도 분석 & 추천",
    category: "nlp",
    sub: "LDA 토픽 모델링 · A/B 테스트",
    desc: "Reddit 게시글 참여도 분석 및 세그먼트 기반 토픽 추천 시스템",
    highlights: [
      "LDA + Welch t-test + FDR 보정으로 유의한 positive topic 도출",
      "KMeans 4개 세그먼트 (평균 score 1.76 ~ 9.63)",
    ],
    metrics: ["log_score +0.35"],
    stack: "Python · scikit-learn · LDA · scipy",
    github:
      "https://github.com/whiteblackparang/Project2/tree/main/Reddit",
  },

  {
    title: "코로나19 5개국 확산 분석 & 예측",
    category: "ts",
    sub: "SEIR + LSTM · Johns Hopkins 2020–2023",
    desc: "Johns Hopkins 데이터 기반 5개국 감염 확산 분석 및 예측",
    highlights: [
      "SEIR 모델 R₀ 추정, Auto-ARIMA 14일, LSTM 30일 예측",
      "봉쇄 정책 효과 정량화 (미국: -19.2%p)",
    ],
    metrics: [],
    stack: "Python · pmdarima · TensorFlow",
    github: "https://github.com/whiteblackparang/Project/tree/main/Covid19",
  },

  {
    title: "뉴욕 Citi Bike 수요 예측",
    category: "ts",
    sub: "LightGBM · 2,820만 건",
    desc: "뉴욕 Citi Bike 이용 데이터 분석 및 시간별 수요 예측",
    highlights: [
      "LightGBM MAE 75%↓, RMSE 74%↓ (1,627 → 404)",
      "스테이션별 순유입/유출 분석으로 재배치 우선순위 도출",
    ],
    metrics: ["MAE ↓75%", "RMSE ↓74%"],
    stack: "Python · LightGBM · Prophet",
    github:
      "https://github.com/whiteblackparang/Project/tree/main/citibike-demand-analysis",
  },

  {
    title: "미국 기술주 포트폴리오 최적화",
    category: "ts",
    sub: "Monte Carlo · AAPL MSFT TSLA NVDA 외",
    desc: "Monte Carlo 시뮬레이션으로 효율적 프론티어 탐색 및 포트폴리오 최적화",
    highlights: [
      "20,000회 시뮬레이션, Lag-5 선형회귀 수익률 예측",
      "NVDA 최고 Sharpe Ratio 1.93, Streamlit 대시보드",
    ],
    metrics: ["Sharpe 1.93"],
    stack: "Python · yfinance · Streamlit",
    github:
      "https://github.com/whiteblackparang/Project/tree/main/stock_price_prediction",
  },

  {
    title: "NYC 택시 운행 시간 예측",
    category: "ts",
    sub: "회귀 분석 · R · EDA",
    desc: "NYC 택시 운행 데이터 EDA 및 운행 시간 예측 회귀 모델 개발",
    highlights: [
      "Haversine 거리, 시간대, 주말 피처 엔지니어링",
      "LR / DT / RF 교차검증 비교",
    ],
    metrics: [],
    stack: "R · ggplot2 · randomForest · caret",
    github:
      "https://github.com/whiteblackparang/Project2/tree/main/nyc-taxi-trip",
  },

  {
    title: "모바일 앱 리텐션 & 퍼널 분석",
    category: "product",
    sub: "코호트 분석 · 60,471명",
    desc: "모바일 앱 이탈 지점 발굴 및 리텐션 개선 전략 도출",
    highlights: [
      "D1 리텐션 3.0% — 심각한 온보딩 문제 발견",
      "퍼널 분석: 첫 클릭 단계 85% 이탈 확인",
      "주별 코호트 + Light/Medium/Heavy User 세그먼테이션",
    ],
    metrics: ["D1 Retention 3%", "첫클릭 이탈 85%"],
    stack: "Python · pandas · scipy · plotly",
    github:
      "https://github.com/whiteblackparang/Project/tree/main/User%20Mobile%20App%20Interaction%20Data",
  },

  {
    title: "국내 7개 도시 생활 패턴 분석",
    category: "sql",
    sub: "DB 설계 + SQL · MySQL",
    desc: "MySQL 기반 관계형 DB 설계 및 7개 도시 이동·소비·날씨 통합 분석",
    highlights: [
      "6개 테이블·외래키 DB 스키마 직접 설계",
      "윈도우 함수(RANK, DENSE_RANK, SUM OVER)로 도시별 순위 산출",
    ],
    metrics: [],
    stack: "MySQL 8.0 · SQL",
    github:
      "https://github.com/whiteblackparang/Project2/tree/main/urban",
  },

  {
    title: "classicmodels SQL 비즈니스 분석",
    category: "sql",
    sub: "MySQL · RFM · 코호트 · Funnel",
    desc: "MySQL classicmodels DB로 고객·매출·수익성 비즈니스 지표 분석",
    highlights: [
      "RFM 세그먼테이션 (VIP / Loyal / At Risk / Regular)",
      "코호트 분석, 파레토 검증, 윈도우 함수 국가별 랭킹",
    ],
    metrics: [],
    stack: "MySQL · SQL",
    github: "https://github.com/whiteblackparang/SQL-Project",
  },

  {
    title: "통신사 고객 이탈 분석 & ML 예측",
    category: "sql",
    sub: "SQL EDA + ML · Telco Churn",
    desc: "SQL 탐색 분석으로 이탈 패턴 발굴 후 ML 다모델 비교 예측",
    highlights: [
      "계약 유형·요금제별 이탈률 SQL 분석",
      "SMOTE 불균형 처리 + Ensemble VotingClassifier",
      "VIP/이탈위험/업셀링 고객 세그먼테이션",
    ],
    metrics: ["AUC 0.8432", "F1 0.5997"],
    stack: "Python · scikit-learn · XGBoost · SQL",
    github: "https://github.com/whiteblackparang/SQL-Project",
  },

  {
    title: "Spotify 트랙 인기도 SQL 분석",
    category: "sql",
    sub: "SQL · 장르·연도별 트렌드",
    desc: "Spotify 데이터 기반 아티스트·장르·연도별 트렌드 분석",
    highlights: [
      "Top 트랙·아티스트 도출, 장르별 평균 인기·템포 분석",
      "CTE·윈도우 함수 활용 복합 SQL 분석",
    ],
    metrics: [],
    stack: "MySQL · SQL",
    github: "https://github.com/whiteblackparang/SQL-Project",
  },

  {
    title: "Olist 브라질 이커머스 SQL 분석",
    category: "sql",
    sub: "MySQL · 100K+ 주문",
    desc: "브라질 이커머스 Olist 데이터로 고객·매출·배송 품질 지표 도출",
    highlights: [
      "RFM 지표, 6개월 매출 추적, 고객별 주문 간격 분석",
      "배송 지연 vs 리뷰 점수 관계 분석, 이상 결제 탐지",
    ],
    metrics: [],
    stack: "MySQL · SQL",
    github:
      "https://github.com/whiteblackparang/Project/tree/main/olist_sql_project",
  },

  {
    title: "온라인 리테일 고객 행동 분석",
    category: "sql",
    sub: "ETL · UCI Online Retail · MySQL",
    desc: "UCI Online Retail 데이터 전처리 후 MySQL 적재, 구매 행동 분석",
    highlights: [
      "IsCancelled, TotalPrice 파생변수 생성 후 MySQL 적재",
      "국가별·시간대별 매출 및 반복 구매 세그먼트 분석",
    ],
    metrics: [],
    stack: "Python · pandas · MySQL · SQLAlchemy",
    github:
      "https://github.com/whiteblackparang/Project/tree/main/Online%20Retail",
  },

  {
    title: "Google Play 앱 ETL 파이프라인",
    category: "sql",
    sub: "데이터 엔지니어링 · SQLite",
    desc: "Google Play 앱·리뷰 데이터 수집·정제·SQLite 적재 ETL 구축",
    highlights: [
      "Size 단위 통일, Installs 변환, 감성 결측 처리",
      "apps, reviews 테이블 적재 및 데이터 품질 검증",
    ],
    metrics: [],
    stack: "Python · pandas · SQLite",
    github:
      "https://github.com/whiteblackparang/Project/tree/main/googleplay-trend-monitor",
  },

  {
    title: "서울시 따릉이 이용 패턴 분석",
    category: "sql",
    sub: "ETL · MySQL · 2023–2025",
    desc: "따릉이 이용 데이터 전처리·MySQL 적재 및 이용 패턴 분석",
    highlights: [
      "월별 KPI, 성별·연령대별 이용 패턴, 탄소 절감 효과 분석",
      "파생변수 distance_km, speed_kmh, day_type + BI용 View 구축",
    ],
    metrics: [],
    stack: "Python · MySQL · SQL · SQLAlchemy",
    github:
      "https://github.com/whiteblackparang/Project-for-Data-Engineering/tree/main/bike_ETL",
  },

  {
    title: "생활가전 리뷰 트렌드 모니터링",
    category: "sql",
    sub: "자동화 파이프라인 · GitHub Actions · Slack",
    desc: "네이버쇼핑 생활가전 리뷰 자동 수집·분석 데이터 파이프라인",
    highlights: [
      "크롤러 → 감성 분석 → SQLite 적재 → Slack 웹훅 알림",
      "GitHub Actions로 매주 월요일 오전 9시 자동 실행",
    ],
    metrics: [],
    stack: "Python · SQLite · GitHub Actions · Slack",
    github:
      "https://github.com/whiteblackparang/Review-Trend-Pipeline-Project",
  },

  {
    title: "배송 환경 요인 기반 배송시간 분석 및 예측",
    category: "ml",
    roles: ["da", "ds"],
    sub: "SQL → 가설검정 → ML · Amazon 배송 4.3만 건",
    desc: "SQL 탐색 → 통계적 가설검정(효과크기 포함) → ML 예측 → Feature Importance 교차검증의 4단계 파이프라인 설계",
    highlights: [
      "교통이 배송시간에 가장 큰 영향 (ANOVA, η²=0.133), Jam-Low 그룹 간 평균 46.4분 차이",
      "p-value뿐 아니라 효과크기(Cohen's d, η², Cramér's V)를 함께 보고, 표본편향 의심 시 제외 후 재검정",
      "Random Forest로 베이스라인 대비 예측오차 33% 개선 (MAE 25.58분 → 17.04분)",
    ],
    metrics: ["MAE ↓33.4%", "R² 0.819"],
    stack: "Python · MySQL · SciPy · statsmodels · scikit-learn",
    github:
      "https://github.com/whiteblackparang/delivery-time-prediction",
  },

  {
    title: "HR 직원 퇴사 리스크 분석",
    category: "sql",
    roles: ["da"],
    sub: "SQL 윈도우 함수 · IBM HR 데이터",
    desc: "부서 평균만 봐서는 안 보이는 숨은 고위험 직무를 SQL로 찾아내고, 야근-만족도-퇴사 관계를 통계검정으로 규명한 End-to-End 분석",
    highlights: [
      "CTE + RANK() OVER로 부서 내 직무별 위험도 순위화 → Sales Representative 퇴사율 39.8% (같은 부서 Sales Executive는 17.5%)",
      "야근-만족도는 유의차 없음(p=0.274)이나 야근-실제퇴사율은 강한 연관(χ²=87.56, p<0.0001)",
      "SQL 집계 로직을 Excel 수식으로 재현해 자동 갱신되는 KPI 대시보드 구축",
    ],
    metrics: ["퇴사율 39.8%", "χ² 87.56"],
    stack: "Python · SQLite · SQL · Excel",
    github:
      "https://github.com/whiteblackparang/hr-attrition-risk-analysis",
  },

  {
    title: "TheLook 이커머스 End-to-End 분석 파이프라인",
    category: "sql",
    roles: ["da", "pm"],
    sub: "BigQuery SQL · AARRR 프레임워크",
    desc: "BigQuery 공개 이커머스 데이터로 퍼널-리텐션-매출-장바구니 분석 파이프라인을 구축하고 SQL 쿼리와 노트북을 1:1로 매칭",
    highlights: [
      "상품 조회 단계 이탈률 36.62%가 최대 병목 (세션 단위 퍼널 재설계로 발견)",
      "재구매 리텐션 1개월 3.47% → 12개월 1.75%, 원타임 구매 성향 확인",
      "매출 상위 14개 상품이 전체의 1.17%에 불과한 매출 구조 규명, Dresses-Skirts 연관규칙(Lift 1.40)으로 크로스셀 제시",
    ],
    metrics: ["이탈률 36.62%", "Lift 1.40"],
    stack: "BigQuery SQL · Python · Pandas · Seaborn",
    github:
      "https://github.com/whiteblackparang/thelook-ecommerce-analysis",
  },

  {
    title: "PLCC 고객 프로모션 타겟 추출 및 정산 시뮬레이션",
    category: "sql",
    roles: ["da", "ds"],
    sub: "DuckDB SQL · 카드 거래 185만 건 · 4주, 1인",
    desc: "신용카드 거래 데이터로 프로모션 대상 추출 → 정산 → 이상탐지까지 이어지는 end-to-end 파이프라인 설계",
    highlights: [
      "대상 고객 908명(90.9%) 자동 추출, 총 20,880건·$4,283,219 규모의 캐시백 정산 자동화",
      "Z-score 기반 이상 정산 349건 탐지 — 부정거래 연관 비율 7.7%로 전체 평균(0.5%)의 15배",
      "RFM + K-Means 이중 세그먼트로 Champions가 전체 캐시백의 49%를 점유함을 확인, SQL 뷰 모듈화 + Streamlit 대시보드",
    ],
    metrics: ["정산 20,880건", "이상 정산 349건"],
    stack: "Python · DuckDB · scikit-learn · Streamlit · Tableau",
    github: "https://github.com/whiteblackparang/PLCC-Project",
  },

  {
    title: "은행 마케팅 캠페인 타겟팅 최적화",
    category: "ml",
    roles: ["ds", "pm"],
    sub: "XGBoost · A/B 테스트 시뮬레이션",
    desc: "정기예금 가입 예측 모델을 만들고, 상위 확률 고객만 타겟팅하는 전략의 비용 절감 효과를 시뮬레이션",
    highlights: [
      "통화시간(duration)은 통화 종료 후에만 알 수 있는 Data Leakage 변수임을 짚어, 실사용 모델과 성능 상한선 모델을 분리 비교",
      "duration 제외 시 ROC-AUC 0.876 → 0.688로 하락, 현실적으로 기대 가능한 성능 범위를 투명하게 제시",
      "예측 확률 상위 고객만 타겟팅: 전환율 47.4% → 70.3%(+48.3%), 캠페인 비용 70% 절감",
    ],
    metrics: ["전환율 +48.3%", "비용 ↓70%"],
    stack: "Python · scikit-learn · XGBoost",
    github:
      "https://github.com/whiteblackparang/bank-marketing-campaign-optimization",
  },

  {
    title: "아파트 실거래가 시세 예측 및 담보대출 리스크 스코어링",
    category: "ml",
    roles: ["ds"],
    sub: "LightGBM · SHAP · 실거래 69,686건",
    desc: "강남·서초 10년치 실거래가를 직접 수집해 시세 예측 모델을 만들고, 괴리율 기반 담보대출 리스크 등급 체계 설계",
    highlights: [
      "위치 피처(단지명 Target Encoding, 법정동) 추가로 R² 0.262 → 0.616",
      "랜덤 분할 대신 시간 기준 분할(2016~2023 Train / 2024~2025 Test)로 데이터 누수 방지",
      "SHAP으로 단지명이 1위 설명변수임을 확인하고 실제 지역 서열과 교차검증, 괴리율 기반 5단계 리스크 등급 설계",
    ],
    metrics: ["R² 0.616", "MAE 506.3"],
    stack: "Python · LightGBM · SHAP · 공공데이터 API",
    github: "https://github.com/whiteblackparang/apt-value",
  },

  {
    title: "DataCo 공급망 배송 지연 분석 및 예측",
    category: "sql",
    roles: ["da", "ds"],
    sub: "PostgreSQL 45개 쿼리 · 주문 18만 건",
    desc: "공급망 주문 데이터를 PostgreSQL로 분석해 지연 원인을 찾고, 사전 감지를 위한 지연 예측 모델 구축",
    highlights: [
      "'특정 권역 문제'라는 가설을 SQL로 검증했으나 대부분 권역의 지연율이 51~60%로 비슷해, 공통 원인을 찾는 방향으로 전환",
      "배송모드 First Class 지연율 100%의 원인을 추적해 데이터 이상치임을 발견, 해당 컬럼 제외 시 ROC-AUC 0.833 → 0.838",
      "지연 누락 최소화를 위해 임계값을 0.427로 재조정 (Precision 0.75 / Recall 0.81)",
    ],
    metrics: ["ROC-AUC 0.838", "Recall 0.81"],
    stack: "PostgreSQL · Python · Random Forest",
    github:
      "https://github.com/whiteblackparang/dataco-supply-chain-delay-prediction",
  },

  {
    title: "CDNow 고객생애가치(LTV) 예측 비교 실험",
    category: "dl",
    roles: ["ds", "mle"],
    sub: "BG/NBD vs DeepSurv · 고객 23,570명",
    desc: "통계 모델(BG/NBD)과 딥러닝 생존분석 모델(PyTorch DeepSurv)을 직접 구현해 재구매 시점 예측 성능 비교",
    highlights: [
      "RMSE는 BG/NBD가 우세(232.1 vs 361.1), C-index는 DeepSurv가 우세(0.9364 vs 0.7190)로 지표에 따라 승자가 갈림",
      "'정확한 날짜 예측'과 '위험 고객 우선순위 선별' 중 목적에 따라 다른 모델을 추천",
      "출력 단위가 다른 두 모델을 공정 비교하기 위해 duration 척도로 통일하는 변환 로직 설계, Cox Partial Likelihood 직접 구현",
    ],
    metrics: ["C-index 0.9364", "RMSE 232.1"],
    stack: "Python · PyTorch · lifetimes(BG/NBD)",
    github:
      "https://github.com/whiteblackparang/Comparative-Analysis-LTV-Predictor",
  },

  {
    title: "게임 프로모션 캠페인 A/B 테스트 분석",
    category: "product",
    roles: ["pm", "da"],
    sub: "Welch t-test · 카이제곱 · Mann-Whitney U · 유저 1,100만 건",
    desc: "프로모션 A/B 테스트를 세 가지 통계 검정으로 교차 검증해 전면 배포 결정의 근거를 제시",
    highlights: [
      "ARPU +5.26%는 통계적으로 유의하지 않음(p=0.53), 결제전환율(CVR)은 -6.64% 유의하게 하락(p=0.037)",
      "ARPU만 봤다면 전면 배포를 결정했을 상황에서 반대 결론을 도출, 지표 선택이 의사결정을 뒤바꿈을 정량 입증",
      "정규성 검정 후 목적에 맞는 검정을 선택하고, 코호트 리텐션(Day 1/3/7/14/30)을 병행 분석",
    ],
    metrics: ["CVR -6.64%", "p=0.037"],
    stack: "Python · SQL · Parquet · SciPy",
    github:
      "https://github.com/whiteblackparang/mobile-game-ab-test",
  },

  {
    title: "Fitbit 사용자 행동 분석을 통한 리텐션 개선",
    category: "product",
    roles: ["da", "pm"],
    sub: "MySQL 8.0 · SQL 63개 · 관찰 대상 29명",
    desc: "기기 착용 유지와 실제 활동 유지가 같은 현상인지 검증하고, 활동량이 무너지는 시점을 탐지해 At-risk 유저의 조기 개입 지점 제시",
    highlights: [
      "29명 중 14명(48%)이 착용률은 안정적(0.8~1.0)인데도 7~9일차에 활동량이 baseline 대비 30% 이상 감소",
      "체중기록-활동량 상관 r=0.58이 이상치 2명에 의한 과대평가였음을 발견 (제외 후 r=0.167)",
      "CTE·윈도우 함수(AVG OVER, LAG)로 7일 이동평균 baseline을 산출하고, 감소 전(5~7일차) 개인화 리마인더 개입 및 A/B 테스트 프레임워크 제안",
    ],
    metrics: ["48% (14/29명)", "SQL 63개"],
    stack: "Python · MySQL 8.0 · SciPy · K-Means",
    github:
      "https://github.com/whiteblackparang/fitbit-retention-analysis",
  },

  {
    title: "게임 추천 전략 개선을 통한 전환율 상승 실험",
    category: "product",
    roles: ["pm", "ds"],
    sub: "Rule-based 추천 · A/B 테스트 각 5,000명",
    desc: "고평점·저노출 타이틀 1,486개를 발굴하고, 설명 가능한 rule-based 개인화 추천으로 A/B 테스트를 설계·검증",
    highlights: [
      "CVR 2.91% → 4.04%(+38.8%), ARPU $2.10 → $2.57(+22.4%), 카이제곱·Welch t-test 모두 p<0.0001",
      "블랙박스 ML 대신 '왜 추천했는지' 설명 가능한 3단계 rule 채택 (장르 매칭 → 플랫폼 일치 → 숨은 보석 10% 삽입)",
      "전체 트래픽 적용 시 연매출 20%+ 상승으로 추정, RPG/Adventure 세그먼트 타겟팅 등 후속 액션 제시",
    ],
    metrics: ["CVR +38.8%", "ARPU +22.4%"],
    stack: "Python · SciPy",
    github:
      "https://github.com/whiteblackparang/data-driven-game-recommender",
  },

  {
    title: "패션 커머스 커뮤니티 활동 기반 이탈 방지 분석",
    category: "product",
    roles: ["pm", "da"],
    sub: "무신사 랭킹 300개 상품 크롤링 · Spearman · Kruskal-Wallis",
    desc: "커뮤니티 활동(좋아요·리뷰)과 구매전환의 관계를 검증하고, 핵심 타겟 세그먼트와 리텐션 트리거 시나리오 설계",
    highlights: [
      "'Community Only' 세그먼트는 관심도가 Super Fan의 73% 수준인데 구매전환은 1.3%에 불과 — 가장 임팩트 있는 성장 지렛대로 판단",
      "Spearman 상관: 좋아요수 r=0.996, 리뷰수 r=0.219 / 평점은 세그먼트 간 유의차 없음(p=0.9452)이라 이탈 예측에 부적합",
      "세그먼트별 4가지 리텐션 트리거 시나리오(찜상품 첫구매 무료배송 쿠폰 등) 제시",
    ],
    metrics: ["Community Only 전환 1.3%", "좋아요 r=0.996"],
    stack: "Python · Selenium · BeautifulSoup4 · SciPy",
    github:
      "https://github.com/whiteblackparang/MUSINSA-Fashion-Project",
  },

  {
    title: "바르셀로나 Airbnb 예약 전환율 분석",
    category: "product",
    roles: ["da", "pm"],
    sub: "Inside Airbnb 공개 데이터 · 지표 교차검증",
    desc: "숙소·호스트 특성이 예약 성사에 미치는 영향을 분석하며, 직접 설계한 예약 프록시 지표의 신뢰도를 스스로 검증",
    highlights: [
      "예약 프록시 지표와 공식 점유율 지표의 상관계수가 -0.04임을 발견, 잘못된 지표 기준 결과를 전량 재분석",
      "재검증으로 Private room이 '1위'에서 '최하위'로 정정되는 등 핵심 결론이 뒤바뀜을 확인",
      "Superhost는 유의하게 긍정적(p<0.0001), 가격은 예약 성사와 거의 무관(r=-0.06)",
    ],
    metrics: ["지표 상관 -0.04", "Superhost p<0.0001"],
    stack: "Python · pandas · SciPy",
    github:
      "https://github.com/whiteblackparang/barcelona-airbnb-analysis",
  },

  {
    title: "AI 신용 위험 분석기",
    category: "ml",
    roles: ["mle", "ds"],
    sub: "React + FastAPI + XGBoost + LLM · 실배포",
    desc: "신용위험 예측 모델과 LLM 자동 설명을 결합해 예측부터 배포까지 엔드투엔드로 구현한 웹 서비스",
    highlights: [
      "고객 정보 입력 → XGBoost 연체확률 예측 → 주요 영향요인 시각화 → LLM이 예측 근거를 자연어로 설명",
      "프론트(React/Vercel)와 백엔드(FastAPI/HuggingFace Spaces)까지 실제 배포",
    ],
    metrics: ["ROC-AUC 0.8583"],
    stack: "React · FastAPI · XGBoost · Groq LLM(Llama3) · Vercel",
    github:
      "https://github.com/whiteblackparang/credit-risk-app",
  },

  {
    title: "Upbit 실시간 리스크 모니터링 대시보드",
    category: "ts",
    roles: ["mle", "da"],
    sub: "GitHub Actions 자동 수집 · Streamlit",
    desc: "업비트 10개 코인의 5분 간격 시세를 자동 수집해 변동성 리스크를 경보하는 운영형 파이프라인 설계·운영",
    highlights: [
      "GitHub Actions → Upbit API → SQLite → SQL 랭킹 → Streamlit 파이프라인, 991회 무중단 자동 실행 (실행당 10~16초)",
      "단순 표준편차는 BTC처럼 절대가격이 큰 코인이 항상 1위로 왜곡되어, 변동계수(CV)로 정규화해 공정 비교",
      "초기 임계값(CV 0.5%) 상태로 아직 경보 대상이 없으며, 데이터 축적 후 분포 기반 재조정 예정임을 한계로 명시",
    ],
    metrics: ["991회 무중단", "CV 정규화"],
    stack: "Python · SQLite · Streamlit · GitHub Actions",
    github:
      "https://github.com/whiteblackparang/upbit-realtime-dashboard",
  },

  {
    title: "Outbrain 피드 다양성 랭킹",
    category: "dl",
    roles: ["mle", "ds"],
    sub: "세션 어텐션 · MMR 재랭킹 · 클릭 로그 1억 행",
    desc: "클릭률-다양성 트레이드오프를 정량 관리하는 딥러닝 랭킹 추천 시스템 설계",
    highlights: [
      "유저 히스토리의 86%가 공백이라 GRU 시퀀스 가설이 성립하지 않음을 발견, 세션 어텐션 모델로 설계 전환",
      "세션 어텐션 AUC 0.711로 인기도 베이스라인(0.704) 상회, 카테고리 단위 집계(0.580)보다 유의하게 우수",
      "MMR lambda 0.5 → 1.0에서 hit rate 0.917 → 0.940 상승, 다양성 0.88 → 0.83 하락하는 트레이드오프 정량화",
    ],
    metrics: ["AUC 0.711", "MMR 트레이드오프"],
    stack: "PyTorch · scikit-learn(SVD) · MMR · Groq LLM",
    github:
      "https://github.com/whiteblackparang/outbrain-feed-diversity-ranking",
  },

  {
    title: "PE 구조 기반 AI 멀웨어 탐지 시스템",
    category: "ml",
    roles: ["mle", "ds"],
    sub: "UCI Malware Detection · 373샘플 · 531 피처",
    desc: "PE 파일 정적 피처로 실행 전 악성코드를 탐지하는 분류 파이프라인을 만들고, 지나치게 높은 성능의 원인을 데이터로 직접 설명",
    highlights: [
      "Feature Importance에서 단일 피처 F_20이 90.43%를 차지함을 확인, 클래스별 활성화율 비교로 판별력을 시각적으로 검증",
      "Test F1/AUC 1.0의 원인을 Learning Curve(CV Val F1 0.85 → 0.9787 수렴)로 과적합과 구분해 설명",
      "단일 피처 의존 리스크(신종·조작 악성코드에 취약)를 한계로 명시",
    ],
    metrics: ["Test F1 1.0", "F_20 중요도 90.43%"],
    stack: "Python · scikit-learn · XGBoost · GridSearchCV",
    github:
      "https://github.com/whiteblackparang/vAlscanbox",
  },
];
