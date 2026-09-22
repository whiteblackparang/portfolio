export interface Experience {
  period: string;
  company: string;
  role: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    period: "2023.07 - 2023.10",
    company: "GAOTek Inc.",
    role: "Business Development 인턴 · B2B 고객 발굴, CRM 운영, 파트너십 기여",
    bullets: [
      "CRM 시스템을 활용하여 타겟 B2B 고객사 100개소 발굴 및 데이터베이스 구축",
      "데이터 기반의 타겟팅으로 일평균 30건 이상의 이메일 캠페인 및 Follow-up 수행",
      "잠재 파트너십 초기 접촉 단계 지원 및 비즈니스 프로세스 데이터 관리",
    ],
  },
  {
    period: "2022.09 - 2022.12",
    company: "Research and Business Development Center",
    role: "인턴 · 데이터 분석, 인사이트 도출, 보고서 작성",
    bullets: [
      "과거 실적 데이터 분석을 통한 회사 전략 수립 및 향후 사업 계획 기초자료 마련",
      "지역 병원 데이터(Data Mining) 조사·정제 및 분석을 통한 사업 인사이트 도출",
      "분석 결과 시각화 및 전략 기획 리포트 작성으로 경영진 의사결정 지원",
    ],
  },
];