import {defineRouting} from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/safety-program": {
      en: "/safety-program",
      fr: "/safety-program"
    },
    "/tower-cranes": {
      en: "/tower-cranes",
      fr: "/tower-cranes"
    },
    "/rigging": {
      en: "/rigging",
      fr: "/rigging"
    },
    "/hoisting": {
      en: "/hoisting",
      fr: "/hoisting"
    },
    "/standards": {
      en: "/standards",
      fr: "/standards"
    },
    "/knowledge": {
      en: "/knowledge",
      fr: "/knowledge"
    },
    "/redtc": {
      en: "/redtc",
      fr: "/redtc"
    },
    "/redtc/test": {
      en: "/redtc/test",
      fr: "/redtc/test"
    },
    "/redtc/test/master": {
      en: "/redtc/test/master",
      fr: "/redtc/test/master"
    },
    "/redtc/test/review": {
      en: "/redtc/test/review",
      fr: "/redtc/test/review"
    },
    "/redtc/load-charts": {
      en: "/redtc/load-charts",
      fr: "/redtc/load-charts"
    },
    "/redtc/load-charts/[id]": {
      en: "/redtc/load-charts/[id]",
      fr: "/redtc/load-charts/[id]"
    },
    "/blog": {
      en: "/blog",
      fr: "/blog"
    },
    "/blog/[slug]": {
      en: "/blog/[slug]",
      fr: "/blog/[slug]"
    }
  }
});
