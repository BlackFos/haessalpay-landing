---
module_name: "JavaScript Application"
type: "frontend-logic"
description: "햇살페이 인터랙션 엔진. config-driven 동적 렌더링 + 7개 독립 모듈. Vanilla ES5 호환."
status: "active"
last_updated: "2026-04-15"
version: "1.1.0"
tags: ["vanilla-js", "intersection-observer", "config-driven", "animation"]
changeable_fields:
  - field: "scroll reveal 감도"
    file: "../config/site-config.js"
    key: "ui.revealThreshold"
  - field: "카운터 애니메이션 속도"
    file: "../config/site-config.js"
    key: "ui.counterDuration"
  - field: "피드 갱신 간격"
    file: "../config/site-config.js"
    key: "liveFeed.interval"
screenshot_dir: null
related_files:
  - "main.js"
  - "../config/site-config.js"
  - "../index.html"
---

# ⚡ JavaScript Application

## 모듈 구조

`main.js`는 IIFE 패턴으로 캡슐화된 7개 독립 모듈을 포함합니다.

| # | 모듈 | 함수명 | 설명 |
|---|------|--------|------|
| 0 | Dynamic Render | `renderDynamicContent()` | config → DOM 바인딩 (CTA, 페인, 차별점, 프로세스, FAQ, 면책) |
| 1 | Scroll Reveal | `initScrollReveal()` | IntersectionObserver 기반 `.reveal` → `.is-visible` |
| 2 | Nav Scroll | `initNavScroll()` | 스크롤 >20px 시 `.is-scrolled` 추가 |
| 3 | FAQ Accordion | `initFAQ()` | 이벤트 위임, 단일 오픈 토글 |
| 4 | Live Feed | `initLiveFeed()` | config 데이터 로테이션 (FIFO) |
| 5 | Floating Bar | `initFloatingBar()` | Hero 이탈 → `.is-visible` |
| 6 | Current Time | `initCurrentTime()` | `HH:MM 현재 상담 가능` 표시 |
| 7 | Stat Counter | `initCounters()` | easeOutCubic 카운터 애니메이션 (소수점 지원) |

## 데이터 흐름

```
config/site-config.js (SITE_CONFIG 전역 객체)
       ↓ window.SITE_CONFIG
js/main.js → renderDynamicContent()
       ↓ DOM 조작
index.html → 각 섹션 렌더링
```

## 확장 가이드

새 동적 섹션을 추가하려면:
1. `config/site-config.js`에 데이터 배열 추가
2. `index.html`에 빈 컨테이너 + `id` 배치
3. `main.js`의 `renderDynamicContent()`에 렌더링 로직 추가
