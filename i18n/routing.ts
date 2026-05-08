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
    "/tower-cranes/operator-training-program": {
      en: "/tower-cranes/operator-training-program",
      fr: "/tower-cranes/operator-training-program"
    },
    "/tower-cranes/operator-training-program/regulatory-standards": {
      en: "/tower-cranes/operator-training-program/regulatory-standards",
      fr: "/tower-cranes/operator-training-program/regulatory-standards"
    },
    "/tower-cranes/operator-training-program/mathematics": {
      en: "/tower-cranes/operator-training-program/mathematics",
      fr: "/tower-cranes/operator-training-program/mathematics"
    },
    "/tower-cranes/operator-training-program/load-charts-capacity": {
      en: "/tower-cranes/operator-training-program/load-charts-capacity",
      fr: "/tower-cranes/operator-training-program/load-charts-capacity"
    },
    "/tower-cranes/operator-training-program/mechanical-systems": {
      en: "/tower-cranes/operator-training-program/mechanical-systems",
      fr: "/tower-cranes/operator-training-program/mechanical-systems"
    },
    "/tower-cranes/operator-training-program/climbing-procedures": {
      en: "/tower-cranes/operator-training-program/climbing-procedures",
      fr: "/tower-cranes/operator-training-program/climbing-procedures"
    },
    "/tower-cranes/operator-training-program/inspection-maintenance": {
      en: "/tower-cranes/operator-training-program/inspection-maintenance",
      fr: "/tower-cranes/operator-training-program/inspection-maintenance"
    },
    "/tower-cranes/operator-training-program/urban-operations": {
      en: "/tower-cranes/operator-training-program/urban-operations",
      fr: "/tower-cranes/operator-training-program/urban-operations"
    },
    "/tower-cranes/operator-training-program/overlap-right-of-way": {
      en: "/tower-cranes/operator-training-program/overlap-right-of-way",
      fr: "/tower-cranes/operator-training-program/overlap-right-of-way"
    },
    "/tower-cranes/operator-training-program/airspace-property-infrastructure": {
      en: "/tower-cranes/operator-training-program/airspace-property-infrastructure",
      fr: "/tower-cranes/operator-training-program/airspace-property-infrastructure"
    },
    "/tower-cranes/operator-training-program/regulatory-knowledge-requirements": {
      en: "/tower-cranes/operator-training-program/regulatory-knowledge-requirements",
      fr: "/tower-cranes/operator-training-program/regulatory-knowledge-requirements"
    },
    "/tower-cranes/operator-training-program/advanced-urban-compliance": {
      en: "/tower-cranes/operator-training-program/advanced-urban-compliance",
      fr: "/tower-cranes/operator-training-program/advanced-urban-compliance"
    },
    "/tower-cranes/operator-training-program/remote-operation": {
      en: "/tower-cranes/operator-training-program/remote-operation",
      fr: "/tower-cranes/operator-training-program/remote-operation"
    },
    "/tower-cranes/operator-training-program/self-erect-tower-cranes": {
      en: "/tower-cranes/operator-training-program/self-erect-tower-cranes",
      fr: "/tower-cranes/operator-training-program/self-erect-tower-cranes"
    },
    "/tower-cranes/operator-training-program/hoist-systems-wire-rope": {
      en: "/tower-cranes/operator-training-program/hoist-systems-wire-rope",
      fr: "/tower-cranes/operator-training-program/hoist-systems-wire-rope"
    },
    "/tower-cranes/operator-training-program/test-blocks-load-testing": {
      en: "/tower-cranes/operator-training-program/test-blocks-load-testing",
      fr: "/tower-cranes/operator-training-program/test-blocks-load-testing"
    },
    "/tower-cranes/operator-training-program/tower-crane-bases-foundations": {
      en: "/tower-cranes/operator-training-program/tower-crane-bases-foundations",
      fr: "/tower-cranes/operator-training-program/tower-crane-bases-foundations"
    },
    "/tower-cranes/operator-training-program/load-handling-swing-control": {
      en: "/tower-cranes/operator-training-program/load-handling-swing-control",
      fr: "/tower-cranes/operator-training-program/load-handling-swing-control"
    },
    "/tower-cranes/operator-training-program/public-safety-traffic-emergency": {
      en: "/tower-cranes/operator-training-program/public-safety-traffic-emergency",
      fr: "/tower-cranes/operator-training-program/public-safety-traffic-emergency"
    },
    "/tower-cranes/operator-training-program/tower-crane-controls-monitoring": {
      en: "/tower-cranes/operator-training-program/tower-crane-controls-monitoring",
      fr: "/tower-cranes/operator-training-program/tower-crane-controls-monitoring"
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
