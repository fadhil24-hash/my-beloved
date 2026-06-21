import { useEffect, useState } from "react";

export default function Countdown({ targetDate }) {
  const calculateTime = () => {
    const difference =
      new Date(targetDate) - new Date();

    const days = Math.floor(
      difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
      (difference / 1000 / 60) % 60
    );

    const seconds = Math.floor(
      (difference / 1000) % 60
    );

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] =
    useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h1>{timeLeft.days} Days</h1>

      <h2>
        {timeLeft.hours} :
        {timeLeft.minutes} :
        {timeLeft.seconds}
      </h2>
    </>
  );
}