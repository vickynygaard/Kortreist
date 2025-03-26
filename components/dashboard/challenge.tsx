import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface challengeProps {
    title: string;
    type: "sykkel" | "gange" | "kollektiv" | "samkjoring" | "sosial";
    current: number;
    total: number;
}

const Challenge: React.FC<challengeProps> = ({title, type, current, total}) => {
    const percentage = Math.min((current / total) * 100, 100);

    return (
        <div className="grid w-full max-h-40 grid-cols-3 grid-rows-2 gap-2 rounded-xl border-2 border-violet-900 p-4">
        
            <div className="col-span-2 self-start font-mono font-bold text-lg p-2">{title}</div>
            
            {/*Rund progressbar*/}
            <div className="row-span-2 flex items-center justify-center pl-4">
                <div className='w-flex max-h-32 max-w-32 font-mono'>
                <CircularProgressbar value={percentage} text={`${current}/${total}`}
                    styles={buildStyles({
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathColor: '#2F0D68', //Violet-900
                    textColor: '#1f2937', 
                    trailColor: '#d1d5db', //Gray-200
                    })}
                />
                </div>
            </div>
            <div className="col-span-2 self-start flex flex-col pl-4">
                <div className='font-mono'><strong>{current}/{total}</strong></div>
                <div>Fullført</div>
            </div>
        </div>
    );
}

export default Challenge;