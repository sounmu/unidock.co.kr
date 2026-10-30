import Image from "next/image";
export type PanelView = "tasks" | "recordings" | "materials" | "captions";

function LmsSkeleton() {
  return (
    <div className="flex h-full bg-lms-bg">
      <div className="hidden w-14 shrink-0 flex-col items-center gap-3 bg-lms-block-strong/60 py-4 md:flex">
        {Array.from({ length: 6 }, (_, i) => (
          <span key={i} className="size-7 rounded-lg bg-lms-block" />
        ))}
      </div>
      <div className="flex-1 p-6">
        <span className="block h-4 w-40 rounded bg-lms-block-strong" />
        <span className="mt-3 block h-3 w-64 max-w-full rounded bg-lms-block" />
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="overflow-hidden rounded-xl ring-1 ring-lms-block">
              <span className="block h-14 bg-lms-block" />
              <div className="space-y-2 p-3">
                <span className="block h-2.5 w-4/5 rounded bg-lms-block-strong" />
                <span className="block h-2 w-1/2 rounded bg-lms-block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MockWindow({ view, className = "" }: { view: PanelView; className?: string }) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-[26px] shadow-[0_30px_80px_-20px_rgb(40_8_20/0.45)] ring-1 ring-white/40 ${className}`}
    >
      <div className="glass-chrome flex h-11 [border-top-left-radius:inherit] [border-top-right-radius:inherit] shrink-0 items-center gap-3 border-b border-white/30 px-4">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </span>
        <span className="ml-2 hidden min-w-0 flex-1 truncate rounded-full bg-page/60 px-3 py-1 text-xs text-muted sm:block">
          mylms.korea.ac.kr/courses
        </span>
        <Image src="/brand/unidock-128.png" alt="" width={20} height={20} className="ml-auto rounded-[5px] sm:ml-0" />
      </div>
      <div className="flex min-h-0 flex-1 bg-lms-bg">
        <div className="hidden min-w-0 flex-1 sm:block">
          <LmsSkeleton />
        </div>
        <div className="w-full shrink-0 border-l border-p-line bg-p-page sm:w-[360px]">
          {/* Generated from the extension's real side-panel components: npm run site:panels in ~/Code/uniDock. */}
          <iframe
            src={`/panels/${view}.html`}
            title="uniDock 사이드 패널 샘플"
            tabIndex={-1}
            loading="lazy"
            className="pointer-events-none block size-full"
          />
        </div>
      </div>
    </div>
  );
}
