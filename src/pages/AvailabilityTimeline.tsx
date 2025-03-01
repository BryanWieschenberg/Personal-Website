import React from 'react';

// Define interfaces for type safety
interface PeriodTiming {
  month: number;
  period: string;
}

interface AvailabilityPeriod {
  name: string;
  start: PeriodTiming;
  end: PeriodTiming;
  type: string;
  color: string;
}

const AvailabilityTimeline: React.FC = () => {
  // Availability data for the timeline
  const availabilityPeriods: AvailabilityPeriod[] = [
    {
      name: "Spring Academic Semester",
      start: { month: 1, period: "late" }, // Late January
      end: { month: 5, period: "late" },    // Mid May
      type: "Remote or local",
      color: "#10b981" // Green color for Spring
    },
    {
      name: "Summer Break",
      start: { month: 5, period: "late" }, // Late May
      end: { month: 8, period: "mid" },  // Early August
      type: "On-site, hybrid, or remote",
      color: "#eab308" // Yellow color for Summer
    },
    {
      name: "Fall Academic Semester",
      start: { month: 8, period: "mid" },  // Mid August
      end: { month: 12, period: "late" },   // Mid December
      type: "Remote or local",
      color: "#ef4444" // Red color for Fall
    },
    {
      name: "Winter Break",
      start: { month: 12, period: "late" }, // Late December
      end: { month: 1, period: "late" },     // Mid January (next year)
      type: "On-site, hybrid, or remote",
      color: "#3b82f6" // Blue color for Winter
    }
  ];

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const periods = ["early", "mid", "late"];

  // Convert month and period to a numerical position (0-35) for the 36 possible positions
  const getPosition = (month: number, period: string) => {
    return ((month - 1) * 3) + periods.indexOf(period);
  };

  // Calculate the width and position of each availability block
  const calculateTimelineBlocks = () => {
    const normalBlocks = availabilityPeriods.filter(period => period.name !== "Winter Break").map(period => {
      let startPos = getPosition(period.start.month, period.start.period);
      let endPos = getPosition(period.end.month, period.end.period);
      
      const width = ((endPos - startPos) / 36) * 100; // Width as percentage
      const left = (startPos / 36) * 100; // Left position as percentage
      
      // Determine if the block is at the start or end of the timeline
      const isAtStart = startPos === 0;
      const isAtEnd = endPos === 36;
      
      return {
        ...period,
        width: `${width}%`,
        left: `${left}%`,
        isAtStart,
        isAtEnd,
        isPartial: false
      };
    });
    
    // Handle Winter Break separately since it wraps around
    const winterBreak = availabilityPeriods.find(period => period.name === "Winter Break");
    if (winterBreak) {
      // End part: From late December to end of year (1 period)
      const endPartStartPos = getPosition(12, "late");
      const endPartWidth = ((36 - endPartStartPos) / 36) * 100;
      
      // Start part: From beginning of year to mid January (2 periods)
      const startPartEndPos = getPosition(1, "late");
      const startPartWidth = (startPartEndPos / 36) * 100;
      
      return [
        ...normalBlocks,
        // End part of winter break (December)
        {
          ...winterBreak,
          width: `${endPartWidth}%`,
          left: `${(endPartStartPos / 36) * 100}%`,
          isPartial: true,
          partName: "end",
          isAtStart: false,
          isAtEnd: true
        },
        // Start part of winter break (January)
        {
          ...winterBreak,
          width: `${startPartWidth}%`,
          left: "0%",
          isPartial: true,
          partName: "start",
          isAtStart: true,
          isAtEnd: false
        }
      ];
    }
    
    return normalBlocks;
  };

  const timelineBlocks = calculateTimelineBlocks();

  return (
    <div className="mt-10 lg:mt-20 container mx-auto px-4 lg:px-20">        
      {/* Timeline container */}
      <div className="relative mt-12 mb-16">
        {/* Month ticks */}
        <div className="flex justify-between mb-2">
          {months.map((month, index) => (
            <div key={index} className="flex-1">
              <div className="text-xs lg:text-sm text-white">{month}</div>
            </div>
          ))}
        </div>
        
        {/* Timeline bar */}
        <div className="h-4 lg:h-8 bg-gray-700 rounded-full relative overflow-hidden">
          {/* Availability blocks */}
          {timelineBlocks.map((block, index) => {
            // Determine which corners should be rounded based on position
            let borderRadius = "0";
            
            if (block.isAtStart && block.isAtEnd) {
              // Full timeline case (extremely rare)
              borderRadius = "9999px";
            } else if (block.isAtStart) {
              // Left edge of timeline
              borderRadius = "9999px 0 0 9999px";
            } else if (block.isAtEnd) {
              // Right edge of timeline
              borderRadius = "0 9999px 9999px 0";
            }
            
            return (
              <div 
                key={index}
                className="absolute h-full flex items-center justify-center transition-all duration-300 hover:brightness-110"
                style={{ 
                  width: block.width, 
                  left: block.left,
                  backgroundColor: block.color,
                  boxShadow: '0 0 10px rgba(0, 100, 255, 0.6)',
                  overflow: 'hidden',
                  borderRadius,
                  zIndex: block.isPartial ? 5 : 1 // Ensure December segment is above others
                }}
              >
              </div>
            );
          })}
        </div>
        
        {/* Legend */}
        <div className="flex justify-center mt-6 gap-4">
          <div className="flex items-center">
            <div className="mr-2 w-4 h-4 min-w-[1rem] min-h-[1rem] bg-blue-500 rounded-full flex-shrink-0"></div>
            <span className="text-xs lg:text-sm text-white">Winter Break</span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 w-4 h-4 min-w-[1rem] min-h-[1rem] bg-emerald-500 rounded-full flex-shrink-0"></div>
            <span className="text-xs lg:text-sm text-white">Spring Academic Semester</span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 w-4 h-4 min-w-[1rem] min-h-[1rem] bg-yellow-500 rounded-full flex-shrink-0"></div>
            <span className="text-xs lg:text-sm text-white">Summer Break</span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 w-4 h-4 min-w-[1rem] min-h-[1rem] bg-red-500 rounded-full flex-shrink-0"></div>
            <span className="text-xs lg:text-sm text-white">Fall Academic Semester</span>
          </div>
        </div>
        
        {/* Detailed availability information */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
          {availabilityPeriods.map((period, index) => (
            <div 
              key={index} 
              className="bg-gray-800 bg-opacity-50 p-2 lg:p-4 rounded-lg border border-gray-700 text-sm lg:text-base"
            >
              <h3 className="text-sm lg:text-lg font-semibold" style={{ color: period.color }}>{period.name}</h3>
              <p className="text-xs lg:text-sm text-gray-300">
                {months[period.start.month-1]} ({period.start.period}) - {months[period.end.month-1]} ({period.end.period})
              </p>
              <p className="text-xs lg:text-sm font-medium mt-1 text-white">
                Availability: <span style={{ color: "#2ddede" }}>{period.type}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailabilityTimeline;
