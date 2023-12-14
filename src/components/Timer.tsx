import { useEffect, useRef, useState } from "react";

type TimerArgs = {
  milisegundos: number;
};

const Timer = ({ milisegundos }: TimerArgs) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  // console.log(milisegundos);

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setSeconds((s) => s + 1), milisegundos);
    // return () => {}
  }, [milisegundos]);
  return (
    <>
      <h4>
        Timer: <small>{seconds}</small>
      </h4>
    </>
  );
};

export default Timer;
