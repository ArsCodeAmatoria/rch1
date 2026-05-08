import type {NextConfig} from "next";
import createNextIntlPlugin from "next-intl/plugin";
import withPWAInit from "next-pwa";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development"
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /** Serve load-chart PDFs from public/load-charts/ at /redtc/chart-pdf/* so links stay under REDTC. */
  async rewrites() {
    return [{source: "/redtc/chart-pdf/:file", destination: "/load-charts/:file"}];
  }
};

export default withPWA(withNextIntl(nextConfig));
