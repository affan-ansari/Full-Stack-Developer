import React, { useEffect, useState } from "react";
import { ReactComponent as BorderMins } from "../../svgs/border_1.svg";
import { ReactComponent as HourHand } from "../../svgs/hour_hand.svg";
import { ReactComponent as SecondsHand } from "../../svgs/seconds_hand.svg";
import { ReactComponent as MinsHand } from "../../svgs/minutes_hand.svg";
import "./styles.css";
const ClockBase = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [baseAngle, setBaseAngle] = useState(240);
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 59) {
        setSeconds(0);
        setMinutes(minutes + 1);
      }
      if (minutes === 59) {
        setMinutes(0);
        setHours(hours + 1);
      }
      setSeconds((seconds) => seconds + 1);
      setBaseAngle((baseAngle) => baseAngle + 6);

      console.log(`${hours} : ${minutes} : ${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, hours, minutes]);

  return (
    <div className="clockCont">
      <BorderMins className="clockBorder" />
      <HourHand className="handScale" />
      <SecondsHand
        className="handScale"
        style={{ transform: `rotate(${baseAngle}deg)` }}
      />
      <MinsHand className="handScale" />
    </div>
  );
};

export default ClockBase;
