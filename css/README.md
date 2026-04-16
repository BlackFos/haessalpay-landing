---
module_name: "CSS Design System"
type: "frontend-style"
description: "햇살페이 디자인 시스템. 5개 레이어(토큰→리셋→레이아웃→컴포넌트→섹션)으로 구성된 CSS 아키텍처."
status: "active"
last_updated: "2026-04-15"
version: "1.0.0"
tags: ["css", "design-system", "mobile-first", "glassmorphism", "blue-gold"]
changeable_fields:
  - field: "Primary Color (블루)"
    file: "variables.css"
    key: "--color-primary"
    current: "#1B5E9E"
  - field: "Accent Color (골드)"
    file: "variables.css"
    key: "--color-accent"
    current: "#D4A843"
  - field: "Background (크림)"
    file: "variables.css"
    key: "--color-bg"
    current: "#F8F5EF"
  - field: "Font Primary"
    file: "variables.css"
    key: "--font-primary"
    current: "Pretendard"
  - field: "Glass Blur"
    file: "variables.css"
    key: "--glass-blur"
    current: "20px"
screenshot_dir: null
related_files:
  - "variables.css"
  - "reset.css"
  - "layout.css"
  - "components.css"
  - "sections.css"
  - "../index.html"
---

# 🎨 CSS Design System

## 레이어 구조 (로드 순서)

| # | 파일 | 역할 | LOC |
|---|------|------|-----|
| 1 | `variables.css` | 디자인 토큰 (컬러, 폰트, 간격, 그림자) | ~110 |
| 2 | `reset.css` | CSS 리셋 + 안티앨리어싱 | ~60 |
| 3 | `layout.css` | 그리드, 플렉스, scroll-reveal, 반응형 | ~130 |
| 4 | `components.css` | 버튼(5), 카드, 배지(4), FAQ, 피드, 네비, 플로팅바 | ~380 |
| 5 | `sections.css` | 9개 섹션별 고유 스타일 | ~300 |

## 컬러 시스템

| 토큰 | 값 | 용도 |
|------|----|------|
| `--color-primary` | `#1B5E9E` | 신뢰 블루 (CTA, 링크, 강조) |
| `--color-accent` | `#D4A843` | 따뜻한 골드 (보조 강조, 배지) |
| `--color-bg` | `#F8F5EF` | 크림 배경 |
| `--color-primary-light` | `#E8F0F8` | 블루 계열 배경 |
| `--color-success` | `#34C759` | 승인/성공 |
| `--color-kakao` | `#FEE500` | 카카오톡 버튼 |

## 브레이크포인트

| 구간 | 값 | 그리드 |
|------|----|--------|
| Mobile (base) | < 768px | 1열 |
| Tablet | ≥ 768px | 2-3열 |
| Desktop | ≥ 1024px | 풀 레이아웃 |

## 컴포넌트 목록

- **버튼**: `.btn--primary` / `.btn--kakao` / `.btn--outline` / `.btn--gold` / `.btn--pulse`
- **카드**: `.card` / `.card--glass` / `.card--flat`
- **배지**: `.badge--primary` / `.badge--success` / `.badge--gold` / `.badge--danger`
- **FAQ**: `.faq-item` (아코디언, `.is-open` 토글)
- **피드**: `.feed-item` (슬라이드 인 애니메이션)
- **네비**: `.nav` (글래스, `.is-scrolled`)
- **플로팅바**: `.floating-bar` (`.is-visible`)
