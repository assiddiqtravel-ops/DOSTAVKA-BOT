import { getUser } from '../telegram.js';

const stories = ['🔥 Aksiya', '🆕 Yangi', '⭐ Top', '🎁 Sovg\'a', '🚀 Tezkor'];

export default function Home({ onOrder }) {
  const user = getUser();

  return (
    <div className="page">
      <div className="header">
        <div>
          <div className="hello">Xush kelibsiz 👋</div>
          <div className="username">{user.first_name}</div>
        </div>
        <div className="avatar">🍔</div>
      </div>

      {/* Stories */}
      <div className="stories">
        {stories.map((s, i) => (
          <div className="story" key={i}>
            <div className="story-ring">
              <div className="story-inner">{s.split(' ')[0]}</div>
            </div>
            <div className="story-name">{s.split(' ')[1]}</div>
          </div>
        ))}
      </div>

      {/* Hero */}
      <div className="hero">
        <h2>Yangi buyurtma berish</h2>
        <p>Eng mazali taomlar 30 daqiqada eshigingizda</p>
        <button onClick={onOrder}>Katalogni ochish →</button>
        <div className="hero-emoji">🍔</div>
      </div>

      <div className="section-title">Nega aynan biz?</div>
      <div style={{ display: 'flex', gap: 12 }}>
        <div style={{ flex: 1, background: 'var(--muted)', borderRadius: 16, padding: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 30 }}>⚡️</div>
          <div style={{ fontSize: 13, marginTop: 6 }}>Tezkor yetkazish</div>
        </div>
        <div style={{ flex: 1, background: 'var(--muted)', borderRadius: 16, padding: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 30 }}>🧑‍🍳</div>
          <div style={{ fontSize: 13, marginTop: 6 }}>Yangi pishirilgan</div>
        </div>
        <div style={{ flex: 1, background: 'var(--muted)', borderRadius: 16, padding: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 30 }}>💯</div>
          <div style={{ fontSize: 13, marginTop: 6 }}>Sifatli mahsulot</div>
        </div>
      </div>

      {/* Bizning manzil */}
      <div className="section-title">Bizning manzil</div>
      <a
        className="address-card"
        href="https://maps.app.goo.gl/GwTkPyfNbjuR8kCg7"
        target="_blank"
        rel="noreferrer"
      >
        <div style={{ fontSize: 26 }}>📍</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600 }}>Elif Fast Food</div>
          <div style={{ color: 'var(--text-light)', fontSize: 13 }}>
            Angren shahar — xaritada ochish
          </div>
        </div>
        <div style={{ color: 'var(--primary)', fontWeight: 700 }}>→</div>
      </a>
    </div>
  );
}
