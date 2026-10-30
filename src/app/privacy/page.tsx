import type { Metadata } from "next";
import { SiteFooter } from "@/components/sections";
import { SiteNav } from "@/components/site-nav";
import { privacyEffective, privacyHtml } from "@/content/privacy";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description: "uniDock Chrome 확장 프로그램의 개인정보 처리방침.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-[760px] px-4 pt-36 pb-28 sm:px-6 sm:pt-44">
        <h1 className="text-[36px] leading-tight font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
          개인정보 처리방침
        </h1>
        <p className="mt-4 text-base text-muted">{privacyEffective}</p>
        <div
          className="mt-10 text-[17px] leading-[1.8] text-ink [&_a]:text-brand [&_a]:underline [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_li]:mt-1.5 [&_p]:mt-4 [&_strong]:font-semibold [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6"
          dangerouslySetInnerHTML={{ __html: privacyHtml }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
