"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { MockWindow, type PanelView } from "@/components/mock-window";

const tabs: { view: PanelView; label: string; caption: string }[] = [
  { view: "tasks", label: "과제·마감", caption: "전 과목 미제출 과제를 한 목록에 모아 봅니다." },
  { view: "recordings", label: "녹화 강의", caption: "주차학습 모듈과 게시판의 KU 플레이어 영상을 한 목록에서 열고, 골라서 이어 재생합니다." },
  { view: "materials", label: "강의 자료", caption: "PDF·PPTX·PPT를 골라 과목별 폴더에 한 번에 저장합니다." },
  { view: "captions", label: "자막", caption: "보고 있는 강의의 한국어 자막을 TXT·JSON으로 저장하고, 자막이 없으면 AI 자막을 만듭니다." },
];

export function Showcase() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = tabs[active];

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = (active + step + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div>
      <div
        id="showcase-panel"
        role="tabpanel"
        aria-labelledby={`showcase-tab-${current.view}`}
        className="aurora-crimson grain overflow-hidden rounded-[32px] p-4 sm:p-10 lg:px-20 lg:pt-16 lg:pb-0"
      >
        <div aria-hidden="true">
          <MockWindow
            view={current.view}
            className="relative z-10 h-[520px] sm:h-[560px] lg:h-[600px] lg:rounded-b-none"
          />
        </div>
        <p className="sr-only">{current.caption}</p>
      </div>

      <div
        role="tablist"
        aria-label="uniDock 기능 미리보기"
        onKeyDown={onKeyDown}
        className="mx-auto mt-8 flex max-w-full justify-start gap-1 overflow-x-auto px-1 sm:justify-center"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.view}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            id={`showcase-tab-${tab.view}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls="showcase-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`h-11 shrink-0 rounded-full px-3.5 text-[15px] font-medium transition-colors sm:h-12 sm:px-6 sm:text-base ${
              i === active ? "bg-card text-ink" : "text-muted hover:text-ink"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-muted" aria-live="polite">
        {current.caption}
      </p>
    </div>
  );
}
