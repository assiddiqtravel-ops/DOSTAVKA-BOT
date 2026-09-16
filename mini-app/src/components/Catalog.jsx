import { useMemo, useState } from 'react';
import ProductCard from './ProductCard.jsx';
import Icon from './Icon.jsx';

export default function Catalog({
  products,
  loading,
  onOpen,
  onAdd,
  onChangeQty,
  cart = [],
  activeCat,
  setActiveCat,
}) {
  const [q, setQ] = useState('');
  const qtyOf = (id) => cart.find((i) => i.id === id)?.qty || 0;

  const categories = useMemo(
    () => ['Barchasi', ...new Set(products.map((p) => p.category).filter(Boolean))],
    [products],
  );

  const filtered = products.filter((p) => {
    const catOk = activeCat === 'Barchasi' || p.category === activeCat;
    const qOk = !q || p.name.toLowerCase().includes(q.toLowerCase());
    return catOk && qOk;
  });

  return (
    <div className="page">
      <div className="topbar">
        <div className="search">
          <span className="ico">
            <Icon name="search" size={19} />
          </span>
          <input
            placeholder="Taom qidirish..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </div>

      <div className="cats sticky">
        {categories.map((c) => (
          <div
            key={c}
            className={`chip ${activeCat === c ? 'active' : ''}`}
            onClick={() => setActiveCat(c)}
          >
            {c}
          </div>
        ))}
      </div>

      {loading ? (
        <div className="skel-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="skel" key={i} />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="empty">
          <div className="empty-emoji">
            <Icon name="search" size={58} strokeWidth={1.6} />
          </div>
          Hech narsa topilmadi
        </div>
      ) : (
        <div className="grid">
          {filtered.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpen={onOpen}
              onAdd={onAdd}
              onChangeQty={onChangeQty}
              qty={qtyOf(p.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
