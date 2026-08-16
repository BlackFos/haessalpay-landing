import assert from "node:assert/strict";
import test from "node:test";

const routes = [
  ["/", "햇살페이", "신용카드 한도를"],
  ["/product", "상품 소개", "간편 이용 절차"],
  ["/request", "문의 방법", "카카오톡 상담"],
  ["/faq", "자주 묻는 질문", "신용카드만 있으면 누구나"],
  ["/review", "실제 후기", "김** 님"],
];

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    `${pathname}-${process.pid}-${Date.now()}-${Math.random()}`,
  );
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://sun-pay.kr${pathname}`, {
      headers: {
        accept: "text/html",
        host: "sun-pay.kr",
        "x-forwarded-host": "sun-pay.kr",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

for (const [pathname, title, expectedCopy] of routes) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, new RegExp(title));
    assert.match(html, new RegExp(expectedCopy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(html, /https:\/\/open\.kakao\.com\/o\/sV94R7Ii/);
    assert.match(html, /tel:010-6731-0613/);
    assert.doesNotMatch(html, /010-7510-1050|sbPgHyqi|codex-preview/);
  });
}

test("emits absolute social metadata", async () => {
  const response = await render("/");
  const html = await response.text();

  assert.match(html, /property="og:image" content="https:\/\/sun-pay\.kr\/og\.png"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /lang="ko"/);
});
