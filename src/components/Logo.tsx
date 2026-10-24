import { useEffect, useState } from "react";

interface LogoProps {
  variant?: "light" | "dark";
  size?: number;
}

const viennaClockFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Vienna",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

function getViennaClockTime(date: Date) {
  const parts = viennaClockFormatter.formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value ?? 0);

  return {
    hours: value("hour"),
    minutes: value("minute"),
    seconds: value("second") + date.getMilliseconds() / 1000,
  };
}

export function LogoIcon({ size = 36 }: LogoProps) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 100);
    return () => window.clearInterval(timer);
  }, []);

  const { hours, minutes, seconds } = getViennaClockTime(now);
  const secondAngle = seconds * 6;
  const minuteAngle = (minutes + seconds / 60) * 6;
  const hourAngle = (hours % 12) * 30 + minutes * 0.5 + seconds / 120;
  // The existing short hand is drawn at 116.565 degrees from 12 o'clock.
  const existingHourHandOffset = 116.565;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="9" fill="#f59e0b" />
      <circle cx="20" cy="22" r="13" fill="#0d1b3e" />
      <circle cx="20" cy="22" r="10" fill="#f59e0b" />

      <g transform={`rotate(${minuteAngle} 20 22)`}>
        <line
          x1="20"
          y1="22"
          x2="20"
          y2="14"
          stroke="#0d1b3e"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      <g transform={`rotate(${hourAngle - existingHourHandOffset} 20 22)`}>
        <line
          x1="20"
          y1="22"
          x2="26"
          y2="25"
          stroke="#0d1b3e"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      <g transform={`rotate(${secondAngle} 20 22)`}>
        <line
          x1="20"
          y1="22"
          x2="20"
          y2="12.5"
          stroke="#0d1b3e"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </g>

      <circle cx="20" cy="22" r="1.5" fill="#0d1b3e" />
      <rect x="12" y="3" width="16" height="9" rx="4" fill="#0d1b3e" />
      <text
        x="20"
        y="9.5"
        textAnchor="middle"
        fill="#f59e0b"
        fontSize="6"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
      >
        24h
      </text>
    </svg>
  );
}

export function LogoText({ variant = "light" }: { variant?: "light" | "dark" }) {
  const primary = variant === "light" ? "text-white" : "text-primary";
  const sub = variant === "light" ? "text-white/70" : "text-muted-foreground";

  return (
    <div className="flex flex-col leading-none">
      <span className={`text-xl font-extrabold tracking-tight ${primary}`}>
        Notprofi<span className="text-secondary">24</span>
      </span>
      <span className={`text-[10px] font-semibold uppercase tracking-widest ${sub}`}>
        24h Notdienst
      </span>
    </div>
  );
}
