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
    "/rigging/education": {
      en: "/rigging/education",
      fr: "/rigging/education"
    },
    "/rigging/education/module-1": {
      en: "/rigging/education/module-1",
      fr: "/rigging/education/module-1"
    },
    "/rigging/education/module-2": {
      en: "/rigging/education/module-2",
      fr: "/rigging/education/module-2"
    },
    "/rigging/education/module-3": {
      en: "/rigging/education/module-3",
      fr: "/rigging/education/module-3"
    },
    "/rigging/education/module-4": {
      en: "/rigging/education/module-4",
      fr: "/rigging/education/module-4"
    },
    "/rigging/education/module-5": {
      en: "/rigging/education/module-5",
      fr: "/rigging/education/module-5"
    },
    "/rigging/education/module-6": {
      en: "/rigging/education/module-6",
      fr: "/rigging/education/module-6"
    },
    "/rigging/education/module-7": {
      en: "/rigging/education/module-7",
      fr: "/rigging/education/module-7"
    },
    "/rigging/education/module-8": {
      en: "/rigging/education/module-8",
      fr: "/rigging/education/module-8"
    },
    "/rigging/education/module-9": {
      en: "/rigging/education/module-9",
      fr: "/rigging/education/module-9"
    },
    "/rigging/education/module-10": {
      en: "/rigging/education/module-10",
      fr: "/rigging/education/module-10"
    },
    "/rigging/education/module-11": {
      en: "/rigging/education/module-11",
      fr: "/rigging/education/module-11"
    },
    "/rigging/education/module-12": {
      en: "/rigging/education/module-12",
      fr: "/rigging/education/module-12"
    },
    "/rigging/education/module-13": {
      en: "/rigging/education/module-13",
      fr: "/rigging/education/module-13"
    },
    "/rigging/education/module-14": {
      en: "/rigging/education/module-14",
      fr: "/rigging/education/module-14"
    },
    "/rigging/education/module-15": {
      en: "/rigging/education/module-15",
      fr: "/rigging/education/module-15"
    },
    "/rigging/education/module-16": {
      en: "/rigging/education/module-16",
      fr: "/rigging/education/module-16"
    },
    "/rigging/education/module-17": {
      en: "/rigging/education/module-17",
      fr: "/rigging/education/module-17"
    },
    "/rigging/education/module-18": {
      en: "/rigging/education/module-18",
      fr: "/rigging/education/module-18"
    },
    "/rigging/education/module-19": {
      en: "/rigging/education/module-19",
      fr: "/rigging/education/module-19"
    },
    "/rigging/education/module-20": {
      en: "/rigging/education/module-20",
      fr: "/rigging/education/module-20"
    },
    "/rigging/education/module-21": {
      en: "/rigging/education/module-21",
      fr: "/rigging/education/module-21"
    },
    "/rigging/education/module-22": {
      en: "/rigging/education/module-22",
      fr: "/rigging/education/module-22"
    },
    "/rigging/education/module-23": {
      en: "/rigging/education/module-23",
      fr: "/rigging/education/module-23"
    },
    "/rigging/education/module-24": {
      en: "/rigging/education/module-24",
      fr: "/rigging/education/module-24"
    },
    "/rigging/education/module-25": {
      en: "/rigging/education/module-25",
      fr: "/rigging/education/module-25"
    },
    "/rigging/education/appendix-a": {
      en: "/rigging/education/appendix-a",
      fr: "/rigging/education/appendix-a"
    },
    "/rigging/education/appendix-b": {
      en: "/rigging/education/appendix-b",
      fr: "/rigging/education/appendix-b"
    },
    "/rigging/education/appendix-c": {
      en: "/rigging/education/appendix-c",
      fr: "/rigging/education/appendix-c"
    },
    "/rigging/education/appendix-d": {
      en: "/rigging/education/appendix-d",
      fr: "/rigging/education/appendix-d"
    },
    "/rigging/education/appendix-e": {
      en: "/rigging/education/appendix-e",
      fr: "/rigging/education/appendix-e"
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
