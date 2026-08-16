import type { Metadata } from "next";
import { BottomCTA, PageHero } from "../components/page-hero";
import { SiteShell } from "../components/site-chrome";
import { CARD_COMPANIES, SITE } from "../site-data";

export const metadata: Metadata = {
  title: "상품 소개 | 햇살페이",
  description:
    "신용카드 결제 서비스의 이용 절차, 수수료 안내, 지원 카드사를 한눈에 확인하세요.",
};

const PROCESS = [
  {
    index: "01",
    title: "카카오톡 또는 전화 상담",
    text: "오픈카카오톡 또는 전화로 원하시는 금액과 카드 종류를 말씀해 주세요.",
  },
  {
    index: "02",
    title: "신용카드로 결제",
    text: "안내에 따라 정식 PG사를 통해 신용카드 결제를 진행합니다.",
  },
  {
    index: "03",
    title: "5분 이내 현금 입금",
    text: "결제 확인 후 평균 5분 이내로 고객님 계좌로 입금이 완료됩니다.",
  },
];

const BENEFITS = [
  ["평균 5분 입금", "본인 확인만 되면 평균 5분 이내에 고객님 계좌로 입금됩니다."],
  ["신용등급 무관", "신용 조회를 하지 않아 신용점수에 영향이 없습니다."],
  ["365일 24시간", "주말, 공휴일 상관 없이 24시간 상담이 가능합니다."],
  ["무서류 · 무방문", "복잡한 서류 제출 없이 카톡이나 전화로 간편 진행합니다."],
] as const;

export default function ProductPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="서비스 안내"
        title="상품 소개"
        description="햇살페이가 제공하는 신용카드 결제 서비스를 자세히 안내해 드립니다."
      />

      <section className="section">
        <div className="container split-intro reveal">
          <div>
            <span className="section-kicker">서비스 개요</span>
            <h2>신용카드 결제 서비스란?</h2>
          </div>
          <div className="split-intro-copy">
            <p>
              신용카드의 남은 한도를 활용하여 현금으로 전환하는 서비스입니다.
              카드론이나 현금서비스와 달리 <strong>신용등급에 영향을 주지 않으며</strong>,
              복잡한 서류 없이 간편하게 이용할 수 있습니다.
            </p>
            <div className="service-note">
              <span>확인</span>
              <p>본인 명의 카드와 최소한의 본인 확인 절차가 필요합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-kicker">이용 절차</span>
            <h2>간편 이용 절차</h2>
            <p>상담부터 입금까지 필요한 과정만 간결하게 안내합니다.</p>
          </div>
          <div className="process-grid reveal">
            {PROCESS.map((item) => (
              <article className="process-card" key={item.index}>
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-kicker">햇살페이의 기준</span>
            <h2>햇살페이가 특별한 이유</h2>
          </div>
          <div className="benefit-grid reveal">
            {BENEFITS.map(([title, text], index) => (
              <article className="benefit-card" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section fee-section">
        <div className="container fee-card reveal">
          <div className="fee-label">
            <span>수수료</span>
            <strong>업계 최저</strong>
          </div>
          <div>
            <h2>수수료 안내</h2>
            <p>
              이용 금액에 따라 수수료가 달라지며, 상담 시 정확한 수수료를
              <strong> 투명하게 안내</strong>해 드립니다. 숨겨진 추가 비용은
              일체 없습니다.
            </p>
          </div>
          <a href={SITE.kakaoUrl} target="_blank" rel="noreferrer" className="button button-kakao">
            수수료 문의하기
          </a>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-kicker">지원 카드사</span>
            <h2>이용 가능 카드사</h2>
            <p>국내 전 카드사를 지원합니다.</p>
          </div>
          <div className="card-company-grid reveal">
            {CARD_COMPANIES.map((company, index) => (
              <div key={company}>
                <span className={`company-dot dot-${(index % 3) + 1}`} />
                <strong>{company}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA />
    </SiteShell>
  );
}
