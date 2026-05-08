import type {ComponentType, ReactNode} from "react";
import {AlertTriangle, Radio, ShieldAlert, ClipboardCheck, Wind, Cable, HardHat, Route, Siren, FolderCheck} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

function Box({title, icon: Icon, children}: {title: string; icon: ComponentType<{className?: string}>; children: ReactNode}) {
  return (
    <Card className="border-border/90">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Icon className="h-4 w-4 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 text-sm text-muted-foreground">{children}</CardContent>
    </Card>
  );
}

export function WarningBox({items}: {items: string[]}) {
  return (
    <Box title="Warning and Hold Points" icon={AlertTriangle}>
      <ul className="list-disc space-y-2 pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </Box>
  );
}

export function CriticalLiftBox({notes}: {notes: string[]}) {
  return (
    <Box title="Critical Lift Controls" icon={ShieldAlert}>
      <ul className="list-disc space-y-2 pl-5">{notes.map((item) => <li key={item}>{item}</li>)}</ul>
    </Box>
  );
}

export function StandardsReference({items}: {items: string[]}) {
  return (
    <Box title="Standards References" icon={FolderCheck}>
      <div className="space-y-3">
        <ul className="list-disc space-y-2 pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="rounded-md border border-primary/30 bg-primary/5 p-3 text-xs text-foreground">
          <p>Current regulations must always be verified.</p>
          <p>Manufacturer requirements take precedence where applicable.</p>
          <p>Site-specific engineered requirements shall be followed.</p>
        </div>
      </div>
    </Box>
  );
}

export function ProcedureSequence({steps}: {steps: string[]}) {
  return (
    <Box title="Procedure Sequence" icon={Route}>
      <ol className="list-decimal space-y-2 pl-5">{steps.map((step) => <li key={step}>{step}</li>)}</ol>
    </Box>
  );
}

export function InspectionChecklist({items}: {items: string[]}) {
  return (
    <Box title="Inspection Checklist" icon={ClipboardCheck}>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export function CommunicationProtocol({items}: {items: string[]}) {
  return (
    <Box title="Communication Protocol" icon={Radio}>
      <ul className="list-disc space-y-2 pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </Box>
  );
}

export function ExclusionZoneNotice({items}: {items: string[]}) {
  return (
    <Box title="Exclusion Zone Notice" icon={HardHat}>
      <div className="space-y-3">
        <ul className="list-disc space-y-2 pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="rounded-md border border-border bg-secondary/40 p-3 text-xs">
          Exclusion-zone diagram logic: crane base perimeter -&gt; swing radius boundary -&gt; suspended load trajectory corridor -&gt; landing zone isolation.
        </div>
      </div>
    </Box>
  );
}

export function WindRestrictionAlert({items}: {items: string[]}) {
  return (
    <Box title="Wind Restriction Alert" icon={Wind}>
      <ul className="list-disc space-y-2 pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </Box>
  );
}

export function RiggingConfiguration({items}: {items: string[]}) {
  return (
    <Box title="Rigging Configuration" icon={Cable}>
      <ul className="list-disc space-y-2 pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </Box>
  );
}

export function CraneOperationNotice({objective}: {objective: string}) {
  return (
    <Box title="Crane Operation Notice" icon={HardHat}>
      <p>{objective}</p>
    </Box>
  );
}

export function TechnicalSafetyCallout({summary}: {summary: string}) {
  return (
    <div className="rounded-lg border border-primary/35 bg-primary/5 p-4">
      <div className="mb-2 flex items-center gap-2">
        <Badge>Technical Safety Callout</Badge>
      </div>
      <p className="text-sm text-foreground">{summary}</p>
    </div>
  );
}

export function LiftPlanningNotice({items}: {items: string[]}) {
  return (
    <Box title="Lift Planning Notice" icon={Route}>
      <ul className="list-disc space-y-2 pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </Box>
  );
}

export function SiteCoordinationBox({items}: {items: string[]}) {
  return (
    <Box title="Site Coordination" icon={HardHat}>
      <ul className="list-disc space-y-2 pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </Box>
  );
}

export function EmergencyActionPanel({items}: {items: string[]}) {
  return (
    <Box title="Emergency Action Panel" icon={Siren}>
      <ol className="list-decimal space-y-2 pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ol>
    </Box>
  );
}

