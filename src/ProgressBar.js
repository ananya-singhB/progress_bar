import { useProgress } from "./useProgress";

export function ProgressBar({ id, duration = 2000 }) {
  const progress = useProgress(duration);

  return (
    <div
      key={id}
      className="progress-bar"
      style={{
        background: `linear-gradient(90deg, #22c55e ${progress}%, #e5e7eb ${progress}%)`,
      }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
    >
      <span className="progress-label">{Math.round(progress)}%</span>
    </div>
  );
}
