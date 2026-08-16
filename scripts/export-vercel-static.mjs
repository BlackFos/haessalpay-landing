import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distRoot = path.join(projectRoot, "dist");
const clientRoot = path.join(distRoot, "client");
const outputRoot = path.join(projectRoot, "vercel-dist");
const configuredHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "sun-pay.kr";
const requestHost = configuredHost.replace(/^https?:\/\//, "");
const origin = `https://${requestHost}`;

const routes = [
  ["/", "index.html"],
  ["/product", "product.html"],
  ["/request", "request.html"],
  ["/faq", "faq.html"],
  ["/review", "review.html"],
];

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

const workerUrl = pathToFileURL(path.join(distRoot, "server", "index.js"));
workerUrl.searchParams.set("export", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const env = {
  ASSETS: {
    fetch: async (request) => {
      const url = new URL(request.url);
      const assetPath = path.join(clientRoot, url.pathname.replace(/^\/+/, ""));
      try {
        return new Response(await readFile(assetPath));
      } catch {
        return new Response("Not found", { status: 404 });
      }
    },
  },
};

const context = {
  waitUntil() {},
  passThroughOnException() {},
};

for (const [route, filename] of routes) {
  const response = await worker.fetch(
    new Request(`${origin}${route}`, {
      headers: {
        accept: "text/html",
        host: requestHost,
        "x-forwarded-host": requestHost,
        "x-forwarded-proto": "https",
      },
    }),
    env,
    context,
  );

  if (!response.ok) {
    throw new Error(`Failed to render ${route}: ${response.status}`);
  }

  await writeFile(path.join(outputRoot, filename), await response.text(), "utf8");
}

for (const entry of ["_next", "brand", "fonts", "visuals"]) {
  await cp(path.join(clientRoot, entry), path.join(outputRoot, entry), {
    recursive: true,
  });
}

for (const entry of ["og.png", "favicon.svg"]) {
  await cp(path.join(clientRoot, entry), path.join(outputRoot, entry));
}

console.log(`Exported ${routes.length} static routes to ${outputRoot}`);
