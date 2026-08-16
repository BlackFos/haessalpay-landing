import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { SITE } from "./site-data";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    SITE.domain;
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "햇살페이 | 대출·소액결제·콘텐츠 통합 상담";
  const description =
    "모든 대출, 소액결제, 상품권, 콘텐츠 관련 문의를 한곳에서 친절히 상담합니다. 저신용 고객도 현재 상황에 맞춰 상담받을 수 있습니다.";

  return {
    metadataBase: new URL(origin),
    title,
    description,
    keywords: [
      "햇살페이",
      "대출 상담",
      "저신용 상담",
      "소액결제",
      "상품권 상담",
      "콘텐츠 상담",
      "빠른 상담",
      "24시간 상담",
    ],
    icons: {
      icon: "/brand/favicon-v2.png",
      shortcut: "/brand/favicon-v2.png",
      apple: "/brand/haessal-mark-v2.png",
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: origin,
      siteName: SITE.name,
      locale: "ko_KR",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1200,
          height: 630,
          alt: "햇살페이 — 따뜻한 햇살처럼 밝은 결제",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
