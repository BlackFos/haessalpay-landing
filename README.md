# 햇살페이 멀티페이지 사이트

햇살페이의 기존 컬러·문구를 유지하면서 위고페이식 신뢰형 레이아웃으로 전면 개편한 공식 웹사이트입니다.

## 페이지

- `/` 서비스 소개
- `/product` 상품 소개
- `/request` 문의 방법
- `/faq` 자주 묻는 질문
- `/review` 실제 후기

## 연락처

- 전화: `010-6731-0613` — 화면에는 카드 아이콘형 전화상담 CTA로 노출
- 오픈카카오톡: `https://open.kakao.com/o/sV94R7Ii`

연락처와 공통 데이터는 `app/site-data.ts`에서 관리합니다.

## 생성형 에셋

- `public/brand/haessal-mark-v2.png`
- `public/visuals/hero-card-consultation-natural.webp`
- `public/visuals/chat-consultation-natural.webp`
- `public/og.png`
- `브랜딩/일상연구소_온도/assets/`

이미지 원본은 자연광 기반의 실제 촬영 스타일로 제작하고 웹 표시 크기에 맞춰 압축했습니다. 사이트 서체는 위고페이와 동일한 Pretendard Variable 1.3.9를 로컬 파일로 사용합니다.

## 개발

Node.js 22.13 이상이 필요합니다.

```bash
npm install
npm run dev
npm run build
```

## 배포

`.openai/hosting.json`의 기존 `project_id`를 재사용합니다. 새 사이트를 만들지 말고, 빌드 후 저장된 버전을 배포합니다.
