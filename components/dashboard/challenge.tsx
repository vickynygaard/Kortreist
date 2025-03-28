import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ChallengeProps {
    title: string;
    type: "cycling" | "walking" | "bus" | "car" | "custom";
    current: number;
    total: number;
    challengeType: "Standard" | "Distance" | "Custom";
}

const Challenge: React.FC<ChallengeProps> = ({ title, type, current, total, challengeType }) => {
    const percentage = Math.min((current / total) * 100, 100);
    const isCompleted = current >= total;

    // Label dynamically based on challengeType
    const progressLabel = challengeType === "Distance"
    ? `${current.toFixed(1)} km\n/ ${total} km`
    : `${current}/${total}`;
  

    return (
        <div className="grid bg-customYellow2 w-full max-h-40 grid-cols-3 grid-rows-2 gap-2 rounded-xl border-2 border-violet-900 p-4">
            <div className="col-span-2 self-start font-mono font-bold text-lg p-2">
                {title}
            </div>

            <div className="row-span-2 flex items-center justify-center pl-4">
                <div className='w-flex max-h-32 max-w-32 font-mono'>
                <div className='relative w-28 h-28'>
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
                        <span className="text-lg">{`${current.toFixed(1)}km`}</span>
                        <span className="text-base">{`/ ${total}km`}</span>
                    </>
                    ) : (
                            <span className="text-base">{`${current}/${total}`}</span>
                        )}  
                </div>
                </div>
            </div>
        </div>

            <div className="col-span-2 self-start flex flex-col pl-4">
                <div className='font-mono'>
                  <strong>{progressLabel}</strong>
                </div>
                <div>{isCompleted ? "Fullført" : "Pågår"}</div>
            </div>
        </div>
    );
};

export default Challenge;
