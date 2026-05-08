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
