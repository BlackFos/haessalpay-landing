---
module_name: "HaessalPay Landing Page"
type: "frontend"
description: "햇살페이 원페이지 랜딩. 9섹션 구성, config-driven 동적 렌더링, 모바일 퍼스트 반응형."
status: "development"
last_updated: "2026-04-15"
version: "1.1.0"
tags: ["landing-page", "vanilla-js", "responsive", "fintech", "conversion"]
changeable_fields:
  - field: "카카오톡 URL"
    file: "config/site-config.js"
    key: "contact.kakaoUrl"
  - field: "전화번호"
    file: "config/site-config.js"
    key: "contact.phone"
  - field: "통계 수치"
    file: "config/site-config.js"
    key: "stats.*"
  - field: "FAQ 항목"
    file: "config/site-config.js"
    key: "faq[]"
  - field: "실시간 피드 데이터"
    file: "config/site-config.js"
    key: "liveFeed.items[]"
  - field: "페인 포인트"
    file: "config/site-config.js"
    key: "painPoints[]"
  - field: "차별점"
    file: "config/site-config.js"
    key: "features[]"
  - field: "프로세스 단계"
    file: "config/site-config.js"
    key: "process[]"
  - field: "면책 조항"
    file: "config/site-config.js"
    key: "disclaimer"
  - field: "컬러 팔레트"
    file: "css/variables.css"
    key: "--color-primary, --color-accent, --color-bg"
screenshot_dir: "assets/screenshots/"
related_files:
  - "config/site-config.js"
  - "css/variables.css"
  - "css/reset.css"
  - "css/layout.css"
  - "css/components.css"
  - "css/sections.css"
  - "js/main.js"
  - "index.html"
---

# 🌤️ 햇살페이 랜딩페이지

## 아키텍처

```
1. 랜딩페이지/
├── index.html              ← 시맨틱 마크업 (9섹션 원페이지)
├── config/
│   └── site-config.js      ← ★ 모든 변동값 (연락처, 수치, 텍스트)
├── css/
│   ├── variables.css        ← 디자인 토큰 (컬러, 폰트, 그림자)
│   ├── reset.css            ← CSS 리셋
│   ├── layout.css           ← 그리드, 플렉스, scroll-reveal
│   ├── components.css       ← 버튼, 카드, 배지, FAQ, 네비, 플로팅바
│   └── sections.css         ← 9개 섹션별 스타일
├── js/
│   └── main.js              ← 7개 모듈 (config 참조)
└── assets/
    ├── screenshots/         ← 자동 스크린샷 (01_, 02_ 번호체계)
    ├── icons/
    └── images/
```

## 변경 방법

| 변경 대상 | 수정 파일 | 키 |
|-----------|-----------|-----|
| 카카오톡 URL | `config/site-config.js` | `contact.kakaoUrl` |
| 전화번호 | `config/site-config.js` | `contact.phone` |
| 통계 수치 | `config/site-config.js` | `stats.*` |
| FAQ 항목 추가/수정 | `config/site-config.js` | `faq[]` |
| 실시간 피드 데이터 | `config/site-config.js` | `liveFeed.items[]` |
| 컬러 팔레트 | `css/variables.css` | CSS 변수 |

## 로컬 실행

```bash
npx -y serve . -l 3000
```

## 9섹션 구조

| # | 섹션 | ID | 데이터 소스 |
|---|------|----|-------------|
| 0 | NAV | `#nav` | 정적 |
| 1 | HERO | `#hero` | `contact.*` |
| 2 | PAIN | `#pain` | `painPoints[]` |
| 3 | WHY | `#why` | `features[]` |
| 4 | PROCESS | `#process` | `process[]` |
| 5 | REVIEWS | `#reviews` | `liveFeed.*` |
| 6 | STATS | `#stats` | `stats.*` |
| 7 | FAQ | `#faq` | `faq[]` |
| 8 | BOTTOM CTA | `#cta-bottom` | `contact.*` |
| 9 | FOOTER | `#footer` | `disclaimer` |

## 스크린샷

| 파일 | 설명 |
|------|------|
| `assets/screenshots/01_hero_desktop.png` | 히어로 + 네비 (데스크톱) |
| `assets/screenshots/02_process_desktop.png` | 프로세스 + 리뷰 (데스크톱) |
| `assets/screenshots/03_cta_footer_desktop.png` | 하단 CTA + 푸터 (데스크톱) |
