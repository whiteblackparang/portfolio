// src/data/skills.ts
export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  { category: "언어", items: ["Python", "SQL", "R"] },
  {
    category: "ML / DL",
    items: [
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "PyTorch",
      "TensorFlow",
      "implicit (ALS)",
    ],
  },
  { category: "데이터 처리", items: ["pandas", "numpy", "scipy"] },
  {
    category: "시각화",
    items: ["matplotlib", "seaborn", "plotly", "Tableau", "Streamlit"],
  },
  { category: "NLP", items: ["TF-IDF", "LDA"] },
  {
    category: "데이터베이스",
    items: ["MySQL", "SQLite", "Oracle", "MongoDB"],
  },
  {
    category: "시계열",
    items: ["Prophet", "Auto-ARIMA (pmdarima)", "LSTM"],
  },
  { category: "실험 관리", items: ["MLflow"] },
  { category: "자동화", items: ["GitHub Actions", "Slack Webhook"] },
  { category: "백엔드 / 배포", items: ["FastAPI", "Vercel"] },
];