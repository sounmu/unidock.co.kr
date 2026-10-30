export type University = {
  id: string;
  name: string;
  short: string;
  lmsUrl: string;
  keywords: string[];
};

export const universities: University[] = [
  {
    id: "korea",
    name: "고려대학교",
    short: "고려대",
    lmsUrl: "https://mylms.korea.ac.kr/",
    keywords: ["고려대 LMS", "고려대학교 LMS", "KU LMS", "고려대 블랙보드", "mylms"],
  },
];

export const universityLabel = universities.map((u) => u.short).join("·");

export const site = {
  name: "uniDock",
  url: "https://unidock.co.kr",
  tagline: `${universityLabel} LMS를 사이드 패널 하나로`,
  description: `${universityLabel} LMS의 과제·마감·녹화 강의·강의 자료·자막을 LMS 옆 사이드 패널에서 바로 확인하는 비공식 Chrome 확장 프로그램.`,
  keywords: [
    "uniDock",
    "유니독",
    "LMS 확장 프로그램",
    "LMS 크롬 확장",
    "Chrome 사이드 패널",
    ...universities.flatMap((u) => u.keywords),
  ],
  githubUrl: "https://github.com/sounmu/uniDock",
  releasesUrl: "https://github.com/sounmu/uniDock/releases/latest",
  issuesUrl: "https://github.com/sounmu/uniDock/issues",
  lmsUrl: universities[0].lmsUrl,
  chromeWebStoreUrl: "https://chromewebstore.google.com/detail/unidock/mppekppkjiepogkodiblbchadlboiojk?hl=ko" as string | null,
  version: "0.4.1",
};

export const installHref = site.chromeWebStoreUrl ?? site.releasesUrl;
export const installLabel = site.chromeWebStoreUrl ? "Chrome에 추가" : "GitHub에서 받기";
