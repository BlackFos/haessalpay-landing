import type { Metadata } from "next";
import { FAQList } from "../components/faq-list";
import { BottomCTA, PageHero } from "../components/page-hero";
import { SiteShell } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "자주 묻는 질문 | 햇살페이",
  description:
    "햇살페이 이용 조건, 신용점수, 입금 시간, 개인정보, 수수료, 이용 카드사를 확인하세요.",
};

export default function FAQPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="자주 묻는 질문"
        title="자주 묻는 질문"
        description="햇살페이 이용에 대해 궁금한 점을 빠르게 확인해 보세요."
      />
      <section className="section">
        <div className="container faq-page-grid">
          <div className="faq-page-aside reveal reveal-left">
            <span className="section-kicker">문의 안내</span>
            <h2>필요한 답변을<br />한눈에 찾으세요</h2>
            <p>찾으시는 답변이 없다면 오픈카카오톡이나 전화로 편하게 문의해 주세요.</p>
          </div>
          <div className="reveal reveal-right">
            <FAQList />
          </div>
        </div>
      </section>
      <BottomCTA
        title="찾으시는 답변이 없으신가요?"
        description="24시간 상담 담당자가 안내해 드립니다."
      />
    </SiteShell>
  );
}
