import React from "react";

interface ProgressBarProps {
  progress: number;      // Value between 0 and 100
  progressText?: string; // Optional label to display below the bar
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, progressText = "" }) => {
  // Clamp progress between 0 and 100
  const _progress = Math.min(Math.max(0, progress), 100);

  return (
    <div className="flex flex-col items-center justify-center my-2">
      <div className="w-full border-2 border-indigo-700 h-6 rounded-md">
        <div
          className="bg-indigo-500 h-full transition-all duration-250"
          style={{ width: `${_progress}%` }}
        />
      </div>
      {progressText && <span>{progressText}</span>}
    </div>
  );
};

export default ProgressBar;
