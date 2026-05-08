import type {ComponentType, ReactNode} from "react";
import {AlertTriangle, ClipboardList, FileText, Quote, ShieldAlert, Workflow, Wrench} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

function Box({title, icon: Icon, children}: {title: string; icon: ComponentType<{className?: string}>; children: ReactNode}) {
  return (
    <Card className="my-6 border-border/90">
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

export function WarningBox({children}: {children: ReactNode}) {
  return <Box title="Warning" icon={AlertTriangle}>{children}</Box>;
}

export function ProcedureBox({children}: {children: ReactNode}) {
  return <Box title="Procedure" icon={Workflow}>{children}</Box>;
}

export function RegulationReference({children}: {children: ReactNode}) {
  return <Box title="Regulation Reference" icon={FileText}>{children}</Box>;
}

export function DiagramFigure({title, children}: {title: string; children: ReactNode}) {
  return (
    <figure className="my-6 rounded-lg border border-border bg-card p-4">
      <figcaption className="mb-3 text-sm font-semibold text-foreground">{title}</figcaption>
      <div className="text-sm text-muted-foreground">{children}</div>
    </figure>
  );
}

export function StandardsCallout({children}: {children: ReactNode}) {
  return (
    <Box title="Standards Callout" icon={ShieldAlert}>
      <div className="space-y-3">
        <Badge>Compliance Reference</Badge>
        <div>{children}</div>
      </div>
    </Box>
  );
}

export function TechnicalNote({children}: {children: ReactNode}) {
  return <Box title="Technical Note" icon={Wrench}>{children}</Box>;
}

export function QuoteBlock({children}: {children: ReactNode}) {
  return <Box title="Field Quote" icon={Quote}>{children}</Box>;
}

export function InspectionPanel({children}: {children: ReactNode}) {
  return <Box title="Inspection Panel" icon={ClipboardList}>{children}</Box>;
}

export const mdxComponents = {
  WarningBox,
  ProcedureBox,
  RegulationReference,
  DiagramFigure,
  StandardsCallout,
  TechnicalNote,
  QuoteBlock,
  InspectionPanel
};
