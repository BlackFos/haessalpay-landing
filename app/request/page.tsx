import type { Metadata } from "next";
import { BottomCTA, PageHero } from "../components/page-hero";
import { SiteShell } from "../components/site-chrome";
import { SITE } from "../site-data";

export const metadata: Metadata = {
  title: "문의 방법 | 햇살페이",
  description:
    "오픈카카오톡 또는 전화로 햇살페이에 문의하세요. 365일 24시간 상담합니다.",
};

const CONTACT_PROCESS = [
  ["01", "상담 연결", "오픈카카오톡 또는 전화로 문의를 남겨 주세요."],
  ["02", "내용 확인", "원하시는 금액과 보유 카드를 확인한 뒤 수수료와 절차를 안내합니다."],
  ["03", "결제 진행", "안내에 따라 정식 PG사를 통해 신용카드 결제를 진행합니다."],
  ["04", "입금 완료", "결제 확인 후 평균 5분 이내로 고객님 계좌에 입금됩니다."],
] as const;

export default function RequestPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="문의 안내"
        title="문의 방법"
        description="카카오톡이나 전화 중 편한 방법으로 문의해 주세요. 확인하는 순서대로 안내드립니다."
      />

      <section className="section">
        <div className="container contact-method-grid reveal">
          <article className="contact-method kakao-method">
            <span className="contact-method-index">01</span>
            <div className="contact-method-icon kakao-symbol" aria-hidden="true" />
            <span className="section-kicker">오픈카카오톡</span>
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
            <span className="section-kicker">전화 문의</span>
            <h2>전화로 빠르게 안내받기</h2>
            <p>
              상담 내용을 말로 편하게 확인하고 싶다면 아래 버튼을 눌러 주세요.
              연결 후 이용 방법과 진행 순서를 안내합니다.
            </p>
            <ul>
              <li>통화로 내용 확인</li>
              <li>진행 순서 안내</li>
              <li>365일 24시간 상담</li>
            </ul>
            <a href={SITE.phoneHref} className="button button-dark">
              <span className="credit-mini" aria-hidden="true" />
              전화로 문의하기
            </a>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-kicker">상담 절차</span>
            <h2>상담은 이렇게 진행됩니다</h2>
          </div>
          <div className="timeline reveal">
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
        <div className="container safety-card reveal">
          <div className="safety-mark">!</div>
          <div>
            <span className="section-kicker">안전 안내</span>
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
