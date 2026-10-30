import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site, universityLabel } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontDir = join(process.cwd(), "node_modules/pretendard/dist/web/static/woff");
const [semiBold, medium, icon] = await Promise.all([
  readFile(join(fontDir, "Pretendard-SemiBold.woff")),
  readFile(join(fontDir, "Pretendard-Medium.woff")),
  readFile(join(process.cwd(), "src/app/icon.png")),
]);
const iconSrc = `data:image/png;base64,${icon.toString("base64")}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#ffffff",
          color: "#1b181d",
          fontFamily: "Pretendard",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={iconSrc} width={64} height={64} alt="" style={{ borderRadius: 16 }} />
          <span style={{ fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em" }}>{site.name}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 26, fontWeight: 600, color: "#872038" }}>
            {universityLabel} LMS · Chrome 확장 프로그램
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 84,
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.035em",
            }}
          >
            <span>{universityLabel} LMS를</span>
            <span>사이드 패널 하나로</span>
          </div>
          <span style={{ fontSize: 30, fontWeight: 500, lineHeight: 1.5, color: "#68606a" }}>
            과제·마감·녹화 강의·강의 자료·자막을 LMS 옆에서 바로.
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#68606a" }}>
          <span>unidock.co.kr</span>
          <span>무료 · 비밀번호 저장 없음</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Pretendard", data: semiBold, weight: 600, style: "normal" },
        { name: "Pretendard", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
