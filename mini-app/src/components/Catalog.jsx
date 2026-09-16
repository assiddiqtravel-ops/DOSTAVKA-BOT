import { useMemo, useState } from 'react';
import ProductCard from './ProductCard.jsx';

export default function Catalog({ products, loading, onOpen, onAdd }) {
  const [active, setActive] = useState('Barchasi');

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category).filter(Boolean));
    return ['Barchasi', ...set];
  }, [products]);

  const filtered =
    active === 'Barchasi'
      ? products
      : products.filter((p) => p.category === active);

  return (
    <div className="page">
      <div className="section-title" style={{ marginTop: 0 }}>
        Katalog
      </div>

      <div className="cats">
        {categories.map((c) => (
          <div
            key={c}
            className={`cat ${active === c ? 'active' : ''}`}
            onClick={() => setActive(c)}
          >
            {c}
          </div>
        ))}
      </div>

      {loading ? (
        <div className="loader">Yuklanmoqda...</div>
      ) : filtered.length === 0 ? (
        <div className="empty">
          <div className="empty-emoji">🍕</div>
          Bu kategoriyada mahsulot yo'q
        </div>
      ) : (
        <div className="grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={onOpen} onAdd={onAdd} />
          ))}
        </div>
      )}
    </div>
  );
}
