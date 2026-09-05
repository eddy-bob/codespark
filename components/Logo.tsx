export default function Logo({
  className = "",
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient
            id="codestark-mark"
            x1="0"
            y1="0"
            x2="40"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="55%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="11" fill="url(#codestark-mark)" />
        <circle
          cx="20"
          cy="20"
          r="14"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="1.4"
        />
        <path
          d="M21.2 5.5 10.4 21h6.2l-2.1 13.5L25.4 19h-6.3l2.1-13.5z"
          fill="white"
        />
      </svg>
      {showWordmark && (
        <span className="text-lg font-semibold tracking-tight">
          codestark
        </span>
      )}
    </span>
  );
}
