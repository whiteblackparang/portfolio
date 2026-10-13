# JongHun Lee | Data Analyst Portfolio

SQL · Python 기반 데이터 분석가 이종훈의 포트폴리오 사이트입니다.
리텐션·A/B 테스트·고객 이탈 예측·추천 시스템 등 43개 분석 프로젝트와 Tableau 대시보드를 한 곳에서 볼 수 있습니다.

**Live → [portfolio-whiteblack.vercel.app](https://portfolio-whiteblack.vercel.app)**

## 주요 기능

- **프로젝트 이중 필터**: 직무(Data Analyst / Data Scientist / 기획자 / ML Engineer)와 기술 카테고리(ML / DL / NLP / TS / PRODUCT / SQL)를 함께 걸러서 볼 수 있습니다.
- **대표 프로젝트 Top 6 + 전체 프로젝트 43개**: 문제 정의, 핵심 결과, 지표, 사용 스택을 카드로 정리했습니다.
- **Tableau Public 대시보드 임베드**: 사이트 안에서 바로 인터랙션할 수 있습니다.
- **다크 모드**: 시스템 설정을 따르고, 버튼으로 직접 전환할 수 있습니다.
- **반응형 레이아웃**: 작은 화면에서는 햄버거 메뉴로 바뀝니다.
- **이력서 다운로드**: 한국어 / 영어 PDF를 각각 받을 수 있습니다.
- **SEO**: 메타데이터, Open Graph 미리보기 이미지, `robots.txt`, `sitemap.xml`을 자동 생성합니다.

## 기술 스택

| 분야 | 사용 기술 |
|---|---|
| 프레임워크 | Next.js 16 (App Router), React 19 |
| 언어 | TypeScript |
| 스타일링 | Tailwind CSS 4 |
| 테마 | next-themes |
| 배포 | Vercel (GitHub 연동 자동 배포) |

## 폴더 구조

```
src/
├── app/
│   ├── layout.tsx           # 루트 레이아웃, 메타데이터, ThemeProvider
│   ├── page.tsx             # 섹션 조립
│   ├── globals.css          # 전역 스타일, 다크모드 설정
│   ├── opengraph-image.tsx  # 공유 미리보기 이미지
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/              # Header (반응형 메뉴, 테마 토글)
│   ├── providers/           # ThemeProvider
│   └── sections/            # Hero, Experience, Featured, Projects,
│                            # SideProjects, Skills, Education, Contact
├── data/                    # 화면에 표시되는 모든 콘텐츠 (아래 참고)
└── lib/
    └── site.ts              # 사이트 주소, 제목, 설명
public/
├── resume-ko.pdf
└── resume-en.pdf
```

## 로컬 실행

Node.js 20 이상이 필요합니다.

```bash
git clone https://github.com/whiteblackparang/portfolio.git
cd portfolio
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

```bash
npm run build   # 프로덕션 빌드 확인
```

## 콘텐츠 수정 방법

화면에 보이는 내용은 컴포넌트가 아니라 `src/data`의 파일에 들어 있습니다. 컴포넌트 코드를 건드리지 않고 데이터만 고치면 됩니다.

| 바꾸고 싶은 것 | 수정할 파일 |
|---|---|
| 프로젝트 추가·수정 | `src/data/projects.ts` |
| 대표 프로젝트 Top 6 | `src/data/featured.ts` |
| 사이드 프로젝트 | `src/data/side-projects.ts` |
| 경력 | `src/data/experience.ts` |
| 기술 스택 | `src/data/skills.ts` |
| Tableau 대시보드 | `src/data/tableau.ts` |
| 학력·교육 | `src/data/education.ts`, `src/data/training.ts` |
| 연락처 링크 | `src/data/about.ts` |
| 사이트 주소·제목·설명 | `src/lib/site.ts` |
| 이력서 | `public/resume-ko.pdf`, `public/resume-en.pdf` 덮어쓰기 |

프로젝트의 직무 태그는 `roles` 필드로 지정합니다. 지정하지 않으면 기술 카테고리에 따라 기본값이 적용됩니다.

## 배포

`main` 브랜치에 push하면 Vercel이 자동으로 빌드하고 배포합니다.

```bash
git add .
git commit -m "update"
git push
```

## Contact

- Email: hun5639@naver.com
- LinkedIn: [linkedin.com/in/jonghunlee](https://www.linkedin.com/in/jonghunlee/)
- GitHub: [whiteblackparang](https://github.com/whiteblackparang)