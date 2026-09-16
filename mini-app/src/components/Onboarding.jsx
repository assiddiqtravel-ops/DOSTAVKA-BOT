import { useState } from 'react';

const slides = [
  {
    emoji: '🍔',
    title: 'Sizni ochlik qiynayaptimi?',
    text: "Biz issiqqina taomlarni tezkor yetkazamiz.",
  },
  {
    emoji: '🛵',
    title: 'Bu qanday ishlaydi?',
    text: 'Tanlang, buyurtma bering va rohatlaning.',
  },
  {
    emoji: '🎉',
    title: "10 000+ odam",
    text: 'Allaqachon biz bilan birga.',
  },
];

export default function Onboarding({ onFinish }) {
  const [i, setI] = useState(0);
  const last = i === slides.length - 1;

  const next = () => (last ? onFinish() : setI(i + 1));

  return (
    <div className="onboarding">
      <div className="ob-slide" key={i}>
        <div className="ob-art">{slides[i].emoji}</div>
        <div className="ob-title">{slides[i].title}</div>
        <div className="ob-text">{slides[i].text}</div>
      </div>
      <div className="ob-dots">
        {slides.map((_, idx) => (
          <div key={idx} className={`ob-dot ${idx === i ? 'active' : ''}`} />
        ))}
      </div>
      <button className="btn" onClick={next}>
        {last ? 'Boshla' : 'Keyingisi'}
      </button>
    </div>
  );
}
