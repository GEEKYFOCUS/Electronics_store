import { useEffect, useState } from "react";
function SalesCountDown({ type }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    if (type === "today") {
      let difference = +new Date("2024-06-25") - +new Date();
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
    if (type === "categories") {
      let difference = +new Date("2024-06-29") - +new Date();
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
  }

  if (type === "today")
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
              {timeLeft.hours <= 9
                ? `0${timeLeft.hours}`
                : timeLeft.hours || "0"}
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
  if (type === "categories")
    return (
      <div className="flex space-x-4 mt-4 flex-1">
        <div className="bg-white rounded-full px-2  h-16 text-center py-1 aspect-square flex flex-col items-center justify-center ">
          <div className="text-sm text-black font-[600]">
            {timeLeft.days <= 9 ? `0${timeLeft.days}` : timeLeft.days || "0"}
          </div>
          <div className="font-inter text-xs text-black font-light">Days</div>
        </div>
        <div className="bg-white rounded-full  px-2  h-16 text-center py-1 aspect-square flex flex-col items-center justify-center ">
          <div className="text-sm text-black font-[600]">
            {timeLeft.hours <= 9 ? `0${timeLeft.hours}` : timeLeft.hours || "0"}
          </div>
          <div className="font-inter text-xs text-black font-light">Hours</div>
        </div>
        <div className="bg-white rounded-full px-2   h-16 text-center py-1 aspect-square flex flex-col items-center justify-center ">
          <div className="text-sm text-black font-[600]">
            {timeLeft.minutes <= 9
              ? `0${timeLeft.minutes}`
              : timeLeft.minutes || "0"}{" "}
          </div>
          <div className="font-inter text-xs text-black font-light">
            Minutes
          </div>
        </div>
        <div className="bg-white rounded-full    h-16 text-center py-1 aspect-square flex flex-col items-center justify-center ">
          <div className="text-sm text-black font-[600]">
            {timeLeft.seconds <= 9
              ? `0${timeLeft.seconds}`
              : timeLeft.seconds || "0"}
          </div>
          <div className="font-inter text-xs text-black font-light">
            Seconds
          </div>
        </div>
      </div>
    );
}

export default SalesCountDown;
