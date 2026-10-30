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

## 검색엔진 소유 확인

- Google Search Console: 도메인 속성, Cloudflare DNS의 `TXT @ google-site-verification=...` 레코드로 확인.
- 네이버 서치어드바이저: `src/app/layout.tsx`의 `metadata.verification.other["naver-site-verification"]` 메타태그로 확인.
