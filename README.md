---
module_name: "HaessalPay Landing Page"
type: "frontend"
description: "햇살페이 멀티페이지 랜딩. 메인+4개 서브페이지, config-driven CTA, 모바일 퍼스트 반응형."
status: "production"
last_updated: "2026-04-18"
version: "3.2.0"
tags: ["landing-page", "vanilla-js", "responsive", "fintech", "conversion"]
changeable_fields:
  - field: "카카오톡 URL"
    file: "config/site-config.js"
    key: "contact.kakaoUrl"
  - field: "카카오톡 ID"
    file: "config/site-config.js"
    key: "contact.kakaoId"
  - field: "전화번호"
    file: "config/site-config.js"
    key: "contact.phone"
  - field: "앱 다운로드 URL (Android)"
    file: "config/site-config.js"
    key: "app.android.storeUrl"
  - field: "앱 다운로드 URL (iOS)"
    file: "config/site-config.js"
    key: "app.ios.storeUrl"
  - field: "FAQ 항목"
    file: "config/site-config.js"
    key: "faq[]"
  - field: "실시간 피드 데이터"
    file: "config/site-config.js"
    key: "liveFeed[]"
  - field: "사칭 경고문"
    file: "config/site-config.js"
    key: "warning.*"
  - field: "면책 조항"
    file: "config/site-config.js"
    key: "disclaimer"
  - field: "회사 정보 (Footer)"
    file: "config/site-config.js"
    key: "company.*"
  - field: "컬러 팔레트"
    file: "css/variables.css"
    key: "--color-primary, --color-accent 등"
screenshot_dir: "assets/screenshots/"
related_files:
  - "config/site-config.js"
  - "css/variables.css"
  - "css/sections.css"
  - "js/main.js"
  - "index.html"
  - "product.html"
  - "review.html"
  - "request.html"
  - "faq.html"
---

# 햇살페이 랜딩페이지

## 정본(Canon) 안내

> **이 디렉터리(`haessalpay-landing-deploy/`)가 유일한 정본입니다.**
> `1. 랜딩페이지/`는 초기 개발 스냅샷이며 더 이상 유지보수하지 않습니다.

## 아키텍처

```
haessalpay-landing-deploy/          ← 정본 (Vercel 배포)
├── index.html                      ← 메인 랜딩 (Hero + 앱 다운로드 + 소개 + 피드 + FAQ 등)
├── product.html                    ← 상품 소개
├── review.html                     ← 실제 후기
├── request.html                    ← 문의 방법
├── faq.html                        ← FAQ 전체
├── config/
│   └── site-config.js              ← 모든 변동값 (연락처, 앱 URL, FAQ, 피드 등)
├── css/
│   ├── variables.css               ← 디자인 토큰 (컬러 HEX, 폰트, 그림자, 간격)
│   ├── reset.css                   ← CSS 리셋
│   ├── layout.css                  ← 그리드, 컨테이너
│   ├── components.css              ← 버튼, 카드, 배지, FAQ, 네비, 플로팅바
│   └── sections.css                ← 페이지별 섹션 스타일
├── js/
│   └── main.js                     ← 인터랙션 (헤더, 카운터, 피드, FAQ, CTA 바인딩)
└── assets/
    ├── fonts/                      ← NanumSquareRound (4 weights, TTF)
    ├── guides/                     ← Android/iOS 사용 가이드 PDF
    ├── images/                     ← 로고, 히어로, 인트로 일러스트
    ├── reviews/                    ← 후기 스크린샷
    └── screenshots/                ← 사이트 스크린샷 (검증용)
```

## site-config.js 실제 키 구조

```javascript
SITE_CONFIG = {
  brand:    { name, nameEn, slogan, domain, year },
  app:      { android: { storeUrl, guideUrl, label }, ios: { ... } },
  contact:  { kakaoUrl, kakaoId, kakaoLabel, phone, phoneDisplay, operatingHours },
  liveFeed: [ { name, amount }, ... ],
  faq:      [ { q, a }, ... ],
  warning:  { title, text },
  disclaimer: "...",
  company:  { name, feeNotice, legalNotice },
}
```

## 변경 방법

| 변경 대상 | 수정 파일 | 키 |
|-----------|-----------|-----|
| 카카오톡 URL | `config/site-config.js` | `contact.kakaoUrl` |
| 카카오톡 ID | `config/site-config.js` | `contact.kakaoId` |
| 전화번호 | `config/site-config.js` | `contact.phone` |
| 앱 스토어 URL | `config/site-config.js` | `app.android.storeUrl` / `app.ios.storeUrl` |
| FAQ 항목 | `config/site-config.js` | `faq[]` |
| 피드 데이터 | `config/site-config.js` | `liveFeed[]` |
| 컬러 팔레트 | `css/variables.css` | CSS Custom Properties |

> **주의**: 현재 Header/Footer/Floating Bar의 전화번호·카카오 ID는 각 HTML에 직접 기재되어 있습니다.
> `data-cta` 속성이 있는 요소만 `main.js`에서 config 값을 자동 바인딩합니다.

## 페이지 구성

| 파일 | 용도 | 주요 섹션 |
|------|------|----------|
| `index.html` | 메인 랜딩 | Hero → 앱 다운로드 → 소개 카드 → 실시간 피드 → FAQ → CTA |
| `product.html` | 상품 소개 | 서비스 개요 → 이용 절차 → 특장점 → 수수료 → 카드사 |
| `review.html` | 실제 후기 | 후기 카드 그리드 |
| `request.html` | 문의 방법 | 카카오톡/전화 안내 → 사칭 경고 |
| `faq.html` | FAQ | 전체 FAQ 목록 |

## 로컬 실행

```bash
python -m http.server 8080
# 또는
npx -y serve . -l 3000
```

## 배포

Git push → Vercel 자동 배포 (도메인: `sun-pay.kr`)
