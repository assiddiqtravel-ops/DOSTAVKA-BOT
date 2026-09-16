import { getUser } from '../telegram.js';
import ProductCard from './ProductCard.jsx';

const promos = [
  { c: 'p1', t: 'Tez yetkazib berish', s: 'Issiqqina taomlar 30 daqiqada', e: '🛵' },
  { c: 'p2', t: 'Eng mazali burgerlar', s: 'Yangi pishirilgan', e: '🍔' },
  { c: 'p3', t: 'Shirin desertlar', s: 'Trayfl va chizkeyk', e: '🍰' },
];

export default function Home({ products, loading, onOpen, onAdd, goCatalog }) {
  const user = getUser();
  const categories = [...new Set(products.map((p) => p.category).filter(Boolean))];
  const popular = products.slice(0, 8);
  const discounted = products.filter((p) => p.oldPrice);

  return (
    <div className="page">
      <div className="topbar">
        <div className="loc">
          <div>
            <div className="loc-label">Yetkazib berish manzili</div>
            <div className="loc-val">
              <span className="pin">📍</span> Angren shahar
            </div>
          </div>
          <div className="avatar">👋</div>
        </div>
        <div className="search" onClick={() => goCatalog('Barchasi')}>
          <span className="ico">🔍</span>
          <input readOnly placeholder="Taom qidirish..." />
        </div>
      </div>

      {/* Promo bannerlar */}
      <div className="rail">
        {promos.map((p, i) => (
          <div key={i} className={`promo ${p.c}`}>
            <h3>{p.t}</h3>
            <p>{p.s}</p>
            <div className="emoji">{p.e}</div>
          </div>
        ))}
      </div>

      {/* Kategoriyalar */}
      <div className="cats">
        {categories.map((c) => (
          <div key={c} className="chip" onClick={() => goCatalog(c)}>
            {c}
          </div>
        ))}
      </div>

      {loading ? (
        <div className="skel-grid">
          {Array.from({ length: 4 }).map((_, i) => (
            <div className="skel" key={i} />
          ))}
        </div>
      ) : (
        <>
          <div className="sec">
            <h2>🔥 Mashhur</h2>
            <a onClick={() => goCatalog('Barchasi')}>Barchasi</a>
          </div>
          <div className="hrail">
            {popular.map((p) => (
              <ProductCard key={p.id} product={p} onOpen={onOpen} onAdd={onAdd} />
            ))}
          </div>

          {discounted.length > 0 && (
            <>
              <div className="sec">
                <h2>🏷 Chegirmalar</h2>
              </div>
              <div className="hrail">
                {discounted.map((p) => (
                  <ProductCard key={p.id} product={p} onOpen={onOpen} onAdd={onAdd} />
                ))}
              </div>
            </>
          )}

          <div className="sec">
            <h2>Butun menyu</h2>
          </div>
          <div className="grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onOpen={onOpen} onAdd={onAdd} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
