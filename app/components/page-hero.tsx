import { SITE } from "../site-data";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="sub-hero">
      <div className="sub-hero-sun" aria-hidden="true" />
      <div className="container sub-hero-inner">
        <span className="section-kicker">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="sub-hero-actions">
          <a
            href={SITE.kakaoUrl}
            target="_blank"
            rel="noreferrer"
            className="button button-kakao"
          >
            카카오톡 상담
          </a>
          <a href={SITE.phoneHref} className="button button-card">
            <span className="credit-mini" aria-hidden="true" />
            전화 상담
          </a>
        </div>
      </div>
    </section>
  );
}

export function BottomCTA({
  title = "지금 바로 상담받으세요",
  description = "365일 24시간 · 평균 5분 이내 처리",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bottom-cta">
      <div className="container bottom-cta-inner">
        <div>
          <span>HAESSALPAY CARE</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="bottom-cta-actions">
          <a
            href={SITE.kakaoUrl}
            target="_blank"
            rel="noreferrer"
            className="button button-kakao"
          >
            오픈카카오톡 상담
          </a>
          <a href={SITE.phoneHref} className="button button-light">
            <span className="credit-mini" aria-hidden="true" />
            카드 아이콘 전화상담
          </a>
        </div>
      </div>
    </section>
  );
}
