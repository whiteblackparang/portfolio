export interface TableauViz {
  title: string;
  desc: string;
  embedUrl: string;
  link: string;
}

export const tableauVizzes: TableauViz[] = [
  {
    title: "Recipe Ingredient Explorer",
    desc: "재료 기반 레시피 인사이트 분석",
    embedUrl:
      "https://public.tableau.com/views/1_17896992535150/1?:embed=y&:showVizHome=no",
    link: "https://public.tableau.com/app/profile/jonghun.lee4755/viz/1_17896992535150/1",
  },
  {
    title: "US CPI Inflation History Analysis (1968–2024)",
    desc: "미국 소비자물가지수(CPI) 및 인플레이션 역사 분석",
    embedUrl:
      "https://public.tableau.com/views/US_CPI_Inflation_History_Analysis_1968-2024/Dashboard1?:embed=y&:showVizHome=no",
    link: "https://public.tableau.com/app/profile/jonghun.lee4755/viz/US_CPI_Inflation_History_Analysis_1968-2024/Dashboard1",
  },
  {
    title: "Global Air Quality Analysis",
    desc: "글로벌 대기질 데이터 분석",
    embedUrl:
      "https://public.tableau.com/views/GlobalAirQualityAnalysis_17724399911290/1?:embed=y&:showVizHome=no",
    link: "https://public.tableau.com/app/profile/jonghun.lee4755/viz/GlobalAirQualityAnalysis_17724399911290/1",
  },
];