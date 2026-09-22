// src/data/training.ts
export interface Training {
  period: string;
  title: string;
  org?: string;
  bullets: string[];
}

export const trainings: Training[] = [
  {
    period: "2024.02 - 2024.08",
    title: "프로젝트 중심 빅데이터·머신러닝 전문가 과정",
    bullets: [
      "SQL(Oracle, MySQL, MongoDB)을 활용해 데이터베이스 설계 및 데이터 추출·가공·분석 수행",
      "Python(Pandas, NumPy)을 이용한 데이터 전처리, 통계 분석 및 인사이트 도출",
      "Tableau를 활용해 계산 필드, 대시보드 구성 등 시각화 및 분석결과 리포팅",
      "웹 크롤링(BeautifulSoup) 및 비정형 데이터 수집·분석 경험",
      "Hadoop, Spark, Hive 등 빅데이터 처리 구조 이해 및 실습",
    ],
  },
  {
    period: "2024.10 - 2024.11",
    title: "Tableau Bootcamp (Tableau 신병훈련소 25기)",
    org: "Salesforce",
    bullets: [
      "Tableau 계산 필드, 필터, 매개변수를 활용한 분석 대시보드 제작",
      "워드클라우드, 박스플롯 등 다양한 시각화 기법을 활용한 데이터 표현",
      "비즈니스 요구사항을 기반으로 데이터 해석 및 시각화 구조 설계",
    ],
  },
  {
    period: "2024.07 - 2024.08",
    title: "Data Science 2024 코칭 스터디",
    org: "네이버 커넥트재단 (Boostcourse)",
    bullets: [
      "데이터 수집, 정제, 분석, 시각화 전 과정 학습",
      "분류·회귀 등 머신러닝 모델 이해 및 데이터 기반 문제 정의 및 분석 사고 훈련",
    ],
  },
  {
    period: "2022.04 - 2022.07",
    title: "Road Bum Apparel Co.",
    org: "BYU-Idaho · 창업 프로젝트",
    bullets: [
      "학생 주도 소비재(CPG) 브랜드 공동 창업 및 운영 참여",
      "18명 규모 팀에서 데이터 기반 제품 기획 및 운영 의사결정 지원",
      "R&D, 마케팅, 운영, 재무 영역을 로테이션하며 비즈니스 전반 프로세스 이해",
      "제품 개발 결과를 정기적으로 정리해 이사회에 보고",
    ],
  },
  {
    period: "2022.01 - 2023.12",
    title: "Data Science Society",
    org: "BYU-Idaho",
    bullets: [
      "Python, SQL, R 기반 데이터 전처리·시각화·통계 분석 스터디 참여",
      "팀 프로젝트를 통해 실제 데이터 기반 문제 정의 및 해결 경험",
      "데이터 분석 및 머신러닝 관련 세미나·워크숍 참여",
    ],
  },
];

export interface CourseYear {
  year: string;
  courses: string[];
}

export const additionalCourses: CourseYear[] = [
  {
    year: "2025",
    courses: [
      "인공지능을 위한 기계학습 입문",
      "딥러닝을 위한 선형대수학",
      "고급 파이썬과 데이터 분석",
    ],
  },
  {
    year: "2026",
    courses: [
      "머신러닝 빅데이터 분석",
      "Python 및 Pandas 활용 데이터 분석 기초 과정",
      "데이터 마이닝",
      "모두를 위한 머신러닝",
    ],
  },
];