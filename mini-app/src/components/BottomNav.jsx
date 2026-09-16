const items = [
  { key: 'home', icon: '🏠', label: 'Bosh sahifa' },
  { key: 'catalog', icon: '🔍', label: 'Katalog' },
  { key: 'cart', icon: '🛒', label: 'Savatcha' },
  { key: 'profile', icon: '👤', label: 'Profil' },
];

export default function BottomNav({ tab, setTab, cartCount }) {
  return (
    <div className="bottom-nav">
      {items.map((it) => (
        <button
          key={it.key}
          className={`nav-item ${tab === it.key ? 'active' : ''}`}
          onClick={() => setTab(it.key)}
        >
          <span className="nav-icon">{it.icon}</span>
          {it.key === 'cart' && cartCount > 0 && (
            <span className="nav-badge">{cartCount}</span>
          )}
          {it.label}
        </button>
      ))}
    </div>
  );
}
