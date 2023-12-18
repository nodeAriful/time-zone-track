import React, { useEffect } from "react";
import useClock from "../../hooks/useClock";
import useTimer from "../../hooks/useTimer";
import ClockDisplay from "../shared/clockDisplay";
import ClockActions from "../shared/clockAction";

const LocalClock = ({ clock, updateClock, createClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);
  const timer = useTimer(date);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);
  return (
    <div>
      {timer && (
        <ClockDisplay
          date={timer}
          title={clock.title}
          timezone={timezone}
          offset={offset}
        />
      )}
      <ClockActions
        local={true}
        clock={clock}
        updateClock={updateClock}
        createClock={createClock}
      />
    </div>
  );
};

export default LocalClock;
