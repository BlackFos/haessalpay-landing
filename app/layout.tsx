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
  const title = "햇살페이 | 따뜻한 햇살처럼 밝은 결제";
  const description =
    "신용카드 한도 상담부터 빠른 진행까지. 투명한 수수료와 365일 24시간 상담을 제공하는 햇살페이입니다.";

  return {
    metadataBase: new URL(origin),
    title,
    description,
    keywords: [
      "햇살페이",
      "신용카드 결제",
      "카드 한도",
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
