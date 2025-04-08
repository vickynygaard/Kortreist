import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ChallengeProps {
  title: string;
  type: "cycling" | "walking" | "bus" | "car" | "custom";
  current: number;
  total: number;
  challengeType: "Standard" | "Distance" | "Custom";
  challengePoints: number;
  isCustom?: boolean;
  isCompleted?: boolean;
  onComplete?: () => void;
  isLoading?: boolean;
}

const Challenge: React.FC<ChallengeProps> = ({
  title,
  type,
  current,
  total,
  challengeType,
  challengePoints,
  isCustom,
  isCompleted,
  onComplete,
  isLoading
}) => {
  const percentage = Math.min((current / total) * 100, 100);

  // Label dynamically based on challengeType
  const progressLabel =
    challengeType === "Distance"
      ? `${current.toFixed(1)} km\n/ ${total} km`
      : `${current}/${total}`;

  return (
<div
  className={`relative flex bg-customYellow2 w-full rounded-xl border-2 p-4 gap-4 ${
    challengeType === "Custom"
      ? "border-orange-400"
      : challengeType === "Distance"
      ? "border-green-600"
      : "border-blue-600"
  }`}
>
{/* Left side: text + button */}
  <div className="flex-1 flex flex-col justify-between">
    <div>
      <div className="font-bold text-lg mb-1">{title}</div>
      <div className="text-sm">
        <strong>{progressLabel}</strong>
      </div>
      <div className="text-sm">{isCompleted ? "Fullført" : "Pågår"}</div>
    </div>

    {isCustom && !isCompleted && onComplete && (
      <button
        onClick={onComplete}
        disabled={isLoading}
        className="mt-2 w-fit px-3 py-1 text-xs bg-violet-700 text-white rounded hover:bg-violet-800 disabled:opacity-50"
      >
        {isLoading ? "Registrerer..." : "Fullfør aktivitet"}
      </button>
    )}
  </div>

  {/* Right side: progress + points */}
  <div className="flex flex-col items-center justify-center">
    <div className="relative w-20 h-20">
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          strokeLinecap: "round",
          textSize: "14px",
          pathColor: "#2F0D68",
          textColor: "#1f2937",
          trailColor: "#d1d5db",
        })}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-xs text-gray-800 leading-tight">
        {challengeType === "Distance" ? (
          <>
            <span className="text-base">{`${current.toFixed(1)}km`}</span>
            <span className="text-sm">{`/ ${total}km`}</span>
          </>
        ) : (
          <span className="text-base">{`${current}/${total}`}</span>
        )}
      </div>
    </div>

    <div
      className={`mt-2 text-white text-xs font-bold px-2 py-1 rounded ${
        isCompleted ? "bg-customGreen" : "bg-customViolet"
      }`}
    >
      {challengePoints} poeng
    </div>
  </div>
</div>

  );
};

export default Challenge;
