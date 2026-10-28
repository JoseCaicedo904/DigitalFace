import type { CSSProperties } from "react";
import { Pause, Play, Rotate3D } from "lucide-react";

export const PIP_POSITIONS = [
  [],
  [5],
  [1, 9],
  [1, 5, 9],
  [1, 3, 7, 9],
  [1, 3, 5, 7, 9],
  [1, 3, 4, 6, 7, 9],
];
const rotations = [
  "",
  "rotateY(-90deg)",
  "rotateX(-90deg)",
  "rotateX(90deg)",
  "rotateY(90deg)",
  "rotateY(180deg)",
];

export function DiePips({ face }: { face: number }) {
  return (
    <span className="event-pips" aria-hidden="true">
      {Array.from({ length: 9 }, (_, i) => (
        <i
          key={i}
          className={PIP_POSITIONS[face].includes(i + 1) ? "is-pip" : ""}
        />
      ))}
    </span>
  );
}

export function InteractiveDice({
  active,
  select,
  paused,
  setPaused,
  title,
}: {
  active: number;
  select: (face: number) => void;
  paused: boolean;
  setPaused: (paused: boolean) => void;
  title: string;
}) {
  return (
    <div className="event-dice-experience">
      <div className="event-dice-stage">
        <div className="event-dice-orbit" aria-hidden="true" />
        <span className="event-dice-note">
          <span /> 6 CARAS. 6 PREMIOS.
        </span>
        <div className="event-dice-float">
          <div
            className="event-cube"
            style={
              { "--face-rotation": rotations[active - 1] } as CSSProperties
            }
          >
            {Array.from({ length: 6 }, (_, i) => (
              <button
                type="button"
                className={`event-cube-face event-cube-face-${i + 1}`}
                key={i}
                onClick={() => select(i + 1)}
                aria-label={`Explorar premio ${i + 1}`}
                tabIndex={-1}
              >
                <DiePips face={i + 1} />
              </button>
            ))}
          </div>
        </div>
        <div className="event-dice-floor" aria-hidden="true" />
        <span className="event-physical-label">
          La jugada real te espera en el stand.
        </span>
      </div>
      <div className="event-dice-console">
        <div className="event-console-label">
          <Rotate3D size={17} aria-hidden="true" />
          <span>EXPLORA UNA CARA</span>
          <button
            type="button"
            onClick={() => setPaused(!paused)}
            aria-label={paused ? "Activar movimiento" : "Pausar movimiento"}
            title={paused ? "Activar movimiento" : "Pausar movimiento"}
          >
            {paused ? <Play size={15} /> : <Pause size={15} />}
          </button>
        </div>
        <div
          className="event-face-options"
          role="group"
          aria-label="Explorar los seis premios del dado"
        >
          {Array.from({ length: 6 }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => select(i + 1)}
              aria-pressed={active === i + 1}
              aria-label={`Cara ${i + 1}`}
              className={active === i + 1 ? "is-active" : ""}
            >
              <DiePips face={i + 1} />
            </button>
          ))}
        </div>
        <p className="event-dice-caption" aria-live="polite">
          <span>PREMIO {active}</span> {title}
        </p>
        <p className="event-demo-note">
          Vista de los premios. La selección aquí no asigna un resultado.
        </p>
      </div>
    </div>
  );
}
