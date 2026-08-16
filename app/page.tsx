import { FAQList } from "./components/faq-list";
import { BottomCTA } from "./components/page-hero";
import { SiteShell } from "./components/site-chrome";
import {
  RECENT_CASES,
  REVIEWS,
  SITE,
  STATS,
  TRUST_ITEMS,
} from "./site-data";

const FEATURES = [
  {
    index: "01",
    badge: "무서류 · 무방문",
    title: "카톡 한 통이면 끝!",
    text: "복잡한 절차 없이 본인 확인에 필요한 최소 정보만 안내합니다.",
  },
  {
    index: "02",
    badge: "빠른 진행",
    title: "평균 5분 내 입금",
    text: "본인 카드만 있다면 신청 후 빠르게 확인하고 진행합니다.",
  },
  {
    index: "03",
    badge: "24시간 상담",
    title: "필요할 때 바로 연결",
    text: "주말과 공휴일에도 전문 상담원이 365일 24시간 대기합니다.",
  },
  {
    index: "04",
    badge: "투명한 안내",
    title: "숨겨진 비용 없이",
    text: "이용 금액에 따른 수수료와 절차를 시작 전에 명확히 안내합니다.",
  },
] as const;

export default function HomePage() {
  return (
    <SiteShell>
      <section className="hero">
        <div className="hero-sun hero-sun-one" aria-hidden="true" />
        <div className="hero-sun hero-sun-two" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">✦ 정식 PG사 등록 · 투명한 수수료 안내</span>
            <h1>
              신용카드 한도를
              <br />
              <em>현금으로</em>
            </h1>
            <p>
              {SITE.slogan}.
              <br />
              복잡한 서류 없이 평균 5분 내 빠르게 안내해 드립니다.
            </p>
            <div className="hero-actions">
              <a
                className="button button-kakao"
                href={SITE.kakaoUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className="kakao-dot" aria-hidden="true" />
                카카오톡으로 시작하기
              </a>
              <a className="button button-card" href={SITE.phoneHref}>
                <span className="credit-mini" aria-hidden="true" />
                전화 상담
              </a>
            </div>
            <div className="hero-proof">
              <span>365일 24시간</span>
              <i />
              <span>본인 확인 후 빠른 진행</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-art-frame">
              <img
                src="/visuals/hero-card-to-cash.webp"
                alt="신용카드에서 현금으로 이어지는 햇살페이 상담 과정"
              />
              <div className="hero-art-label">
                <span>HAESSALPAY</span>
                <strong>카드 → 상담 → 빠른 진행</strong>
              </div>
            </div>
            <div className="hero-mini-proof">
              <img src="/brand/haessal-mark.png" alt="" />
              <span>
                <small>현재 상담 상태</small>
                <strong>● 바로 상담 가능</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="quick-links">
          <div className="container quick-links-inner">
            <a href="/product">
              <span>01</span>
              <strong>이용방법</strong>
            </a>
            <a href="/review">
              <span>02</span>
              <strong>고객후기</strong>
            </a>
            <a href="/faq">
              <span>03</span>
              <strong>자주 묻는 질문</strong>
            </a>
            <a href={SITE.kakaoUrl} target="_blank" rel="noreferrer">
              <span>04</span>
              <strong>실시간 문의</strong>
            </a>
          </div>
        </div>

        <div className="stat-bar">
          <div className="container stats">
            {STATS.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section chat-preview">
        <div className="container chat-preview-inner">
          <div className="chat-preview-visual">
            <div className="chat-phone-aura" aria-hidden="true" />
            <img src="/visuals/chat-phone.webp" alt="햇살페이 카카오톡 상담 목업" />
            <div className="chat-overlay">
              <p>안녕하세요. 햇살페이입니다 ☀</p>
              <p>상담받고 싶어요.</p>
              <p>가능한 한도부터 빠르게 확인해 드릴게요.</p>
            </div>
          </div>
          <div className="chat-preview-copy">
            <span className="section-kicker light">REAL-TIME CARE</span>
            <h2>
              카톡 한 통이면
              <br />
              <em>바로 상담 시작!</em>
            </h2>
            <p>
              복잡한 절차 없이 카카오톡으로 실시간 전문 상담을 받아보세요.
              필요한 내용만 순서대로 안내합니다.
            </p>
            <ul className="check-list">
              <li>365일 24시간 상담</li>
              <li>사진·스크린샷 간편 전달</li>
              <li>상담 전 수수료 투명 안내</li>
            </ul>
            <a
              href={SITE.kakaoUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-kakao"
            >
              지금 바로 상담하기
            </a>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container">
          <div className="section-heading left">
            <span className="section-kicker">10-SECOND GUIDE</span>
            <h2>
              10초 만에 알아보는
              <br />
              햇살페이 간편결제
            </h2>
            <p>복잡한 절차 없이 카톡 한 통으로 써보세요.</p>
          </div>
          <div className="feature-grid">
            {FEATURES.map((item) => (
              <article className="feature-card" key={item.index}>
                <div className="feature-card-top">
                  <span>{item.index}</span>
                  <small>{item.badge}</small>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <i aria-hidden="true" />
              </article>
            ))}
          </div>
          <div className="center-button">
            <a href="/product" className="button button-dark">
              상품 상세설명 <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section section-alt recent-section">
        <div className="container recent-grid">
          <div className="recent-copy">
            <span className="section-kicker">RECENT STATUS</span>
            <h2>
              햇살페이
              <br />
              최근 진행현황
            </h2>
            <p>이용자 정보는 개인정보 보호를 위해 일부 마스킹했습니다.</p>
            <div className="live-pill">
              <i />
              최근 상담 기준
            </div>
          </div>
          <div className="case-table">
            <div className="case-table-head">
              <span>성함</span>
              <span>진행금액</span>
              <span>진행상태</span>
            </div>
            {RECENT_CASES.map((item) => (
              <div className="case-row" key={`${item.name}-${item.amount}`}>
                <span>{item.name}</span>
                <strong>{item.amount}</strong>
                <small className={item.status === "입금완료" ? "done" : ""}>
                  {item.status}
                </small>
              </div>
            ))}
            <p className="case-note">
              * 개인정보 보호를 위해 예시 데이터 일부를 마스킹하여 표시합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">TRUST STANDARD</span>
            <h2>햇살페이, 믿고 써도 될까요?</h2>
            <p>
              햇살페이는 정식 등록된 사업체로, 모든 절차를 투명하게 안내합니다.
            </p>
          </div>
          <div className="trust-grid">
            {TRUST_ITEMS.map((item) => (
              <article className="trust-card" key={item.index}>
                <div className="trust-seal">
                  <span>{item.index}</span>
                  <i />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reviews-section">
        <div className="container">
          <div className="section-heading spread">
            <div>
              <span className="section-kicker">CUSTOMER STORIES</span>
              <h2>실제 이용후기</h2>
              <p>햇살페이를 선택한 고객들의 이용 후기입니다.</p>
            </div>
            <a href="/review" className="text-link">
              전체 후기 보기 <span>→</span>
            </a>
          </div>
          <div className="home-review-grid">
            {REVIEWS.slice(0, 3).map((review) => (
              <article className="home-review-card" key={review.name}>
                <div>
                  <span className="review-avatar">{review.name[0]}</span>
                  <strong>{review.name}</strong>
                  <small>★★★★★</small>
                </div>
                <p>{review.text}</p>
                <span className="review-meta">{review.meta}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt home-faq">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">FAQ</span>
            <h2>자주 묻는 질문</h2>
            <p>궁금한 점을 빠르게 확인하세요.</p>
          </div>
          <div className="narrow">
            <FAQList limit={4} />
          </div>
          <div className="center-button">
            <a href="/faq" className="button button-card">
              전체 FAQ 보기 <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section warning-section">
        <div className="container warning-card">
          <span className="warning-mark">!</span>
          <div>
            <span className="section-kicker">OFFICIAL NOTICE</span>
            <h2>문의 전 주의하세요!</h2>
            <p>
              최근 햇살페이를 사칭한 업체에서 사기피해를 겪는 분들이 속출하고
              있습니다. <strong>햇살페이는 플러스친구 운영을 하지 않습니다.</strong>
              본 사이트에 연결된 공식 오픈카카오톡 링크를 이용해 주세요.
            </p>
          </div>
          <a href={SITE.kakaoUrl} target="_blank" rel="noreferrer" className="button button-dark">
            공식 링크 확인
          </a>
        </div>
      </section>

      <BottomCTA />
    </SiteShell>
  );
}
