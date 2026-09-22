// src/data/tableau.ts
export interface TableauViz {
  title: string;
  desc: string;
  embedUrl: string;
}

export const tableauVizzes: TableauViz[] = [
  {
    title: "Recipe Ingredient Explorer",
    desc: "재료 기반 레시피 인사이트 분석",
    embedUrl:
      "https://public.tableau.com/views/1_17896992535150/1?:embed=y&:showVizHome=no",
  },
  {
    title: "US CPI Inflation History Analysis (1968–2024)",
    desc: "미국 소비자물가지수(CPI) 및 인플레이션 역사 분석",
    embedUrl:
      "https://public.tableau.com/views/US_CPI_Inflation_History_Analysis_1968-2024/Dashboard1?:embed=y&:showVizHome=no",
  },
  {
    title: "Global Air Quality Analysis",
    desc: "글로벌 대기질 데이터 분석",
    embedUrl:
      "https://public.tableau.com/views/GlobalAirQualityAnalysis_17724399911290/1?:embed=y&:showVizHome=no",
  },
];