import type { Metadata } from "next";
import { BottomCTA, PageHero } from "../components/page-hero";
import { SiteShell } from "../components/site-chrome";
import { SITE } from "../site-data";

export const metadata: Metadata = {
  title: "문의 방법 | 햇살페이",
  description:
    "오픈카카오톡 또는 카드 아이콘 전화상담으로 햇살페이에 문의하세요. 365일 24시간 상담합니다.",
};

const CONTACT_PROCESS = [
  ["01", "상담 연결", "오픈카카오톡 또는 전화로 연락 주시면 전문 매니저가 즉시 응대합니다."],
  ["02", "맞춤 안내", "원하시는 금액과 보유 카드를 말씀해 주시면 최적의 수수료와 절차를 안내해 드립니다."],
  ["03", "결제 진행", "안내에 따라 정식 PG사를 통해 신용카드 결제를 진행합니다."],
  ["04", "입금 완료", "결제 확인 후 평균 5분 이내로 고객님 계좌에 입금됩니다."],
] as const;

export default function RequestPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="CONTACT"
        title="문의 방법"
        description="편한 방법으로 언제든 연락해 주세요. 24시간 전문 매니저가 대기 중입니다."
      />

      <section className="section">
        <div className="container contact-method-grid">
          <article className="contact-method kakao-method">
            <span className="contact-method-index">01</span>
            <div className="contact-method-icon kakao-symbol" aria-hidden="true" />
            <span className="section-kicker">OPEN KAKAO</span>
            <h2>카카오톡 상담</h2>
            <p>
              햇살페이 오픈카카오톡으로 바로 상담을 시작하세요. 사진과
              스크린샷 전달이 간편하고 상담 내용을 다시 확인할 수 있습니다.
            </p>
            <ul>
              <li>24시간 상담 가능</li>
              <li>사진·스크린샷 전송 간편</li>
              <li>상담 기록 자동 보관</li>
            </ul>
            <a
              href={SITE.kakaoUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-kakao"
            >
              카카오톡으로 상담하기
            </a>
          </article>

          <article className="contact-method phone-method">
            <span className="contact-method-index">02</span>
            <div className="contact-method-icon">
              <span className="large-card-icon" aria-hidden="true">
                <i />
              </span>
            </div>
            <span className="section-kicker">CARD ICON CALL</span>
            <h2>전화 상담</h2>
            <p>
              번호를 크게 노출하지 않는 카드 아이콘형 전화 버튼입니다. 한 번
              누르면 바로 상담이 시작되어 빠르고 정확한 안내를 받을 수 있습니다.
            </p>
            <ul>
              <li>즉시 연결</li>
              <li>복잡한 문의에 적합</li>
              <li>365일 운영</li>
            </ul>
            <a href={SITE.phoneHref} className="button button-dark">
              <span className="credit-mini" aria-hidden="true" />
              전화 연결하기
            </a>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">HOW IT WORKS</span>
            <h2>상담은 이렇게 진행됩니다</h2>
          </div>
          <div className="timeline">
            {CONTACT_PROCESS.map(([index, title, text]) => (
              <article key={index}>
                <span>{index}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-safety">
        <div className="container safety-card">
          <div className="safety-mark">!</div>
          <div>
            <span className="section-kicker">SAFETY NOTICE</span>
            <h2>공식 링크를 꼭 확인해 주세요</h2>
            <p>
              최근 햇살페이를 사칭한 업체에서 사기피해를 겪는 분들이 속출하고
              있습니다. 햇살페이는 플러스친구 운영을 하지 않습니다. 본 사이트의
              공식 오픈카카오톡 링크를 이용해 주세요.
            </p>
          </div>
        </div>
      </section>

      <BottomCTA title="편한 방법으로 바로 문의하세요" />
    </SiteShell>
  );
}
