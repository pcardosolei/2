export default function Candle() {
  return (
    <svg
      width="28"
      height="48"
      viewBox="0 0 28 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="candle"
    >
      {/* Flame outer glow */}
      <ellipse cx="14" cy="10" rx="6" ry="8" fill="#FFA500" opacity="0.3">
        <animate
          attributeName="rx"
          values="6;7;5;6"
          dur="0.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          values="8;9;7;8"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* Flame body */}
      <path
        d="M14 2C14 2 8 8 8 12C8 15.3 10.7 18 14 18C17.3 18 20 15.3 20 12C20 8 14 2 14 2Z"
        fill="#FF8C00"
      >
        <animate
          attributeName="d"
          values="M14 2C14 2 8 8 8 12C8 15.3 10.7 18 14 18C17.3 18 20 15.3 20 12C20 8 14 2 14 2Z;M14 3C14 3 9 8 9 12C9 15.3 10.7 18 14 18C17.3 18 19 15.3 19 12C19 8 14 3 14 3Z;M14 1C14 1 7 8 7 12C7 15.3 10.7 18 14 18C17.3 18 21 15.3 21 12C21 8 14 1 14 1Z;M14 2C14 2 8 8 8 12C8 15.3 10.7 18 14 18C17.3 18 20 15.3 20 12C20 8 14 2 14 2Z"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>

      {/* Flame inner (bright core) */}
      <path
        d="M14 7C14 7 11 10 11 12.5C11 14.4 12.3 16 14 16C15.7 16 17 14.4 17 12.5C17 10 14 7 14 7Z"
        fill="#FFD700"
      >
        <animate
          attributeName="d"
          values="M14 7C14 7 11 10 11 12.5C11 14.4 12.3 16 14 16C15.7 16 17 14.4 17 12.5C17 10 14 7 14 7Z;M14 8C14 8 11.5 10 11.5 12.5C11.5 14.4 12.3 16 14 16C15.7 16 16.5 14.4 16.5 12.5C16.5 10 14 8 14 8Z;M14 6C14 6 10.5 10 10.5 12.5C10.5 14.4 12.3 16 14 16C15.7 16 17.5 14.4 17.5 12.5C17.5 10 14 6 14 6Z;M14 7C14 7 11 10 11 12.5C11 14.4 12.3 16 14 16C15.7 16 17 14.4 17 12.5C17 10 14 7 14 7Z"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </path>

      {/* Wick */}
      <line x1="14" y1="16" x2="14" y2="20" stroke="#333" strokeWidth="1" />

      {/* Candle body */}
      <rect x="9" y="20" width="10" height="24" rx="1" fill="#F5E6CA" />

      {/* Wax drip */}
      <ellipse cx="11" cy="27" rx="1.5" ry="2.5" fill="#EDD9B7" />
      <ellipse cx="17" cy="32" rx="1.2" ry="2" fill="#EDD9B7" />

      {/* Candle base */}
      <rect x="7" y="42" width="14" height="4" rx="1" fill="#D4C4A8" />
    </svg>
  );
}
