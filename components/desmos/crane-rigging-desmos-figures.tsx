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
    height: 300,
    ariaLabel:
      "Desmos graph: bearing pressure P in kPa versus pad area A in square metres for a fixed 50 kilonewton reaction, P equals fifty over A",
    calculatorOptions: {
      keypad: false,
      expressionsTopbar: false,
      settingsMenu: true,
      border: false,
      zoomButtons: true,
      projectorMode: false,
      expressions: false,
      graphpaper: true,
    },
    expressions: [
      {
        id: "P_curve",
        latex: String.raw`y=\frac{50}{x}`,
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
    height: 300,
    ariaLabel:
      "Desmos graph: pad curve y equals one hundred twenty over area versus horizontal line at sixty kilopascal allowable pressure",
    calculatorOptions: {
      keypad: false,
      expressionsTopbar: false,
      settingsMenu: true,
      border: false,
      zoomButtons: true,
      expressions: false,
      graphpaper: true,
    },
    expressions: [
      {
        id: "pad_curve",
        latex: String.raw`y=\frac{120}{x}`,
        color: "#2d70b3",
      },
      {
        id: "allow_line",
        latex: String.raw`y=60`,
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
    height: 300,
    ariaLabel:
      "Desmos graph: moment M equals F times radius for ten kilonewtons and twenty kilonewtons hook loads as proportional lines through the origin",
    calculatorOptions: {
      keypad: false,
      expressionsTopbar: false,
      settingsMenu: true,
      border: false,
      zoomButtons: true,
      expressions: false,
      graphpaper: true,
    },
    expressions: [
      {
        id: "line_10kn",
        latex: String.raw`y=10x`,
        color: "#2d70b3",
      },
      {
        id: "line_20kn",
        latex: String.raw`y=20x`,
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
    height: 300,
    ariaLabel:
      "Desmos graph: cubic scaling y equals x cubed illustrating deflection ratio versus length ratio for similar beams",
    calculatorOptions: {
      keypad: false,
      expressionsTopbar: false,
      settingsMenu: true,
      border: false,
      zoomButtons: true,
      expressions: false,
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
