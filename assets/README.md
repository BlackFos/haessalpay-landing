---
module_name: "Static Assets"
type: "assets"
description: "햇살페이 정적 자산. 스크린샷(번호체계), 아이콘, 이미지 관리."
status: "active"
last_updated: "2026-04-15"
version: "1.0.0"
tags: ["assets", "screenshots", "icons", "images"]
changeable_fields:
  - field: "로고 이미지"
    file: "icons/logo.svg"
    note: "현재 이모지(☀️) → SVG 로고로 교체 예정"
  - field: "OG 이미지"
    file: "images/og-image.png"
    note: "소셜 공유용 1200x630 이미지"
screenshot_dir: "screenshots/"
related_files:
  - "../index.html"
  - "../css/components.css"
---

# 📁 Static Assets

## 디렉토리 구조

```
assets/
├── screenshots/          ← 에이전트 자동 스크린샷 (번호체계)
│   ├── 01_hero_desktop.png
│   ├── 02_process_desktop.png
│   └── 03_cta_footer_desktop.png
├── icons/                ← SVG 아이콘, 로고
└── images/               ← 배경, OG 이미지, 기타
```

## 스크린샷 네이밍 규칙

```
{번호}_{섹션명}_{뷰포트}.{확장자}
```

| 필드 | 값 | 예시 |
|------|----|------|
| 번호 | `01_`, `02_` ... | 순서대로 |
| 섹션명 | 소문자 영문 | `hero`, `process`, `cta_footer` |
| 뷰포트 | `desktop` / `mobile` | 반응형 기기 |
| 확장자 | `png` / `webp` | 웹 최적화 시 webp |

## TODO

- [ ] SVG 로고 제작 후 `icons/logo.svg`에 저장
- [ ] OG 이미지 제작 후 `images/og-image.png`에 저장
