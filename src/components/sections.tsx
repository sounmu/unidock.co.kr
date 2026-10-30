import Link from "next/link";
import type { ReactNode } from "react";
import { Check, ChevronDown, ChromeMark } from "@/components/icons";
import { MockWindow, type PanelView } from "@/components/mock-window";
import { installHref, installLabel, site } from "@/lib/site";

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1312px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-[32px] leading-[1.2] font-semibold tracking-[-0.03em] text-ink sm:text-5xl ${className}`}>
      {children}
    </h2>
  );
}

const lineArt = {
  tasks: (
    <svg viewBox="0 0 200 140" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="30" y="14" width="140" height="112" rx="16" />
      <path d="m52 46 8 8 14-16M52 76l8 8 14-16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M90 46h56M90 76h44M90 106h56" strokeLinecap="round" />
      <rect x="52" y="98" width="16" height="16" rx="4" />
    </svg>
  ),
  lectures: (
    <svg viewBox="0 0 200 140" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="20" y="20" width="120" height="84" rx="14" />
      <rect x="60" y="40" width="120" height="84" rx="14" className="fill-card" />
      <path d="m110 66 26 16-26 16z" strokeLinejoin="round" />
    </svg>
  ),
  materials: (
    <svg viewBox="0 0 200 140" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M30 38a10 10 0 0 1 10-10h38l14 14h68a10 10 0 0 1 10 10v66a10 10 0 0 1-10 10H40a10 10 0 0 1-10-10z" />
      <path d="M100 62v40m-16-16 16 16 16-16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const pillars = [
  {
    art: lineArt.tasks,
    title: "과제를 놓치지 않게",
    body: "전 과목의 미제출 과제와 마감을 한 목록으로 모으고, D-1·오늘 마감처럼 남은 시간을 글자로 알려 줍니다.",
  },
  {
    art: lineArt.lectures,
    title: "강의는 바로 열리게",
    body: "주차학습 모듈과 게시판에 흩어진 녹화 강의를 찾아 LMS나 KU 플레이어로 바로 엽니다.",
  },
  {
    art: lineArt.materials,
    title: "자료는 한 번에 받게",
    body: "주차학습·게시판·공지에 첨부된 PDF·PPTX·PPT를 골라 과목별 폴더에 저장합니다.",
  },
];

export function Pillars() {
  return (
    <section id="features" className="pt-28 sm:pt-40">
      <Container>
        <SectionTitle>과제. 강의. 자료.</SectionTitle>
        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-3 md:gap-6">
          {pillars.map((p) => (
            <article key={p.title} className="rounded-[28px] bg-card p-8 sm:p-10">
              <div className="h-36 w-52 text-ink">{p.art}</div>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-ink">{p.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{p.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

const rows: {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  view: PanelView;
  aurora: string;
}[] = [
  {
    eyebrow: "할 일·일정",
    title: "이번 주 마감, 열자마자 보입니다.",
    body: "과목마다 들어가 확인할 필요 없이 할 일과 Planner 일정을 한 화면에서 봅니다. 일정은 과제·공지·기타로 나눠 보여 줍니다.",
    points: ["마감 빠른 순·늦은 순 정렬", "이번 주·24시간 이내 필터", "제출 완료·지각·잠김 상태 표시"],
    view: "tasks",
    aurora: "aurora-rose",
  },
  {
    eyebrow: "녹화 강의",
    title: "어디 있는지 모르던 강의 영상까지.",
    body: "주차학습 모듈의 강의뿐 아니라 LearningX 게시판 글에 들어 있는 KU 플레이어 영상도 함께 찾아 줍니다. 체크한 강의는 순서대로 이어서 재생할 수 있습니다.",
    points: ["모듈별 강의·게시판 속 KU 플레이어 영상", "LMS·플레이어 새 탭으로 바로 열기", "체크한 강의 순차 재생(정상 1x 속도)"],
    view: "recordings",
    aurora: "aurora-peach",
  },
  {
    eyebrow: "강의 자료",
    title: "시험 전날, 자료를 한 번에.",
    body: "필요한 파일만 골라 다운로드 폴더의 uniDock/과목/출처 아래에 저장합니다. 질문 템플릿을 복사해 ChatGPT에서 바로 물어볼 수도 있습니다.",
    points: ["전체 또는 선택 다운로드", "PDF·PPTX·PPT 지원", "파일 첨부는 사용자가 직접"],
    view: "materials",
    aurora: "aurora-plum",
  },
  {
    eyebrow: "자막·AI 자막",
    title: "자막이 없는 강의도 노트처럼.",
    body: "보고 있는 강의의 한국어 자막을 찾아 시간과 함께 저장합니다. 자막이 없는 강의는 Google 계정으로 로그인한 뒤 AI 자막을 만들 수 있습니다.",
    points: ["한국어 자막 우선, 시간 포함 TXT·JSON 저장", "자막이 없으면 AI 자막 생성(계정당 주 7회)", "직접 시작할 때만 강의 음성 전송"],
    view: "captions",
    aurora: "aurora-crimson",
  },
];

export function FeatureRows() {
  return (
    <section className="pt-28 sm:pt-40">
      <Container className="space-y-24 sm:space-y-40">
        {rows.map((row, i) => (
          <div key={row.view} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2" : ""}`}>
              <p className="text-base font-semibold text-brand">{row.eyebrow}</p>
              <SectionTitle className="mt-3">{row.title}</SectionTitle>
              <p className="mt-6 text-lg leading-relaxed text-muted">{row.body}</p>
              <ul className="mt-8 space-y-3">
                {row.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-base text-ink">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-wash text-brand">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div
              aria-hidden="true"
              className={`${row.aurora} grain overflow-hidden rounded-[32px] pt-10 pl-6 sm:pt-16 sm:pl-16 lg:col-span-7 ${
                i % 2 ? "lg:order-1" : ""
              }`}
            >
              <MockWindow view={row.view} className="relative z-10 h-[460px] rounded-r-none rounded-b-none sm:h-[520px]" />
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}

const trustFacts = [
  { value: "0", label: "입력받거나 저장하는 비밀번호" },
  { value: "읽기 전용", label: "LMS는 조회만, 제출·수정 없음" },
  { value: "기기 안", label: "조회 결과는 메모리에만 잠시 유지" },
  { value: "기본 꺼짐", label: "사용 통계는 동의할 때만" },
];

const trustCards = [
  { title: "로그인은 LMS에서 평소처럼", body: "확장은 로그인 화면을 조작하지 않고, 이미 열린 LMS 세션으로만 조회합니다." },
  { title: "외부 AI로 자동 전송하지 않음", body: "자료·자막·질문을 ChatGPT 등에 보내는 건 사용자가 직접 할 때뿐입니다. AI 자막도 직접 시작할 때만 현재 강의의 음성을 보냅니다." },
  { title: "광고 추적·데이터 판매 없음", body: "LMS 계정·내용·URL·입력값이나 화면 녹화는 수집하지 않습니다." },
];

export function Trust() {
  return (
    <section id="privacy" className="relative overflow-hidden pt-28 sm:pt-40">
      <Container>
        <SectionTitle className="max-w-3xl">로그인 정보는 건드리지 않습니다.</SectionTitle>
        <div className="relative mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12">
          <dl className="space-y-10 lg:col-span-4">
            {trustFacts.map((fact) => (
              <div key={fact.label} className="flex flex-col-reverse">
                <dt className="mt-2 text-lg text-muted">{fact.label}</dt>
                <dd className="text-[32px] leading-tight font-bold tracking-tight text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="relative lg:col-span-8">
            <div className="dot-sphere absolute -inset-10 -z-10 hidden rounded-full lg:block" aria-hidden="true" />
            <ul className="grid gap-4 sm:grid-cols-2 lg:mt-10">
              {trustCards.map((card, i) => (
                <li
                  key={card.title}
                  className={`rounded-3xl bg-page p-7 shadow-[0_20px_50px_-24px_rgb(40_8_20/0.35)] ring-1 ring-line ${
                    i === 2 ? "sm:col-span-2 sm:mx-auto sm:w-1/2" : ""
                  }`}
                >
                  <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">{card.body}</p>
                </li>
              ))}
            </ul>
            <Link href="/privacy" className="mt-8 inline-flex items-center gap-1 text-base font-semibold text-brand hover:underline">
              개인정보 처리방침 전문 보기 →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

const roadmap = [
  { title: "자막 오버레이·이중 자막", body: "강의 영상 위에 자막을 띄우고 한↔영 번역 자막을 함께 보여 줍니다." },
  { title: "전 과목 자막 검색", body: "‘시험 범위’ 같은 키워드로 모든 강의 자막을 검색하고 그 시점으로 이동합니다." },
  { title: "마감 알림", body: "D-3·D-1·3시간 전에 Discord·Telegram·Slack·이메일로 알려 줍니다." },
];

export function Roadmap() {
  return (
    <section className="pt-28 sm:pt-40">
      <Container>
        <p className="text-base font-semibold text-brand">다음 업데이트</p>
        <SectionTitle className="mt-3">준비 중인 기능</SectionTitle>
        <ul className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
          {roadmap.map((item) => (
            <li key={item.title} className="rounded-[28px] bg-card p-8">
              <span className="rounded-full bg-brand-wash px-3 py-1 text-sm font-semibold text-brand">개발 예정</span>
              <h3 className="mt-6 text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

const faqs = [
  {
    q: "고려대학교 공식 프로그램인가요?",
    a: "아닙니다. uniDock은 고려대학교와 제휴하지 않은 비공식 학습 도우미입니다. LMS 서비스가 바뀌면 일부 조회가 제한될 수 있습니다.",
  },
  {
    q: "아이디나 비밀번호를 입력해야 하나요?",
    a: "아니요. LMS에는 평소처럼 Chrome 탭에서 로그인하고, uniDock은 그 탭을 선택해 조회만 합니다. 아이디·비밀번호를 받거나 저장하지 않습니다.",
  },
  {
    q: "어떤 브라우저에서 쓸 수 있나요?",
    a: "Chrome 114 이상에서 Side Panel로 동작합니다. Chrome 웹 스토어에서 설치한 뒤 도구 모음의 uniDock 아이콘을 누르면 패널이 열립니다.",
  },
  {
    q: "AI 자막은 어떻게 만들어지나요?",
    a: "자막이 없는 강의에서 Google 계정으로 로그인하고 확인을 누르면 현재 강의의 음성만 uniDock 자막 서버로 보냅니다. LMS 쿠키·토큰, 강의 URL, 과목 ID, 강의 제목은 보내지 않습니다. 음성은 처리 후 삭제하고 자막은 최대 6개월 보관하며, 계정당 주 7회까지 만들 수 있습니다.",
  },
  {
    q: "자동 재생은 어떻게 동작하나요?",
    a: "기본으로 꺼져 있습니다. 직접 체크한 녹화 강의만 체크한 순서대로, 화면에 보이는 전용 탭에서 정상(1x) 속도로 재생합니다. 배속·숨김 탭 재생이나 출석 처리는 하지 않습니다.",
  },
  {
    q: "문제가 생기면 어디에 알리나요?",
    a: "GitHub 이슈로 알려 주세요. 조회가 실패하면 LMS 탭을 새로고침한 뒤 다시 시도해 보세요.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="pt-28 sm:pt-40">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionTitle>자주 묻는 질문</SectionTitle>
        </div>
        <div className="space-y-3 lg:col-span-8">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-3xl bg-card px-7 py-6 open:pb-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ChevronDown size={22} className="shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-base leading-relaxed text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="spotlight mt-28 px-4 pt-40 pb-32 text-center sm:mt-40 sm:pt-52 sm:pb-40">
      <div aria-hidden="true" className="mx-auto -mt-24 mb-20 h-0.5 w-64 rounded-full bg-[#f3b7c4]/80 blur-[1px] sm:-mt-32" />
      <h2 className="mx-auto max-w-3xl text-[36px] leading-[1.25] font-semibold tracking-[-0.03em] text-white sm:text-[64px]">
        이번 학기, LMS 탭은
        <br />
        하나면 충분합니다.
      </h2>
      <a
        href={installHref}
        className="mt-12 inline-flex h-16 items-center gap-3 rounded-full bg-white px-9 text-xl font-semibold text-[#1b181d] hover:bg-white/90"
      >
        <ChromeMark size={22} />
        {installLabel}
      </a>
      <p className="mt-5 text-sm text-white/70">Chrome 114 이상 · 무료 · v{site.version}</p>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-night text-white/70">
      <Container className="grid gap-10 border-t border-white/10 pt-16 pb-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-2xl font-bold text-white">uniDock</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            고려대학교와 제휴하지 않은 비공식 학습 도우미입니다. 고려대학교 및 LMS 관련 명칭은 각 소유자의 것입니다.
          </p>
        </div>
        <nav aria-label="바닥글" className="grid grid-cols-2 gap-8 text-sm md:col-span-7 md:grid-cols-3">
          <div>
            <p className="font-semibold text-white">제품</p>
            <ul className="mt-4 space-y-3">
              <li><Link href="/#features" className="hover:text-white">기능</Link></li>
              <li><Link href="/#faq" className="hover:text-white">FAQ</Link></li>
              <li><a href={installHref} className="hover:text-white">다운로드</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">지원</p>
            <ul className="mt-4 space-y-3">
              <li><a href={site.issuesUrl} className="hover:text-white">문의·버그 제보</a></li>
              <li><a href={site.githubUrl} className="hover:text-white">GitHub</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">정책</p>
            <ul className="mt-4 space-y-3">
              <li><Link href="/privacy" className="hover:text-white">개인정보 처리방침</Link></li>
            </ul>
          </div>
        </nav>
      </Container>
      <Container>
        <svg viewBox="0 0 1000 200" className="-mb-12 w-full" aria-hidden="true">
          <text
            x="50%"
            y="170"
            textAnchor="middle"
            fontSize="230"
            fontWeight="700"
            letterSpacing="-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-white/20"
          >
            uniDock
          </text>
        </svg>
      </Container>
    </footer>
  );
}
