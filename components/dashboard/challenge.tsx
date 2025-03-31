import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ChallengeProps {
  title: string;
  type: "cycling" | "walking" | "bus" | "car" | "custom";
  current: number;
  total: number;
  challengeType: "Standard" | "Distance" | "Custom";
  challengePoints: number;
}

const Challenge: React.FC<ChallengeProps> = ({
  title,
  type,
  current,
  total,
  challengeType,
  challengePoints
}) => {
  const percentage = Math.min((current / total) * 100, 100);
  const isCompleted = current >= total;

  // Label dynamically based on challengeType
  const progressLabel =
    challengeType === "Distance"
      ? `${current.toFixed(1)} km\n/ ${total} km`
      : `${current}/${total}`;

  return (
    <div className="grid bg-customYellow2 w-full max-h-40 grid-cols-3 grid-rows-2 gap-2 rounded-xl border-2 border-violet-900 p-4">
      {/* Title */}
      <div className="col-span-2 self-start font-mono font-bold text-lg p-2">
        {title}
      </div>

      {/* Spinner & Points (right column, spans 2 rows) */}
      <div className="row-span-2 flex flex-col items-center justify-center pl-4">
        {/* Progress Wheel */}
        <div className="relative w-24 h-24">
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              strokeLinecap: 'round',
              textSize: '14px',
              pathColor: '#2F0D68',
              textColor: '#1f2937',
              trailColor: '#d1d5db',
            })}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-xs font-mono text-gray-800 leading-tight">
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

        {/* Points Below Spinner */}
        {!isCompleted ? <div className="mt-2 bg-customViolet text-white text-xs font-bold px-2 py-1 rounded"> {challengePoints} poeng
        </div> : <div className="mt-2 bg-customGreen text-white text-xs font-bold px-2 py-1 rounded"> {challengePoints} poeng
        </div> }
        

      </div>

      {/* Progress Details (bottom-left) */}
      <div className="col-span-2 self-start flex flex-col pl-4">
        <div className="font-mono">
          <strong>{progressLabel}</strong>
        </div>
        <div>{isCompleted ? "Fullført" : "Pågår"}</div>
      </div>
    </div>
  );
};

export default Challenge;
