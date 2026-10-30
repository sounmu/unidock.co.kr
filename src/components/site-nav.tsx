import Image from "next/image";
import Link from "next/link";
import { installHref, installLabel } from "@/lib/site";
import { ChromeMark } from "@/components/icons";

const links = [
  { href: "/#features", label: "기능" },
  { href: "/#privacy", label: "개인정보" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <nav
        aria-label="주요 메뉴"
        className="glass mx-auto flex h-16 max-w-[1312px] items-center gap-2 rounded-full border border-line/70 pr-2 pl-5 sm:pl-6"
      >
        <Link href="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-ink">
          <Image src="/brand/unidock-128.png" alt="" width={32} height={32} className="rounded-lg" priority />
          uniDock
        </Link>
        <ul className="ml-10 hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="rounded-full px-4 py-2 text-[15px] text-ink hover:bg-card">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={installHref}
          className="ml-auto flex h-11 items-center gap-2 rounded-full bg-cta px-5 text-[15px] font-semibold text-on-cta hover:opacity-90"
        >
          <ChromeMark size={16} />
          {installLabel}
        </a>
      </nav>
    </header>
  );
}
