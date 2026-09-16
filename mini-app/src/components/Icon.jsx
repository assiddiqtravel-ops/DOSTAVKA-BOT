// Yagona ikonka to'plami — chiziqli (line) uslub, bitta stroke, currentColor.
// Emoji o'rniga professional, izchil ikonkalar.

const PATHS = {
  home: (
    <>
      <path d="M3 9.5 12 3l9 6.5" />
      <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
      <path d="M9 21v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  bag: (
    <>
      <path d="M6 2 3.5 6v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V6L18 2z" />
      <path d="M3.5 6h17" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.4 2 4 2 4-2 4-2" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  navigation: <path d="m3 11 19-9-9 19-2-8-8-2Z" />,
  flame: (
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5Z" />
  ),
  tag: (
    <>
      <path d="M12.6 2.6A2 2 0 0 0 11.2 2H4a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4l8.7 8.7a2.4 2.4 0 0 0 3.4 0l6.6-6.6a2.4 2.4 0 0 0 0-3.4Z" />
      <circle cx="7.5" cy="7.5" r="1.2" />
    </>
  ),
  bike: (
    <>
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </>
  ),
  burger: (
    <>
      <path d="M4 10.5C4 6.9 7.6 4 12 4s8 2.9 8 6.5H4Z" />
      <path d="M3.5 14h17" />
      <path d="M4 17h16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z" />
    </>
  ),
  cake: (
    <>
      <path d="M20 21v-7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7" />
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
      <path d="M2 21h20" />
      <path d="M8 8v3M12 8v3M16 8v3" />
      <path d="M8 4h.01M12 4h.01M16 4h.01" />
    </>
  ),
  cup: (
    <>
      <path d="M6 8h12l-1.2 12.1a2 2 0 0 1-2 1.9H9.2a2 2 0 0 1-2-1.9L6 8Z" />
      <path d="M5 8h14" />
      <path d="m12 8 1-6h2" />
    </>
  ),
  phone: (
    <path d="M14 15.2a1 1 0 0 1 1.2-.3l.4.4A2 2 0 0 0 17 16h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3a2 2 0 0 0 .5 1.3l.4.5a1 1 0 0 1-.2 1.3 14 14 0 0 0 5.3 5.3Z" />
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  alert: (
    <>
      <path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </>
  ),
  map: (
    <>
      <path d="M14.1 5.5a2 2 0 0 0 1.8 0l3.6-1.8A1 1 0 0 1 21 4.6v12.8a1 1 0 0 1-.6.9l-4.5 2.3a2 2 0 0 1-1.8 0l-4.2-2.1a2 2 0 0 0-1.8 0l-3.6 1.8A1 1 0 0 1 3 19.4V6.6a1 1 0 0 1 .6-.9l4.5-2.3a2 2 0 0 1 1.8 0Z" />
      <path d="M15 5.8v15M9 3.2v15" />
    </>
  ),
  receipt: (
    <>
      <path d="M5 2v20l2-1.3L9 22l2-1.3L13 22l2-1.3L17 22l2-1.3V2l-2 1.3L15 2l-2 1.3L11 2 9 3.3 7 2 5 3.3Z" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  inbox: (
    <>
      <path d="M22 12h-5l-2 3h-4l-2-3H2" />
      <path d="M5.5 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.1Z" />
    </>
  ),
  repeat: (
    <>
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.9 5.1a2 2 0 0 0 1.1 1.1L20 11l-5.1 1.9a2 2 0 0 0-1.1 1.1L12 19l-1.9-5.1a2 2 0 0 0-1.1-1.1L4 11l5.1-1.9a2 2 0 0 0 1.1-1.1Z" />
      <path d="M19 3v4M17 5h4M5 17v3M3.5 18.5h3" />
    </>
  ),
  x: (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  minus: <path d="M5 12h14" />,
};

// To'ldirilgan (solid) variant — Yandex Dostavka uslubidagi qalin, yumaloq ikonkalar.
// Asosan pastki navigatsiyaning faol holati uchun ishlatiladi.
const FILLED = {
  home: (
    <path d="M11.3 2.4a1 1 0 0 1 1.4 0l8.5 7.7A1.6 1.6 0 0 1 20.1 13H20v6.5a2 2 0 0 1-2 2h-3v-5.3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5.3H6a2 2 0 0 1-2-2V13h-.1a1.6 1.6 0 0 1-1.1-2.9z" />
  ),
  search: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 2a8.5 8.5 0 1 0 5.1 15.3l4 4a1.6 1.6 0 0 0 2.3-2.3l-4-4A8.5 8.5 0 0 0 10.5 2m0 3.4a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2"
    />
  ),
  bag: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2a5 5 0 0 0-5 5H4.6a2 2 0 0 0-2 1.85l-.9 11.5A2 2 0 0 0 3.7 22.5h16.6a2 2 0 0 0 2-2.15l-.9-11.5A2 2 0 0 0 19.4 7H17a5 5 0 0 0-5-5m3 5a3 3 0 0 0-6 0z"
    />
  ),
  user: (
    <path d="M12 2.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10M4 20.5c0-3.6 3.6-6 8-6s8 2.4 8 6a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20.5" />
  ),
};

export default function Icon({
  name,
  size = 24,
  strokeWidth = 2,
  variant = 'line',
  style,
  className,
}) {
  if (variant === 'fill' && FILLED[name]) {
    return (
      <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        style={style}
        aria-hidden="true"
      >
        {FILLED[name]}
      </svg>
    );
  }

  const content = PATHS[name];
  if (!content) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
