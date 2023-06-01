import { useState, useEffect, useRef } from "react";

import clsx from "clsx";
import css from "./ClockNew.module.css";

const ClockNew = () => {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      stop();
    };
  }, []);

    const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <p className={clsx(css["clock-face"])}>
        Current time: {time.toLocaleTimeString()}
      </p>
      <button type="button" onClick={stop} className={clsx(css["stop-btn"])}>
        Stop
      </button>
    </div>
  );
};

export default ClockNew;
