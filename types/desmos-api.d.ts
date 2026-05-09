/** Minimal typing for the Desmos Graphing Calculator JS API (loaded at runtime). */
interface DesmosGraphingCalculator {
  destroy(): void;
  setExpression(expression: Record<string, unknown>): void;
  updateSettings(settings: Record<string, unknown>): void;
  setMathBounds(bounds: {left: number; right: number; bottom: number; top: number}): void;
  resize(): void;
}

interface DesmosAPI {
  GraphingCalculator(element: HTMLElement, options?: Record<string, unknown>): DesmosGraphingCalculator;
  Styles: {
    DASHED: string;
    SOLID: string;
  };
}

interface Window {
  Desmos?: DesmosAPI;
}
