import {cn} from "@/lib/utils";

/** Opens in a new tab; use for authoritative off-site sources (regulators, standards bodies). */
export function ExternalLink({
  href,
  children,
  className
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("font-medium text-primary underline-offset-4 hover:underline", className)}
    >
      {children}
    </a>
  );
}

/** Canonical home pages and deep links used across operator-training content. */
export const AUTHORITY_URLS = {
  workSafeBc: "https://www.worksafebc.com/",
  workSafeBcOhsRegulations: "https://www.worksafebc.com/en/law-policy/occupational-health-safety/searchable-ohs-regulation",
  bcCraneSafety: "https://bccranesafety.ca/",
  skilledTradesBc: "https://skilledtradesbc.ca/",
  redSeal: "https://www.red-seal.ca/",
  csaGroup: "https://www.csagroup.org/",
  csaZ248Product: "https://www.csagroup.org/store/product/Z248-17/",
  asmeOrg: "https://www.asme.org/",
  asmeB303TowerCranes: "https://www.asme.org/codes-standards/find-codes-standards/b30-3-tower-cranes",
  transportCanada: "https://tc.canada.ca/",
  navCanada: "https://www.navcanada.ca/",
  technicalSafetyBc: "https://www.technicalsafetybc.ca/",
  transLink: "https://www.translink.ca/",
  bcHydro: "https://www.bchydro.com/"
} as const;
