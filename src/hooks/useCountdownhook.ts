"use client";
// import { useState, useEffect } from "react";

// const useCountdown = (initialDays: number) => {
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);

//   const calculateTimeLeft = () => {
//     const totalSeconds = initialDays * 24 * 60 * 60;
//     const now = Date.now();
//     const deadline = now + totalSeconds * 1000;
//     const timeLeft = deadline - now;

//     const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
//     const minutesLeft = Math.floor((timeLeft / (1000 * 60)) % 60);
//     const secondsLeft = Math.floor((timeLeft / 1000) % 60);
//     console.log(
//       "nnnnnnnnnkkkkkkkkkk ",
//       now,
//       deadline,
//       timeLeft,
//       hoursLeft,
//       minutesLeft,
//       secondsLeft
//     );

//     setHours(hoursLeft);
//     setMinutes(minutesLeft);
//     setSeconds(secondsLeft);
//   };

//   console.log("nnnnnnnnn ", hours, minutes, seconds);

//   useEffect(() => {
//     calculateTimeLeft(); // Set initial time
//     const interval = setInterval(calculateTimeLeft, 1000);

//     return () => clearInterval(interval);
//   }, [initialDays]);

//   return { hours, minutes, seconds };
// };

// export default useCountdown;

import { useState, useEffect } from "react";

const useCountdown = (initialDays: number) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialDays * 24 * 60 * 60);

  const calculateTimeLeft = () => {
    const hoursLeft = Math.floor((timeLeft / (60 * 60)) % 24);
    const minutesLeft = Math.floor((timeLeft / 60) % 60);
    const secondsLeft = Math.floor(timeLeft % 60);

    return { hoursLeft, minutesLeft, secondsLeft };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { hoursLeft, minutesLeft, secondsLeft } = calculateTimeLeft();

  return { hours: hoursLeft, minutes: minutesLeft, seconds: secondsLeft };
};

export default useCountdown;
