"use client";

import {useEffect, useRef} from "react";

import {cn} from "@/lib/utils";

const DESMOS_SCRIPT_BASE = "https://www.desmos.com/api/v1.8/calculator.js";

/** Public demo key from Desmos API docs; use NEXT_PUBLIC_DESMOS_API_KEY in production if you register your own. */
const DEFAULT_DESMOS_API_KEY = "dcb31709b452b1cf9dc26972add0fda6";

let desmosScriptPromise: Promise<void> | null = null;

function loadDesmosScript(apiKey: string): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }
  if (window.Desmos) {
    return Promise.resolve();
  }
  if (!desmosScriptPromise) {
    desmosScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `${DESMOS_SCRIPT_BASE}?apiKey=${encodeURIComponent(apiKey)}`;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Desmos calculator script failed to load"));
      document.head.appendChild(script);
    });
  }
  return desmosScriptPromise;
}

type FigurePreset = {
  /** px */
  height: number;
  ariaLabel: string;
  calculatorOptions?: Record<string, unknown>;
  expressions: Array<Record<string, unknown>>;
  settings: Record<string, unknown>;
  mathBounds: {left: number; right: number; bottom: number; top: number};
};

const FIGURES: Record<string, FigurePreset> = {
  "pressure-vs-area": {
    height: 360,
    ariaLabel: "Desmos graph: bearing pressure versus pad area as P equals F divided by A with interactive force slider",
    calculatorOptions: {
      keypad: false,
      expressionsTopbar: false,
      settingsMenu: true,
      border: false,
      zoomButtons: true,
      projectorMode: false,
      expressions: true,
      graphpaper: true,
    },
    expressions: [
      {
        id: "F_kN",
        latex: String.raw`w=50`,
        sliderBounds: {min: 10, max: 200, step: 5},
      },
      {
        id: "P_curve",
        latex: String.raw`y=\frac{w}{x}`,
        color: "#2d70b3",
      },
    ],
    settings: {
      xAxisLabel: "Pad area A (m²)",
      yAxisLabel: "Pressure P (kPa)",
      showGrid: true,
      degreeMode: false,
    },
    mathBounds: {left: 0.35, right: 5.2, bottom: 0, top: 140},
  },
  "pressure-vs-allowable": {
    height: 380,
    ariaLabel:
      "Desmos graph: inverse pad curve versus horizontal allowable pressure line showing required pad area intuition",
    calculatorOptions: {
      keypad: false,
      expressionsTopbar: false,
      settingsMenu: true,
      border: false,
      zoomButtons: true,
      expressions: true,
      graphpaper: true,
    },
    expressions: [
      {
        id: "w_kN",
        latex: String.raw`w=120`,
        sliderBounds: {min: 40, max: 260, step: 10},
      },
      {
        id: "p_allow",
        latex: String.raw`p=60`,
        sliderBounds: {min: 30, max: 160, step: 5},
      },
      {
        id: "pad_curve",
        latex: String.raw`y=\frac{w}{x}`,
        color: "#2d70b3",
      },
      {
        id: "allow_line",
        latex: String.raw`y=p`,
        color: "#c74440",
      },
    ],
    settings: {
      xAxisLabel: "Pad area A (m²)",
      yAxisLabel: "Pressure (kPa)",
      showGrid: true,
      degreeMode: false,
    },
    mathBounds: {left: 0.35, right: 5.2, bottom: 0, top: 200},
  },
  "moment-vs-radius": {
    height: 360,
    ariaLabel:
      "Desmos graph: load moment versus radius with slider for hook load doubling the slope versus doubled load curve",
    calculatorOptions: {
      keypad: false,
      expressionsTopbar: false,
      settingsMenu: true,
      border: false,
      zoomButtons: true,
      expressions: true,
      graphpaper: true,
    },
    expressions: [
      {
        id: "F_slider",
        latex: String.raw`F=10`,
        sliderBounds: {min: 5, max: 80, step: 5},
      },
      {
        id: "line_one",
        latex: String.raw`y=F\cdot x`,
        color: "#2d70b3",
      },
      {
        id: "line_double_load",
        latex: String.raw`y=2\cdot F\cdot x`,
        color: "#c74440",
      },
    ],
    settings: {
      xAxisLabel: "Radius r (m)",
      yAxisLabel: "Moment M (kN·m)",
      showGrid: true,
      degreeMode: false,
    },
    mathBounds: {left: 0, right: 12, bottom: 0, top: 140},
  },
  "deflection-length-cubed": {
    height: 360,
    ariaLabel:
      "Desmos graph: cubic scaling y equals x cubed illustrating deflection ratio versus length ratio for similar beams",
    calculatorOptions: {
      keypad: false,
      expressionsTopbar: false,
      settingsMenu: true,
      border: false,
      zoomButtons: true,
      expressions: true,
      graphpaper: true,
    },
    expressions: [],
    settings: {
      xAxisLabel: "Length ratio L₂ / L₁",
      yAxisLabel: "Relative deflection δ₂ / δ₁",
      showGrid: true,
      degreeMode: false,
    },
    mathBounds: {left: 0.3, right: 2.5, bottom: 0, top: 16},
  },
};

export type CraneRiggingDesmosFigureKey = keyof typeof FIGURES;

/**
 * Applies figure expressions once the calculator exists (needs Desmos runtime for dashed line Style).
 */
function applyExpressions(calculator: DesmosGraphingCalculator, presetKey: CraneRiggingDesmosFigureKey) {
  if (presetKey === "deflection-length-cubed") {
    calculator.setExpression({id: "cubic", latex: String.raw`y=x^{3}`, color: "#388c46"});
    const dashed = typeof window !== "undefined" ? window.Desmos?.Styles?.DASHED : undefined;
    calculator.setExpression({
      id: "double_ratio",
      latex: String.raw`x=2`,
      color: "#6042a6",
      ...(dashed !== undefined ? {lineStyle: dashed} : {}),
    });
    return;
  }

  const preset = FIGURES[presetKey];
  for (const expr of preset.expressions) {
    calculator.setExpression(expr);
  }
}

type Props = {
  variant: CraneRiggingDesmosFigureKey;
  className?: string;
};

export function CraneRiggingDesmosFigure({variant, className}: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) {
      return;
    }

    const apiKey =
      typeof process.env.NEXT_PUBLIC_DESMOS_API_KEY === "string" && process.env.NEXT_PUBLIC_DESMOS_API_KEY.length > 0
        ? process.env.NEXT_PUBLIC_DESMOS_API_KEY
        : DEFAULT_DESMOS_API_KEY;

    const preset = FIGURES[variant];
    let calculator: DesmosGraphingCalculator | null = null;
    let cancelled = false;

    (async () => {
      try {
        await loadDesmosScript(apiKey);
        if (cancelled || !el || !window.Desmos) {
          return;
        }
        calculator = window.Desmos.GraphingCalculator(el, preset.calculatorOptions);
        calculator.updateSettings(preset.settings);
        applyExpressions(calculator, variant);
        calculator.setMathBounds(preset.mathBounds);
        queueMicrotask(() => calculator?.resize());
      } catch {
        // Embedding is optional enrichment; silently skip if CDN blocked.
      }
    })();

    return () => {
      cancelled = true;
      calculator?.destroy();
      calculator = null;
    };
  }, [variant]);

  const preset = FIGURES[variant];

  return (
    <div className={cn("w-full", className)}>
      <div
        ref={hostRef}
        className="w-full overflow-hidden rounded-b-lg bg-muted/45 dark:bg-muted/35"
        style={{height: preset.height}}
        aria-label={preset.ariaLabel}
      />
    </div>
  );
}
