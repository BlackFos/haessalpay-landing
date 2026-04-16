---
module_name: "Site Configuration"
type: "config"
description: "햇살페이 전체 사이트의 변동 가능한 모든 값을 단일 파일로 관리. 연락처, 통계, 텍스트 콘텐츠, UI 동작 설정 포함."
status: "active"
last_updated: "2026-04-15"
version: "1.0.0"
tags: ["config", "changeable", "single-source-of-truth"]
changeable_fields:
  - field: "카카오톡 오픈채팅 URL"
    key: "contact.kakaoUrl"
    example: "https://open.kakao.com/o/gXXXXXX"
  - field: "상담 전화번호"
    key: "contact.phone"
    example: "010-1234-5678"
  - field: "텔레그램 URL"
    key: "contact.telegramUrl"
    example: "https://t.me/username"
  - field: "피드 갱신 간격 (ms)"
    key: "liveFeed.interval"
    example: "4000"
  - field: "통계 수치 전체"
    key: "stats.*"
  - field: "FAQ 항목"
    key: "faq[]"
  - field: "면책 조항"
    key: "disclaimer"
screenshot_dir: null
related_files:
  - "../js/main.js"
  - "../index.html"
---

# ⚙️ Site Configuration

## 개요

`site-config.js`는 **SITE_CONFIG** 글로벌 객체를 정의합니다.  
랜딩페이지의 모든 동적 콘텐츠와 CTA 링크는 이 파일에서 값을 가져옵니다.

## 수정 가이드

### 카카오톡 / 전화번호 변경

```javascript
contact: {
  kakaoUrl: 'https://open.kakao.com/o/실제URL',  // ← 여기 변경
  phone: '010-1234-5678',                        // ← 여기 변경
}
```

### 통계 수치 변경

```javascript
stats: {
  totalUsers: { value: 15000, suffix: '명+', decimals: 0, label: '누적 이용자' },
  // value, suffix, label 자유롭게 수정
}
```

### FAQ 항목 추가

```javascript
faq: [
  // 기존 항목 아래에 새 객체 추가
  { q: '질문 텍스트', a: '답변 텍스트' },
]
```

## 주의사항

- 이 파일은 `index.html`에서 `main.js`보다 **먼저** 로드됩니다.
- `window.SITE_CONFIG` 전역 변수명을 변경하면 `main.js`도 수정 필요합니다.
- 문자열 내 작은따옴표(`'`)는 `\'`로 이스케이프하세요.
