import { useEffect, useState } from "react";

const calculateTimeLeft = (endDate: string) => {
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isTimeout: false,
  };

  const difference = +new Date(endDate) - +new Date();
  difference > 0
    ? (timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isTimeout: false,
      })
    : (timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isTimeout: true,
      });

  return timeLeft;
};

const useCountdown = (endDate: string, callback: Function) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));
  const { days, hours, minutes, seconds } = timeLeft;

  useEffect(() => {
    if (days + hours + minutes + seconds <= 0) {
      callback && callback();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return timeLeft;
};

export default useCountdown;
