import { useState } from 'react';
import Icon from './Icon.jsx';

const slides = [
  {
    icon: 'burger',
    title: 'Sizni ochlik qiynayaptimi?',
    text: "Biz issiqqina taomlarni tezkor yetkazamiz.",
  },
  {
    icon: 'bike',
    title: 'Bu qanday ishlaydi?',
    text: 'Tanlang, buyurtma bering va rohatlaning.',
  },
  {
    icon: 'sparkles',
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
        <div className="ob-art">
          <Icon name={slides[i].icon} size={82} strokeWidth={1.6} />
        </div>
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
