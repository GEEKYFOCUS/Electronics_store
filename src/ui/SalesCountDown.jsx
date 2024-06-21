import { useEffect, useState } from "react";
function SalesCountDown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    let difference = +new Date("2024-06-24") - +new Date();
    let time = {};

    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return time;
  }

  return (
    <div className="flex space-x-4 mt-4 flex-1">
      <div className="text-center flex gap-x-4 items-center ">
        <div>
          <div className="font-inter text-xl font-bold">Days</div>
          <div className="text-4xl font-extrabold">
            {timeLeft.days <= 9 ? `0${timeLeft.days}` : timeLeft.days || "0"}
          </div>
        </div>
        <span className="text-5xl font-bold text-orange-800">:</span>
      </div>
      <div className="text-center flex gap-x-4 items-center ">
        <div>
          <div className="font-inter text-xl font-bold">Hours</div>
          <div className="text-4xl font-extrabold">
            {timeLeft.hours <= 9 ? `0${timeLeft.hours}` : timeLeft.hours || "0"}
          </div>
        </div>
        <span className="text-5xl font-bold text-orange-800">:</span>
      </div>
      <div className="text-center flex gap-x-4 items-center ">
        <div>
          <div className="font-inter text-xl font-bold">Minutes</div>
          <div className="text-4xl font-extrabold">
            {timeLeft.minutes <= 9
              ? `0${timeLeft.minutes}`
              : timeLeft.minutes || "0"}
          </div>
        </div>
        <span className="text-5xl font-bold text-orange-800">:</span>
      </div>

      <div className="text-center flex gap-x-4 items-center ">
        <div>
          <div className="font-inter text-xl font-bold">Seconds</div>
          <div className="text-4xl font-extrabold">
            {timeLeft.seconds <= 9
              ? `0${timeLeft.seconds}`
              : timeLeft.seconds || "0"}
          </div>
        </div>
        {/* <span className="text-5xl font-bold text-orange-800">:</span> */}
      </div>
    </div>
  );
}

export default SalesCountDown;
