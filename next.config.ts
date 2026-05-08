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
  reactStrictMode: true
};

export default withPWA(withNextIntl(nextConfig));
