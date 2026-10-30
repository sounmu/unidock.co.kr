import { ChromeMark } from "@/components/icons";
import { Showcase } from "@/components/showcase";
import { installHref, installLabel, site, universityLabel } from "@/lib/site";

const facts = [
  { value: "무료", label: "모든 기능" },
  { value: "0", label: "저장하는 비밀번호" },
  { value: "PDF·PPTX·PPT", label: "강의 자료 일괄 저장" },
  { value: "Chrome 114+", label: "Side Panel 확장" },
];

export function Hero() {
  return (
    <section className="px-4 pt-36 sm:px-6 sm:pt-44">
      <div className="mx-auto max-w-[1312px]">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-[40px] leading-[1.2] font-semibold tracking-[-0.035em] text-ink sm:text-[64px]">
            {universityLabel} LMS를
            <br />
            사이드 패널 하나로
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            과제와 마감, 녹화 강의, 강의 자료와 자막을 LMS 옆에서 바로 확인하세요. 평소 로그인한 세션 그대로 동작합니다.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={installHref}
              className="flex h-14 items-center gap-2.5 rounded-full bg-cta px-8 text-lg font-semibold text-on-cta hover:opacity-90"
            >
              <ChromeMark size={20} />
              {installLabel}
            </a>
            <a
              href="#features"
              className="flex h-14 items-center rounded-full px-7 text-lg font-medium text-ink ring-1 ring-line hover:bg-card"
            >
              기능 살펴보기
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">v{site.version} · 고려대학교와 제휴하지 않은 비공식 확장 프로그램</p>
        </div>

        <dl className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col-reverse text-center">
              <dt className="mt-1 text-sm text-muted">{fact.label}</dt>
              <dd className="text-lg font-bold text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-16">
          <Showcase />
        </div>
      </div>
    </section>
  );
}
