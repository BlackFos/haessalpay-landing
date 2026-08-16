import type { Metadata } from "next";
import { BottomCTA, PageHero } from "../components/page-hero";
import { SiteShell } from "../components/site-chrome";
import { REVIEWS } from "../site-data";

export const metadata: Metadata = {
  title: "실제 후기 | 햇살페이",
  description:
    "햇살페이를 이용한 고객들의 상담·진행 후기를 확인하세요.",
};

export default function ReviewPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="이용 후기"
        title="실제 후기"
        description="햇살페이를 이용하신 고객님들의 실제 후기를 확인해 보세요."
      />
      <section className="section reviews-page">
        <div className="container">
          <div className="review-summary reveal">
            <div>
              <span>이용 현황</span>
              <strong>4,998+</strong>
              <p>햇살페이 누적 이용자</p>
            </div>
            <p>
              개인정보 보호를 위해 이용자 이름 일부를 마스킹했습니다.
              상담 속도와 조건은 이용 상황에 따라 달라질 수 있습니다.
            </p>
          </div>
          <div className="reviews-grid reveal">
            {REVIEWS.map((review, index) => (
              <article className="review-card" key={review.name}>
                <div className="review-top">
                  <span className="review-avatar">{review.name[0]}</span>
                  <div>
                    <strong>{review.name}</strong>
                    <span>평점 5.0</span>
                  </div>
                  <small>0{index + 1}</small>
                </div>
                <p>{review.text}</p>
                <span className="review-meta">{review.meta}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <BottomCTA />
    </SiteShell>
  );
}
