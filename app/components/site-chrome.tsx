"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_ITEMS, SITE } from "../site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", open);
    return () => document.body.classList.remove("mobile-nav-open");
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="햇살페이 홈">
            <img src="/brand/haessal-mark-v2.png" alt="" className="brand-mark-img" />
            <span className="brand-copy">
              <strong>햇살페이</strong>
              <small>HAESSALPAY</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="주요 메뉴">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "active" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="header-cta"
            href={SITE.kakaoUrl}
            target="_blank"
            rel="noreferrer"
          >
            상담 시작
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <i />
            <i />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav aria-label="모바일 메뉴">
          {NAV_ITEMS.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={SITE.kakaoUrl}
          target="_blank"
          rel="noreferrer"
          className="button button-kakao"
        >
          오픈카카오톡으로 문의하기
        </a>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-brand">
            <img src="/brand/haessal-mark-v2.png" alt="" />
            <span>
              <strong>햇살페이</strong>
              <small>HAESSALPAY</small>
            </span>
          </Link>
          <p>{SITE.slogan}</p>
        </div>
        <div className="footer-links">
          <strong>바로가기</strong>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="footer-links">
          <strong>고객센터</strong>
          <a href={SITE.kakaoUrl} target="_blank" rel="noreferrer">
            오픈카카오톡
          </a>
          <a href={SITE.phoneHref}>전화 문의</a>
          <span>{SITE.hours}</span>
        </div>
      </div>
      <div className="container footer-notice">
        <p>상호: 햇살페이 · 이용 수수료: 업계 최저 · 상담 시 투명하게 안내</p>
        <p>
          햇살페이는 정식 PG사 등록 업체이며, SGI 서울보증보험에 가입되어
          있습니다.
        </p>
        <p className="footer-disclaimer">
          본 사이트는 결제 대행 정보 제공 서비스이며, 실제 금융 기관이 아닙니다.
        </p>
        <p>Copyright © 햇살페이 All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export function FloatingContact() {
  return (
    <div className="floating-contact" aria-label="빠른 문의">
      <a href={SITE.phoneHref} className="floating-phone" aria-label="전화 상담">
        <span className="card-call-icon" aria-hidden="true">
          <i />
        </span>
        <strong>전화 문의</strong>
      </a>
      <a
        href={SITE.kakaoUrl}
        target="_blank"
        rel="noreferrer"
        className="floating-kakao"
      >
        <span className="kakao-dot" aria-hidden="true" />
        <strong>카톡으로 시작</strong>
      </a>
    </div>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.documentElement.classList.add("motion-ready");

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <FloatingContact />
    </>
  );
}
