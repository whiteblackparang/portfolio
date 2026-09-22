// src/data/education.ts
export interface Education {
  school: string;
  period: string;
  major: string;
  minor?: string;
}

export const education: Education[] = [
  {
    school: "Brigham Young University - Idaho",
    period: "2020.04 - 2023.12",
    major: "Business Management",
    minor: "Data Science",
  },
];