import React from "react";

interface ProgressProps {
  value: number; // Progress percentage
  max?: number; // Maximum value, default is 100
}

export const Progress: React.FC<ProgressProps> = ({ value, max = 100 }) => {
  return (
    <div className="progress-bar" style={{ background: "#e0e0e0", borderRadius: "4px", width: "100%" }}>
      <div
        style={{
          width: `${(value / max) * 100}%`,
          background: "#004d4d",
          height: "1px",
          borderRadius: "4px",
        }}
      />
    </div>
  );
};
