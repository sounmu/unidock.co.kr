# unidock.co.kr

[uniDock](https://github.com/sounmu/uniDock) Chrome 확장 프로그램의 랜딩페이지. Next.js 16 + Tailwind 4, Vercel 배포.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm run start
npm run lint
```

## 구조

- `src/lib/site.ts` — 사이트 상수와 지원 대학 목록(`universities`). 제목·설명·키워드·OG 이미지·JSON-LD가 모두 여기서 파생되므로 새 대학을 지원하면 이 배열에만 추가하면 된다.
- `src/app/opengraph-image.tsx` — 빌드 시 생성되는 1200×630 공유 썸네일.
- `src/app/sitemap.ts`, `src/app/robots.ts` — `/sitemap.xml`, `/robots.txt`. `public/panels/`는 색인에서 제외.
- `public/panels/*.html` — 확장 프로그램 패널의 정적 렌더. 패널 UI가 바뀌면 uniDock 저장소에서 `npm run site:panels -- ../unidock.co.kr/public/panels`로 재생성.
- `DESIGN.md` — 디자인 토큰과 레이아웃 규칙.

## 환경 변수

검색엔진 소유 확인 메타태그. Vercel 프로젝트 설정에 넣으면 `<head>`에 출력된다.

| 이름 | 용도 |
| --- | --- |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console `<meta name="google-site-verification">` |
| `NAVER_SITE_VERIFICATION` | 네이버 서치어드바이저 `<meta name="naver-site-verification">` |
