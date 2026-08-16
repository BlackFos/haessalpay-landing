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
    title: "간편한 카카오톡 상담",
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
    text: "주말과 공휴일에도 상담 담당자가 365일 24시간 안내합니다.",
  },
  {
    index: "04",
    badge: "투명한 안내",
    title: "수수료 사전 안내",
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
          <div className="hero-copy reveal reveal-left">
            <span className="eyebrow">
              모든 대출 · 소액결제 · 상품권 · 콘텐츠
            </span>
            <h1>
              모든 금융 문의를
              <br />
              <em>친절히 상담합니다</em>
            </h1>
            <p>
              다양한 금융 문의를 한곳에서 편하게 상담하세요.
              <br />
              저신용 고객도 상담 가능하며, 신용 관리 방향을 함께 살펴드립니다.
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
              <span>저신용 고객 상담 가능</span>
              <i />
              <span>신용 상황별 맞춤 안내</span>
            </div>
          </div>

          <div className="hero-visual reveal reveal-right">
            <div className="hero-art-frame">
              <img
                src="/visuals/hero-card-consultation-v2.webp"
                alt="카드와 휴대폰을 활용한 햇살페이 통합 상담 안내"
                width="1536"
                height="1024"
              />
              <div className="hero-chat-mockup" aria-hidden="true">
                <div className="hero-chat-head">
                  <img src="/brand/haessal-mark-v2.png" alt="" />
                  <span>
                    <strong>햇살페이</strong>
                    <small>상담 가능</small>
                  </span>
                </div>
                <div className="hero-chat-body">
                  <p className="mock-message received">
                    필요한 상품을 편하게 말씀해 주세요.
                  </p>
                  <p className="mock-message sent">
                    저신용인데도 상담할 수 있나요?
                  </p>
                  <p className="mock-message received">
                    네, 현재 상황부터 함께 확인해 드립니다.
                  </p>
                </div>
              </div>
              <div className="hero-art-label">
                <span>햇살페이 통합 상담</span>
                <strong>대출·소액결제·콘텐츠</strong>
              </div>
            </div>
            <div className="hero-mini-proof">
              <img src="/brand/haessal-mark-v2.png" alt="" />
              <span>
                <small>현재 상담 상태</small>
                <strong>바로 상담 가능</strong>
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
          <div className="chat-preview-visual reveal reveal-left">
            <img
              src="/visuals/chat-consultation-v2.webp"
              alt="휴대폰으로 상담 내용을 확인하는 모습"
              width="1120"
              height="1400"
              loading="lazy"
            />
            <div className="chat-message-layer" aria-hidden="true">
              <p>안녕하세요. 무엇을 도와드릴까요?</p>
              <p>수수료와 진행 순서부터 알고 싶어요.</p>
              <span>상담 내용을 확인하고 있습니다</span>
            </div>
          </div>
          <div className="chat-preview-copy reveal reveal-right">
            <span className="section-kicker">카카오톡 상담</span>
            <h2>
              필요한 내용을
              <br />
              <em>차근차근 안내합니다</em>
            </h2>
            <p>
              카카오톡으로 문의를 남기면 상담에 필요한 내용과 진행 순서를
              담당자가 확인해 안내합니다.
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
          <div className="section-heading left reveal">
            <span className="section-kicker">서비스 안내</span>
            <h2>
              간단하게 확인하는
              <br />
              햇살페이 간편결제
            </h2>
            <p>복잡한 절차 없이 카톡 한 통으로 써보세요.</p>
          </div>
          <div className="feature-grid reveal">
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
              상품 상세설명
            </a>
          </div>
        </div>
      </section>

      <section className="section section-alt recent-section">
        <div className="container recent-grid">
          <div className="recent-copy reveal reveal-left">
            <span className="section-kicker">진행 현황</span>
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
          <div className="case-table reveal reveal-right">
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
          <div className="section-heading reveal">
            <span className="section-kicker">안전한 이용</span>
            <h2>햇살페이, 믿고 써도 될까요?</h2>
            <p>
              햇살페이는 정식 등록된 사업체로, 모든 절차를 투명하게 안내합니다.
            </p>
          </div>
          <div className="trust-grid reveal">
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
          <div className="section-heading spread reveal">
            <div>
              <span className="section-kicker">이용 후기</span>
              <h2>실제 이용후기</h2>
              <p>햇살페이를 선택한 고객들의 이용 후기입니다.</p>
            </div>
            <a href="/review" className="text-link">
              전체 후기 보기
            </a>
          </div>
          <div className="home-review-grid reveal">
            {REVIEWS.slice(0, 3).map((review) => (
              <article className="home-review-card" key={review.name}>
                <div>
                  <span className="review-avatar">{review.name[0]}</span>
                  <strong>{review.name}</strong>
                  <small>평점 5.0</small>
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
          <div className="section-heading reveal">
            <span className="section-kicker">자주 묻는 질문</span>
            <h2>자주 묻는 질문</h2>
            <p>궁금한 점을 빠르게 확인하세요.</p>
          </div>
          <div className="narrow">
            <FAQList limit={4} />
          </div>
          <div className="center-button">
            <a href="/faq" className="button button-card">
              전체 FAQ 보기
            </a>
          </div>
        </div>
      </section>

      <section className="section warning-section">
        <div className="container warning-card reveal">
          <span className="warning-mark">!</span>
          <div>
            <span className="section-kicker">공식 안내</span>
            <h2>공식 상담 경로를 확인해 주세요</h2>
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
