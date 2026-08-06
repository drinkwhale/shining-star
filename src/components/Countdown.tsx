import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetDate = new Date("2024-12-25T11:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const CountdownUnit = ({
    value,
    label,
  }: {
    value: number;
    label: string;
  }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-korean-red to-korean-navy w-20 h-20 md:w-24 md:h-24 rounded-lg flex items-center justify-center shadow-lg">
        <span className="text-3xl md:text-4xl font-bold text-white">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-3 text-korean-navy font-medium">{label}</p>
    </div>
  );

  return (
    <section className="container-section bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-korean-navy">
          돌잔치까지 남은 시간
        </h2>

        <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
          <CountdownUnit value={timeLeft.days} label="일" />
          <span className="text-3xl text-korean-red font-bold mb-8">:</span>
          <CountdownUnit value={timeLeft.hours} label="시간" />
          <span className="text-3xl text-korean-red font-bold mb-8">:</span>
          <CountdownUnit value={timeLeft.minutes} label="분" />
          <span className="text-3xl text-korean-red font-bold mb-8">:</span>
          <CountdownUnit value={timeLeft.seconds} label="초" />
        </div>
      </div>
    </section>
  );
}
