import type {RiggingSlideModuleSlug} from "@/lib/rigging-education-slide-data";

type Locale = "en";

/** Load only the module referenced by `slug` (code splitting). */
export async function RiggingEducationSlideModuleBody({
  slug,
  locale,
}: {
  slug: RiggingSlideModuleSlug;
  locale: Locale;
}) {
  switch (slug) {
    case "module-1": {
      const { RiggingEducationModule1Regulations } = await import("@/components/rigging/rigging-education-module-1-regulations");
      return <RiggingEducationModule1Regulations locale={locale} />;
    }
    case "module-2": {
      const { RiggingEducationModule2Equipment } = await import("@/components/rigging/rigging-education-module-2-equipment");
      return <RiggingEducationModule2Equipment locale={locale} />;
    }
    case "module-3": {
      const { RiggingEducationModule3Inspection } = await import("@/components/rigging/rigging-education-module-3-inspection");
      return <RiggingEducationModule3Inspection locale={locale} />;
    }
    case "module-4": {
      const { RiggingEducationModule4CraneAwareness } = await import("@/components/rigging/rigging-education-module-4-crane-awareness");
      return <RiggingEducationModule4CraneAwareness locale={locale} />;
    }
    case "module-5": {
      const { RiggingEducationModule5BasicPractices } = await import("@/components/rigging/rigging-education-module-5-basic-practices");
      return <RiggingEducationModule5BasicPractices locale={locale} />;
    }
    case "module-6": {
      const { RiggingEducationModule6RiggingMath } = await import("@/components/rigging/rigging-education-module-6-rigging-math");
      return <RiggingEducationModule6RiggingMath locale={locale} />;
    }
    case "module-7": {
      const { RiggingEducationModule7Communication } = await import("@/components/rigging/rigging-education-module-7-communication");
      return <RiggingEducationModule7Communication locale={locale} />;
    }
    case "module-8": {
      const { RiggingEducationModule8AdvancedSlingGeometry } = await import("@/components/rigging/rigging-education-module-8-advanced-sling-geometry");
      return <RiggingEducationModule8AdvancedSlingGeometry locale={locale} />;
    }
    case "module-9": {
      const { RiggingEducationModule9AdvancedLoadControl } = await import("@/components/rigging/rigging-education-module-9-advanced-load-control");
      return <RiggingEducationModule9AdvancedLoadControl locale={locale} />;
    }
    case "module-10": {
      const { RiggingEducationModule10ChainfallsLeverHoists } = await import("@/components/rigging/rigging-education-module-10-chainfalls-lever-hoists");
      return <RiggingEducationModule10ChainfallsLeverHoists locale={locale} />;
    }
    case "module-11": {
      const { RiggingEducationModule11MultipleCraneTandem } = await import("@/components/rigging/rigging-education-module-11-multiple-crane-tandem");
      return <RiggingEducationModule11MultipleCraneTandem locale={locale} />;
    }
    case "module-12": {
      const { RiggingEducationModule12SpecialtyLiftingDevices } = await import("@/components/rigging/rigging-education-module-12-specialty-lifting-devices");
      return <RiggingEducationModule12SpecialtyLiftingDevices locale={locale} />;
    }
    case "module-13": {
      const { RiggingEducationModule13CranePhysicsRiggers } = await import("@/components/rigging/rigging-education-module-13-crane-physics-riggers");
      return <RiggingEducationModule13CranePhysicsRiggers locale={locale} />;
    }
    case "module-14": {
      const { RiggingEducationModule14EnvironmentalSiteHazards } = await import("@/components/rigging/rigging-education-module-14-environmental-site-hazards");
      return <RiggingEducationModule14EnvironmentalSiteHazards locale={locale} />;
    }
    case "module-15": {
      const { RiggingEducationModule15LiftPlanningCriticalLifts } = await import("@/components/rigging/rigging-education-module-15-lift-planning-critical-lifts");
      return <RiggingEducationModule15LiftPlanningCriticalLifts locale={locale} />;
    }
    case "module-16": {
      const { RiggingEducationModule16PracticalRiggingFieldOperations } = await import("@/components/rigging/rigging-education-module-16-practical-rigging-field-operations");
      return <RiggingEducationModule16PracticalRiggingFieldOperations locale={locale} />;
    }
    case "module-17": {
      const { RiggingEducationModule17SafetyCultureHumanFactors } = await import("@/components/rigging/rigging-education-module-17-safety-culture-human-factors");
      return <RiggingEducationModule17SafetyCultureHumanFactors locale={locale} />;
    }
    case "module-18": {
      const { RiggingEducationModule18ReferenceTablesFieldGuidelines } = await import("@/components/rigging/rigging-education-module-18-reference-tables-field-guidelines");
      return <RiggingEducationModule18ReferenceTablesFieldGuidelines locale={locale} />;
    }
    case "module-19": {
      const { RiggingEducationModule19GlossaryCraneRiggingTerms } = await import("@/components/rigging/rigging-education-module-19-glossary-crane-rigging-terms");
      return <RiggingEducationModule19GlossaryCraneRiggingTerms locale={locale} />;
    }
    case "module-20": {
      const { RiggingEducationModule20FinalIntegrationAppliedRiggingReadiness } = await import("@/components/rigging/rigging-education-module-20-final-integration-applied-rigging-readiness");
      return <RiggingEducationModule20FinalIntegrationAppliedRiggingReadiness locale={locale} />;
    }
    case "module-21": {
      const { RiggingEducationModule21KnotsHitchesRopeApplications } = await import("@/components/rigging/rigging-education-module-21-knots-hitches-rope-applications");
      return <RiggingEducationModule21KnotsHitchesRopeApplications locale={locale} />;
    }
    case "module-22": {
      const { RiggingEducationModule22BlockTackleReevingMechanicalAdvantage } = await import("@/components/rigging/rigging-education-module-22-block-tackle-reeving-mechanical-advantage");
      return <RiggingEducationModule22BlockTackleReevingMechanicalAdvantage locale={locale} />;
    }
    case "module-23": {
      const { RiggingEducationModule23HeavyLiftEngineeringAdvancedRiggingSystems } = await import("@/components/rigging/rigging-education-module-23-heavy-lift-engineering-advanced-rigging-systems");
      return <RiggingEducationModule23HeavyLiftEngineeringAdvancedRiggingSystems locale={locale} />;
    }
    case "module-24": {
      const { RiggingEducationModule24TowerCraneRiggingOperations } = await import("@/components/rigging/rigging-education-module-24-tower-crane-rigging-operations");
      return <RiggingEducationModule24TowerCraneRiggingOperations locale={locale} />;
    }
    case "module-25": {
      const { RiggingEducationModule25RiggingIncidentCaseStudiesFailureAnalysis } = await import("@/components/rigging/rigging-education-module-25-rigging-incident-case-studies-failure-analysis");
      return <RiggingEducationModule25RiggingIncidentCaseStudiesFailureAnalysis locale={locale} />;
    }
    default:
      return null;
  }
}
