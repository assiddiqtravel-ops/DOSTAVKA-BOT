import { getUser } from '../telegram.js';
import ProductCard from './ProductCard.jsx';
import Icon from './Icon.jsx';

const promos = [
  { c: 'p1', t: 'Tez yetkazib berish', s: 'Issiqqina taomlar 30 daqiqada', icon: 'bike' },
  { c: 'p2', t: 'Eng mazali burgerlar', s: 'Yangi pishirilgan', icon: 'burger' },
  { c: 'p3', t: 'Shirin desertlar', s: 'Trayfl va chizkeyk', icon: 'cake' },
];

export default function Home({
  products,
  loading,
  onOpen,
  onAdd,
  onChangeQty,
  cart = [],
  goCatalog,
}) {
  const user = getUser();
  const categories = [...new Set(products.map((p) => p.category).filter(Boolean))];
  const popular = products.slice(0, 8);
  const discounted = products.filter((p) => p.oldPrice);
  const qtyOf = (id) => cart.find((i) => i.id === id)?.qty || 0;

  return (
    <div className="page">
      <div className="topbar">
        <div className="loc">
          <div>
            <div className="loc-label">Yetkazib berish manzili</div>
            <div className="loc-val">
              <span className="pin">
                <Icon name="pin" size={18} />
              </span>
              Angren shahar
            </div>
          </div>
          <div className="avatar">
            <Icon name="smile" size={22} />
          </div>
        </div>
        <div className="search" onClick={() => goCatalog('Barchasi')}>
          <span className="ico">
            <Icon name="search" size={19} />
          </span>
          <input readOnly placeholder="Taom qidirish..." />
        </div>
      </div>

      {/* Promo bannerlar */}
      <div className="rail">
        {promos.map((p, i) => (
          <div key={i} className={`promo ${p.c}`}>
            <h3>{p.t}</h3>
            <p>{p.s}</p>
            <div className="emoji">
              <Icon name={p.icon} size={94} strokeWidth={1.6} />
            </div>
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
            <h2>
              <Icon name="flame" size={20} className="sec-ico" style={{ color: 'var(--brand)' }} />
              Mashhur
            </h2>
            <a onClick={() => goCatalog('Barchasi')}>Barchasi</a>
          </div>
          <div className="hrail">
            {popular.map((p) => (
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

          {discounted.length > 0 && (
            <>
              <div className="sec">
                <h2>
                  <Icon name="tag" size={20} className="sec-ico" style={{ color: 'var(--brand)' }} />
                  Chegirmalar
                </h2>
              </div>
              <div className="hrail">
                {discounted.map((p) => (
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
            </>
          )}

          <div className="sec">
            <h2>Butun menyu</h2>
          </div>
          <div className="grid">
            {products.map((p) => (
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
        </>
      )}
    </div>
  );
}
