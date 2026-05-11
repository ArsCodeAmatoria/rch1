"use client";

import {
  Anchor,
  BookMarked,
  BookOpen,
  Building2,
  ClipboardCheck,
  GraduationCap,
  FileSpreadsheet,
  FolderOpen,
  Gavel,
  HardHat,
  Layers,
  MapPin,
  Scale,
  ScrollText,
  Shield,
  ShieldAlert,
  TriangleAlert,
  UserCog,
  UsersRound,
  Wrench
} from "lucide-react";
import type {LucideIcon} from "lucide-react";

import type {RiggingSlidePageDefinition} from "@/components/rigging/education/rigging-custom-slide-presenter";
import {RiggingCustomSlidePresenter} from "@/components/rigging/education/rigging-custom-slide-presenter";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";

/** Typography aligned with TOC slide presenter (`rigging-slide-shared` prose rails). */
const HERO = "text-balance font-black tracking-tight text-zinc-950";

const H = "font-black tracking-tight text-zinc-900 text-xl leading-snug sm:text-2xl lg:text-[1.875rem]";

const LEAD = "text-lg sm:text-xl font-semibold leading-snug text-zinc-800";

const BODY = "text-base sm:text-lg font-medium leading-relaxed text-zinc-700";

const PANEL =
  "rounded-2xl border border-zinc-200 bg-white shadow-sm shadow-zinc-300/35";

function M1HeroTitle() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-4">
      <Badge className="w-fit border border-zinc-300 bg-zinc-100 text-xs font-semibold uppercase tracking-wider text-zinc-800 sm:text-sm">
        Rigging education
      </Badge>
      <h2 className={`${HERO} mt-2 text-3xl leading-[1.08] sm:text-4xl xl:text-[2.75rem]`}>
        Module 1 · <span className="text-primary">Regulations</span>
      </h2>
      <p className={`${LEAD} mt-4 max-w-3xl border-l-4 border-primary/80 pl-5`}>Standards &amp; responsibilities across BC workplaces</p>
      <Separator className="my-5 max-w-sm bg-zinc-200" />
      <p className={`${BODY} max-w-3xl text-zinc-800`}>
        This deck summarizes why rules exist, how OHSR Parts 14 &amp; 15 fit, CSA/ASME context, competency, layered duties, refusal rights, hazard
        tools—and due diligence—before Equipment in Module&nbsp;2.
      </p>
    </div>
  );
}

function M1HeroPillars() {
  const pillars = [
    {icon: Anchor, title: "Regulated lifts", subtitle: "Plan · communicate · control"},
    {icon: ScrollText, title: "OHSR lens", subtitle: "Parts 14 & 15"},
    {icon: UsersRound, title: "Shared duties", subtitle: "Employer · supervisor · worker"},
    {icon: Shield, title: "Stop unsafe work", subtitle: "Refusal & follow-up"}
  ];
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-6">
      <h3 className={`${HERO} text-2xl sm:text-3xl`}>Themes you will revisit</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {pillars.map(({icon: Icon, title, subtitle}) => (
          <Card key={title} className={`${PANEL} border-zinc-200 bg-zinc-50`}>
            <CardContent className="flex items-start gap-4 p-5 sm:p-6">
              <div className="rounded-xl bg-primary p-3 text-white shadow-inner shadow-zinc-300/25">
                <Icon className="h-8 w-8" strokeWidth={1.6} />
              </div>
              <div className="min-w-0">
                <p className="text-lg font-bold leading-tight text-zinc-950 sm:text-xl">{title}</p>
                <p className={`${BODY} mt-2 text-zinc-600`}>{subtitle}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function M1IntroLead() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center">
      <Badge variant="outline" className="w-fit border-zinc-500 text-base font-medium text-zinc-800 px-4 py-1.5">
        <ScrollText className="mr-2 h-4 w-4" />
        Regulated lifting environment
      </Badge>
      <h3 className={`${H} mt-8 max-w-[22ch]`}>Rigging is high-consequence work inside a deliberate legal framework</h3>
      <p className={`${BODY} mt-10 max-w-4xl text-zinc-800`}>
        Before hardware and hitches, crews need clarity on{" "}
        <strong className="text-zinc-950">why rules exist</strong>, how BC frames cranes &amp; rigging, where standards plug in, and how duties stack
        from employer → supervisor → worker.
      </p>
    </div>
  );
}

function M1IntroPillar({icon: Icon, title, body}: {readonly icon: LucideIcon; readonly title: string; readonly body: string}) {
  return (
    <div className={`flex min-h-full min-h-0 flex-1 flex-col justify-center gap-10 ${PANEL}`}>
      <Icon className="h-24 w-24 text-primary" strokeWidth={1.2} aria-hidden />
      <div>
        <h3 className={H}>{title}</h3>
      </div>
      <p className={`${BODY} max-w-4xl text-2xl sm:text-[1.7rem]`}>{body}</p>
    </div>
  );
}

function M1WhyNarrative() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-lg font-semibold text-zinc-900">
        <TriangleAlert className="h-5 w-5 text-zinc-600" />
        Why regulations exist
      </div>
      <h3 className={`${H} max-w-[18ch]`}>Serious energy. Serious consequences if we lose discipline.</h3>
      <p className={`${BODY} max-w-4xl font-medium text-zinc-800`}>
        Lifting exposes people to overturning, suspended loads, powerlines, pinch points, overload, drift, blind picks, weak planning, poor comms—and
        rigging defects. Rules codify <strong className="text-zinc-950">minimum controls</strong> for competent people.
      </p>
    </div>
  );
}

function M1WhyRisks() {
  const items = ["Structural failure", "Dropped loads", "Crane rollover", "Crush / pinch", "Electrocution", "Dynamic / shock overload"];
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-8">
      <h3 className={H}>What rides on every hook movement</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((t) => (
          <div
            key={t}
            className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-zinc-100 px-5 py-4 text-xl font-semibold text-zinc-800">
            <ShieldAlert className="h-10 w-10 shrink-0 text-zinc-500" strokeWidth={2} aria-hidden />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

function M1WhyPurpose() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center">
      <Card className={`${PANEL} border-emerald-500/35 bg-zinc-50`}>
        <CardContent className="gap-10 p-8 sm:flex sm:items-center sm:p-10">
          <div className="rounded-2xl bg-emerald-100 p-6">
            <Gavel className="h-20 w-20 text-emerald-700" strokeWidth={1.3} aria-hidden />
          </div>
          <div className="mt-8 sm:mt-0">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">Purpose</p>
            <p className="mt-3 text-xl font-black leading-tight text-emerald-900 sm:text-2xl lg:text-[1.875rem]">
              Purpose of regulations &amp; standards
            </p>
            <p className={`${BODY} mt-6 font-medium leading-relaxed text-emerald-800`}>
              They set baseline expectations—planning, inspections, competency, hazard controls, communications, and accountable roles—without
              replacing site-specific judgement.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function M1OhsrLead() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-10">
      <Badge variant="outline" className="w-fit border-primary/55 bg-zinc-100 px-4 py-2 text-base font-semibold text-zinc-950">
        <BookOpen className="mr-2 h-5 w-5" />
        Regulatory framework · BC
      </Badge>
      <h3 className={`${H} max-w-[20ch]`}>WorkSafeBC OHSR anchors rigging duties</h3>
      <p className={`${BODY} max-w-4xl text-zinc-800`}>
        Parts 14 (<strong className="text-zinc-950">material handling</strong>) and Part 15 (<strong className="text-zinc-950">rigging</strong>) sit with
        mobile equipment, falls, electrical hazards, and the general occupational regime.
      </p>
    </div>
  );
}

function M1OhsrPart({title, desc, Icon, body}: {readonly title: string; readonly desc: string; readonly Icon: typeof Layers; readonly body: string}) {
  return (
    <div className={`flex min-h-full min-h-0 flex-1 flex-col justify-center ${PANEL}`}>
      <div className="flex items-center gap-4">
        <span className="rounded-2xl bg-primary px-6 py-4 text-white shadow-inner shadow-zinc-200/60">
          <Icon className="h-28 w-28" strokeWidth={1.3} aria-hidden />
        </span>
        <Badge variant="outline" className="text-base uppercase tracking-[0.2em] border-zinc-300 text-zinc-700">
          OHSR
        </Badge>
      </div>
      <h3 className={`${H} mt-8`}>{title}</h3>
      <CardDescription className={`${BODY} mt-7 text-xl text-zinc-700`}>{desc}</CardDescription>
      <p className={`${BODY} mt-8 pt-10 text-2xl font-semibold leading-relaxed text-zinc-800 border-t border-zinc-200`}>{body}</p>
    </div>
  );
}

function M1IndustryLead() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-10">
      <h3 className={`${H} max-w-[20ch]`}>Industry standards deepen the detail</h3>
      <p className={`${BODY} max-w-5xl font-medium text-zinc-800`}>
        CSA and ASME&nbsp;B30 titles, BC Crane Safety programme guidance, engineered lift plans, and manufacturer limits—all{" "}
        <strong className="text-zinc-950">must align</strong> to law and employer adoption.
      </p>
    </div>
  );
}

function M1IndustryGrid() {
  const rows = [
    {icon: BookMarked, label: "CSA publications", hint: "National adoption context"},
    {icon: Wrench, label: "ASME B30 series", hint: "Below-the-hook rigging specifics"},
    {icon: FileSpreadsheet, label: "Engineered plans", hint: "Critical picks"},
    {icon: GraduationCap, label: "BC Crane Safety", hint: "Provincial lens"}
  ];
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-8">
      <h3 className={`${HERO} text-xl sm:text-2xl`}>Sources that sharpen field practice</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {rows.map(({icon: Icon, label, hint}) => (
          <Card key={label} className={`${PANEL} bg-white`}>
            <CardContent className="gap-6 p-6 sm:flex sm:items-center sm:p-8">
              <Icon className="h-28 w-28 text-amber-300 drop-shadow-xl" strokeWidth={1.2} />
              <div>
                <p className="text-xl font-black text-zinc-950 sm:text-2xl">{label}</p>
                <p className={`${BODY} mt-3 font-medium text-amber-100/95`}>{hint}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function M1IndustryReminder() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-12">
      <Card className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-50 p-12">
        <CardContent className="flex gap-8 text-[1.95rem] font-semibold leading-relaxed text-zinc-800 sm:items-start">
          <BookOpen className="h-24 w-24 shrink-0 text-zinc-950 opacity-95" aria-hidden />
          Standards are <span className="text-zinc-950 underline decoration-primary decoration-8 underline-offset-[12px]">not</span> a substitute for the
          employer playbook or the engineer’s plan—everything must match adoption on site.
        </CardContent>
      </Card>
    </div>
  );
}

function M1RolesIntro() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-14">
      <h3 className={`${H} max-w-[16ch]`}>Competent vs qualified</h3>
      <p className={`${BODY} max-w-4xl text-[1.95rem]`}>
        Same crew, <strong className="text-zinc-950">different depth</strong>—baseline task competency beside specialized authority backed by credentialing.
      </p>
    </div>
  );
}

function M1CompetentSlide() {
  const items = [
    "Knowledge, training & experience for the task",
    "Familiar with applicable regulations",
    "Understands task hazards",
    "Authority to take corrective action"
  ];
  return (
    <Card className={`${PANEL} flex h-full min-h-0 flex-col justify-center bg-white`}>
      <CardHeader className="shrink-0 p-10 pb-6">
        <div className="flex items-center gap-5">
          <UserCog className="h-36 w-36 text-zinc-950" aria-hidden strokeWidth={1} />
          <Badge className="bg-primary px-4 py-2 text-base uppercase tracking-[0.2em] text-white">Competent</Badge>
        </div>
        <CardTitle className={`${H} mt-8`}>Competent worker</CardTitle>
        <CardDescription className={`${BODY} mt-10 text-xl text-zinc-800`}>Task-aware, authorised to correct course mid-task.</CardDescription>
      </CardHeader>
      <CardContent className="mx-10 mb-10 shrink-0 space-y-5">
        {items.map((t) => (
          <div key={t} className="flex gap-6 rounded-2xl border border-zinc-200 bg-zinc-50 px-8 py-5 text-xl sm:text-[1.65rem] font-semibold leading-snug text-zinc-800">
            <span className="text-primary mt-2 text-[2rem] font-black">✓</span>
            {t}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function M1QualifiedSlide() {
  return (
    <Card className={`${PANEL} flex h-full min-h-0 flex-col justify-center bg-white`}>
      <CardHeader className="shrink-0 p-10 pb-6">
        <div className="flex items-center gap-6">
          <GraduationCap className="h-36 w-36 text-zinc-950/95" aria-hidden strokeWidth={1} />
          <Badge className="border border-zinc-300 bg-transparent px-4 py-2 text-base uppercase tracking-[0.2em] text-zinc-800">Qualified</Badge>
        </div>
        <CardTitle className={`${H} mt-8`}>Qualified worker</CardTitle>
        <CardDescription className={`${BODY} mt-10 text-xl text-zinc-800`}>Specialised technical authority + recognised credentialing pathways.</CardDescription>
      </CardHeader>
      <CardContent className="mx-10 mb-10 shrink-0">
        <p className={`${BODY} text-lg font-semibold uppercase tracking-[0.2em] text-zinc-600`}>Examples seen on sophisticated sites:</p>
        <div className="mt-8 flex flex-wrap gap-5">
          {["Certified operators", "Professional engineers", "Lift directors", "Specialised inspectors", "Advanced rigging leads"].map((t) => (
            <span key={t} className="rounded-full border border-primary/65 bg-zinc-100 px-7 py-3 text-xl font-bold text-zinc-950 shadow-inner shadow-zinc-200/60">
              {t}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function M1EmployerHeader() {
  return (
    <div className={`flex min-h-full min-h-0 flex-1 flex-col justify-center gap-12 ${PANEL}`}>
      <div className="flex items-start gap-8">
        <div className="rounded-3xl border border-zinc-300 bg-zinc-100 p-6">
          <Building2 className="h-[6.75rem] w-[6.75rem] text-zinc-950" strokeWidth={1.1} />
        </div>
        <div>
          <Badge className="bg-white text-base font-semibold uppercase tracking-[0.2em] text-zinc-900">Employer duties</Badge>
          <h3 className={`${H} mt-8`}>Employer responsibilities</h3>
          <p className={`${BODY} mt-8 max-w-4xl text-zinc-800`}>Set the system—planning, competency, inspections, supervised execution.</p>
        </div>
      </div>
    </div>
  );
}

function M1EmployerGrid({subset}: {readonly subset: readonly string[]}) {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-8">
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {subset.map((t) => (
        <div
          key={t}
          className={`flex gap-8 rounded-[1.85rem] border border-zinc-200 bg-zinc-50 px-8 py-7 text-xl font-bold leading-snug text-zinc-800 sm:text-2xl`}>
          <Shield className="mt-2 h-12 w-12 shrink-0 text-primary" strokeWidth={1.85} aria-hidden />
          {t}
        </div>
      ))}
    </div>
    </div>
  );
}

function M1SupervisorLead() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-12">
      <Badge className="w-fit border border-zinc-200 bg-zinc-100 px-6 py-2 text-lg font-bold uppercase tracking-[0.16em] text-zinc-900">Supervision lens</Badge>
      <h3 className={`${H} max-w-[18ch]`}>Supervisor responsibilities</h3>
      <p className={`${BODY} max-w-4xl font-medium text-zinc-800`}>The hinge between crews, cranes, planners, clients, and HSE expectations.</p>
    </div>
  );
}

function M1SupervisorChecklist() {
  const checklist = [
    "Safe procedures actually followed",
    "Workers comprehend hazards live",
    "Coordinate lifting choreography",
    "Monitor conditions continuously",
    "Correct unsafe behaviours & setups",
    "Keep radio discipline & escalation clear"
  ];
  return (
    <div className={`${PANEL} flex min-h-full min-h-0 flex-1 flex-col justify-center px-11 py-10`}>
      <h3 className={H}>Field checklist</h3>
      <ul className={`${BODY} mt-12 grid gap-6 text-2xl text-zinc-800`}>
        {checklist.map((t, i) => (
          <li key={t} className="flex items-start gap-6 border-l-4 border-primary/90 pl-7">
            <span className="text-primary font-black tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-semibold">{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function M1WorkerLead() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-16">
      <div className="inline-flex rounded-3xl border border-orange-200 bg-orange-100 p-8">
        <HardHat className="h-[7.85rem] w-[7.85rem] text-orange-900" aria-hidden strokeWidth={1} />
      </div>
      <h3 className={`${H} max-w-[16ch]`}>Worker responsibilities</h3>
      <p className={`${BODY} max-w-4xl text-zinc-800`}>Judgement on the ground—inspect, speak plainly, escalate, refuse calmly when needed.</p>
    </div>
  );
}

function M1WorkerDutiesSubset({titles, offset}: {readonly titles: readonly string[]; readonly offset: number}) {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-8">
    <div className="grid gap-6">
      {titles.map((t, i) => (
        <div
          key={t}
          className={`${PANEL} flex items-center gap-8 border-orange-200 bg-orange-50 px-8 py-6 text-xl font-bold leading-snug text-zinc-800 sm:text-[1.7rem]`}>
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-600 text-[1.95rem] font-black text-zinc-950">
            {offset + i + 1}
          </span>
          <span>{t}</span>
        </div>
      ))}
    </div>
    </div>
  );
}

function M1RefuseContext() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-16">
      <div className="flex items-start gap-8">
        <span className="inline-flex rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/40">
          <ShieldAlert className="h-28 w-28 text-red-700 sm:h-36 sm:w-36" aria-hidden strokeWidth={1} />
        </span>
        <div>
          <h3 className={`${H} max-w-[18ch]`}>Right to refuse unsafe work</h3>
          <p className={`${BODY} mt-10 max-w-4xl text-zinc-800`}>
            Refusal is preventative control—not personality conflict. Name the hazard, request investigation, insist on corrective action.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-5">
        {["Damaged rigging", "Weather risk", "No comms plan", "Unstable load", "Weak lift plan", "Bad crane setup", "Powerline proximity"].map(
          (tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="rounded-full border border-zinc-300 bg-white px-6 py-2 text-lg font-semibold uppercase tracking-[0.16em] text-zinc-800 shadow-sm shadow-zinc-200/30">
              {tag}
            </Badge>
          )
        )}
      </div>
    </div>
  );
}

function M1RefuseFlow() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center">
      <Card className={`${PANEL} border-l-[6px] border-l-red-600 border-zinc-200 bg-white shadow-sm shadow-zinc-200/50`}>
        <CardHeader className="p-10 pb-6">
          <CardTitle className={H}>Typical escalation flow</CardTitle>
          <CardDescription className={`${BODY} mt-10 text-xl text-zinc-700`}>
            Document the concern alongside employer + regulatory timelines.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-9 px-10 pb-14">
          {["Report the concern", "Investigate the hazard", "Apply corrective action", "Resume only when resolved safely"].map((t, index) => (
            <div key={t} className="flex items-center gap-8">
              <Button
                size="icon"
                variant="outline"
                className="h-24 w-24 shrink-0 border-2 border-zinc-300 bg-zinc-50 text-[2rem] font-black text-red-700 hover:bg-white"
                aria-hidden>
                {index + 1}
              </Button>
              <span className={`${BODY} text-[1.9rem] font-semibold leading-snug text-zinc-900`}>{t}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function M1AssessmentIntro() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-16">
      <ClipboardCheck className="h-[7.85rem] w-[7.85rem] text-primary" aria-hidden strokeWidth={0.95} />
      <h3 className={`${H} max-w-[18ch]`}>Hazard assessments</h3>
      <p className={`${BODY} max-w-4xl font-medium text-zinc-800`}>Match depth—FLHA handshake vs JHA deep dive—with novelty of task and energy magnitude.</p>
    </div>
  );
}

function M1AssessmentFlha({title, detail}: {readonly title: string; readonly detail: string}) {
  return (
    <Card className={`${PANEL} flex min-h-full min-h-0 w-full flex-1 flex-col justify-center border-primary/65 bg-zinc-50 p-14`}>
      <CardTitle className={`flex flex-wrap items-center gap-7 ${H}`}>
        <span className="rounded-2xl border border-zinc-300 bg-zinc-100 px-4 py-1.5 font-mono text-sm text-primary sm:text-base">FLHA</span>
        {title}
      </CardTitle>
      <CardDescription className={`${BODY} mt-8 border-t border-zinc-200 pt-8`}>{detail}</CardDescription>
    </Card>
  );
}

function M1AssessmentJha({title, detail}: {readonly title: string; readonly detail: string}) {
  return (
    <Card className={`${PANEL} flex min-h-full min-h-0 w-full flex-1 flex-col justify-center border-zinc-200 bg-zinc-100 p-14`}>
      <CardTitle className={`flex flex-wrap items-center gap-7 ${H}`}>
        <span className="rounded-2xl border border-zinc-300 bg-zinc-800 px-4 py-1.5 font-mono text-sm text-white sm:text-base">JHA</span>
        {title}
      </CardTitle>
      <CardDescription className={`${BODY} mt-8 border-t border-zinc-300 pt-8`}>{detail}</CardDescription>
    </Card>
  );
}

function M1AssessmentFactors() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-10 sm:gap-12">
      <h3 className={`${H} max-w-[22ch]`}>Scan the job before the hook moves</h3>
      <p className={`${LEAD} max-w-3xl text-zinc-600`}>Ground, weather, clearance, people, and comms—reuse this mental model on every pick.</p>
      <div className="flex flex-wrap gap-5">
        {["Ground", "Weather", "Load & COG", "Crane config", "People nearby", "Powerlines", "Access", "Comms", "Environment"].map((t) => (
          <Badge key={t} className="bg-white text-black border-2 border-transparent px-6 py-4 text-xl font-black uppercase tracking-[0.16em]">
            {t}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function M1SiteLead() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-16">
      <MapPin className="h-[7.75rem] w-[7.75rem] text-lime-400" aria-hidden strokeWidth={0.95} />
      <h3 className={`${H} max-w-[18ch]`}>Site-specific procedures</h3>
      <p className={`${BODY} max-w-4xl font-medium text-zinc-800`}>General rigging literacy must meet the engineered lift envelope and owner/programme overrides.</p>
    </div>
  );
}

function M1SiteItems({titles}: {readonly titles: readonly string[]}) {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-8">
    <div className="grid gap-5">
      {titles.map((title) => (
        <Card key={title} className={`${PANEL} bg-lime-950/65 border-lime-500/65`}>
          <CardContent className="flex items-center gap-8 p-10 text-[1.8rem] font-bold leading-snug text-zinc-950">
            <Layers className="h-16 w-16 text-lime-200" aria-hidden />
            <span>{title}</span>
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
  );
}

function M1DocsLead() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-16">
      <FolderOpen className="h-[8rem] w-[8rem] text-primary" aria-hidden strokeWidth={0.85} />
      <h3 className={`${H} max-w-[18ch]`}>Documentation &amp; records</h3>
      <p className={`${BODY} max-w-4xl font-medium text-zinc-800`}>Traceability before, during, and after lifts—plans, certs, radios, inspectors, meetings.</p>
    </div>
  );
}

function M1DocsList({titles}: {readonly titles: readonly string[]}) {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-8">
    <div className="grid gap-6 sm:grid-cols-2">
      {titles.map((title) => (
        <Card key={title} className={`${PANEL} border-primary/65 bg-zinc-50`}>
          <CardHeader className="p-11">
            <CardTitle className="text-[1.97rem] font-black uppercase tracking-[0.2em] text-zinc-950">{title}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
    </div>
  );
}

function M1DueLead() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-16">
      <Scale className="h-[9rem] w-[9rem] text-zinc-950" aria-hidden strokeWidth={0.8} />
      <h3 className={`${H} max-w-[14ch]`}>Due diligence</h3>
      <p className={`${BODY} max-w-4xl font-medium text-zinc-800`}>Reasonable precautions—made visible via planning artefacts, audits, mentorship, decisive stop-work calls.</p>
    </div>
  );
}

function M1DuePillars({subset}: {readonly subset: readonly {t: string; d: string}[]}) {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-8">
    <div className="grid gap-5 sm:grid-cols-2">
      {subset.map(({t, d}) => (
        <Card key={t} className={`${PANEL} bg-zinc-100`}>
          <CardHeader className="pb-6 pt-11 px-11">
            <CardTitle className="text-[2.45rem] font-black text-zinc-950 sm:text-[2.85rem]">{t}</CardTitle>
          </CardHeader>
          <CardContent className="pb-14 px-11 text-[1.4rem] font-semibold uppercase tracking-[0.08em] text-zinc-700">{d}</CardContent>
        </Card>
      ))}
    </div>
    </div>
  );
}

function M1DueNextSlide() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center">
      <Card className={`border-2 border-primary/70 bg-white text-zinc-900 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.15)]`}>
        <CardContent className="flex flex-wrap items-start justify-between gap-12 px-14 py-16 text-[2.15rem] font-black uppercase tracking-[0.2em] sm:items-center">
          <span className="flex items-center gap-7 text-primary">
            <BookMarked className="h-[4.95rem] w-[4.95rem]" aria-hidden strokeWidth={1.3} /> Next • Module&nbsp;2
          </span>
          <span className="max-w-xl text-xl font-semibold normal-case lowercase tracking-normal text-zinc-800">
            Equipment fundamentals—bring the presenter remote or Arrow keys whenever you&apos;re ready to continue across modules.
          </span>
        </CardContent>
      </Card>
    </div>
  );
}

const employerAll = [
  "Safe environments & maintained equipment",
  "Instruction, procedures, SWPs",
  "Hazard assessments",
  "Verify competency",
  "Regulatory compliance",
  "Planned & supervised lifting"
] as const;

const workerSteps = [
  "Follow safe work procedures",
  "Inspect equipment before use",
  "Report hazards & defects",
  "Use equipment as intended",
  "Participate in hazard assessments",
  "Communicate unsafe conditions",
  "Refuse unsafe work when necessary"
] as const;

const siteStages = splitSite();

function splitSite() {
  const s = [
    "Unique lift procedures",
    "Specialised rigging methods",
    "Access & traffic controls",
    "Engineered lift plans",
    "Environmental limits",
    "Additional communication layering"
  ] as const;
  return [s.slice(0, 3), s.slice(3)];
}

const diligenceGroups = splitDiligence();

function splitDiligence(): readonly [{t: string; d: string}[], {t: string; d: string}[]] {
  const pillars = [
    {t: "Planning", d: "Lift envelopes & contingency scripts"},
    {t: "Inspection", d: "Hardware + rigging condition"},
    {t: "Competency", d: "Prove training on file"},
    {t: "Hazard rhythm", d: "FLHA / JHA cadence"},
    {t: "Manufacturer data", d: "Limits • maintenance reminders"},
    {t: "Communications", d: "Radios • signage • toolbox"},
    {t: "Environment", d: "Wind • footing • corridors"},
    {t: "Stop authority", d: "Suspend work cleanly"}
  ] as const;

  const mid = pillars.length / 2;
  return [pillars.slice(0, mid), pillars.slice(mid)];
}

const docsGroups = [["Inspection records", "Lift plans", "Crane logbooks", "Equipment certs"], ["Hazard assessments", "Pre-lift packs", "Engineered packs", "Operator certifications"]] as const;

const MODULE_1_CUSTOM_SLIDES: RiggingSlidePageDefinition[] = [
  {anchorId: "introduction", label: "Welcome", content: <M1HeroTitle />},
  {anchorId: "introduction", label: "Module themes", content: <M1HeroPillars />},
  {anchorId: "introduction", label: "Regulated landscape", content: <M1IntroLead />},
  {
    anchorId: "introduction",
    label: "Hazard density lens",
    content: (
      <M1IntroPillar
        icon={TriangleAlert}
        title="Hazard density"
        body="Suspended loads, cranes, material handling—not a forgiving error budget."
      />
    )
  },
  {
    anchorId: "introduction",
    label: "Responsibilities & law",
    content: (
      <M1IntroPillar
        icon={Gavel}
        title="Responsibilities & law"
        body="Regulations articulate minimum behaviours; employers operationalize them on site."
      />
    )
  },
  {
    anchorId: "introduction",
    label: "Lesson roadmap",
    content: (
      <M1IntroPillar icon={Layers} title="Lesson roadmap" body="Framework → competency → refusal → hazards → paperwork → diligence." />
    )
  },
  {anchorId: "why-regulations", label: "Why rules exist", content: <M1WhyNarrative />},
  {anchorId: "why-regulations", label: "Consequence scan", content: <M1WhyRisks />},
  {anchorId: "why-regulations", label: "Regulatory intent", content: <M1WhyPurpose />},
  {anchorId: "regulatory-framework", label: "OHSR framing", content: <M1OhsrLead />},
  {
    anchorId: "regulatory-framework",
    label: "Part 14 overview",
    content: (
      <M1OhsrPart
        Icon={Layers}
        title="Part 14 · Material Handling"
        desc="Equipment readiness + competent personnel + situational crane hazard controls."
        body="Spans cranes, hoist systems, and integrated lifts—always tethered to the broader occupational ruleset."
      />
    )
  },
  {
    anchorId: "regulatory-framework",
    label: "Part 15 overview",
    content: (
      <M1OhsrPart
        Icon={Anchor}
        title="Part 15 · Rigging"
        desc="Inspections • hardware • sling removal-from-service cues • supervision expectations."
        body="Touches every hook-up—before crews energise motions or trust shared signals."
      />
    )
  },
  {anchorId: "industry-standards", label: "Standards context", content: <M1IndustryLead />},
  {anchorId: "industry-standards", label: "Standards library", content: <M1IndustryGrid />},
  {anchorId: "industry-standards", label: "Site alignment", content: <M1IndustryReminder />},
  {anchorId: "competent-qualified", label: "Two worker tracks", content: <M1RolesIntro />},
  {anchorId: "competent-qualified", label: "Competent baseline", content: <M1CompetentSlide />},
  {anchorId: "competent-qualified", label: "Qualified specialization", content: <M1QualifiedSlide />},
  {anchorId: "employer", label: "Employer leadership", content: <M1EmployerHeader />},
  {anchorId: "employer", label: "Employer duties (1)", content: <M1EmployerGrid subset={[...employerAll.slice(0, 4)]} />},
  {anchorId: "employer", label: "Employer duties (2)", content: <M1EmployerGrid subset={[...employerAll.slice(4)]} />},
  {anchorId: "supervisor", label: "Supervisor charter", content: <M1SupervisorLead />},
  {anchorId: "supervisor", label: "Supervisor checklist", content: <M1SupervisorChecklist />},
  {anchorId: "worker", label: "Worker charter", content: <M1WorkerLead />},
  {anchorId: "worker", label: "Worker duties · 1", content: <M1WorkerDutiesSubset titles={[...workerSteps.slice(0, 4)]} offset={0} />},
  {anchorId: "worker", label: "Worker duties · 2", content: <M1WorkerDutiesSubset titles={[...workerSteps.slice(4)]} offset={4} />},
  {anchorId: "refuse-unsafe", label: "Refusal rationale", content: <M1RefuseContext />},
  {anchorId: "refuse-unsafe", label: "Refusal escalation", content: <M1RefuseFlow />},
  {anchorId: "hazard-assessments", label: "Assessments framing", content: <M1AssessmentIntro />},
  {anchorId: "hazard-assessments", label: "FLHA spotlight", content: <M1AssessmentFlha title="Field level handshake" detail="Brief, repeatable pre-task review before energy goes into the rope path." />},
  {
    anchorId: "hazard-assessments",
    label: "JHA spotlight",
    content: <M1AssessmentJha title="Job hazard breakdown" detail="Sequences tasks, exposures, preventative controls—including communications + rescue thinking." />
  },
  {anchorId: "hazard-assessments", label: "Factors to revisit", content: <M1AssessmentFactors />},
  {anchorId: "site-specific", label: "Site playbook", content: <M1SiteLead />},
  {anchorId: "site-specific", label: "Site specifics · 1", content: <M1SiteItems titles={siteStages[0]} />},
  {anchorId: "site-specific", label: "Site specifics · 2", content: <M1SiteItems titles={siteStages[1]} />},
  {anchorId: "documentation", label: "Records charter", content: <M1DocsLead />},
  {anchorId: "documentation", label: "Records · pack A", content: <M1DocsList titles={[...docsGroups[0]]} />},
  {anchorId: "documentation", label: "Records · pack B", content: <M1DocsList titles={[...docsGroups[1]]} />},
  {anchorId: "due-diligence", label: "Diligence charter", content: <M1DueLead />},
  {anchorId: "due-diligence", label: "Diligence matrix · A", content: <M1DuePillars subset={diligenceGroups[0]} />},
  {anchorId: "due-diligence", label: "Diligence matrix · B", content: <M1DuePillars subset={diligenceGroups[1]} />},
  {anchorId: "due-diligence", label: "Next lesson", content: <M1DueNextSlide />}
];

export const RIGGING_MODULE_1_CUSTOM_SLIDE_COUNT = MODULE_1_CUSTOM_SLIDES.length;

type Module1LessonProps = {
  readonly moduleSlug: string;
  readonly moduleNumber: number;
  readonly deckTitle: string;
  readonly articleHref: string;
  readonly prevModuleSlug: string | null;
  readonly nextModuleSlug: string | null;
  readonly initialSlideIndex: number;
  readonly castRole?: "presenter" | "audience";
};

export function RiggingEducationModule1CustomSlideLesson({
  moduleSlug,
  moduleNumber,
  deckTitle,
  articleHref,
  prevModuleSlug,
  nextModuleSlug,
  initialSlideIndex,
  castRole = "presenter"
}: Module1LessonProps) {
  return (
    <RiggingCustomSlidePresenter
      moduleSlug={moduleSlug}
      castRole={castRole}
      moduleNumber={moduleNumber}
      deckTitle={deckTitle}
      slides={MODULE_1_CUSTOM_SLIDES}
      articleHref={articleHref}
      prevModuleSlug={prevModuleSlug}
      nextModuleSlug={nextModuleSlug}
      initialSlideIndex={initialSlideIndex}
      slideChrome="deck"
    />
  );
}
