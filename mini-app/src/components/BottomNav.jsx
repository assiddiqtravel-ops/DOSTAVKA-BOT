import Icon from './Icon.jsx';

const items = [
  { key: 'home', icon: 'home', label: 'Bosh sahifa' },
  { key: 'catalog', icon: 'search', label: 'Katalog' },
  { key: 'cart', icon: 'bag', label: 'Savatcha' },
  { key: 'profile', icon: 'user', label: 'Profil' },
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
          <span className="nav-icon">
            <Icon name={it.icon} size={23} strokeWidth={tab === it.key ? 2.3 : 2} />
          </span>
          {it.key === 'cart' && cartCount > 0 && (
            <span className="nav-badge">{cartCount}</span>
          )}
          {it.label}
        </button>
      ))}
    </div>
  );
}
